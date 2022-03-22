import RegisterFormComponent from "../components/RegisterFormComponent/RegisterFormComponent";
import styled from "styled-components";
import img from "../assets/map.webp";

const Content = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserRegisterPage = () => {
  return (
    <>
      <Content>
        <RegisterFormComponent />
      </Content>
    </>
  );
};

export default UserRegisterPage;
