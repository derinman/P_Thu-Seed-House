import React from "react";

import { useNavigate } from "react-router-dom";

import solar from "../img/solar.jpg";

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
        <Title>⬜️ 太陽能發電效率</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImg style={{ backgroundImage: `url(${solar})` }} />
        <IndexContainer></IndexContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
