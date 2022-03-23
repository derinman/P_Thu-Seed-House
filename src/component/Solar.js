import React from "react";

import styled from "styled-components";

import rwdConfig from "../config/rwdConfig";

const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  // border: 1px red solid;
`;

const Title = styled.div`
  margin: 2rem;
  color: #fff;
  font-size: 2rem;
`;

const LowerContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: row;
  border: 1px red solid;
  @media ${rwdConfig.tablet} {
    flex-direction:column;
  }
}
`;

const HouseImg = styled.div`
  height: 100%;
  width: 60%;
  border: 1px yellow solid;
  @media ${rwdConfig.tablet} {
    height: 55%;
    width:100%;
  }
`;

const IndexContainer = styled.div`
  height: 100%;
  width: 40%;
  border: 1px green solid;
  @media ${rwdConfig.tablet} {
    height: 45%;
    width:100%;
  }
`;

const Solar = () => {
  return (
    <>
      <TitleContainer>
        <Title>⬜️ 太陽能發電效率</Title>
      </TitleContainer>
      <LowerContainer>
        <HouseImg></HouseImg>
        <IndexContainer></IndexContainer>
      </LowerContainer>
    </>
  );
};

export default Solar;
