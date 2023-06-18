import React from "react";

class MovieCard extends React.Component {
 
     render() {
    const { title, plot, price, rating,poster, starscount, fav, cart } = this.props.movies;
    const{movies,addStars,removeStars}=this.props;
    return (
      <div className="main">
        {/**Movie Card */}
        <div className="movie-card">
          {/**Left section of Movie Card */}
          <div className="left">
            <img
              alt="poster"
              src={poster}
            />
          </div>

          {/**Right section Movie Card */}
          <div className="right">
            {/**Title, plot, price of the movie */}
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>

            {/**Footer starts here with ratings, stars and buttons */}
            <div className="footer">
              <div className="rating"> {rating}</div>

              {/**Star image with increase and decrease buttons and star count */}
              <div className="star-dis">
                <img
                  onClick={()=>{ removeStars( movies)}}
                  className="str-btn"
                  alt="Decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                />
                <img
                  className="stars"
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                />
                <img
                  onClick={()=>{ addStars( movies)}}
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                />
                <span className="starCount"> {starscount}</span>
              </div>

              {/**Favourite and add to cart buttons */}
              {fav ? (
                <button className="unfavourite-btn" onClick={this.handlefav}>
                  Un-favourite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handlefav}>
                  Favourite
                </button>
              )}

              <button
                className={cart ? "cart-btn" : "remove-cart"}
                onClick={this.handlecart}
              >
                {cart ? "Add to cart" : "Remove from cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
