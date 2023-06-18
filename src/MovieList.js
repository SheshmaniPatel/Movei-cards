import MovieCard from "./MovieCard";
import React from "react";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "Avatar",
          plot: "Totally icredeble 3D moveie ever , fun , journey , VFX .",
          price: 399,
          poster:
            "https://posterspy.com/wp-content/uploads/2022/01/Avatar-The-Way-Of-Water.jpg",
          rating: 8.9,
          starscount: 0,
          fav: false,
          cart: false,
        },
        {
          title: "Avengers",
          plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity",
          price: 299,
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: 7.9,
          starscount: 0,
          fav: false,
          cart: false,
        },
        {
          title: "Thor the dark world",
          plot: "A hero who have the power of strength,stamina, fly with lightspeed,and sharp mind",
          price: 249,
          poster:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoBFZLxv9of2RVjqLT6NwiFkjgrnDbrmT5ERTAU0&s ",
          rating: 8.9,
          starscount: 0,
          fav: false,
          cart: false,
        },
      ],
    };
  }

  handleIncStar = (movie) =>{
    const {movies}=this.state;

    const movieid=movies.indexOf(movie);

    if(movies[movieid].starscount>=5){
        return
    }
    movies[movieid].starscount +=0.5;

    this.setState({
        movies:movies
    })
  }
  handleDecStar = (movie) =>{
    const {movies}=this.state;

    const movieid=movies.indexOf(movie);

    if(movies[movieid].starscount<=0){
        return
    }
    movies[movieid].starscount -=0.5;

    this.setState({
        movies:movies
    })
  }

  render() {
    // const{title,plot,price,rating,starscount,fav,cart}=this.state;
    const {movies}=this.state;
    return (
      <>
    {movies.map((movie)=><MovieCard movies={movie } addStars={this.handleIncStar} removeStars={this.handleDecStar} />)}
        
      </>
    );
  }
}

export default MovieList;
