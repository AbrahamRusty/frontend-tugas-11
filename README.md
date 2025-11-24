# 🚀 Next.js Modern Starter — Project README

Ini adalah proyek **Next.js 14+** yang dibuat menggunakan [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Struktur, tools, dan konfigurasi sudah dioptimalkan supaya pengembangan jadi cepat, nyaman, dan scalable.

---

## ⚡ Getting Started

Jalankan development server:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Setelah itu buka:

👉 [http://localhost:3000](http://localhost:3000)

Semua perubahan di folder `app/` akan *hot reload*, jadi kamu bisa langsung lihat update tanpa restart server.

---

## 📂 Project Structure

Project ini menggunakan **App Router** (`app/`) dan mengikuti standar Next.js modern.

```
app/
  ├─ layout.tsx      # Root layout
  ├─ page.tsx        # Homepage
  ├─ api/            # Route handlers (server functions)
public/              # Static assets
components/          # Reusable UI components
lib/                 # Utilities, configs, constants
```

---

## ✨ Built-in Features

* ⚛️ **Next.js App Router** untuk routing, server components, dan parallel routes.
* 🔤 `next/font` dengan font **Geist** (font resmi dari Vercel).
* 🧩 Struktur modular & scalable.
* 🚀 Optimisasi bawaan seperti image optimization, caching, dan bundling pintar.

---

## 🛠️ Development Guide

### Edit Halaman Utama

Kamu bisa mengubah halaman utama dengan edit file:

```
app/page.tsx
```

Setiap perubahan akan otomatis ter-update.

### Menambah Komponen Baru

Tempatkan komponen pada folder:

```
components/
```

Lalu import di halaman mana pun sesuai kebutuhan.

---

## 📘 Learn More

Sumber belajar resmi seputar Next.js:

* 📚 Dokumentasi Next.js → [https://nextjs.org/docs](https://nextjs.org/docs)
* 🎓 Tutorial interaktif → [https://nextjs.org/learn](https://nextjs.org/learn)
* 🛠️ Repo resmi Next.js → [https://github.com/vercel/next.js](https://github.com/vercel/next.js)

---

## 🌐 Deployment

Cara paling mudah deploy adalah menggunakan **Vercel**, platform resmi pembuat Next.js.

Deploy langsung dari sini:

👉 [https://vercel.com/new?filter=next.js&utm_source=create-next-app](https://vercel.com/new?filter=next.js&utm_source=create-next-app)

Dokumentasi lengkap deployment:

[https://nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 🧑‍💻 Scripts Available

```bash
npm run dev       # Development mode
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Linting
```
