# 📘 Phase 3 — Frontend (React + Tailwind CSS)

## Overview

Phase 3 implements a responsive, professional frontend application that consumes the backend APIs built in Phase 1 and Phase 2.  
The frontend displays both original and AI-enhanced blog articles along with their reference links in a clean, modern UI.

This phase focuses on:
- API integration
- UI/UX clarity
- Responsiveness
- Production-ready frontend structure

---

## 🎯 Objectives

- Fetch articles from backend REST APIs
- Display original and enhanced versions of articles
- Clearly indicate enhanced articles
- Show reference links used during content enhancement
- Provide a clean, professional, responsive UI
- Deployable frontend with a live link

---

## 🧠 Architecture (Phase 3)

# 📘 Phase 3 — Frontend (React + Tailwind CSS)

## Overview

Phase 3 implements a responsive, professional frontend application that consumes the backend APIs built in Phase 1 and Phase 2.  
The frontend displays both original and AI-enhanced blog articles along with their reference links in a clean, modern UI.

This phase focuses on:
- API integration
- UI/UX clarity
- Responsiveness
- Production-ready frontend structure

---

## 🎯 Objectives

- Fetch articles from backend REST APIs
- Display original and enhanced versions of articles
- Clearly indicate enhanced articles
- Show reference links used during content enhancement
- Provide a clean, professional, responsive UI
- Deployable frontend with a live link

---

## 🧠 Architecture (Phase 3)

# 📘 Phase 3 — Frontend (React + Tailwind CSS)

## Overview

Phase 3 implements a responsive, professional frontend application that consumes the backend APIs built in Phase 1 and Phase 2.  
The frontend displays both original and AI-enhanced blog articles along with their reference links in a clean, modern UI.

This phase focuses on:
- API integration
- UI/UX clarity
- Responsiveness
- Production-ready frontend structure

---

## 🎯 Objectives

- Fetch articles from backend REST APIs
- Display original and enhanced versions of articles
- Clearly indicate enhanced articles
- Show reference links used during content enhancement
- Provide a clean, professional, responsive UI
- Deployable frontend with a live link

---

## 🧠 Architecture (Phase 3)

┌─────────────────────────────┐
│ User Browser │
│ (Desktop / Mobile Device) │
└──────────────┬──────────────┘
│
│ HTTP Requests
▼
┌─────────────────────────────┐
│ React Frontend (Vite) │
│ │
│ • Pages (Articles.tsx) │
│ • Components │
│ - ArticleCard.tsx │
│ • API Layer (Axios) │
│ │
└──────────────┬──────────────┘
│
│ REST API Calls
▼
┌─────────────────────────────┐
│ Backend API (Express) │
│ GET /api/articles │
└──────────────┬──────────────┘
│
▼
┌─────────────────────────────┐
│ MongoDB │
│ Articles Collection │
└─────────────────────────────┘


---

## 🧩 Key Components

### 1. Pages
- **Articles.tsx**
  - Fetches articles from backend API
  - Handles loading states
  - Renders article cards in a responsive grid

### 2. Components
- **ArticleCard.tsx**
  - Displays article title, content, and source
  - Highlights enhanced articles with badges
  - Shows reference links with clear visual distinction

### 3. API Layer
- **api.ts**
  - Axios instance configured with backend base URL
  - Centralized API communication

---

## 🎨 UI & UX Highlights

- Dark-themed, gradient background inspired by modern SaaS dashboards
- Centered page title with strong visual hierarchy
- Clean card-based layout
- Clear color distinction for:
  - Content
  - Enhanced status
  - Reference links
- Responsive design (mobile, tablet, desktop)

---

## 🛠 Tech Stack

- **React** (Vite)
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **Vercel** (Deployment)

---

## ▶️ How to Run Locally

```bash
cd frontend
npm install
npm run dev

---

## 🧩 Key Components

### 1. Pages
- **Articles.tsx**
  - Fetches articles from backend API
  - Handles loading states
  - Renders article cards in a responsive grid

### 2. Components
- **ArticleCard.tsx**
  - Displays article title, content, and source
  - Highlights enhanced articles with badges
  - Shows reference links with clear visual distinction

### 3. API Layer
- **api.ts**
  - Axios instance configured with backend base URL
  - Centralized API communication

---

## 🎨 UI & UX Highlights

- Dark-themed, gradient background inspired by modern SaaS dashboards
- Centered page title with strong visual hierarchy
- Clean card-based layout
- Clear color distinction for:
  - Content
  - Enhanced status
  - Reference links
- Responsive design (mobile, tablet, desktop)

---

## 🛠 Tech Stack

- **React** (Vite)
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **Vercel** (Deployment)

---

## ▶️ How to Run Locally

```bash
cd frontend
npm install
npm run dev

Frontend will be available at:
  http://localhost:5173
      Ensure backend is running on http://localhost:5000 before starting the frontend.

📸 Screenshots

Screenshots demonstrating the working UI are available in the project root:
  /screenshots
These include:

  Homepage with article list

  Enhanced article view

  Reference links display

  Responsive layout

🌐 Live Demo

https://beyondchats-frontend.vercel.app

🏁 Summary

Phase 3 completes the end-to-end workflow by providing a polished frontend that integrates seamlessly with the backend APIs.
The UI emphasizes clarity, usability, and professional presentation while remaining lightweight and easy to deploy.

This phase demonstrates frontend engineering best practices and completes the full-stack assignment.