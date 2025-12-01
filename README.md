# Aria - Digital Prescriptions for Modern India

Aria is a unified digital healthcare platform connecting doctors and patients through secure, ABHA-integrated digital prescriptions.

## 🚀 Technologies

This project is built with a modern frontend stack:

- **[Vite](https://vitejs.dev)** - Build tool & dev server
- **[React](https://react.dev)** - UI Library
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com)** - Styling
- **[shadcn/ui](https://ui.shadcn.com)** - Component library
- **[Supabase](https://supabase.com)** - Backend & Database (Waitlist)
- **[Framer Motion](https://www.framer.com/motion)** - Animations

## 🛠️ Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd ariamed
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start Development Server**
   ```sh
   npm run dev
   ```

## ✨ Features

- **Digital Prescriptions:** Secure, legible, and instantly shareable.
- **ABHA Integration:** Fully compliant with India's Ayushman Bharat Digital Mission.
- **Waitlist System:** Integrated with Supabase for tracking early interest.
- **Privacy Focused:** Strict data protection policies for medical information.

## 📦 Deployment

The project is configured for easy deployment on Vercel, Netlify, or any static site host. Ensure environment variables are set in your deployment dashboard.
