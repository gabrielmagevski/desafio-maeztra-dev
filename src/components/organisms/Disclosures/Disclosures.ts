import styled, { keyframes } from "styled-components";

export const Disclosure = styled.div`
  margin: 40px 0 56px 0;
`;

export const DisclosuresContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 870px;
    flex-direction: row;
  }
`;

export const DisclosureFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const breatheAnimation = keyframes`
  0% {opacity: 0; transform: translateX(-10px)}
  100% {opacity: 1; transform: translateX(0)}
`;

export const DisclosureFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${breatheAnimation} 300ms;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TitleDisclosure = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 18px;
`;

export const FlexDisclosure = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0px;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 18px;
  color: #000000;

  @media screen and (min-width: 1024px) {
    margin-top: 24px;
    cursor: pointer;
  }
`;
