# Maksym — personal portfolio

Static Astro portfolio with English / Ukrainian / Spanish and light / dark / system themes. Preferences persist in localStorage when available.

## Requirements and setup

The project requires Node.js `>=22.23.4`, as declared in `package.json`, and pnpm. Check your active version with `node --version`, especially after switching Node versions with NVM.

```sh
pnpm install
pnpm dev
```

Open the local URL printed in the terminal, usually `http://localhost:4321`. Stop the foreground server with `Ctrl+C`.

On Windows PowerShell, use `pnpm.cmd` if execution policy blocks `pnpm.ps1`. If pnpm is unavailable after switching Node versions, run `npm.cmd install --global pnpm@10.7.1`. With dependencies already installed, `npm.cmd run dev` also starts the site.

## Commands

- `pnpm dev`: local development
- `pnpm build`: build to `dist/`
- `pnpm preview`: preview production output

## Adding content

Edit `src/data/portfolio.ts` to manage projects.

Add projects to the `projects` array:

```ts
{
  title: { en: 'Project name', uk: 'Назва проєкту', es: 'Nombre del proyecto' },
  description: { en: 'What you built.', uk: 'Що ти створив.', es: 'Lo que has creado.' },
  tags: ['Astro', 'TypeScript'],
  url: 'https://example.com',
}
```

For a project logo, place the image in `src/assets/`, import it in `src/data/portfolio.ts`, and set the project's `logo` field to the imported image:

```ts
import projectLogo from '../assets/project-logo.png';

// Inside a project object:
logo: projectLogo,
```

Astro generates optimized WebP variants during the build. The existing Flashcards entry shows a complete example. Project cards are horizontal, with the logo on the left. When `url` is set, the card displays the hostname as a link. Without a logo, the card uses a decorative illustration. Set `tags: []` to hide technology tags. Empty projects show a coming-soon card.

## Structure and languages

- `src/pages/index.astro`: English route, `/`.
- `src/pages/uk/index.astro`: Ukrainian route, `/uk/`.
- `src/pages/es/index.astro`: Spanish route, `/es/`.
- `src/components/Portfolio.astro`: shared page markup, localized content, theme controls, and browser preference handling.
- `src/components/Logo.astro`: site logo.
- `src/components/Wave.astro`: decorative SVG wave.
- `src/styles/global.css`: responsive styles for both appearances.
- `src/data/portfolio.ts`: project content. The exported `profile` is currently unused; there is no contact section.
- `public/`: favicon files, Apple touch icon, and robots.txt.
- `src/pages/sitemap.xml.ts`: generated sitemap.

English is served at `/`, Ukrainian at `/uk/`, and Spanish at `/es/`. Each route renders only its own language into static HTML, including localized title and description. Language links work without JavaScript; localStorage remembers the visited language without overriding an explicit URL. All three routes have canonical and hreflang links. There are no external fonts or UI frameworks.

Theme controls require JavaScript. The selected mode is stored as `portfolio-theme`; system mode follows changes to the operating system's color preference. The language is stored as `portfolio-language`. Blocked browser storage does not prevent navigation or theme switching.

## Publishing

Build and upload `dist/` to a static host. The production origin is `https://maksyms.dev` in `astro.config.mjs`. All three routes are included in `/sitemap.xml`, referenced by `/robots.txt`. Update the site setting and robots sitemap URL if the domain changes.
