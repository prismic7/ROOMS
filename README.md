# NEU Laboratory Usage Log

Mobile-responsive QR check-in system for NEU faculty.

---

## Project Structure

```
neu-lab-log/
├── index.html              ← Login page
├── pages/
│   ├── dashboard.html      ← Professor mobile dashboard (QR scanner)
│   └── admin.html          ← Admin web dashboard
├── js/
│   └── firebase-config.js  ← Firebase init (edit with YOUR credentials)
├── firebase.json           ← Firebase Hosting config
└── firestore.rules         ← Firestore security rules
```

---

## Setup Guide

### 1. Firebase Project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project (e.g. `neu-lab-log`)
3. Enable **Google Authentication**
   - Authentication → Sign-in method → Google → Enable
   - Under Advanced → "Restrict by domain" is handled via `hd: "neu.edu.ph"` in code
4. Create a **Firestore Database** in production mode
5. Register a **Web App** and copy the `firebaseConfig` object

### 2. Update Config

Open `js/firebase-config.js` and replace:

```js
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  ...
};
```

### 3. Seed First Admin

Before anyone can log in, you need to manually create the first admin whitelist entry.

In the Firebase Console → Firestore → `whitelist` collection:
- Document ID: `your-admin@neu.edu.ph`
- Fields:
  ```
  role: "admin"
  addedAt: (timestamp)
  ```

### 4. Deploy Firestore Rules

```bash
npm install -g firebase-tools
firebase login
firebase init       # select Hosting + Firestore
firebase deploy --only firestore:rules
```

### 5. Deploy to Hosting

```bash
firebase deploy --only hosting
```

---

## Firestore Schema

### `whitelist/{email}`
| Field    | Type      | Notes                   |
|----------|-----------|-------------------------|
| role     | string    | `"professor"` or `"admin"` |
| addedAt  | timestamp | Server timestamp        |

### `rooms/{roomId}`
| Field      | Type   | Example        |
|------------|--------|----------------|
| roomNumber | string | `"101"`        |
| location   | string | `"Science Bldg, 2F"` |

### `usage_logs/{logId}`
| Field         | Type           | Notes                     |
|---------------|----------------|---------------------------|
| email         | string         | Professor email           |
| professorName | string         | Display name              |
| roomId        | string         | Matches `rooms/` doc key  |
| roomNumber    | string         | Display room number       |
| location      | string         | Building / floor          |
| checkIn       | timestamp      | Server timestamp          |
| checkOut      | timestamp/null | null when active          |
| status        | string         | `"active"` or `"completed"` |

---

## QR Code Format

Each QR code simply encodes the **Firestore room document ID** (e.g. `room-101`).

Use the Admin QR Generator to create and download PNG codes for printing.

---

## Role Flow

```
Login (Google @neu.edu.ph)
  └─ Not in whitelist? → Sign out + alert
  └─ role == "professor" → pages/dashboard.html
  └─ role == "admin"    → pages/admin.html
```

---

## Libraries Used

| Library | Purpose |
|---------|---------|
| html5-qrcode | Mobile camera QR scanning |
| qrcode.js | Server-side QR PNG generation |
| Firebase v10 | Auth, Firestore, Hosting |
| Tailwind CSS CDN | Styling |
| Google Fonts (Bebas Neue + DM Sans) | Typography |
