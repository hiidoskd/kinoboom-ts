import { Fragment } from 'react';
import styles from './index.module.scss';

const MovieInfo = ({ movie }: any) => {
  return (
    <div className={styles.info}>
      <h3>О фильме</h3>
      <table>
        <tr className={styles.row}>
          <td className={styles.rowItem}>Год производства</td>
          <td className={styles.rowItem}>{movie.year}</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.rowItem}>Страна</td>
          <td className={styles.rowItem}>
            {movie.countries.map(
              (country: { country: string }, idx: number) => (
                <Fragment key={country.country}>
                  {idx ? ', ' : ''}
                  {country.country}
                </Fragment>
              )
            )}
          </td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.rowItem}>Жанр</td>
          <td className={styles.rowItem}>
            {movie.genres.map((genre: { genre: string }, idx: number) => (
              <Fragment key={genre.genre}>
                {idx ? ', ' : ''}
                {genre.genre}
              </Fragment>
            ))}
          </td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.rowItem}>Слоган</td>
          <td className={styles.rowItem}>{movie.slogan}</td>
        </tr>
        {/* <div className={styles.row}>
        <div className={styles.rowItem}>Сборы</div>
        <div className={styles.rowItem}>
          {movie.fees.world.currency}
          {movie.fees.world.value}
        </div>
      </div> */}
        <tr className={styles.row}>
          <td className={styles.rowItem}>Дата премьеры</td>
          <td className={styles.rowItem}>{movie.year}</td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.rowItem}>Рейтинг</td>
          <td className={styles.rowItem}>
            {movie.ratingAgeLimits ? movie.ratingAgeLimits : 0}+
          </td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.rowItem}>Длительность</td>
          <td className={styles.rowItem}>{movie.filmLength} минут</td>
        </tr>
      </table>
    </div>
  );
};

export default MovieInfo;
