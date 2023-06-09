import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation } from 'swiper';
import { featuredHousesList } from '@/data/featuredHousesList';
import FeaturedSliderCard from './FeaturedSliderCard';

const FeaturedSlider: FC = () => {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true}
      navigation={{ nextEl: '#swiper-next', prevEl: '#swiper-prev' }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {featuredHousesList.map((house) => (
        <SwiperSlide key={house.id}>
          <FeaturedSliderCard
            title={house.title}
            imgHouse={house.imgHouse}
            imgOwner={house.imgOwner}
            price={house.price}
            city={house.city}
            owner={house.owner}
            status={house.status}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedSlider;
