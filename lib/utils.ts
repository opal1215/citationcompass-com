export function toSentenceCase(input: string): string {
  if (!input) return '';
  const trimmed = input.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getYear(dateString?: string): string {
  if (!dateString) return 'n.d.';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'n.d.';
  return String(date.getFullYear());
}