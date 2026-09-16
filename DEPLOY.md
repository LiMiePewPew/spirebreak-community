# Deployment handoff

## 1. Verify locally

```bash
npm install
npm run check
npm run build
```

## 2. Push the public repository

Public repository:

`https://github.com/LiMiePewPew/spirebreak-community`

Push reviewed changes to `main`, then create or repair the label taxonomy with `./scripts/setup-labels.sh` if needed.

## 3. Connect Cloudflare Pages

Cloudflare Dashboard → Workers & Pages → Create application → Pages → Import an existing Git repository.

Use:

- Repository: `LiMiePewPew/spirebreak-community`
- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`

The first deployment should then create a `*.pages.dev` URL. Do not hard-code that URL into the repository until the actual project URL exists.
