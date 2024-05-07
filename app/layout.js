import { Open_Sans } from 'next/font/google';
import './globals.css';
import SessionWrapper from '@/app/ui/session-wrapper';
import ThemeWrapper from '@/app/ui/theme-wrapper';
import AppNavbar from '@/app/ui/navbar';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Kinetic',
  description: 'Strava analytics app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <ThemeWrapper>
          <main className="flex min-h-screen flex-col items-start bg-slate-700 bg-strava bg-left-bottom bg-no-repeat pb-20">
            <SessionWrapper>
              <AppNavbar />
              {children}
            </SessionWrapper>
          </main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
