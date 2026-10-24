# Sanjeevani Higher Secondary School

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
