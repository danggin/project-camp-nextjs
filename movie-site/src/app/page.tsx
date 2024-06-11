import Header from '@/components/Header';
import Banner from '@/components/Banner';
import MovieArea from '@/components/MovieArea';

const getMovies = async (type: string) => {
  const data = await (
    await fetch('http://localhost:3000/api/movies?type=' + type)
  ).json();
  return data;
};

// window의 끝점 찾기

export default async function Home() {
  // const popular = await getMovies("popular");
  // const top_rated = await getMovies("top_rated");
  // const upcoming = await getMovies("upcoming");
  // const now_playing = await getMovies("now_playing");

  const { results: popular } = await getMovies('popular');

  return (
    <>
      <Header />
      <Banner />
      <MovieArea title={'POPULAR'} movies={popular} />
    </>
  );
}
