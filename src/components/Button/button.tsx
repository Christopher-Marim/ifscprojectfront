import { useState } from "react";
import { StylesButton } from "./styles";

interface PropsButton {
  name: string;
}

export function Button({ name }: PropsButton) {
  const [active, setActive] = useState(false);

  return (
    <StylesButton onClick={()=> setActive(!active)} color={active ? "x" : ""}>
      <span className="text">{name}</span>
    </StylesButton>
  );
}
