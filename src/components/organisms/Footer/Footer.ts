import styled from "styled-components";

export const FooterContent = styled.footer`
  background: var(--color-2-500);

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const GroupSocial = styled.div`
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 1024px) {
    gap: 22px;
    padding: 27px 0 26px;
  }
`;

export const GroupPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-top: 36px;

  @media screen and (min-width: 1024px) {
    gap: 22px;
    padding: 31px 0 29px;
  }
`;

export const GroupVtexAndMaeztra = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px 0px;
  margin-left: 20px;

  @media screen and (min-width: 1024px) {
    padding: 19px 0 18px;
  }
`;

export const Strong = styled.strong`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 14px;
  color: #ffffff;
  margin-bottom: 3px;
`;
