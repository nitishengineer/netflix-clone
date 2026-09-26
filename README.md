# 🎬 Netflix Clone

A full-stack **Netflix clone** built with React, Firebase and the TMDB API. Sign up & log in with real accounts, browse live movie data in horizontally scrollable rows, and watch YouTube trailers on a dedicated player page — all protected by route guards and Firestore security rules.

🔗 **Live Demo:** https://netflix-clone-zeta-liard-46.vercel.app

## ✨ Features

- 🔐 **Real user authentication** — sign up / sign in / sign out with Firebase Email-Password auth
- 🗄️ **Cloud database** — every registered user is stored in a Firestore `users` collection (uid, name, email, provider)
- 🎞️ **Live movie data** — four rows (Popular, Top Rated, Now Playing, Upcoming) fetched from the TMDB REST API with real posters
- ▶️ **Trailer player page** — dynamic routes (`/player/:id`) that fetch and embed each movie's YouTube trailer with title, date & type
-  **Protected routing** — an `AuthGate` bounces logged-out visitors to `/login` and logged-in users away from it
- 🖱️ **Horizontal carousels** — movie rows scroll sideways with the mouse wheel, scrollbar hidden
- 🔔 **Toast notifications** — human-friendly auth errors ("invalid credential", "email already in use") via react-toastify
- 🌑 **Scroll-aware navbar** — transparent over the hero, solid black once you scroll (just like real Netflix)
- 📱 **Fully responsive** — navbar, hero, card rows and footer adapt down to mobile widths
- 🛡️ **Security rules** — Firestore locked to authenticated users only; API key kept out of the repo via `.env.local`

## 🛠️ Tech Stack

- React + Vite
- Firebase Authentication + Cloud Firestore
- TMDB API (movie metadata & posters) + YouTube embeds
- React Router DOM (`useParams`, `useNavigate`, protected redirects)
- react-toastify
- Plain CSS (flexbox, grid, media queries)
- Deployed on Vercel with CI/CD from GitHub

## 🚀 Run it locally

```bash
git clone https://github.com/nitishengineer/netflix-clone.git
cd netflix-clone
npm install
```

Create a `.env.local` file in the project root and add your own keys:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Then start the dev server:

```bash
npm run dev
```

Open **http://localhost:5173**

> **Note:** You also need a free Firebase project with Email/Password auth enabled and a Firestore database — paste its config into `src/firebase.js`. Get a free TMDB key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

## 📁 Project Structure

```
src/
├── assets/          # hero banner image
├── components/
│   ├── Navbar/      # fixed navbar, profile dropdown, scroll-darkening
│   ├── TitleCards/  # TMDB-fetched, horizontally scrollable movie rows
│   └── Footer/      # responsive site footer
├── pages/
│   ├── Home/        # hero section + movie rows + footer
│   ├── Login/       # sign in / sign up form with loading state
│   └── Player/      # YouTube trailer embed (/player/:id)
├── firebase.js      # Firebase init + signUp / login / logOut functions
├── App.jsx          # routes + AuthGate + ToastContainer
└── main.jsx

.env.local           # TMDB key — git-ignored, never committed
vercel.json          # SPA rewrites so /login & /player/:id survive refresh
```

## 🎓 What I learned

My first complete **full-stack** project — key takeaways:

- Consuming a REST API (TMDB) with `fetch` and rendering dynamic lists
- Full auth flow: registration, login, logout, session persistence & route protection
- Writing to a NoSQL cloud database (Firestore) and securing it with rules
- Managing secrets with environment variables (and why they stay out of Git)
- Debugging real deployment issues (env vars in production, SPA refresh 404s)
- Full workflow: Git → GitHub → Vercel auto-deploys on every push

Built following the tutorial *"Full Stack Netflix Clone using React JS & Firebase"* by GreatStack, then debugged, extended and deployed independently.

## 🙌 Author

**Nitish** — github.com/nitishengineer
