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
        <Title>⬜️ 環境空氣品質</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImgWrapper>
          <HouseImg style={{ backgroundImage: `url(${air})` }} />
          <HouseImg style={{ backgroundImage: `url(${air_highlight})` }} animation={true}/>
        </HouseImgWrapper>
        <IndexOuterContainer>
          <IndexContainer>
            <IndexItem>
              <div>⬜️ 二氧化碳</div>
              <div>
                <div>456.00</div>
                <div>PPM</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 一氧化碳</div>
              <div>
                <div>0.03</div>
                <div>PPM</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 細顆粒物</div>
              <div>
                <div>14.67</div>
                <div>PPM</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 懸浮微粒</div>
              <div>
                <div>0.03</div>
                <div>PPM</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 溫度</div>
              <div>
                <div>28.20</div>
                <div>°C</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 濕度</div>
              <div>
                <div>59.66</div>
                <div>%</div>
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
