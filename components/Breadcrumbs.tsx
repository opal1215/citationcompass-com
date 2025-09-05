import React from 'react';

export interface BreadcrumbSegment {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  segments: BreadcrumbSegment[];
}

export default function Breadcrumbs({ segments }: BreadcrumbsProps) {
  if (!segments || segments.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center space-x-1 text-gray-600">
        {segments.map((segment, idx) => (
          <li key={idx} className="flex items-center">
            {idx < segments.length - 1 ? (
              <a href={segment.href} className="text-blue-600 underline">
                {segment.label}
              </a>
            ) : (
              <span className="font-medium text-gray-800">{segment.label}</span>
            )}
            {idx < segments.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}