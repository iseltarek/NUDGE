import { Geist_Mono, Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-ibm-plex-sans-arabic',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  display: 'swap',
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function getFontVariables(locale: string = 'en'): string {
  if (locale === 'ar') {
    // Apply both classNames so CSS variables are available, CSS will choose which to use
    return `${ibmPlexSansArabic.className} ${plusJakartaSans.className}`;
  }
  return `${plusJakartaSans.className}`;
}

export const fontVariables = `${plusJakartaSans.className}`;
