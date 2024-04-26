import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.scss';

import ClientLayout from '@/components/organisms/ClientLayout';
import { AppContextProvider } from '@/context/app.context';

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
  description: 'The official landing page, built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neueHaasGrotesk.className}>
        <link rel="icon" href="/images/icon.png" sizes="any" />
        <AppContextProvider>
          <ClientLayout>{children}</ClientLayout>
        </AppContextProvider>
      </body>
    </html>
  );
}
