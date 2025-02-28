# JSX: NPM tarball transpile from TSX

### Problem: "NPM tarball transpile [possibly] not working correctly for TSX"

- issue: https://github.com/jsr-io/jsr/issues/996

<p>&nbsp;</p>

A reproduction showing a Deno `Vite + React` application importing a `React/JSX`
component from a `.tsx` file published as a package on [JSR](https://jsr.io/@phil/sample-react/0.0.5/src/Foo.tsx).

The error thrown demonstrates what may be, in [Luca](https://github.com/lucacasonato)'s words:

> > "the NPM tarball transpile [maybe] not working correctly for TSX."

<p>&nbsp;</p>

### Context

This comment came out of a dicussion immediately after `Deno 2.2` came out and the
`unsupported-jsx-tsx` warning had been lifted during JSX publishing. The speculation was that this
may be an `.tsx` file edge-case around the more general feature implementation of JSX now
robustly supported by Deno.

<p>&nbsp;</p>

### Sample Project Structure

- Deno Project: `./sample-react/`

  _UI Module (JSR)_  
  The sample module exposing a `<Foo>` react component in a `.tsx` file, published to JSR.  
  Sample registry entry: [jsr.io/@phil/sample-react](https://jsr.io/@phil/sample-react)

  ```ts
  import { Foo } from "jsr:@phil/sample-react";
  ```

- Deno Project: `./sample-vite/`

  _Usage Scenario_  
  The vite application that imports from `sample-react`

  ```bash
  deno task dev
  ```

### Run

To recreate the error in a web-browser on the locally running Vite `dev` server:

```bash
cd ./sample-vite
deno task install  # NB: runs `deno install` with --allow-scripts to ensure the Vite plugins fully install.
deno task dev
```

The server will start and render the `<App>` component that in turn imports from JSR:

```ts
import { Foo } from "jsr:@phil/sample-react";
```

This will cause errors to be output into the browser's console:

```
3b0776a……3b3bc6015c5772816:7 Uncaught TypeError: jsx is not a function
    at Foo (3b0776a……bc6015c5772816:7:26)
```

The sample component being imported is a minimalist example with a reference `react`:

```ts
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
```
