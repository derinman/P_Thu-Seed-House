import React from "react";

import { useNavigate } from "react-router-dom";

import hydroponics from "../img/hydroponics.jpg";
import hydroponics_highlight from "../img/hydroponics_highlight.png";

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
        <Title>⬜️ 水耕循環系統</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImgWrapper>
          <HouseImg style={{ backgroundImage: `url(${hydroponics})` }} />
          <HouseImg style={{ backgroundImage: `url(${hydroponics_highlight})` }} />
        </HouseImgWrapper>
        <IndexContainer></IndexContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
