import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.scss';

import Layout from '@/components/organisms/Layout';
import WelcomeAnimation from '@/components/organisms/WelcomeAnimation';

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
        <WelcomeAnimation />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
