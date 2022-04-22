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
  IndexOuterContainer,
  IndexContainer,
  IndexItem,
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
          <HouseImg
            style={{ backgroundImage: `url(${hydroponics_highlight})` }}
          />
        </HouseImgWrapper>
        <IndexOuterContainer>
          <IndexContainer>
            <IndexItem>
              <div>⬜️ 電解質</div>
              <div>
                <div>1605.00</div>
                <div>μS</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 酸鹼質</div>
              <div>
                <div>6.15</div>
                <div>PH</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 水溫</div>
              <div>
                <div>24.20</div>
                <div>°C</div>
              </div>
            </IndexItem>
          </IndexContainer>
        </IndexOuterContainer>
      </LowerContainer>
      <GobackBtn onClick={() => navigate("/")}>返 回</GobackBtn>
    </>
  );
};

export default Solar;
