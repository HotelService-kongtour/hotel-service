import CustomButton from "components/custom/CustomButton";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ReservationCancelModal = ({ setIsShowCancelModal }) => {
  const navigate = useNavigate();

  const handleCancelReservation = () => {
    alert("Your reservation cancellation application has been completed.");
    navigate("/my-info/booking-history");
    window.location.reload();
  };

  return (
    <Wrapper>
      <Modal>
        <Text>Are you sure you want to cancel your reservation?</Text>
        <BtnBox>
          <CustomButton
            width={"30%"}
            bgColor={"#999"}
            onClick={handleCancelReservation}
          >
            Cancel reservation
          </CustomButton>
          <CustomButton
            width={"30%"}
            onClick={() => setIsShowCancelModal(false)}
          >
            Go back
          </CustomButton>
        </BtnBox>
      </Modal>
    </Wrapper>
  );
};

export default ReservationCancelModal;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 30%;
  height: 30%;
  background-color: #fff;
  border-radius: 0.5rem;
  position: relative;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 2rem;
`;
