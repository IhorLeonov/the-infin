import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.scss';

import ClientLayout from '@/components/organisms/ClientLayout';

const neueHaasGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplayRoman.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayMedium.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-neue-haas-grotesk',
});

export const metadata: Metadata = {
  title: 'The Infin',
  description: 'The Infin landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neueHaasGrotesk.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
