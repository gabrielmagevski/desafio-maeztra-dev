import styled from "styled-components";

export const ShelfContainer = styled.div`
  max-width: 308px;
  width: 100%;
  height: 465px;
  margin: 0 auto;
  display: flex;

  .keen-slider__slide {
    height: 600px !important;
  }

  @media screen and (min-width: 1024px) {
    height: 100%;
    max-width: 1600px;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: hidden;

    .arrow--right {
      right: 127px;
    }

    .arrow--left {
      left: 127px;
    }
  }
`;

export const ShelfWrapper = styled.div`
  padding: 8px 27px 16px 27px;
`;

export const SKUS = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkuValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 30px;
  color: var(--color-2-500);

  margin-top: 8px;
`;

export const SkuTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: var(--color-2-500);

  margin-top: 8px;
`;

export const SkuInfo = styled.h4`
  width: 254px;
  height: 50px;

  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 18px;
  color: var(--color-2-500);
  opacity: 0.5;

  margin-top: 8px;
`;

export const ButtonCart = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

export const TitleShelf = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 37px;
  color: var(--color-2-500);

  margin: 40px 0 16px;
`;
