import React, { ReactNode } from "react";
import * as Sentry from "@sentry/nextjs";
import Skeleton from "./Skeleton";
import Typography from "./Typography";
import Button from "./Button";
import { css } from "@emotion/react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallbackComponent?: ReactNode;
};
type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    Sentry.captureException(error);
    console.error("ErrorBoundary에서 에러가 감지되었습니다.", {
      error,
      errorInfo,
    });
  }
  buttonClickHanlder() {
    this.setState({ hasError: false });
  }
  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }
    if (this.props.fallbackComponent) {
      return this.props.fallbackComponent;
    }
    return (
      <Skeleton propsCss={style.self}>
        <Typography color="gray100" variant="body2" as="p">
          오류가 발생했습니다 😥
        </Typography>
        <Button
          onClick={this.buttonClickHanlder}
          size="sm"
          propsCss={style.button}
        >
          다시 시도하기
        </Button>
      </Skeleton>
    );
  }
}

const style = {
  self: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  button: css`
    margin-top: 8px;
  `,
};

export default ErrorBoundary;
