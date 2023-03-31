import { TopBar } from "../../../atoms/Topbar";

import LogoMaeztra from "../../../../assets/images/header/logo-desktop.png";
import { Input } from "../../../atoms/Input/Input";
import { Button } from "../../../atoms/Button/Button";
import { Container, Header, Icon, Li, List, Logo, Paragraph, SubMenu, Wrapper, WrapperCart, WrapperSearch } from "../mobile/style";
import User from "../../../../assets/images/header/user.png";
import Wishlist from "../../../../assets/images/header/wishlist.png";
import Cart from "../../../../assets/images/header/cart.png";
import Vestido from "../../../../assets/images/header/vestido.png";

export const DesktopHeader = () => {
  return (
    <>
      <TopBar />
      <Header>
        <Container>
          <Wrapper>
            <Logo src={LogoMaeztra} />
          </Wrapper>
          <WrapperSearch>
            <Input hg="40px" pd="10px" mxwd="791px" placeholder="O Que Você Busca?" bdr={"10px"} type="text" />
            <Button style={{ right: 0 }} position="absolute" fw="400" hg="40px" bdrr="8px" mxwd="119px" type="submit">
              Buscar
            </Button>
          </WrapperSearch>
          <Wrapper>
            <Wrapper style={{ marginRight: 39 }}>
              <Icon src={User} alt="user" />
              <Paragraph>Minha conta</Paragraph>
            </Wrapper>
            <Wrapper style={{ marginRight: 48 }}>
              <Icon src={Wishlist} alt="wishlist" />
              <Paragraph>Favoritos</Paragraph>
            </Wrapper>
            <WrapperCart>
              <Icon src={Cart} alt="cart" />
              <Paragraph>Meu Carrinho</Paragraph>
            </WrapperCart>
          </Wrapper>
        </Container>
      </Header>
      <SubMenu>
        <List>
          <Li>
            <img src={Vestido} alt="vestido" />
            Novidades
          </Li>
          <Li>Vestidos</Li>
          <Li>Roupas</Li>
          <Li>Sapatos</Li>
          <Li>Lingerie</Li>
          <Li>Acessórios</Li>
          <Li>OUTLET</Li>
        </List>
      </SubMenu>
    </>
  );
};
