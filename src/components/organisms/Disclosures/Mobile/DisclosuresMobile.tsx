import { Disclosure, DisclosureFlex, DisclosuresContainer, FlexDisclosure, TitleDisclosure, Paragraph } from "../Disclosures";
import { Button } from "../../../atoms/Button/Button";
import { useReducer } from "react";
import { disclosures, propsDisclosures } from "../schema";

interface PropsDisclosures {
  disclosure: propsDisclosures;
}

export const DisclosuresItem = ({ disclosure }: PropsDisclosures) => {
  const [open, toggleOpen] = useReducer((state) => !state, false);

  return (
    <>
      <FlexDisclosure>
        <TitleDisclosure>{disclosure.title}</TitleDisclosure>
        <Button onClick={toggleOpen} lh="18px" ff="Titillium Web" fts="1rem" wd="9" hg="18" bg="transparent" bdr="none" color="#000">
          +
        </Button>
      </FlexDisclosure>

      {open && (
        <>
          <DisclosureFlex>
            {disclosure.listContent.list.map((item) => {
              return (
                <>
                  <Paragraph>{item}</Paragraph>
                </>
              );
            })}
          </DisclosureFlex>
        </>
      )}
    </>
  );
};

export const DisclosureMobile = () => {
  return (
    <>
      <Disclosure>
        <DisclosuresContainer>
          <DisclosureFlex>
            {disclosures.map((disclosure) => (
              <DisclosuresItem disclosure={disclosure} />
            ))}
          </DisclosureFlex>
        </DisclosuresContainer>
      </Disclosure>
    </>
  );
};
