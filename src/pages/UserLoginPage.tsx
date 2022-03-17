import LoginComponent from "../components/LoginComponent/LoginComponent";
import styled from "styled-components";

const mapBackground = styled.form`
  background-image: url("src/assets/map.webp");
`;

const UserLoginPage = () => {
  return (
    <>
      <mapBackground>
        <LoginComponent />
      </mapBackground>
    </>
  );
};

export default UserLoginPage;
