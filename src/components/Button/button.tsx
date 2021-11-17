import { useState } from "react";
import { StylesButton } from "./styles";

interface PropsButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  onHandleClick(): void;
}

export function Button({ name, onHandleClick, ...rest }: PropsButton) {
  const [active, setActive] = useState(false);

  function handleClick() {
    onHandleClick();
  }
  return (
    <StylesButton
      {...rest}
      onClick={() => handleClick()}
      
    >
      <span className="text">{name}</span>
    </StylesButton>
  );
}
