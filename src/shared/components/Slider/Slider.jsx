import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Icon from '../Icon/Icon';
import css from './Slider.module.css';
import { useRef, useState } from 'react';

export default function Slider({ data, component: Component }) {
  const swiperRef = useRef(null);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const updateNavigation = (swiper) => {
    setIsPrevDisabled(swiper.isBeginning || swiper.isLocked);
    setIsNextDisabled(swiper.isEnd || swiper.isLocked);
  };

  return (
    <Swiper
      grabCursor
      slidesPerView={1.1}
      spaceBetween={16}
      breakpoints={{
        744: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      watchOverflow
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        updateNavigation(swiper);
      }}
      onSlideChange={updateNavigation}
      onUpdate={updateNavigation}
      onLock={updateNavigation}
      onUnlock={updateNavigation}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Component {...item} />
        </SwiperSlide>
      ))}
      <div className={css.controls}>
        <button
          type="button"
          className={css.arrow}
          disabled={isPrevDisabled}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          <Icon id="i-arrow-left" width={24} height={24} aria-hidden="true" />
        </button>

        <button
          type="button"
          className={css.arrow}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
          disabled={isNextDisabled}
        >
          <Icon id="i-arrow-right" width={24} height={24} />
        </button>
      </div>
    </Swiper>
  );
}
