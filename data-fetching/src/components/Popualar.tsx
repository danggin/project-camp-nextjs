import MovieCard from './MovieCard';

const getPopularMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWRhNTczZDk3NTc2ZDUxNGM3NTYyZjNjMjI3NzgxYiIsInN1YiI6IjY1N2MxMjQwZTkzZTk1MjE4ZjZkMjM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HkyRzjy-li0pLAqbjEVApq9hBDG6TlLdtJ56YuttHeU',
    },
  };

  return await (await fetch(url, options)).json();
};

export default async function Popular() {
  const { results } = await getPopularMovies();
  return (
    <>
      <article className='bg-black py-10 px-4 xs:px-0'>
        <section className='container mx-auto py-8 text-white'>
          <span className='text-yellow-600'>ONLINE STREAMING</span>
          <h2 className='text-[36px] font-bold mb-8'>Movie LIST</h2>
          <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0'>
            {results &&
              results.map((movie: any) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
          </div>
        </section>
      </article>
    </>
  );
}
