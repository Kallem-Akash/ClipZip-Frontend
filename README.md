# ClipZip

> **Sleek, lightning‑fast video downloads — no ads, no distractions.**

---

## Project Overview

**ClipZip** is a full-stack, dark-themed web application that lets users download videos from **YouTube, Instagram, Facebook, and Twitter (X)** in just a few clicks.  
Paste a link → pick a format/quality → download instantly — all without ads or distractions.

---

## Features

| Feature               | Description                                                |
|----------------------|------------------------------------------------------------|
| 🔒 Authentication     | Email + password Sign Up / Login / Logout via Supabase     |
| 🎥 Multi-platform     | Download from YouTube, Instagram, Facebook, Twitter (X)     |
| 📸 Preview            | Shows thumbnail and video title before download            |
| 🎯 Quality Selector   | Filter and choose resolution / file type                   |
| 🌓 Dark Theme         | Modern, default dark UI built with Tailwind CSS            |
| ⚡ Responsive         | Optimized for mobile and desktop                           |
| 🌐 CORS Proxy         | Backend proxy shields RapidAPI from browser CORS issues    |

---

## Tech Stack

| Layer           | Technology                                      |
|----------------|-------------------------------------------------|
| Frontend       | React 18, Vite, Tailwind CSS                    |
| Backend        | Spring Boot 3, Maven                            |
| Authentication | Supabase Auth (email/password)                 |
| Video API      | RapidAPI (e.g., `youtube-media-download`)      |
| Hosting        | Vercel (frontend), Render (backend)            |

---

## Screenshots

### 🔐 Login Page

![Login Screenshot](screenshots/Login.png)

### 🎥 Downloader Page

![Downloader Screenshot](screenshots/Downloadpage.png)

---

## Live Demo

👉 **Try it now:** [https://clipzip.vercel.app](https://clipzip.vercel.app)

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9 (or pnpm / yarn)
- Java 17 (for Spring Boot 3)
- A RapidAPI account + key
- A Supabase project (URL & anon key)

### Environment Variables

Create two `.env` files — one for the frontend and one for the backend.

#### 📁 `frontend/.env.local`

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_KEY
VITE_API_BASE_URL=http://localhost:8080
```

#### 📁 `backend/.env`

```env
RAPIDAPI_KEY=YOUR_RAPIDAPI_KEY
RAPIDAPI_HOST=example-rapidapi-host.p.rapidapi.com
CORS_ALLOWED_ORIGINS=http://localhost:5173
SERVER_PORT=8080
```

> **Note:** Never commit `.env` files. Add them to `.gitignore`.

### Local Setup

#### 1. Clone the repo

```bash
git clone https://github.com/yourusername/clipzip.git
cd clipzip
```

#### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

#### 3. Start the backend

```bash
cd backend
./mvnw spring-boot:run
```

Runs at: [http://localhost:8080](http://localhost:8080)

---

## Deployment

| Layer    | Platform | Branch | URL                            |
|----------|----------|--------|--------------------------------|
| Frontend | Vercel   | `main` | https://clipzip.vercel.app     |
| Backend  | Render   | `main` | https://clipzip.onrender.com   |

---

## Credits

- [RapidAPI](https://rapidapi.com) — for video download APIs  
- [Supabase](https://supabase.io) — for authentication and storage  
- [Lucide Icons](https://lucide.dev) — for beautiful open-source icons

---



> Made with ❤️ by [Akash](https://github.com/yourusername) — PRs welcome!
