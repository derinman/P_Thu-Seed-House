import React from "react";

import { useNavigate } from "react-router-dom";

import algae from "../img/algae.jpg";
import algae_highlight from "../img/algae_highlight.png";

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
        <Title>⬜️ 綠藻淨化指數</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImgWrapper>
          <HouseImg style={{ backgroundImage: `url(${algae})` }} />
          <HouseImg style={{ backgroundImage: `url(${algae_highlight})` }} />
        </HouseImgWrapper>
        <IndexOuterContainer>
          <IndexContainer>
            <IndexItem>
              <div>⬜️ 氧氣量</div>
              <div>
                <div>545.02</div>
                <div>PPM</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 綠藻濃度</div>
              <div>
                <div>18.62</div>
                <div>%</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 溶氧量</div>
              <div>
                <div>12.24</div>
                <div>%</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 電解質</div>
              <div>
                <div>5.92</div>
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
