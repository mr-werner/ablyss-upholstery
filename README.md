# Ablyss Upholstery & Refinishing — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://ablyss.com/ (Denver, CO).
Preview: https://aur.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

All business content is in `src/site.js`; colors and fonts are in `src/theme.css`. `src/App.jsx` is the shared layout.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `ablyss-upholstery` (framework: Vite). Connect the repo under Vercel → Settings → Git so pushes to `main` deploy automatically.
Domain `aur.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional):

| Variable | Purpose |
|---|---|
| `VITE_CONCEPT_END_DATE` | Countdown end date in the concept widget (defaults to 2026-11-20) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Live Google rating and review excerpts (`api/google-reviews.js`) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Request-form emails (`api/contact.js`). Without them the form shows a demo message |

The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## What changed from the current site

- Replaced the mid-2010s custom PHP site; removed the dead Google+ link and the Facebook icon that opens a search page.
- Fixed mislabeled navigation ("About Us", "Testimonials" and "Site Map" pointed to unrelated service pages).
- Re-enabled pinch-zoom on phones and added labels to the social icons.
- One clear experience claim (since 1954, fourth-generation craftsman) instead of competing "60 years" and "100 years combined" numbers.
- Added a project request form that asks for photos and the piece, plus a clear restoration process.
- Uses their own logo, a softer palette from their brand (light blue #65B4C5, teal #37808F, logo brown), their social links in the top bar next to the phone number, and 14 photos of their work in the hero, a new Gallery section and Our Story.

## Before client presentation

- Add the workshop address and hours; the current site lists neither, so the map currently searches by business name.
- Confirm the family history: "since 1954" and "a fourth generation master craftsman".
- Confirm the commercial and designer-trade examples (restaurant booths, office and hospitality seating, trade work for designers are concept suggestions based on their Commercial Upholstery page and a designer testimonial).
- No star rating is shown: Google shows 4.3 from 11 reviews per our lead research. Reviews section links to Google instead.
- The Jessica Moore quote is a fragment of a testimonial on the current site; confirm reuse.
- The logo (`src/assets/ablyss-logo.png`) and photos (`public/photos/`) are copied from ablyss.com and its gallery; get permission to use them, and ask for higher-resolution originals (the gallery images are 900px wide).
- Confirm their Facebook page URL (the current site links to a Facebook search), then add it to `SOCIAL_LINKS` in `src/site.js`.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.
