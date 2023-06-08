'use client';

import GlobalStyle from '@/components/global/GlobalStyle';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
