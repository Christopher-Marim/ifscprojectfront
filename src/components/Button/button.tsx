import { StylesButton } from "./styles";

interface PropsButton {
  name: string;
}

export function Button({ name }: PropsButton) {
  return (
    <StylesButton>
      <span className="text">{name}</span>
    </StylesButton>
  );
}
