import React from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
interface MovieCardProps {
  id: number;
  title: string;
  rating: number;
  type: 'movie' | 'series';
  url: string;
  genres: { name: string }[];
}

const MovieCard = ({ id, title, rating, type, url }: MovieCardProps) => {
  return (
    <Link to="/">
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <img src={url} />
        </div>
        <div className={styles.info}>
          <h3>{title}</h3>
          <span>{rating}</span>
          <span>{type}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
