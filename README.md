# Next.js Portfolio

Mukesh Mehta's portfolio built with Next.js, React, Tailwind CSS, and Framer Motion.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create a local env file:

```bash
cp .env.example .env.local
```

3. Add your values in `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_verified_sender@example.com
```

4. Start the dev server:

```bash
npm run dev
```

## Contact form

The contact form uses Resend and requires:

- `RESEND_API_KEY`
- `FROM_EMAIL`

`FROM_EMAIL` must be a verified sender in your Resend account.

## Vercel deployment

Add the same environment variables in Vercel Project Settings:

- `RESEND_API_KEY`
- `FROM_EMAIL`

Also make sure the project uses a supported Node.js version.
