import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0px 10rem;
  color: white;
  @media (max-width: 768px) {
    padding: 0px 2rem;
  }

  img {
    background-color: transparent;
    width: 200px;
    filter: brightness(0) invert(1);
    position: absolute;
    top: 0;
    left: 0;
    left: 10px;
  }
`;

export const Main = styled.div`
  width: 90%;
  min-height: 20rem;
  background-color: transparent;
  flex-direction: column;
  display: flex;
  font-size: 24px;
  color:black;
  border-radius: 10px;
  div{
    display: flex;
  }

  @media (max-width: 768px) {
    min-height: 50rem;
    width: 100%;
      }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;
`;
