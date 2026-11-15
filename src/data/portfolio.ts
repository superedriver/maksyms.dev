export const profile = { email: '', socials: [] as { label: string; url: string }[] };
import type { ImageMetadata } from 'astro';
import flashcardsLogo from '../assets/flashcards.png';
export type Project = { title: { en: string; uk: string; es: string }; description: { en: string; uk: string; es: string }; tags: string[]; url?: string; logo?: ImageMetadata };
// Add real projects here; each project needs English, Ukrainian, and Spanish text.
export const projects: Project[] = [{
  title: { en: 'Flashcards', uk: 'Flashcards', es: 'Flashcards' },
  description: { en: 'Flashcards for learning words in foreign languages.', uk: 'Картки для вивчення іноземних слів.', es: 'Tarjetas para aprender vocabulario en otros idiomas.' },
  tags: [],
  url: 'https://flashcards.maksyms.dev',
  logo: flashcardsLogo,
}];
