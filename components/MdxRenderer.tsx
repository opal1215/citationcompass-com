"use client";

import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import AnswerCard from './AnswerCard';
import DataBox from './DataBox';
import RelatedLinks from './RelatedLinks';
import AdSlot from './AdSlot';
import FAQSection from './FAQSection';

export default function MdxRenderer({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <Component
      components={{
        AnswerCard,
        DataBox,
        RelatedLinks,
        AdSlot,
        FAQSection,
      }}
    />
  );
}