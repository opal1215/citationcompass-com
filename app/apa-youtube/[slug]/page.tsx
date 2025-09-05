import { allGuides } from 'contentlayer/generated';
import MdxRenderer from '@/components/MdxRenderer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return allGuides
    .filter((guide) => !guide.pillar)
    .map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const guide = allGuides.find((g) => g.slug === params.slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | APA × YouTube Citation`,
    description: guide.description,
  };
}

export default function GuidePage({ params }: { params: Params }) {
  const guide = allGuides.find((g) => g.slug === params.slug);
  if (!guide) {
    return notFound();
  }
  return (
    <article className="prose max-w-none">
      <Breadcrumbs
        segments={[
          { label: 'Home', href: '/' },
          { label: 'APA YouTube', href: '/apa-youtube' },
          { label: guide.title, href: `/apa-youtube/${guide.slug}` },
        ]}
      />
      <h1 className="mb-4">{guide.title}</h1>
      <MdxRenderer code={guide.body.code} />
    </article>
  );
}