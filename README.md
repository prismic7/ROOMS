# NEU ROOMS [Room ORganization & Operations Management System]

A mobile-responsive QR check-in and attendance system for New Era University faculty, replacing traditional paper logs with a digital workflow using Google authentication and real-time room tracking.

---

## [Live Demo]

> https://midterm-yr3sm2.web.app (Reach out for whitelist.)

---

## [Features]

### For Faculty / Professors
- **Google Sign-In** restricted to `@neu.edu.ph` accounts only.
- **High-Sensitivity QR Scanner** — Optimized for mobile cameras to scan room codes instantly.
- **Session Notes** — Ability to add brief notes (e.g., class section or purpose) during check-in.
- **Active Session Tracking** — Prevents double-check-ins by enforcing a checkout before starting a new session.
- **Personal History** — View personal usage logs directly on the mobile dashboard.

### For Admin
- **Centralized Dashboard** — Manage all laboratory activities from a single web interface.
- **Personnel Management** — Whitelist faculty members and assign roles (`professor` or `admin`).
- **Room Management** — Add or remove rooms and view their specific usage statistics.
- **QR Code Generator** — Generate high-resolution, branded QR codes for each laboratory room.
- **Real-time Audit Trail** — Tracks all check-ins, check-outs, and administrative changes as they happen.

### Automatic
- **PWA Ready** — Includes manifest and service worker to be installed on mobile home screens for a native app experience.
- **Clean URLs** — Rewrites handled by Firebase for professional-looking links (e.g., `/dashboard`, `/admin`).
- **Real-time Updates** — Powered by Firestore listeners to ensure data is always current without page refreshes.

---

## [Tech Stack]

| Layer | Technology |
|---|---|
| **Frontend** | HTML, Tailwind CSS, Vanilla JavaScript (ES Modules) |
| **Auth** | Firebase Authentication (Google OAuth @neu.edu.ph) |
| **Database** | Firebase Firestore (Real-time NoSQL) |
| **Hosting** | Firebase Hosting & PWA Service Workers |
| **Libraries** | `html5-qrcode` (Scanning), `qrcode.js` (Generation) |

---

## [Setup & Deployment]

### 1. Configuration
Update `js/firebase-config.js` with your project credentials. **Important:** Never share your actual API keys in public repositories.

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

### 2. Security Rules & Deployment
Deploy the database rules and the web app using Firebase CLI:

```bash
firebase deploy --only firestore:rules
firebase deploy --only hosting
```
---

## [Project Structure]

```plaintext
LOG/
├── index.html              ← Login page (Root)
├── pages/
│   ├── dashboard.html      ← Faculty mobile dashboard
│   └── admin.html          ← Admin web dashboard
├── js/
│   └── firebase-config.js  ← Firebase Initialization
├── manifest.json           ← PWA Configuration
├── sw.js                   ← Service Worker for mobile use
├── firebase.json           ← Hosting & Redirect rules
└── firestore.rules         ← Security protocols
```

---

## [Author]

**Frinz Hughwie D. Bautista** Bachelor of Science in Computer Science  
New Era University  

---

## 📄 License

This project was developed as an academic requirement.  
© 2026 New Era University — All rights reserved.
