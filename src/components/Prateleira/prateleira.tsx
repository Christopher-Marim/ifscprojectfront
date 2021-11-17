import { StylesButton } from "./styles";
import { useState } from "react";

interface PropsButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  linha:string;
  coluna:string;
  callback(linha:string, coluna:string):void
}

export function Prateleira({ name, linha,coluna, callback, ...rest }: PropsButton) {
  const [active, setActive] = useState(false);

  function handleClickButton() {
    if (parseInt(name)) {
      setActive(!active);
      callback(linha,coluna);
      //alert(`Linha: ${linha}, Coluna: ${coluna}`)
    }
  }

  return (
    <StylesButton {...rest} onClick={handleClickButton}>
      <span className="text">{name}</span>
    </StylesButton>
  );
}
