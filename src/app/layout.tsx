import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/theme/ThemeContext';

export const metadata = {
  title: 'MUI Playground',
  description: 'Your component lab',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ ThemeProvider เป็น client component ด้านใน */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
