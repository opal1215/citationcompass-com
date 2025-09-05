"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import AnswerCard from '@/components/AnswerCard';
import FAQSection from '@/components/FAQSection';
import RelatedLinks from '@/components/RelatedLinks';
import { generateApaCitation, CitationInput, CitationOutput } from '@/lib/apa';

export default function HomePage() {
  const today = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState<CitationInput>({
    youtubeUrl: '',
    videoId: '',
    author: '',
    uploadDate: '',
    accessDate: today,
    title: '',
    timestamp: '',
  });
  const [result, setResult] = useState<CitationOutput | null>(null);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const output = generateApaCitation(form);
    setResult(output);
  };
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          APA × YouTube Citation Generator
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Enter information about a YouTube video to generate a proper
          APA7 in‑text citation and reference entry.  You can provide
          either a full YouTube URL or just the video ID.  Optional
          fields allow you to override the channel name, upload date
          and video title.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 border rounded-md shadow-sm max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="youtubeUrl">
                YouTube URL
              </label>
              <input
                type="url"
                name="youtubeUrl"
                id="youtubeUrl"
                placeholder="https://www.youtube.com/watch?v=..."
                value={form.youtubeUrl}
                onChange={handleChange}
                className="mt-1 w-full rounded border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="videoId">
                Video ID
              </label>
              <input
                type="text"
                name="videoId"
                id="videoId"
                placeholder="Optional if URL provided"
                value={form.videoId}
                onChange={handleChange}
                className="mt-1 w-full rounded border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="author">
                Author / Channel
              </label>
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Channel name (optional)"
                value={form.author}
                onChange={handleChange}
                className="mt-1 w-full rounded border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="uploadDate">
                Upload Date
              </label>
              <input
                type="date"
                name="uploadDate"
                id="uploadDate"
                value={form.uploadDate}
                onChange={handleChange}
                className="mt-1 w-full rounded border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="accessDate">
                Access Date
              </label>
              <input
                type="date"
                name="accessDate"
                id="accessDate"
                value={form.accessDate}
                onChange={handleChange}
                className="mt-1 w-full rounded border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="title">
                Video Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Optional override"
                value={form.title}
                onChange={handleChange}
                className="mt-1 w-full rounded border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800" htmlFor="timestamp">
                Timestamp (HH:MM:SS)
              </label>
              <input
                type="text"
                name="timestamp"
                id="timestamp"
                placeholder="Optional: 00:01:23"
                value={form.timestamp}
                onChange={handleChange}
                className="mt-1 w-full rounded border-gray-300 p-2 text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
          >
            Generate citation
          </button>
        </form>
      </section>
      {result && (
        <section>
          <AnswerCard
            title="APA Citation Result"
            tldr={`In‑text citation: ${result.inText}\nReference: ${result.reference}`}
          />
        </section>
      )}
      <section className="max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-900 mt-8">Learn more</h2>
        <p className="mt-2 text-gray-700">
          Our guide covers common edge cases such as missing authors or
          dates, citing YouTube Shorts and livestreams, and more.  Explore
          the articles below to become an APA citation expert.
        </p>
        <RelatedLinks
          links={[
            { title: 'In‑text citation', href: '/apa-youtube/in-text-citation' },
            { title: 'Reference list examples', href: '/apa-youtube/reference-list-examples' },
            { title: 'No author', href: '/apa-youtube/no-author' },
            { title: 'No date', href: '/apa-youtube/no-date' },
            { title: 'Shorts', href: '/apa-youtube/shorts' },
            { title: 'Livestream', href: '/apa-youtube/livestream' },
          ]}
        />
      </section>
      <section className="max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-900 mt-8">Common Questions</h2>
        <FAQSection
          items={[
            {
              q: 'Do I need a title and author to generate a citation?',
              a: 'No.  If you leave those fields blank the generator will attempt to use the channel name and will mark the date as (n.d.) when missing.',
            },
            {
              q: 'How do I cite a specific moment in a video?',
              a: 'Include a timestamp in the citation form (HH:MM:SS).  The timestamp will appear in your in‑text citation but not in the reference list.',
            },
          ]}
        />
      </section>
    </div>
  );
}