import React from "react";

import { useNavigate } from "react-router-dom";

import air from "../img/air.jpg";
import air_highlight from "../img/air_highlight.png";

import {
  TitleContainer,
  Title,
  LowerContainer,
  HouseImgWrapper,
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
        <HouseImgWrapper>
          <HouseImg style={{ backgroundImage: `url(${air})` }} />
          <HouseImg style={{ backgroundImage: `url(${air_highlight})` }} />
        </HouseImgWrapper>
        <IndexContainer></IndexContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
