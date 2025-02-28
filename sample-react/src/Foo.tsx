import { useState } from "react";

/** Props passed to <Foo>. */
export type FooProps = { msg?: string };

/**
 * A sample UI component.
 */
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
