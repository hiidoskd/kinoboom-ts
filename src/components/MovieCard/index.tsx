import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Subtitle from '../ui/Subtitle';
import { StarFilledIcon } from '@radix-ui/react-icons';
interface MovieCardProps {
  id: number;
  title: string;
  rating: number;
  type: 'movie' | 'series';
  url: string;
  genres: { genre: string }[];
}

const MovieCard = ({
  id,
  title,
  rating,
  type,
  url,
  genres,
}: MovieCardProps) => {
  if (!rating) rating = 0;
  return (
    <Link to={`movies/${id}`}>
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <img src={url} />
        </div>
        <div className={styles.info}>
          <h2>{title}</h2>
          <div className={styles.description}>
            <StarFilledIcon className={styles.star} />
            <span className={styles.rating}>{rating?.toFixed(1)} </span>
            <Subtitle>
              | {type == 'movie' ? 'Фильм' : 'Сериал'} • {genres[0].genre}
            </Subtitle>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
