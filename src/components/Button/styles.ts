import styled from "styled-components";
import px2vw from "../../utils/px2vw";


export const StylesButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 10rem;
  height: 3rem;
  margin: 1rem;
  border: .25rem solid rgba(255, 255, 255, 1);
  font-size:1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

  span {
    position: relative;
    color: transparent;
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    transform-origin: 100% 0;
    transform: scale3d(0, 1, 1);
    transition: transform 300ms;
  }

  &:hover {
    .text {
      background-position: 0 0;
    }

    &::before {
      transform-origin: 0 0;
      transform: scale3d(1, 1, 1);
    }
  }
`;
