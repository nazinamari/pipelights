import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider({ data, component: Component }) {
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
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Component {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
