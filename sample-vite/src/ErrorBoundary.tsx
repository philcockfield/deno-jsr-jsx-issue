import * as React from "react";

declare function logErrorToMyService(
  error: Error,
  componentStack: string,
  ownerStack: any
): void;

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};
type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(
      error,
      info.componentStack ?? "",
      (React as any).captureOwnerStack
        ? (React as any).captureOwnerStack()
        : null
    );
  }

  override render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

export default ErrorBoundary;
