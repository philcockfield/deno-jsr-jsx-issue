import { useState } from "react";

export type FooProps = { msg?: string };
export const Foo: React.FC<FooProps> = (props) => {
  return <code>{`sample-react/Foo: ${msg}`}</code>;
};
