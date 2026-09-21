const BOT_RE = /bot|crawl|spider|slurp|mediapartners|facebookexternalhit|preview|headless|wget|curl\/|python-requests/i;

export function isBotUserAgent(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  return BOT_RE.test(userAgent);
}
