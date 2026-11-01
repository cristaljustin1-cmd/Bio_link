# Personal Link-in-Bio

React + Vite + TypeScript + Tailwind CSS + Lucide + Framer Motion. No backend, no database.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit your content
Everything lives in `src/config/profile.ts`: name, title, bio, photo, social URLs, and links.
- Replace `src/assets/profile-photo.svg` with your photo (e.g. `profile-photo.jpg`) and update the import at the top of `profile.ts`.
- Set a social URL to `""` (or delete it) to hide that icon.
- Available link icons: briefcase, user, folder, file, mail, link, globe, calendar, phone.
- Update the page `<title>` and description in `index.html`.

## Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
**Dashboard:** push to GitHub → vercel.com/new → import the repo → Vercel detects Vite (build `npm run build`, output `dist`) → Deploy.

**CLI:**
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```
