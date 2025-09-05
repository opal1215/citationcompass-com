"use client";

import React from 'react';
import JsonLd from './JsonLd';
import { generateFaqPageLD } from '../lib/jsonld';

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  const faqLd = generateFaqPageLD(items);
  return (
    <div className="mt-6">
      <JsonLd data={faqLd} />
      <div className="space-y-2">
        {items.map((item, idx) => (
          <details key={idx} className="border rounded-md px-4 py-2 bg-gray-50">
            <summary className="cursor-pointer font-medium text-gray-800">
              {item.q}
            </summary>
            <p className="mt-2 text-sm text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}