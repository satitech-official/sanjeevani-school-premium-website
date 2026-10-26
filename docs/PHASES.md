# Phased implementation

## Phase 1 — homepage and design foundation
Next.js App Router, JavaScript, Tailwind CSS, Motion, Lucide and Next Image. Responsive bilingual homepage with local language preference, mobile navigation, reduced-motion support and real phone, maps and social destinations. Navigation now connects the standalone public routes delivered in Phase 2.

Design follows the supplied reference palette, serif academic headings, rounded cards, organic section edges and green actions. The crest composition replaces the reference's unverified campus picture. It is not a photograph of the school. Configure `school.campusImage` in `lib/content.js` after receiving an approved original photograph, and add it under `public/images`.

No application is collected or reported as saved. Admission CTAs call the supplied school number. No backend, admin login, gallery uploads or simulated statistics are included in this phase. Facilities, gallery, news and privacy pages are now present; school-approved facility details and media remain pending.

## Phase 2 — content and public pages
Build About, Academics, Admissions, Facilities, Gallery, News & Events, Contact and Privacy routes with bilingual content, gallery lightbox and approved media. Confirm the original Hindi philosophy, board affiliation, current subjects, eligibility, facilities and admission instructions. Do not infer facts from design mockups. Confirm photo consent for students and rights to all media. No unverified school statistics, deadlines or fees.

## Phase 3 — secure backend
Supabase migrations, RLS, server-authorized admin access and private enquiry data. Bilingual content CRUD and media storage. Validated and rate-limited enquiry endpoint with consent, reliable success/failure handling and database integration tests. No client-exposed service credentials.

## Phase 4 — release
Configure actual domain before canonical URLs and sitemap. Verify school content, bilingual routes, accessibility, mobile/desktop layout and security denial paths. Deploy to a Next.js-compatible host for server features. Static hosting cannot run the planned enquiry API or server-authorized admin.

## Phase 2 delivery

Eight public routes now share bilingual navigation, footer and persistent language preference. Academics includes Mathematics. Admissions uses real telephone contact; it does not claim to store enquiries. Gallery and news show empty states until approved content arrives. Facilities does not invent amenities. The privacy notice describes the current implementation. Desktop navigation switches to a menu below 1100px to accommodate Hindi labels; public cards stack on mobile.
