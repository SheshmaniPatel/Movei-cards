import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Avatar",
      plot: "Totally icredeble 3D moveie ever , fun , journey , VFX .Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity",
      price: 399,
      rating: 8.9,
      starscount: 0,
    };
  }
  Decrease = () => {
    if(this.state.starscount<=0){
      return
    }
    this.setState((prevState)=>{
      return{
        starscount:prevState.starscount-0.5
      }
    })
  };
  Increase = () => {
    if(this.state.starscount>=5){
      return
    }
    this.setState((prevState)=>{
      return{
        starscount:prevState.starscount+0.5
      }
    })
  };

  render() {
    const { title, plot, price, rating, starscount } = this.state;
    return (
      <div className="main">
        {/**Movie Card */}
        <div className="movie-card">
          {/**Left section of Movie Card */}
          <div className="left">
            <img
              alt="poster"
              src="https://posterspy.com/wp-content/uploads/2022/01/Avatar-The-Way-Of-Water.jpg"
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
                  onClick={this.Decrease}
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
                  onClick={this.Increase}
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                />
                <span className="starCount"> {starscount}</span>
              </div>

              {/**Favourite and add to cart buttons */}
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
