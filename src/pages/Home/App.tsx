import { useState } from "react";
import { Button } from "../../components/Button/button";
import { Container, Main, Wrapper } from "./styles";
import { Prateleira } from "../../components/Prateleira/prateleira";
import api from "../../service/api";
import image from "../../assets/logo.png";

interface rotaProps {
  linha: number;
  coluna: number;
}
interface Coord {
  linha: string;
  coluna: string;
}
interface responseRota {
  x: number;
  y: number;
}

export function App() {
  const [currentSearch, setCurrentSearch] = useState<string>();
  const [currentShelf, setCurrentShelf] = useState<Coord>();

  const boardAux = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    [
      "1",
      "",
      "11",
      "21",
      "",
      "31",
      "41",
      "",
      "51",
      "61",
      "",
      "71",
      "81",
      "",
      "91",
    ],
    [
      "2",
      "",
      "12",
      "22",
      "",
      "32",
      "42",
      "",
      "52",
      "62",
      "",
      "72",
      "82",
      "",
      "92",
    ],
    [
      "3",
      "",
      "13",
      "23",
      "",
      "33",
      "43",
      "",
      "53",
      "63",
      "",
      "73",
      "83",
      "",
      "93",
    ],
    [
      "4",
      "",
      "14",
      "24",
      "",
      "34",
      "44",
      "",
      "54",
      "64",
      "",
      "74",
      "84",
      "",
      "94",
    ],
    [
      "5",
      "",
      "15",
      "25",
      "",
      "35",
      "45",
      "",
      "55",
      "65",
      "",
      "75",
      "85",
      "",
      "95",
    ],
    [
      "6",
      "",
      "16",
      "26",
      "",
      "36",
      "46",
      "",
      "56",
      "66",
      "",
      "76",
      "86",
      "",
      "96",
    ],
    [
      "7",
      "",
      "17",
      "27",
      "",
      "37",
      "47",
      "",
      "57",
      "67",
      "",
      "77",
      "87",
      "",
      "97",
    ],
    [
      "8",
      "",
      "18",
      "28",
      "",
      "38",
      "48",
      "",
      "58",
      "68",
      "",
      "78",
      "88",
      "",
      "98",
    ],
    [
      "9",
      "",
      "19",
      "29",
      "",
      "39",
      "49",
      "",
      "59",
      "69",
      "",
      "79",
      "89",
      "",
      "99",
    ],
    [
      "10",
      "",
      "20",
      "30",
      "",
      "40",
      "50",
      "",
      "60",
      "70",
      "",
      "80",
      "90",
      "",
      "100",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "X"],
    ["R1", "R2", "R3", "R4", "R5"],
  ];

  const [board, setBoard] = useState(boardAux);

  async function getByApi() {
    if (currentShelf && currentSearch) {
      const json = JSON.stringify({
        shelf_x: parseInt(currentShelf?.linha),
        shelf_y: parseInt(currentShelf?.coluna),
        search_algorithm: parseInt(currentSearch),
      });
      console.log(json);
      try {
        const { data } = await api.post(`/api`, json, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        console.log(data);
        const rotaResponse = data.search_path.map((item: responseRota) => {
          const json = { linha: item.x, coluna: item.y };
          return json;
        });

        let roboResponse = data.robot;
        console.log(rotaResponse);

        if (roboResponse == 1) {
          roboResponse = "R1";
        }
        if (roboResponse == 2) {
          roboResponse = "R2";
        }
        if (roboResponse == 3) {
          roboResponse = "R3";
        }
        if (roboResponse == 4) {
          roboResponse = "R4";
        }
        if (roboResponse == 5) {
          roboResponse = "R5";
        }
       // moveRobot(rotaResponse, roboResponse);
      } catch (error) {
        console.error(error);
      }
    }
  }

  const timer = (ms: any) => new Promise((res) => setTimeout(res, ms));

  async function moveRobot() {
    let robo= 'R5'
    let roboAux = robo;
    let boardAux = board;

     let rota = [
      {linha:12, coluna: 4},
      {linha:11, coluna: 4},
      {linha:10, coluna: 4},
      {linha:9, coluna: 4},
      {linha:8, coluna: 3},
      {linha:8, coluna: 4},
      {linha:9, coluna: 4},
      {linha:10, coluna: 4},
      {linha:11, coluna: 4},
      {linha:11, coluna: 4},
      {linha:11, coluna: 5},
      {linha:11, coluna: 6},
      {linha:11, coluna: 7},
      {linha:11, coluna: 8},
      {linha:11, coluna: 9},
      {linha:11, coluna: 10},
      {linha:11, coluna: 11},
      {linha:11, coluna: 12},
      {linha:11, coluna: 13},
      {linha:11, coluna: 14},
      {linha:11, coluna: 13},
      {linha:11, coluna: 12},
      {linha:11, coluna: 11},
      {linha:11, coluna: 10},
      {linha:11, coluna: 9},
      {linha:11, coluna: 8},
      {linha:11, coluna: 7},
      {linha:11, coluna: 6},
      {linha:11, coluna: 5},
      {linha:11, coluna: 4},
      {linha:10, coluna: 4},
      {linha:9, coluna: 4},
      {linha:8, coluna: 4},
      {linha:8, coluna: 3},
      

    ]

    for (let index = 0; index < rota.length; index++) {
      const coord = rota[index];

      let matriz = boardAux.map((linha, i) => {
        const linhaArray = linha.map((valor, j) => {
          //se for encontrado um valor que é o mesmo nome do roboAUX limpar o campo
          if (valor == roboAux) {
            return "";
          }
          //se for encontrado um valor que é o mesmo nome do robo limpar o campo
          if (valor == robo) {
            return "";
          }

          //se a posição da linha e coluna forem igual a coordenada atual, retorna o nome do robo como nome do valor
          if (i == coord.linha && j == coord.coluna) {
            //se o robo estiver na mesma posição que a prateleira mudar o robo para o valor da prateleira
            if (
              String(i) == currentShelf?.linha &&
              String(j) == currentShelf?.coluna 
              
            ) {
              if(valor.length>0){
                roboAux = String(valor);
                return roboAux;
              }
              else {
                return robo;
              }
            }
            
            if (valor == "X") {
              roboAux = robo;
              return 'X'
            }
            return roboAux;
          } else {
            return valor;
          }
        });

        return linhaArray;
      });
      await timer(300);
      boardAux = matriz;
      setBoard(matriz);
    }
  }

  return (
    <Container>
      <img src={image} alt="Logo" />
      <Wrapper>
        <Button
          name="Busca em largura"
          onHandleClick={() => {
            setCurrentSearch("1");
          }}
          color={currentSearch == "1" ? "x" : ""}
        />
        <Button
          name="Busca em Profundidade"
          onHandleClick={() => {
            setCurrentSearch("3");
          }}
          color={currentSearch == "3" ? "x" : ""}
        />
        <Button
          name="Profundidade Iterativo"
          onHandleClick={() => {
            setCurrentSearch("4");
          }}
          color={currentSearch == "4" ? "x" : ""}
        />
        <Button
          name="Busca Biderectional"
          onHandleClick={() => {
            setCurrentSearch("2");
          }}
          color={currentSearch == "2" ? "x" : ""}
        />
        <Button
          name="Busca em A*"
          onHandleClick={() => {
            setCurrentSearch("0");
          }}
          color={currentSearch == "0" ? "x" : ""}
        />
      </Wrapper>
      <Main>
        {board.map((row, i) => (
          <div key={i}>
            {row.map((col, j) => (
              <Prateleira
                key={j}
                name={String(col)}
                linha={String(i)}
                coluna={String(j)}
                callback={(linha, coluna) => {
                  setCurrentShelf({ linha, coluna })
                }}
                color={
                  currentShelf?.linha == String(i) &&
                  currentShelf?.coluna == String(j)
                    ? "x"
                    : ""
                }
              />
            ))}
          </div>
        ))}
      </Main>
      <Button
        name="Buscar"
        onHandleClick={() => {
          moveRobot();
        }}
      />
    </Container>
  );
}
