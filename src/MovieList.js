import MovieCard from "./MovieCard";

function MovieList(props) {
  // const{title,plot,price,rating,starscount,fav,cart}=this.state;
  const { movies, addStars, removeStars, toogleCart, toogleFav } = props;
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          movies={movie}
          addStars={addStars}
          removeStars={removeStars}
          toogleFav={toogleFav}
          toogleCart={toogleCart}
          key={movie.id}
        />
      ))}
    </>
  );
}

export default MovieList;
