import { cities } from '@/data/cities';
import { locationKeywords } from '@/data/location-keywords';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const keyword = locationKeywords.find((k) => k.slug === 'referencement-seo')!;

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return {};
  return {
    title: keyword.h1Pattern.replace('{city}', city.name),
    description: keyword.descPattern.replace(/\{city\}/g, city.name),
    alternates: {
      canonical: `https://flotweb.com/${keyword.slug}/${city.slug}`,
    },
    openGraph: {
      title: keyword.h1Pattern.replace('{city}', city.name),
      description: keyword.descPattern.replace(/\{city\}/g, city.name),
      url: `https://flotweb.com/${keyword.slug}/${city.slug}`,
      type: 'website',
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) notFound();
  return <LocationPageTemplate city={city} keyword={keyword} />;
}
