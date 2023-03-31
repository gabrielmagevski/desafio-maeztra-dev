import styled from "styled-components";

export const ContainerSliderCard = styled.div`
  display: flex;
  height: 100% !important;
  margin-top: 16px;
  overflow-x: hidden;

  .keen-slider__slide {
    max-width: 298px !important;
    min-width: 298px !important;
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

export const TitleCard = styled.h2`
  margin-top: 24px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 24px;
  color: var(--color-2-500);
`;

export const Card = styled.div`
  background: #efefef;
  border-radius: 4px;
  width: 298px !important;
  margin: 0 auto;

  display: flex;
  align-items: center;

  padding: 11px 19px 14px 26px;
`;

export const CardIcon = styled.img`
  max-width: 100%;
  margin-right: 21px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardStrong = styled.strong`
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 21px;
  color: var(--color-2-500);
`;

export const CardSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 18px;

  color: var(--color-2-400);
`;
