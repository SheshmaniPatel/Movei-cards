import MovieCard from "./MovieCard";
import React from "react";
import {movies} from "./moviesdata"

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;

    const movieid = movies.indexOf(movie);

    if (movies[movieid].starscount >= 5) {
      return;
    }
    movies[movieid].starscount += 0.5;

    this.setState({
      movies: movies,
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;

    const movieid = movies.indexOf(movie);

    if (movies[movieid].starscount <= 0) {
      return;
    }
    movies[movieid].starscount -= 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieid = movies.indexOf(movie);
    movies[movieid].fav = !movies[movieid].fav;

    this.setState({
      movies,
    });
  };
  handleToggleCart = (movie) => {
    const { movies } = this.state;
    const movieid = movies.indexOf(movie);
    movies[movieid].cart = !movies[movieid].cart;

    this.setState({
      movies,
    });
  };

  render() {
    // const{title,plot,price,rating,starscount,fav,cart}=this.state;
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={this.handleIncStar}
            removeStars={this.handleDecStar}
            toogleFav={this.handleToggleFav}
            toogleCart={this.handleToggleCart}
            key={movie.id}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
