import AppContainer from "@/container/layouts/AppContainer";
import BackGround from "@/container/layouts/BackGround";
import Error from "@/container/layouts/Error";

const ErrorPage = () => {
  return (
    <AppContainer>
      <BackGround />
      <Error />
    </AppContainer>
  );
};

export default ErrorPage;
