import { useKeenSlider } from "keen-slider/react";
import { Flex } from "../../../global";
import { CardPartner, CardPartnerImg, ContainerSliderCardPartner, TitleCardPartner } from "./CardsPartnersShips";

import { partners } from "./schema/CardsPartner";

export const CardsPartners = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 1024px)": {
        disabled: true,
      },
    },
    loop: false,
    mode: "free",
    slides: { origin: "center", perView: 1.3, spacing: 16 },
  });
  return (
    <>
      <Flex>
        <TitleCardPartner>Marcas Parceiras</TitleCardPartner>
      </Flex>
      <ContainerSliderCardPartner ref={ref}>
        {partners.map(({ img, alt }) => {
          return (
            <>
              <div className="keen-slider__slide">
                <CardPartner>
                  <CardPartnerImg src={img} alt={alt} />
                </CardPartner>
              </div>
            </>
          );
        })}
      </ContainerSliderCardPartner>
    </>
  );
};
