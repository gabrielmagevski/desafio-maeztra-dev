import styled from "styled-components";

export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ContainerSlider = styled.div`
  display: flex;
  height: 100% !important;

  @media screen and (min-width: 1024px) {
    .arrow--left {
      left: 160px;
    }
    .arrow--right {
      right: 160px;
    }
  }
`;

export const AbsoluteSlider = styled.div`
  position: absolute;
  top: 60px;
  transform: translateX(60px);
  margin: 30px 0px 0px;

  @media screen and (min-width: 1024px) {
    top: 130px;
    transform: translateX(403px);
  }
`;

export const TitleSlider = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.3125rem;
  color: var(--white);
  width: 100%;
  max-width: 223px;

  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }
`;

export const SubTextSlider = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.0625rem;

  color: var(--white);
  width: 100%;
  max-width: 239px;

  margin-top: 24px;

  @media screen and (min-width: 1024px) {
    max-width: 467px;
    font-size: 1.25rem;
    line-height: 24px;
  }
`;

export const Dots = styled.div`
  bottom: 15px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;
