import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  height: 100vh;
  text-align: left;
  padding: 3rem;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  transform: ${({ open }) => (open ? "translateX(16%)" : "translateX(116%)")};

  @media (max-width: 768px) {
    width: 45%;
  }

  a {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;
