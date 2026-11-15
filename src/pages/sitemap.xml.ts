import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const alternate = `<xhtml:link rel="alternate" hreflang="en" href="${new URL('/', site)}"/><xhtml:link rel="alternate" hreflang="uk" href="${new URL('/uk/', site)}"/><xhtml:link rel="alternate" hreflang="es" href="${new URL('/es/', site)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${new URL('/', site)}"/>`;
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${['/', '/uk/', '/es/'].map(path => `<url><loc>${new URL(path, site)}</loc>${alternate}</url>`).join('')}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
