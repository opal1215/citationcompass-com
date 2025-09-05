"use client";

import React, { useState } from 'react';

export interface CopyButtonProps {
  text: string;
  toastMessage?: string;
}

export default function CopyButton({ text, toastMessage = 'Copied!' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="text-xs bg-secondary text-white px-2 py-1 rounded hover:bg-secondary-dark transition"
    >
      {copied ? toastMessage : 'Copy'}
    </button>
  );
}