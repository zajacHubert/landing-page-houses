'use client';

import GlobalStyle from '@/components/global/GlobalStyle';
import FeaturedSection from '@/components/sections/FeaturedSection';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <main>
        <HeroSection />
        <FeaturedSection />
      </main>
    </>
  );
}
