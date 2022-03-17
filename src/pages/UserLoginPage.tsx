import LoginComponent from "../components/LoginComponent/LoginComponent";
import styled from "styled-components";
import img from "../assets/map.webp";

const Content = styled.div`
  background-image: url(${img});
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
