import React from "react";

import { useNavigate } from "react-router-dom";

import hydroponics from "../img/hydroponics.jpg";

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
        <Title>⬜️ 水耕循環系統</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImg style={{ backgroundImage: `url(${hydroponics})` }} />
        <IndexContainer></IndexContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
