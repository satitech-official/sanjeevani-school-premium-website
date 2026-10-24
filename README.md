# Sanjeevani Higher Secondary School

[![Live Preview](https://img.shields.io/badge/Live_Preview-Open_Website-187A4B?style=for-the-badge&logo=github)](https://satitech-official.github.io/sanjeevani-school-premium-website/)

**Preview URL:** https://satitech-official.github.io/sanjeevani-school-premium-website/

Phase 1: bilingual homepage and responsive design foundation.

## Run

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
npm run build
npm start
```

The homepage uses the supplied official logo and school information. Its visual direction follows the supplied navy, sky-blue and green reference. No unrelated campus photos, made-up statistics or facilities are presented as school facts.

Edit bilingual text and verified contact details in `lib/content.js`; styling in `app/globals.css`; homepage sections in `components/SchoolHome.js`. The campus image is optional and must be school-approved. Both languages work without external translation services.

This release has direct phone enquiries only. Database enquiries, standalone pages, media management and the admin dashboard are subsequent phases, not operational features of this version. See [phase plan and content requirements](docs/PHASES.md).

## GitHub Pages

The Pages workflow builds a static homepage preview on each push to `main`. In repository Settings → Pages, choose **GitHub Actions** as the build source. The preview becomes available after the Deploy job succeeds. For a local export run `GITHUB_PAGES=true npm run build`; output is in `out/`. Normal Next.js hosting remains available with `npm run build`.

GitHub Pages hosts the public static preview; the future server enquiry API and admin authorization require a server-capable host.
