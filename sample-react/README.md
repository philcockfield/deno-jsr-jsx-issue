# Sample

Sample module exposing `JSX` (React) component from a `.tsx` file for import externally by another sample module (eg a `Vite` project module).
See issue: [github.com / jsr-io: 996](https://github.com/jsr-io/jsr/issues/996)

### Example

```tsx
import { Foo } from "@phil/sample-react";

const el = <Foo msg={"👋 hello"} />;
```

### MIT
