import { IFilters } from '../../api/kinoboomApi';
import MySlider from '../../components/MySlider/MySlider';

const filters: IFilters = {
  ratingFrom: 0,
  ratingTo: 10,
  yearFrom: 2021,
  yearTo: 2023,
  order: 'NUM_VOTE',
  type: 'ALL',
};

const Home = () => {
  // console.log(movielist);

  // const { data: movie, isLoading } = useSWR('111543', getMovieById);
  // if (isLoading) return <h1>Loading...</h1>;
  // console.log(movie?.docs[0]);
  // const props = movie?.docs[0];

  return (
    <div>
      <MySlider
        title="Популярно сейчас"
        filters={{ ...filters, yearFrom: 2022 }}
      />
      <MySlider
        title="Популярные фильмы"
        filters={{ ...filters, yearFrom: 2000 }}
      />
      <MySlider
        title="Популярные сериалы"
        filters={{ ...filters, yearFrom: 2000, type: 'TV_SERIES' }}
      />
    </div>
  );
};

export default Home;
