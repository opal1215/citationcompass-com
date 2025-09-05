import { toSentenceCase, formatDate, getYear } from './utils';

export interface CitationInput {
  videoId?: string;
  youtubeUrl?: string;
  author?: string;
  uploadDate?: string;
  accessDate: string;
  title?: string;
  timestamp?: string;
}

export interface CitationOutput {
  inText: string;
  reference: string;
}

export function generateApaCitation(input: CitationInput): CitationOutput {
  const url = input.youtubeUrl
    ? input.youtubeUrl
    : input.videoId
    ? `https://www.youtube.com/watch?v=${input.videoId}`
    : '';
  const meta: { title?: string; channel?: string; uploadDate?: string } = {};
  const author = input.author || meta.channel || 'Unknown';
  const dateString = input.uploadDate || meta.uploadDate;
  const formattedDate = formatDate(dateString);
  const year = getYear(dateString);
  const rawTitle = input.title || meta.title || '';
  const title = toSentenceCase(rawTitle);
  const dateDisplay = formattedDate ? `(${formattedDate})` : '(n.d.)';
  const reference = `${author}. ${dateDisplay}. ${title} [Video]. YouTube. ${url}`.trim();
  const inText = `(${author}, ${year}${input.timestamp ? `, ${input.timestamp}` : ''})`;
  return { inText, reference };
}

export async function fetchVideoMeta(_videoId: string): Promise<{
  title?: string;
  channel?: string;
  uploadDate?: string;
}> {
  try {
    return {};
  } catch (err) {
    console.error('fetchVideoMeta failed', err);
    return {};
  }
}