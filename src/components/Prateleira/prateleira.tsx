import { StylesButton } from "./styles";
import { useState } from "react";

interface PropsButton {
  name: string;
  linha:string;
  coluna:string;
}

export function Prateleira({ name, linha,coluna }: PropsButton) {
  const [active, setActive] = useState(false);

  function handleClickButton() {
    if (name.length > 0) {
      setActive(!active);
      alert(`Linha: ${linha}, Coluna: ${coluna}`)
    }
  }

  return (
    <StylesButton onClick={handleClickButton} color={active ? "x" : ""}>
      <span className="text">{name}</span>
    </StylesButton>
  );
}
