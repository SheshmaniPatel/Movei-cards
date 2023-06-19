import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div style={styles.nav}>
          <div style={styles.title}>
            <h1>MOVIE-APP</h1>
          </div>
          <div style={styles.cartContainer}>
            <img
              style={styles.cartIcon}
              alt="cart icon"
              src="https://cdn-icons-png.flaticon.com/256/3144/3144456.png"
            />
            <span style={styles.cartCount}>3</span>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  nav: {
    width: "100",
    height: 70,
    background: "blue",
    display: "flex",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 550,
    fontFamily: " 'Courier New', Courier, monospace",
    tectTransform: "uppercase",
    marginLeft: 20,
    marginTop: -10,
  },
  cartContainer: {
    position: "relative",
    curser: "pointer",
  },
  cartIcon: {
    height: 48,
    marginRight: 20,
    marginTop: 10,
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: 5,
    fontSize: 12,
  },
};
export default Navbar;
