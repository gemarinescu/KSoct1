# Millwork School - Preview

Lightweight static preview configured for Cloudflare Workers Static Assets.

## Cloudflare settings

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Static asset directory: `./public` (set in `wrangler.jsonc`)

The build copies only the site files into `public/`. Wrangler is explicitly configured to deploy **only** that folder, so `node_modules` and repository files are not uploaded as web assets.

## Files deployed

- `public/index.html`
- `public/styles.css`
- `public/script.js`
- `public/_headers`

Do not commit `node_modules/`, `.env`, or other local/private files.
