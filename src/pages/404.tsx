import AppContainer from "@/container/layouts/AppContainer";
import BackGround from "@/container/layouts/BackGround";
import Error404 from "@/container/layouts/Error404";

const Error404Page = () => {
  return (
    <AppContainer>
      <BackGround />
      <Error404 />
    </AppContainer>
  );
};

export default Error404Page;
