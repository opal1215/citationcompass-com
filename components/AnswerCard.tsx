"use client";

import React from 'react';
import CopyButton from './CopyButton';

export interface AnswerCardProps {
  title: string;
  tldr: string;
  sources?: Array<{ label: string; href: string }>;
}

export default function AnswerCard({ title, tldr, sources }: AnswerCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold text-gray-900 mr-4">{title}</h2>
        <CopyButton text={tldr} toastMessage="Copied!" />
      </div>
      <p className="mt-2 whitespace-pre-line text-sm text-gray-700">{tldr}</p>
      {sources && sources.length > 0 && (
        <div className="mt-2 border-t pt-2">
          <h3 className="text-sm font-medium text-gray-800">Sources</h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            {sources.map((s, idx) => (
              <li key={idx}>
                <a href={s.href} className="text-blue-600 underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}