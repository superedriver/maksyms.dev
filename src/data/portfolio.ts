export const profile = { email: '', socials: [] as { label: string; url: string }[] };
import type { ImageMetadata } from 'astro';
import flashcardsLogo from '../assets/flashcards.png';
export type Project = { title: { en: string; uk: string; es: string }; description: { en: string; uk: string; es: string }; tags: string[]; url?: string; logo?: ImageMetadata };
// Add real projects here; each project needs English, Ukrainian, and Spanish text.
export const projects: Project[] = [{
  title: { en: 'Flashcards', uk: 'Flashcards', es: 'Flashcards' },
  description: {
    en: 'Flashcards - a language learning app with flashcards, spaced repetition, and personalized study sessions.',
    uk: 'Flashcards - застосунок для вивчення мов за допомогою карток, інтервального повторення та персоналізованих сесій навчання.',
    es: 'Flashcards - una aplicación para aprender idiomas con tarjetas, repetición espaciada y sesiones de estudio personalizadas.',
  },
  tags: [],
  url: 'https://flashcards.maksyms.dev',
  logo: flashcardsLogo,
}];
