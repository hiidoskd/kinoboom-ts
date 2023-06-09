import useSWR from 'swr';
import { SuggestionCard } from '../SuggestionItem/SuggestionCard';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { getMovieByKeyword } from '../../../api/kinoboomApi';

import styles from './SuggestionList.module.scss';

const SuggestionList = ({ keyword }: { keyword: string }) => {
  const { data, isLoading } = useSWR(keyword, getMovieByKeyword, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <div className={`${styles.suggestions} ${keyword ? styles.show : ''}`}>
      {!isLoading ? (
        data.films.map((item: any) => (
          <SuggestionCard
            key={item.filmId}
            title={item.nameRu}
            alternativeTitle={item.nameEn}
            url={item.posterUrlPreview}
            rating={item.rating}
            year={item.year}
            id={item.filmId}
          />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default SuggestionList;
