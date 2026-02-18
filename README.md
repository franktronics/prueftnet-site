# Pruftnet - Visual Network Analyser

A modern landing page for Pruftnet, an open-source visual network analysis tool that combines real-time packet capture with an intuitive visual workflow builder.

## Tech Stack

- **Backend:** AdonisJS 6
- **Frontend:** React with InertiaJS (SSR)
- **Styling:** Tailwind CSS 4
- **UI Components:** Shadcn UI (Orange theme)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
git clone https://github.com/franktronics/pruftnet.app.git
cd pruftnet-site
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3333`

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── inertia/
│   ├── components/      # Shared UI components
│   ├── css/             # Global styles
│   ├── lib/             # Utilities (cn, etc.)
│   └── pages/
│       ├── home/        # Landing page
│       ├── about/       # About page
│       └── doc/         # Documentation page
├── resources/
│   └── assets/          # Static assets (images, SVGs)
├── start/
│   └── routes.ts        # Application routes
└── AGENTS.md            # Project specifications
```

## Pages

- `/` - Landing page with hero, features, waitlist, FAQ
- `/about` - About the project and author
- `/doc` - Documentation (coming soon)

## Author

**Wilson Tenepo**

- GitHub: [@franktronics](https://github.com/franktronics)
- X: [@franktronics_w](https://x.com/franktronics_w)

## License

MIT License
