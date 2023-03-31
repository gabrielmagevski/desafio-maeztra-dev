import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 24px;
  background-color: var(--color-2-500);
`;

export const TitleTopBar = styled.span`
  padding: 0.1875rem 0;
  font-size: 0.625rem;
  line-height: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);

  @media screen and (min-width: 1024px) {
    font-size: 0.75rem;
    line-height: 18px;
  }
`;
