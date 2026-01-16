import type { MetadataRoute } from 'next';
import { SITE_CONFIG, AREAS_SERVED } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/portfolio',
    '/services',
    '/areas',
    '/insights',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Area pages for local SEO
  const areaPages: MetadataRoute.Sitemap = AREAS_SERVED.map((area) => ({
    url: `${baseUrl}/areas/${area.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // TODO: Add dynamic pages from CMS (projects, insights)
  // const projects = await getProjects();
  // const projectPages = projects.map(...)

  return [...staticPages, ...areaPages];
}
