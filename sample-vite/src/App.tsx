import { Foo } from "jsr:@phil/sample-react";
import { ErrorBoundary } from "./ErrorBoundary.tsx";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "10px 20px" }}>
      <h1>Sample</h1>
      <ErrorBoundary fallback={"🤕 derp...💥"}>
        <Foo />
      </ErrorBoundary>
    </div>
  );
}
