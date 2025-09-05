export interface SoftwareApplicationLD {
  '@context': 'https://schema.org';
  '@type': 'SoftwareApplication';
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers?: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
  };
  url: string;
}

export function generateSoftwareAppLD(props: {
  name: string;
  description: string;
  url: string;
}): SoftwareApplicationLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: props.name,
    description: props.description,
    applicationCategory: 'WebApplication',
    operatingSystem: 'All',
    url: props.url,
  };
}

export interface HowToStep {
  '@type': 'HowToStep';
  position: number;
  name: string;
  text: string;
}

export interface HowToLD {
  '@context': 'https://schema.org';
  '@type': 'HowTo';
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: string;
  step: HowToStep[];
}

export function generateHowToLD(props: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}): HowToLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: props.name,
    description: props.description,
    step: props.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export interface FAQPageLD {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export function generateFaqPageLD(faqs: { q: string; a: string }[]): FAQPageLD {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}