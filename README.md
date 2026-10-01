# Millwork School - Cloudflare Preview

This repository is intentionally set up as a lightweight static preview so it can deploy cleanly to Cloudflare Pages without Supabase, Stripe, environment variables, or a server runtime.

## GitHub

Upload all files in this folder to the root of the repository.

No license is included. Keep the repository **Private** while the course and platform are proprietary.

## Cloudflare Pages settings

1. Cloudflare Dashboard -> **Workers & Pages** -> **Create application** -> **Pages**.
2. Choose **Import an existing Git repository** and select this GitHub repo.
3. Use these settings:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output directory: `public`
4. Click **Save and Deploy**.

Cloudflare will run `build.mjs`, create the `public/` deployment folder, and publish the site.

## Edit the preview

- `index.html` - page copy and sections
- `styles.css` - visual design
- `script.js` - mobile navigation and small browser behaviour

## Later: full paid-course functionality

The production platform can add student accounts, Supabase, Stripe checkout, course progress, certificates, and protected content after the visual direction is approved. Those functions are intentionally not required for this preview deployment.
