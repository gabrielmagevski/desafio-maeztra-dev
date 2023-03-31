import { Container, Header, Wrapper, Logo, BagIcon } from "./style";
import { TopBar } from "../../../atoms/Topbar";

import { List, MagnifyingGlass } from "@phosphor-icons/react";
import LogoMaeztra from "../../../../assets/images/header/maeztra.png";
import Bag from "../../../../assets/images/header/bag.png";

export const MobileHeader = () => {
  return (
    <>
      <TopBar />
      <Header>
        <Container>
          <Wrapper>
            <List size={32} />
            <Logo src={LogoMaeztra} />
          </Wrapper>
          <Wrapper>
            <MagnifyingGlass size={24} />
            <BagIcon src={Bag} />
          </Wrapper>
        </Container>
      </Header>
    </>
  );
};
