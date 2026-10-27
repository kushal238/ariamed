# Ariamed.ai is the currently marketing website for project Aria

Aria is a unified digital healthcare platform connecting doctors and patients through secure, ABHA-integrated digital prescriptions.

## Hosting (Cloudflare Workers, free plan)

Built with the OpenNext adapter (`@opennextjs/cloudflare`). Pages are prerendered static assets; only `/api/waitlist` runs in the Worker (about 1.9 MiB gzipped, under the free plan's 3 MiB cap).

- Connect the repo in Cloudflare (Workers & Pages, Create, Import a repository)
- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`
- Build variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Runtime secrets (Worker Settings, Variables and Secrets): `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `RESEND_API_KEY`, `NOTIFICATION_EMAIL`
- Custom domains: `www.ariamed.ai` and `ariamed.ai` (the apex redirects to www in `next.config.mjs`)

Local check on the Workers runtime: `npm run cf:preview`. Manual deploy: `npm run cf:deploy` (needs `wrangler login`).
