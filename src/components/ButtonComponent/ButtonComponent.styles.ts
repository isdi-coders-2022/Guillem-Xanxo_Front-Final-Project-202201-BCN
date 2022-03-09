import styled from "styled-components";

export const ButtonGeneric = styled.button`
  border: none;
  font-family: monospace;
  border-radius: 10px;
  text-align: center;
  width: 145px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonUsuari = styled(ButtonGeneric)`
  border: solid 2px red;
`;
