import { useKeenSlider } from "keen-slider/react";

import { Flex } from "../../../global";
import { Card, CardIcon, CardSpan, CardStrong, CardWrapper, ContainerSliderCard, TitleCard } from "./Cards";
import "keen-slider/keen-slider.min.css";

import { items } from "./schema";

export const Cards = () => {
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
        <TitleCard>Por que comprar na Maeztra?</TitleCard>
      </Flex>

      <ContainerSliderCard ref={ref}>
        {items.map(({ img, alt, span, strong }) => {
          return (
            <>
              <div className="keen-slider__slide">
                <Card>
                  <CardIcon src={img} alt={alt} />
                  <CardWrapper>
                    <CardStrong>{strong}</CardStrong>
                    <CardSpan>{span}</CardSpan>
                  </CardWrapper>
                </Card>
              </div>
            </>
          );
        })}
      </ContainerSliderCard>
    </>
  );
};
