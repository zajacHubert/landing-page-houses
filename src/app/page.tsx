'use client';

import GlobalStyle from '@/components/global/GlobalStyle';
import FeaturedSection from '@/components/sections/FeaturedSection';
import HeroSection from '@/components/sections/HeroSection';
import ReviewSection from '@/components/sections/ReviewSection';
import SellSection from '@/components/sections/SellSection';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <main>
        <HeroSection />
        <FeaturedSection />
        <SellSection />
        <ReviewSection />
      </main>
    </>
  );
}
