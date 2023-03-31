import { useMediaQuery } from "react-responsive";
import { Flex } from "../../../global";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { NewsLetterContainer, NewsLetterWrapper, NewsLetterWrapperContent, TitleNewsletter } from "./NewsLetter";

export const NewsLetter = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <NewsLetterContainer>
      <NewsLetterWrapperContent>
        <Flex>
          <TitleNewsletter>Receba Nossa Newsletter</TitleNewsletter>
        </Flex>
        <NewsLetterWrapper>
          <Input
            hg={isDesktopOrLaptop ? "40px" : "26px"}
            pd="11px 0px"
            placeholder="Digite seu e-mail"
            mxwd={isDesktopOrLaptop ? "630px" : "204px"}
            border={"1px solid #353535"}
            bg={"#FFF"}
            bdr={"4px"}
            type="email"
          />
          <Button
            mxwd={isDesktopOrLaptop ? "131px" : "79px"}
            lh="21px"
            fts="0.875rem"
            ff="Titillium Web"
            hg={isDesktopOrLaptop ? "40px" : "26px"}
            type="submit"
          >
            Enviar
          </Button>
        </NewsLetterWrapper>
      </NewsLetterWrapperContent>
    </NewsLetterContainer>
  );
};
