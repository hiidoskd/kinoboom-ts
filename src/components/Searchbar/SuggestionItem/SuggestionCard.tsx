import styles from './SuggestionCard.module.scss';
import Subtitle from '../../ui/Subtitle/Subtitle';
import { Link } from 'react-router-dom';

type SuggestionCardProps = {
  url: string;
  title: string;
  year: number;
  alternativeTitle: string;
  rating: number | 'null';
  id: number;
};

export const SuggestionCard = ({
  url,
  title,
  year,
  alternativeTitle,
  rating,
  id,
}: SuggestionCardProps) => {
  return (
    <div className={styles.container}>
      <Link to={`/movies/${id}`} className={styles.linkOverlay}></Link>
      <div className={styles.imgContainer}>
        <img src={url} />
      </div>
      <div className={styles.info}>
        <h1>
          {title} ({year})
        </h1>
        <Subtitle>
          {alternativeTitle} {rating === 'null' ? '0.0' : (+rating).toFixed(1)}
        </Subtitle>
      </div>
    </div>
  );
};
