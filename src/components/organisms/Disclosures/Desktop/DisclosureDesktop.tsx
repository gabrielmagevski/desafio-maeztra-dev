import { Disclosure, DisclosureFlex, DisclosureFlexColumn, DisclosuresContainer, Paragraph, TitleDisclosure } from "../Disclosures";
import { disclosures } from "../schema";

export const DisclosureDesktop = () => {
  return (
    <>
      <>
        <Disclosure>
          <DisclosuresContainer>
            <DisclosureFlex>
              {disclosures.map((disclosure) => (
                <>
                  <DisclosureFlexColumn>
                    <TitleDisclosure>{disclosure.title}</TitleDisclosure>

                    {disclosure.listContent.list.map((item) => {
                      return (
                        <>
                          <Paragraph>{item}</Paragraph>
                        </>
                      );
                    })}
                  </DisclosureFlexColumn>
                </>
              ))}
            </DisclosureFlex>
          </DisclosuresContainer>
        </Disclosure>
      </>
    </>
  );
};
