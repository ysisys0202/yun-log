import { ComponentType, ReactNode } from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const withErrorBoundary = <Props extends object>(
  WrappedComponent: ComponentType<Props>,
  fallbackComponent?: ReactNode
) => {
  return (props: Props) => (
    <ErrorBoundary fallbackComponent={fallbackComponent}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};

export default withErrorBoundary;
