import React from "react";

import { useNavigate } from "react-router-dom";

import solar from "../img/solar.jpg";
import solar_highlight from "../img/solar_highlight.png";

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
        <Title>⬜️ 太陽能發電效率</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImgWrapper>
          <HouseImg style={{ backgroundImage: `url(${solar})` }} />
          <HouseImg style={{ backgroundImage: `url(${solar_highlight})` }} animation={true}/>
        </HouseImgWrapper>
        <IndexOuterContainer>
          <IndexContainer>
            <IndexItem>
              <div>⬜️ 綠能資訊</div>
              <div>
                <div>30.01</div>
                <div>w</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 用電資訊</div>
              <div>
                <div>17.24</div>
                <div>w</div>
              </div>
            </IndexItem>
            <IndexItem>
              <div>⬜️ 儲能率</div>
              <div>
                <div>56.31</div>
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
