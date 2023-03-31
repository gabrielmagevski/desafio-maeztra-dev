import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--white);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 22px;

  @media screen and (min-width: 1024px) {
    padding: 35px 0px;
    justify-content: space-around;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperCart = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #faa500;
  border-radius: 8px;
  padding: 12px 14px 13px;

  &:hover {
    cursor: pointer;
  }
`;

export const WrapperSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
`;

export const Logo = styled.img`
  width: 100%;
  margin-left: 15px;
`;

export const BagIcon = styled.img`
  margin-left: 40px;
`;

export const Icon = styled.img`
  margin-right: 8px;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #353535;

  &:hover {
    cursor: pointer;
  }
`;

export const SubMenu = styled.div`
  height: 48px;
`;

export const List = styled.ul`
  padding: 14px 0px;
  display: flex;
  align-content: center;
  justify-content: center;
  list-style: none;
`;

export const Li = styled.li`
  margin-right: 111px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #353535;

  &:first-child {
    color: #faa500;
    font-weight: 700;
  }
`;
