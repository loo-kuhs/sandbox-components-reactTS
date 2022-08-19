import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;


export const ImageContainer = styled.div`
  position: relative;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;


export const Title = styled.p`
  font-size: 24px;
  letter-spacing: normal;
  line-height: 28.8px;
  margin: 24px 0 0 0;
  color: #d10737;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  letter-spacing: normal;
  line-height: 16.8px;
  margin: 5px 0 24px 0;
  font-weight: 400;
  color: #848484;
`;

export const Image = styled.img`
  width: 100%;
  vertical-align: middle;
`;