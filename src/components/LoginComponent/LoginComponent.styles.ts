import styled from "styled-components";

const FormContainer = styled.form`
  background: #ffffff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px rgba(0.2, 0.2, 0.2, 0.2);
  h1 {
    text-align: center;
    color: black;
  }
  label {
    display: block;
    margin-bottom: 10px;
    margin-top: 15px;
  }
  input {
    padding: 12px 20px;
    width: 80%;
    border: 1px solid #ccc;
    font-size: 18px;
  }
  .submit-button {
    cursor: pointer;
    width: 50%;
    border: none;
    background: black;
    font-size: 24px;
    color: white;
    border-radius: 3px;
    padding: 15px;
    text-align: center;
    margin: 25px;
    &:hover {
      background: #7a2edd;
    }
  }

  .text_registre {
    font-size: 14px;
    font-family: monospace;
  }
`;

export default FormContainer;
