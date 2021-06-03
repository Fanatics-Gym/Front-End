import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: black;
  height: 100vh;
  text-align: left;
  padding: 5rem 1rem;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  transform: ${({ open }) => (open ? "translateX(16%)" : "translateX(116%)")};

  @media (max-width: 768px) {
    width: 45%;
  }

  a {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      padding: 0.7rem 0;
      font-size: 1.25rem;
      text-align: center;
    }

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;
