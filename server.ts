import express, { Request, Response } from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

interface EnquiryRequestBody {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  serviceInterestedIn?: string;
  message?: string;
  sourcePage?: string;
}

interface StoredEnquiry {
  referenceId: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceInterestedIn: string;
  message: string;
  sourcePage: string;
  submittedAt: string;
}

const memoryEnquiries: StoredEnquiry[] = [];

async function persistEnquiry(record: StoredEnquiry): Promise<void> {
  memoryEnquiries.unshift(record);
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    let existing: StoredEnquiry[] = [];
    try {
      const raw = await fs.readFile(ENQUIRIES_FILE, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        existing = parsed;
      }
    } catch {
      existing = [];
    }
    const updated = [record, ...existing].slice(0, 500);
    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(updated, null, 2), 'utf8');
  } catch (err) {
    console.warn('Could not persist enquiry to disk; kept in memory.', err);
  }
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'the-comeback-project' });
  });

  app.post('/api/enquiries', async (req: Request, res: Response) => {
    const body = (req.body || {}) as EnquiryRequestBody;
    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const companyName = typeof body.companyName === 'string' ? body.companyName.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const serviceInterestedIn =
      typeof body.serviceInterestedIn === 'string' ? body.serviceInterestedIn.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const sourcePage = typeof body.sourcePage === 'string' ? body.sourcePage.trim() : 'contact';

    const fieldErrors: Record<string, string> = {};

    if (fullName.length < 2) {
      fieldErrors.fullName = 'Please enter your full name.';
    }
    if (!companyName) {
      fieldErrors.companyName = 'Please enter your company or venture name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      fieldErrors.email = 'Please enter a valid business email address.';
    }
    const cleanedPhone = phone.replace(/[\s\-().]/g, '');
    if (!/^\+?\d{8,15}$/.test(cleanedPhone)) {
      fieldErrors.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!serviceInterestedIn) {
      fieldErrors.serviceInterestedIn = 'Please select a service of interest.';
    }
    if (message.length < 15) {
      fieldErrors.message =
        'Please share a brief overview of your goals (at least 15 characters).';
    }

    if (Object.keys(fieldErrors).length > 0) {
      res.status(400).json({
        error: 'Validation failed. Please review the highlighted fields.',
        fieldErrors,
      });
      return;
    }

    const referenceId = `TCP-${Math.floor(100000 + Math.random() * 900000)}`;
    const submittedAt = new Date().toISOString();

    const record: StoredEnquiry = {
      referenceId,
      fullName,
      companyName,
      email,
      phone,
      serviceInterestedIn,
      message,
      sourcePage,
      submittedAt,
    };

    await persistEnquiry(record);

    res.status(201).json({
      status: 'received',
      ...record,
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`The Comeback Project server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
