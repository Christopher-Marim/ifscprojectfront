import React from "react";
import { Button } from "../../components/Button/button";

import image from '../../assets/logo.png'

import { Container, Main, Wrapper } from "./styles";

export function App() {
  return (
    <Container>
      <img src={image} alt="Logo" />
      <Wrapper>
        <Button name="Busca em largura" />
        <Button name="Busca em Profundidade" />
        <Button name="Busca em A*" />
        <Button name="Busca em A*" />
        <Button name="Busca em A*" />
      </Wrapper>
      <Main>Tabela fica aqui</Main>
      <Button name="Buscar" />
    </Container>
  );
}


