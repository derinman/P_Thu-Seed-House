import React from "react";

import { useNavigate } from "react-router-dom";

import solar from "../img/solar.jpg";
import solar_highlight from "../img/solar_highlight.png"

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
        <Title>⬜️ 太陽能發電效率</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImgWrapper>
          <HouseImg style={{ backgroundImage: `url(${solar})` }} />
          <HouseImg style={{ backgroundImage: `url(${solar_highlight})` }} />
        </HouseImgWrapper>
        <IndexContainer></IndexContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
