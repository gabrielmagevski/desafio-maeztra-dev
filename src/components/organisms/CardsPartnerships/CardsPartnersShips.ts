import styled from "styled-components";

export const ContainerSliderCardPartner = styled.div`
  overflow-x: hidden;
  display: flex;
  height: 100% !important;
  margin-top: 24px;

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

export const TitleCardPartner = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 37px;
  color: var(--color-2-500);

  margin-top: 40px;
`;

export const CardPartner = styled.div`
  border-radius: 4px;
  width: 298px !important;
  margin: 0 auto;

  display: flex;
  align-items: center;

  height: 64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
`;

export const CardPartnerImg = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
