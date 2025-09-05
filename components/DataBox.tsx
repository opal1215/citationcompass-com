import React from 'react';

export interface DataBoxProps {
  title: string;
  children: React.ReactNode;
}

export default function DataBox({ title, children }: DataBoxProps) {
  return (
    <div className="border-l-4 border-primary bg-primary/10 p-4 my-4 rounded-md">
      <h3 className="font-medium text-primary mb-2">{title}</h3>
      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </div>
  );
}