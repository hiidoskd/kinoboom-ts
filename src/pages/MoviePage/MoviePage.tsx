import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { getMovieById } from '../../api/kinoboomApi';
import styles from './MoviePage.module.scss';

import { useNavigate } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import Button from '../../components/ui/Button/Button';

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
              <img src={data.posterUrl} alt="poster" />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.mainInfo}>
              <div className={styles.infoLeft}>
                <h1>
                  {data.nameRu} ({data.year})
                </h1>
                <h2>{data.nameOriginal}</h2>
                <p>
                  {data.shortDescription
                    ? data.shortDescription
                    : data.description}
                </p>
                <div className={styles.buttonGroup}>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/room/${id}`)}
                  >
                    Смотреть
                  </Button>
                  <Button variant="secondary">Буду смотреть</Button>
                </div>
                <MovieInfo movie={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
