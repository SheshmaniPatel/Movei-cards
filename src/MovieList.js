import MovieCard from "./MovieCard";
import React from "react";


class MovieList extends React.Component {
  render() {
    // const{title,plot,price,rating,starscount,fav,cart}=this.state;
    const { movies ,addStars,removeStars,toogleCart,toogleFav} = this.props;
    return (
      <>
        {movies.map((movie) => 
          <MovieCard
            movies={movie}
            addStars={addStars}
            removeStars={removeStars}
            toogleFav={toogleFav}
            toogleCart={toogleCart}
            key={movie.id}
          />
        )}
      </>
    );
  }
}

export default MovieList;
