import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  &:hover {
    background: linear-gradient(170deg, #0d47a1, #1bc059);
  }
`;
const Title = styled.div`
  font-size: 30px;
  color: #0d47a1;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  tect-transform: uppercase;
  margin-left: 20px;
  margin-top: 20px;
  &:hover {
    color: #1bc059;
  }
`;

const CartContainer = styled.div`
  position: relative;
  curser: pointer;
`;

const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
  margin-top: 10px;
`;

const CartCount = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 12px;
`;

function Navbar(props) {
  const { cartCount } = props;

  return (
    <>
      <Nav>
        <Title>MOVIE-APP</Title>

        <CartContainer>
          <CartIcon
            alt="cart icon"
            src="https://cdn-icons-png.flaticon.com/256/3144/3144456.png"
          />
          <CartCount color="red">{cartCount}</CartCount>
        </CartContainer>
      </Nav>
    </>
  );
}

export default Navbar;
