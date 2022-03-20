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
`;

export const ButtonUsuari = styled(ButtonGeneric)`
  border: solid 2px black;
  width: 35px;
  background-color: white;
  margin: 21px;
  margin-left: 40px;
`;

export const ButtonCreaViatge = styled(ButtonGeneric)`
  border: solid 2px black;
  width: 200px;
  height: 40px;
  background-color: white;
  margin: 20px;
  margin-bottom: 40px;
`;

export const ButtonDetall = styled(ButtonGeneric)`
  border: solid 2px black;
  width: 170px;
  height: 40px;
  background-color: white;
  margin: 10px;
  margin-bottom: 20px;
`;
