import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { opinionsList } from '@/data/opinionsList';
import ReviewSliderCard from './RevievSliderCard';
import { renderToString } from 'react-dom/server';
import 'swiper/swiper.min.css';
import { StyledBullet } from './ReviewSliderCard.css';

const ReviewSlider: FC = () => {
  const renderBullet = (index: number, className: string) => {
    const bulletHTML = renderToString(<StyledBullet />);
    return `<span class="${className}">${bulletHTML}</span>`;
  };
  return (
    <Swiper
      loop={true}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true, renderBullet }}
      centeredSlides={true}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
      slidesPerView={1}
      spaceBetween={100}
    >
      {opinionsList.map((opinion) => (
        <SwiperSlide key={opinion.id}>
          <ReviewSliderCard
            author={opinion.author}
            imgHouse={opinion.imgHouse}
            imgPerson={opinion.imgPerson}
            occupation={opinion.occupation}
            rate={opinion.rate}
            text={opinion.text}
            title={opinion.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
