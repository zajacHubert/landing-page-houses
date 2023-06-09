'use client';

import Footer from '@/components/footer/Footer';
import GlobalStyle from '@/components/global/GlobalStyle';
import FeaturedSection from '@/components/sections/FeaturedSection';
import Header from '@/components/sections/Header';
import ReviewSection from '@/components/sections/ReviewSection';
import SellSection from '@/components/sections/SellSection';
import SubscriptionSection from '@/components/sections/SubscriptionSection';
import TipsSection from '@/components/sections/TipsSection';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <FeaturedSection />
        <SellSection />
        <ReviewSection />
        <TipsSection />
        <SubscriptionSection />
      </main>
      <Footer />
    </>
  );
}
