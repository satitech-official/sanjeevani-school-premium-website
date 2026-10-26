import localFont from 'next/font/local';
import './globals.css';
const devanagari = localFont({
  src: [
    { path: './fonts/devanagari-regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/devanagari-semibold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-devanagari',
  display: 'swap',
});

export const metadata = { title: 'Sanjeevani Higher Secondary School | Betul', description: 'Education, discipline and values since 1999. Explore Sanjeevani Higher Secondary School in Sadar, Betul. Nursery to Class 12; Hindi and English medium.' };
export default function RootLayout({ children }) { return <html lang="en"><body className={devanagari.variable}>{children}</body></html>; }
