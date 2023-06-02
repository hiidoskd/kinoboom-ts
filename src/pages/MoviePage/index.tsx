import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { getMovieById } from '../../api/kinoboomApi';
import styles from './index.module.scss';

import { useNavigate } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo';

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useSWR(id, getMovieById, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <div className={styles.poster}>
              <img src={data.posterUrl} alt="poster" width="300" />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.mainInfo}>
              <div className={styles.infoLeft}>
                <h1>
                  {data.nameRu} ({data.year})
                </h1>
                <h2>{data.nameOriginal}</h2>
                <p>{data.description}</p>
                <div className={styles.buttonGroup}>
                  <button onClick={() => navigate(`/room/${id}`)}>
                    Смотреть
                  </button>
                  <button>Буду смотреть</button>
                  <button>...</button>
                </div>
                <MovieInfo movie={data} />
              </div>
              <div className={styles.infoRight}></div>
            </div>
          </div>
        </div>
        <div className={styles.tabs}></div>
      </div>
    </div>
  );
};

export default MoviePage;
