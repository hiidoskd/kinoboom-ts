import React from 'react';
import useSWR from 'swr';
import {
  getMovieById,
  getMoviesByFilters,
  IFilters,
} from '../../api/kinoboomApi';
import Button from '../../components/ui/Button';
import MovieCard from '../../components/MovieCard';

const Home = () => {
  const filters: IFilters = {
    genre: '',
    ratings: '1-10',
    years: '1960-2023',
    sortByRelease: -1,
  };
  // const { data: movielist } = useSWR(
  //   [filters, 1, 'человек паук'],
  //   getMoviesByFilters
  // );
  // console.log(movielist);

  const { data: movie, isLoading } = useSWR('111543', getMovieById);
  if (isLoading) return <h1>Loading...</h1>;
  console.log(movie.docs[0]);
  const props = movie.docs[0];
  return (
    <div>
      {/* <img src={movie.poster.previewUrl} /> */}
      <MovieCard
        id={props.id}
        url={props.poster.previewUrl}
        title={props.name}
        type={props.type}
        rating={props.rating.imdb}
        genres={props.genres}
      />
    </div>
  );
};

export default Home;
