import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
  color: white;
  @media (max-width: 768px) {
    padding: 5rem;
  }

  img {
    background-color: transparent;
    width: 200px;
    filter: brightness(0) invert(1);
    position: relative;
    top: 0;
    left: 10px;
    z-index: 1;
  }
`;

export const Main = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color:black;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;
