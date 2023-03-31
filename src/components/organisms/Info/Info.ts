import styled from "styled-components";

export const HomeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 298px;
  margin: 23px auto 39px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    max-width: 1600px;
    margin: 80px auto;
  }
`;

export const WrapperInfo = styled.div`
  @media screen and (min-width: 1024px) {
    margin-right: 64px;
  }
`;

export const TitleInfo = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 37px;
  color: var(--black);
  margin-bottom: 16px;
`;

export const SubTitleInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: var(--black);
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    max-width: 420px;
  }
`;
