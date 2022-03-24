import styled from "styled-components";

export const ButtonGeneric = styled.button`
  border: none;
  font-family: monospace;
  border-radius: 10px;
  text-align: center;
  width: 35px;
  height: 35px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ButtonUsuari = styled(ButtonGeneric)`
  border: solid 2px black;
  width: 35px;
  background-color: white;
  margin: 21px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ButtonCreaViatge = styled(ButtonGeneric)`
  border: solid 2px black;
  width: 200px;
  height: 40px;
  background-color: white;
  margin: 20px;
  margin-bottom: 40px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ButtonDetall = styled(ButtonGeneric)`
  border: solid 2px black;
  width: 170px;
  height: 40px;
  background-color: white;
  margin: 10px;
  margin-bottom: 20px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ButtonDelete = styled(ButtonGeneric)`
  border: solid 2px red;
  color: red;
  width: 170px;
  height: 40px;
  background-color: white;
  margin: 10px;
  margin-bottom: 20px;
  &:hover {
    background-color: red;
    color: white;
  }
`;
