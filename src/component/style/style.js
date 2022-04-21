import styled from "styled-components";

import rwdConfig from "../../config/rwdConfig";

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
  // border: 1px red solid;
  @media ${rwdConfig.tablet} {
    flex-direction:column;
  }
}
`;

const HouseImgWrapper = styled.div`
  position:relative;
  height: 100%;
  width: 60%;
  @media ${rwdConfig.tablet} {
    height: 55%;
    width: 100%;
  }
`;

const HouseImg = styled.div`
  position:absolute;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  // border: 1px yellow solid;
`;

const IndexContainer = styled.div`
  height: 100%;
  width: 40%;
  border: 1px green solid;
  @media ${rwdConfig.tablet} {
    height: 45%;
    width: 100%;
  }
`;

const GobackBtn = styled.div`
  position: fixed;
  width: 4rem;
  padding: 0.4rem 0.8rem;
  bottom: 2rem;
  left: 2rem;
  text-align: center;
  color: #fff;
  background-color: #38665c;
  border-radius: 0.5rem;
  &:hover {
    border: 2px solid #fff;
  }
`;

export {
  TitleContainer,
  Title,
  LowerContainer,
  HouseImgWrapper,
  HouseImg,
  IndexContainer,
  GobackBtn,
};
