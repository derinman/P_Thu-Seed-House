import React from "react";

import { useNavigate } from "react-router-dom";

import algae from "../img/algae.jpg";

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
        <Title>⬜️ 綠藻淨化指數</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImg style={{ backgroundImage: `url(${algae})` }} />
        <IndexContainer></IndexContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
