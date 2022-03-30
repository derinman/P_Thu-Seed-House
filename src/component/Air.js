import React from "react";

import { useNavigate } from "react-router-dom";

import air from "../img/air.jpg";

import {
  TitleContainer,
  Title,
  LowerContainer,
  HouseImg,
  IndexContainer,
  GobackBtn,
} from "./style/style.js";

const Solar = () => {
  const navigate = useNavigate();

  return (
    <>
      <TitleContainer>
        <Title>⬜️ 環境空氣品質</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImg style={{ backgroundImage: `url(${air})` }} />
        <IndexContainer></IndexContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
