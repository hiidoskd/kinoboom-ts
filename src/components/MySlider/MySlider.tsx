import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Mousewheel } from 'swiper';
import styles from './MySlider.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';

import { IFilters, getMoviesByFilters } from '../../api/kinoboomApi';
import MovieCard from '../MovieCard/MovieCard';

interface MySliderProps {
  title: string;
  filters: IFilters;
}

const MySlider = ({ filters, title }: MySliderProps) => {
  const { data, isLoading } = useSWR([filters, 1, ''], getMoviesByFilters, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  if (isLoading || data == undefined) return null;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.mySwiper}>
        <Swiper
          modules={[Navigation, FreeMode, Mousewheel]}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1.2,
            releaseOnEdges: true,
          }}
          freeMode={{
            enabled: true,
            sticky: true,
            momentumBounceRatio: 1,
            momentumRatio: 1,
          }}
          navigation={{
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
            disabledClass: styles.disabledSwiperButton,
          }}
          direction="horizontal"
          grabCursor={true}
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 10,
              navigation: {
                enabled: false,
              },
            },
            480: {
              slidesPerView: 2.4,
              spaceBetween: 10,
              navigation: {
                enabled: false,
              },
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 15,
              navigation: {
                enabled: false,
              },
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5.6,
              spaceBetween: 20,
            },
          }}
        >
          {data.items.map((item: any) => (
            <SwiperSlide key={item.kinopoiskId}>
              <MovieCard
                id={item.kinopoiskId}
                title={item.nameRu ? item.nameRu : item.nameOriginal}
                rating={item.ratingKinopoisk ? item.ratingKinopoisk : item.ratingImdb}
                type={item.type}
                url={item.posterUrlPreview}
                genres={item.genres}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MySlider;
