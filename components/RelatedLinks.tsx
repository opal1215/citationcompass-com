import React from 'react';

export interface RelatedLink {
  title: string;
  href: string;
}

export interface RelatedLinksProps {
  links: RelatedLink[];
}

export default function RelatedLinks({ links }: RelatedLinksProps) {
  if (!links || links.length === 0) return null;
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-800">Related topics</h3>
      <ul className="mt-2 space-y-1 list-disc list-inside">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="text-blue-600 underline text-sm">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}