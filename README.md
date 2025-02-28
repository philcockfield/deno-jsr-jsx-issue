# Issue Sample

A constrained reproduction repo showing a Deno `React + Vite` application importing a `React`
component from a package hosted on [JSR](https://jsr.io/@phil/sample-react/0.0.4/src/Foo.tsx).

The error thrown demonstrates what may be, in Luca's words,
"the NPM tarball transpile [maybe] not working correctly for TSX."

I say maybe, as this comment came out of a dicussion immediately after `Deno 2.2` came out and the
`unsupported-jsx-tsx` warning had been lifted during JSX publishing. The theory was that this
may be an edge case around the more general feature implementation of supporting JSX natively.

### Structure

- `./sample-react/deno.json`: The sample JSR registry module exposing a `<Foo>` React component `.tsx` file.
- `./sample-vite/deno.json`: Vite application that imports from `sample-react`

### Run

To recreate the error start the Vite server:

```bash
cd ./sample-vite
deno task install  # runs `deno install` with --allow-scripts to ensure the Vite plugins fully install.
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
