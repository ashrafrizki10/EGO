import { MetadataRoute } from 'next';
import { characters } from '@/data/characters';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';

  const staticRoutes = ['', '/characters', '/compare', '/quiz', '/stats', '/discover', '/rankings'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  const characterRoutes = characters.map((character) => ({
    url: `${baseUrl}/characters/${character.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...characterRoutes];
}
