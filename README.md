# Z-Supercars — Supercar Rental Platform

A modern supercar rental web application built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. The platform lets users browse an exclusive fleet of high-performance vehicles, explore detailed specs, and experience the cars through interactive 3D showcases — all wrapped in a cinematic, animation-driven UI.

---

## Features

- **Hero Landing Page** — Full-screen hero section with GSAP-powered entrance animations (slide-in titles, staggered content reveals).
- **Interactive 3D Car Showcase** — Swiper.js cube-effect sliders display cars from every angle (front, left, rear, right) alongside full technical specs and pricing.
- **Full Fleet Browsing** — `/allCars` lists the entire inventory with per-card details: horsepower, acceleration, top speed, engine type, transmission, body style, and more.
- **Individual Car Pages** — Dynamic routes (`/cars/[id]`) show a dedicated page per vehicle with a full spec sheet and a direct rental/buy action.
- **Technology Page** — Showcases the engineering behind the fleet: hybrid/electric powertrains, active aerodynamics, carbon fibre monocoques, connected telemetry, ADAS, and drive-mode ECUs.
- **AI to Reduce Page** — Dedicated section explaining how AI is used to minimise environmental impact: smart route optimisation, predictive maintenance, driving behaviour analytics, carbon offset matching, fleet lifecycle management, and an emissions reporting dashboard.
- **Authentication Pages** — `/login` and `/register` routes for user account management.
- **Responsive Navbar** — Transparent overlay navigation with smooth hover underline transitions and the brand logo.
- **Footer** — Consistent site-wide footer component.

---

## Tech Stack

| Layer      | Technology                                                  |
| ---------- | ----------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org/) (App Router)              |
| UI Library | [React 19](https://react.dev/)                              |
| Language   | TypeScript 5                                                |
| Styling    | Tailwind CSS 3 + CSS Modules                                |
| Animations | [GSAP 3](https://gsap.com/) + ScrollTrigger                 |
| Slider     | [Swiper.js 12](https://swiperjs.com/) (Cube Effect)         |
| Icons      | [React Icons 5](https://react-icons.github.io/react-icons/) |

---

## Project Structure

```
rent-a-car/
├── app/
│   ├── page.tsx              # Home page (assembles all landing sections)
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── allCars/
│   │   └── page.tsx          # Full fleet listing
│   ├── cars/
│   │   └── [id]/
│   │       ├── page.tsx      # Individual car detail page
│   │       └── buy/          # Rental / purchase flow
│   ├── ai/
│   │   └── page.tsx          # AI & sustainability page
│   ├── technology/
│   │   └── page.tsx          # Engineering & technology page
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── register/
│   │   └── page.tsx          # Registration page
│   └── components/
│       ├── Navbar.tsx         # Site navigation
│       ├── Hero.tsx           # Animated hero section
│       ├── CarView.tsx        # AI-assisted driving info banner
│       ├── 3dcars.tsx         # Swiper cube 3D car showcase
│       ├── CarShowcase.tsx    # Featured cars section
│       ├── TypeOfCar.tsx      # Car category breakdown
│       ├── WhatWeDo.tsx       # Services / value proposition
│       ├── RentalInfo.tsx     # Rental information box
│       ├── Breathroom.tsx     # Fullscreen tagline section
│       ├── Footer.tsx         # Site footer
│       └── 3dcars.module.css  # CSS module for 3D showcase
├── public/
│   └── images/               # Car images & 3D view assets
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-username/rent-a-car.git
cd rent-a-car
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Pages Overview

| Route         | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| `/`           | Landing page with hero, 3D showcase, fleet teaser, and rental info |
| `/allCars`    | Browse the full supercar inventory                                 |
| `/cars/[id]`  | Detailed spec sheet and rental action for a single car             |
| `/technology` | Engineering features of the fleet                                  |
| `/ai`         | AI-driven sustainability and emissions reduction                   |
| `/login`      | User login                                                         |
| `/register`   | New user registration                                              |

---

## Fleet Highlights

- **Astrler V300** — 4.0L V8, 620 hp, 0–100 km/h in 3.1 s, top speed 320 km/h
- **Lesiac Z1500** — All-electric drivetrain, 0–100 km/h in 2.7 s
- **Model STR-17** — 6.5L V12 Naturally Aspirated, 770 HP, 217 mph top speed — from $500/day
- **Model GtW Cooper** — V12 coupe, rear-wheel drive — from $300/day
- **Model Byqan / Sela** — Premium coupe options from $900/day

---

## License

This project is for educational and portfolio purposes.
