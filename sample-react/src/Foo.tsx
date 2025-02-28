import { useState } from "react";

export type FooProps = { msg?: string };
export const Foo: React.FC<FooProps> = (props) => {
  const { msg = "🐷" } = props;

  const [isOver, setOver] = useState(false);
  const over = (isOver: boolean) => () => setOver(isOver);

  return (
    <code
      onMouseEnter={over(true)}
      onMouseLeave={over(false)}
    >{`sample-react/Foo: ${msg} | isOver: ${String(isOver)}`}</code>
  );
};
