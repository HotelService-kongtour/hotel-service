import React, { useState } from "react";
import styled from "styled-components";

import PencilIcon from "assets/icons/pencil.svg";
import CustomInput from "components/custom/CustomInput";
import CustomButton from "components/custom/CustomButton";
import { useColors } from "context/ColorContext";

const userInfo = {
  first_name: "user",
  last_name: "kim",
  company_name: "datalabs",
  email_name: "user1234@gmail.com",
};

const EditMyInfo = () => {
  const colors = useColors();

  const [info, setInfo] = useState(userInfo);
  const [isEditable, setIsEditable] = useState(false);

  const handleInputChange = (value, key) => {
    setInfo({
      ...info,
      [key]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveChanges = () => {
    alert("Your information has been modified.");
    setIsEditable(false);

    console.log("Changes saved:", info);
  };

  return (
    <Wrapper>
      <TitleBox>
        <Title>Basic Information</Title>
        <EditBtn onClick={handleEditClick}>
          <img src={PencilIcon} alt="pencil-icon" />
        </EditBtn>
      </TitleBox>

      <InfoContainer>
        <NameBox>
          <CustomInput
            labelText="First name"
            placeholder="first name"
            value={info.first_name}
            disabled={!isEditable}
            onChange={(value) => handleInputChange(value, "first_name")}
          />
          <CustomInput
            labelText="Last name"
            placeholder="last name"
            value={info.last_name}
            disabled={!isEditable}
            onChange={(value) => handleInputChange(value, "last_name")}
          />
        </NameBox>

        <CompanyBox>
          <CustomInput
            labelText={"Company Name"}
            placeholder={"company name"}
            value={info.company_name}
            disabled={!isEditable}
            onChange={(value) => handleInputChange(value, "company_name")}
          />
        </CompanyBox>

        <EmailBox>
          <CustomInput
            labelText={"Email"}
            placeholder={"email"}
            value={info.email_name}
            disabled={!isEditable}
            onChange={(value) => handleInputChange(value, "email_name")}
            validateType="email"
            onError={(isError) => {
              if (isError) {
                console.log("Invalid email address");
              }
            }}
          />
        </EmailBox>
      </InfoContainer>

      <ChangeBtn>
        <CustomButton onClick={handleSaveChanges} disabled={!isEditable}>
          Save Changes
        </CustomButton>
      </ChangeBtn>
    </Wrapper>
  );
};

export default EditMyInfo;

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  border: 2px solid #ececec;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 75vh;
    padding: 1rem 1rem;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;
const Title = styled.h3``;
const EditBtn = styled.div`
  cursor: pointer;
  opacity: 0.5;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    opacity: 1;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NameBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const CompanyBox = styled.div``;
const EmailBox = styled.div``;

const ChangeBtn = styled.div`
  width: calc(100% - 2rem);
  position: absolute;
  bottom: 2rem;
`;
