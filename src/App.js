import React from "react";
import MovieList from "./MovieList";
import Navbar from "./navbar";
import { movies } from "./moviesdata";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
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
    let { movies ,cartCount} = this.state;
    const movieid = movies.indexOf(movie);
    movies[movieid].cart = !movies[movieid].cart;


    if(movies[movieid].cart){
      cartCount=cartCount+1;

    }else{
      cartCount -=1;
    }
    this.setState({
      movies,
      cartCount
    });
     
  };
  render() {
    const { movies ,cartCount} = this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          removeStars={this.handleDecStar}
          toogleFav={this.handleToggleFav}
          toogleCart={this.handleToggleCart}
          // key={movie.id}
        />
      </>
    );
  }
}
export default App;
