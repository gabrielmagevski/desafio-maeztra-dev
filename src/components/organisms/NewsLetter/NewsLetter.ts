import styled from "styled-components";

export const NewsLetterContainer = styled.div`
  background: var(--color-3-500);
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
`;

export const NewsLetterWrapperContent = styled.div`
  max-width: 298px;
  margin: 24px auto;

  @media screen and (min-width: 1024px) {
    max-width: 920px;
    display: flex;
    align-items: center;
    margin: 40px auto;
  }
`;

export const NewsLetterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 1024px) {
    max-width: 630px;
    width: 100%;
  }
`;

export const TitleNewsletter = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 37px;
  color: #353535;
  margin-bottom: 8px;

  @media screen and (min-width: 1024px) {
    margin-right: 20px;
  }
`;
