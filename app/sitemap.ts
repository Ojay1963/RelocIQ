import { MetadataRoute } from 'next';
import {
  GUIDE_COUNTRIES, GUIDE_CITY_SLUGS, BEST_CATEGORY_SLUGS, COMPARE_SLUGS,
  SCHOOLS_SLUGS, HEALTHCARE_SLUGS, EXPAT_SLUGS,
} from '@/lib/countries';

// Treat guides as updated monthly; use a fixed date so Google doesn't
// re-crawl every page on every deploy unnecessarily.
const GUIDE_DATE = new Date('2025-05-01');
const TOOL_DATE = new Date('2025-05-01');

export default function sitemap(): MetadataRoute.Sitemap {
  const guideUrls = GUIDE_COUNTRIES.map(country => ({
    url: `https://relociq.com/guides/${country.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: GUIDE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const cityUrls = GUIDE_CITY_SLUGS.map(slug => ({
    url: `https://relociq.com/cities/${slug}`,
    lastModified: GUIDE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const bestUrls = BEST_CATEGORY_SLUGS.map(slug => ({
    url: `https://relociq.com/best/${slug}`,
    lastModified: GUIDE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const compareUrls = COMPARE_SLUGS.map(slug => ({
    url: `https://relociq.com/compare/${slug}`,
    lastModified: GUIDE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.72,
  }));

  const schoolsUrls = SCHOOLS_SLUGS.map(slug => ({
    url: `https://relociq.com/schools/${slug}`,
    lastModified: GUIDE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.78,
  }));

  const healthcareUrls = HEALTHCARE_SLUGS.map(slug => ({
    url: `https://relociq.com/healthcare/${slug}`,
    lastModified: GUIDE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.78,
  }));

  const expatUrls = EXPAT_SLUGS.map(slug => ({
    url: `https://relociq.com/expat/${slug}`,
    lastModified: GUIDE_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.78,
  }));

  const toolUrls = [
    { url: 'https://relociq.com/tools/visa-free', priority: 0.9 },
    { url: 'https://relociq.com/tools/cost-index', priority: 0.9 },
    { url: 'https://relociq.com/tools/salary-stretcher', priority: 0.9 },
    { url: 'https://relociq.com/tools/moving-checklist', priority: 0.85 },
  ].map(t => ({
    ...t,
    lastModified: TOOL_DATE,
    changeFrequency: 'weekly' as const,
  }));

  return [
    {
      url: 'https://relociq.com',
      lastModified: TOOL_DATE,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...toolUrls,
    ...bestUrls,
    ...compareUrls,
    ...expatUrls,
    ...healthcareUrls,
    ...schoolsUrls,
    ...guideUrls,
    ...cityUrls,
  ];
}
