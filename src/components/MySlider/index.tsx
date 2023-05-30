import React from 'react';
import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import { IFilters, getMoviesByFilters } from '../../api/kinoboomApi';
import MovieCard from '../MovieCard';

interface MySliderProps {
  title: string;
  filters: IFilters;
}

const MySlider = ({ filters, title }: MySliderProps) => {
  const { data, isLoading } = useSWR([filters, 1, ''], getMoviesByFilters);
  if (isLoading) return null;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.mySwiper}>
        <Swiper
          modules={[Navigation]}
          navigation
          direction="horizontal"
          grabCursor={true}
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {data.items.map((item) => (
            <SwiperSlide>
              <MovieCard
                id={item.kinopoiskId}
                title={item.nameRu ? item.nameRu : item.nameOriginal}
                rating={
                  item.ratingKinopoisk ? item.ratingKinopoisk : item.ratingImdb
                }
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
