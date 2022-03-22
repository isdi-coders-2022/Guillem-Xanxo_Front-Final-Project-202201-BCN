import styled from "styled-components";

export const TripCardComponentStyles = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
  margin-top: 20px;
  border: solid 2px black;
  font-size: 16px;
  border-radius: 15px;
  max-width: 600px;
  & .trip-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  & .trip-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  & .trip-buttons {
    display: flex;
    flex-direction: column;
    justify-content: right;
    text-align: center;
  }
`;
