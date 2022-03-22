import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import { TripCardComponent } from "../components/TripCardComponent/TripCardComponent";
import { RootState } from "../redux/store";
import { getThisTripThunk } from "../redux/thunks/tripsThunks";

const TripCatwalk = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ShowTripDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tripDetail = useSelector((state: RootState) => state.oneTrip);

  useEffect(() => {
    dispatch(getThisTripThunk(id as string));
  }, [dispatch, id]);

  return (
    <>
      <HeaderComponent />
      <TripCatwalk>
        <TripCardComponent trip={tripDetail} visibility="public" />
      </TripCatwalk>
    </>
  );
};

export default ShowTripDetailPage;
