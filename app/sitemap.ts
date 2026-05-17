import { MetadataRoute } from 'next';
import { GUIDE_COUNTRIES, GUIDE_CITY_SLUGS, BEST_CATEGORY_SLUGS, COMPARE_SLUGS } from '@/lib/countries';

export default function sitemap(): MetadataRoute.Sitemap {
  const guideUrls = GUIDE_COUNTRIES.map(country => ({
    url: `https://relociq.com/guides/${country.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const cityUrls = GUIDE_CITY_SLUGS.map(slug => ({
    url: `https://relociq.com/cities/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const bestUrls = BEST_CATEGORY_SLUGS.map(slug => ({
    url: `https://relociq.com/best/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const compareUrls = COMPARE_SLUGS.map(slug => ({
    url: `https://relociq.com/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.72,
  }));

  const toolUrls = [
    { url: 'https://relociq.com/tools/visa-free', priority: 0.85 },
    { url: 'https://relociq.com/tools/cost-index', priority: 0.85 },
    { url: 'https://relociq.com/tools/salary-stretcher', priority: 0.85 },
  ].map(t => ({
    ...t,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  return [
    {
      url: 'https://relociq.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...toolUrls,
    ...bestUrls,
    ...compareUrls,
    ...guideUrls,
    ...cityUrls,
  ];
}
