import { ComponentType, ReactNode } from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const withErrorBoundary = <Props extends object>(
  WrappedComponent: ComponentType<Props>,
  fallbackComponent?: ReactNode
) => {
  const ContainerComponent = (props: Props) => (
    <ErrorBoundary fallbackComponent={fallbackComponent}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  ContainerComponent.displayName = `WithErrorBoundary(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ContainerComponent;
};

export default withErrorBoundary;
