import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const StylesButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 4rem;
  height: 2rem;
  margin: 0.2rem;
  border: 0.15rem solid rgba(255, 255, 255, 1);
  font-size: 1.5rem;
  border-color: ${(props) => (props.color ? "#7bdc78" : "white")};
  color: ${(props) => (props.color ? "#7bdc78" : "white")};
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: ${px2vw(18)};
    padding: 10px;
  }

  @media (max-width: 768px) {
    height: 4rem;
  }

  span {
    position: relative;
    color: ${(props) => (props.color ? "#7bdc78" : "transparent")};
    background-image: linear-gradient(
      90deg,
      #7bdc78 0%,
      #7bdc78 50%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    background-repeat: repeat;
    background-size: 200%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    background-clip: text;
    transition: background-position 300ms;
  }

  &:hover {
    .text {
      background-position: 0 0;
    }
  }
`;
