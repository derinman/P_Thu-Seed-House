import React from "react";

import { useNavigate } from "react-router-dom";

import algae from "../img/algae.jpg";
import algae_highlight from "../img/algae_highlight.png"

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
        <Title>⬜️ 綠藻淨化指數</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImgWrapper>
          <HouseImg style={{ backgroundImage: `url(${algae})` }} />
          <HouseImg style={{ backgroundImage: `url(${algae_highlight})` }} />
        </HouseImgWrapper>
        <IndexContainer></IndexContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
