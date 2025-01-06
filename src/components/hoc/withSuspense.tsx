import { ComponentType, ReactNode } from "react";
import { Suspense } from "react";

const withSuspense = <Props extends object>(
  WrappedComponent: ComponentType<Props>,
  fallbackComponent: ReactNode
) => {
  const ContainerComponent = (props: Props) => (
    <Suspense fallback={fallbackComponent}>
      <WrappedComponent {...props} />
    </Suspense>
  );

  ContainerComponent.displayName = `WithSuspense(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ContainerComponent;
};

export default withSuspense;
