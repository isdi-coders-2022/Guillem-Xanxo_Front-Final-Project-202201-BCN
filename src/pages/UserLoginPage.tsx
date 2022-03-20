import Toastr from "../components/Toastr/Toastr";
import LoginComponent from "../components/LoginComponent/LoginComponent";
import styled from "styled-components";
import img from "../assets/map.webp";

const Content = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100vh;
`;

const UserLoginPage = () => {
  return (
    <>
      <Content>
        <LoginComponent />
      </Content>
    </>
  );
};

export default UserLoginPage;
