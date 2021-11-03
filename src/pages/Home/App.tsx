import React from "react";
import { Button } from "../../components/Button/button";

import image from "../../assets/logo.png";

import { Container, Main, Wrapper } from "./styles";
import { Prateleira } from "../../components/Prateleira/prateleira";

export function App() {
  const board = [
    ['', '', '', '','', '', '', '','', '', '', '','', '', ''],
    [1, '', 11, 21, '', 31,41,'',51,61,'',71,81,'',91],
    [2, '', 12, 22, '', 32,42,'',52,62,'',72,82,'',92],
    [3, '', 13, 23, '', 33,43,'',53,63,'',73,83,'',93],
    [4, '', 14, 24, '', 34,44,'',54,64,'',74,84,'',94],
    [5, '', 15, 25, '', 35,45,'',55,65,'',75,85,'',95],
    [6, '', 16, 26, '', 36,46,'',56,66,'',76,86,'',96],
    [7, '', 17, 27, '', 37,47,'',57,67,'',77,87,'',97],
    [8, '', 18, 28, '', 38,48,'',58,68,'',78,88,'',98],
    [9, '', 19, 29, '', 39,49,'',59,69,'',79,89,'',99],
    [10, '', 20, 30, '', 40,50,'',60,70,'',80,90,'',100],
    ['', '', '', '','', '', '', '','', '', '', '','', '', 'X'],
    ['R1', 'R2', 'R3', 'R4','R5'],

  ];

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
      <Main>
        {board.map((row, i) => (
          <div key={i}>
            {row.map((col, j) => (
              <Prateleira key={j} name={String(col)} linha={String(i+1)} coluna={String(j+1)} />
            ))}
          </div>
        ))}
      </Main>
      <Button name="Buscar" />
    </Container>
  );
}
