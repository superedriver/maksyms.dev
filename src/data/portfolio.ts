export const profile = { email: '', socials: [] as { label: string; url: string }[] };
import type { ImageMetadata } from 'astro';
import flashcardsLogo from '../assets/flashcards.png';
type ProjectPlatform = { name: 'web' | 'Android' | 'iOS'; status: 'available' | 'planned'; url?: string };
export type Project = { title: { en: string; uk: string; es: string }; description: { en: string; uk: string; es: string }; tags: string[]; url?: string; logo?: ImageMetadata; platforms?: ProjectPlatform[] };
// Add real projects here; each project needs English, Ukrainian, and Spanish text.
export const projects: Project[] = [{
  title: { en: 'Flashcards', uk: 'Flashcards', es: 'Flashcards' },
  description: {
    en: 'Flashcards - a language learning app with flashcards, spaced repetition, and personalized study sessions.',
    uk: 'Flashcards - застосунок для вивчення мов за допомогою карток, інтервального повторення та персоналізованих сесій навчання.',
    es: 'Flashcards - una aplicación para aprender idiomas con tarjetas, repetición espaciada y sesiones de estudio personalizadas.',
  },
  tags: [],
  platforms: [
    { name: 'web', status: 'available', url: 'https://flashcards.maksyms.dev' },
    { name: 'Android', status: 'planned' },
    { name: 'iOS', status: 'planned' },
  ],
  logo: flashcardsLogo,
}];
