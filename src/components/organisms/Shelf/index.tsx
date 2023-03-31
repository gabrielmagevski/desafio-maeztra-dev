import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import React from "react";
import { useState } from "react";
import { Flex } from "../../../global";
import { Button } from "../../atoms/Button/Button";
import { Sku } from "../../atoms/SKU";
import { shelfContent } from "./schema/Content";
import { ButtonCart, ShelfContainer, ShelfWrapper, SkuInfo, SKUS, SkuTitle, SkuValue, TitleShelf } from "./Shelf";

import "keen-slider/keen-slider.min.css";
import { Arrow } from "../../atoms/Arrow";
import { useMediaQuery } from "react-responsive";

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
  function updateHeight() {
    slider.container.style.height = slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

export const Shelf = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 1024px)": {
          slides: { perView: 5, spacing: 16 },
        },
      },
      slides: { origin: "center", perView: 1, spacing: 16 },
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [AdaptiveHeight]
  );

  return (
    <>
      <div>
        <Flex>
          <TitleShelf>As Mais pedidas</TitleShelf>
        </Flex>
        <div className="navigation-wrapper">
          <ShelfContainer ref={sliderRef}>
            {shelfContent?.map((shelf) => (
              <>
                <div className="keen-slider__slide">
                  <div>
                    <img src={shelf.img} alt={shelf.alt} />
                  </div>
                  <ShelfWrapper>
                    <SKUS>
                      {shelf?.skus?.colors?.map((skus) => {
                        return <Sku color={skus} />;
                      })}
                    </SKUS>
                    <SkuValue>{shelf.value}</SkuValue>
                    <SkuTitle>{shelf.title}</SkuTitle>
                    <SkuInfo>{shelf.info}</SkuInfo>
                    <ButtonCart>
                      <Button lh={"24px"} fts={"1rem"} ff={"Titillium Web"} fw={"400"} color={"#FFF"} wd={"254px"} hg={"35px"}>
                        Adicionar
                      </Button>
                    </ButtonCart>
                  </ShelfWrapper>
                </div>
              </>
            ))}

            {isDesktopOrLaptop && loaded && instanceRef.current && (
              <>
                <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

                <Arrow
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                  disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                />
              </>
            )}
          </ShelfContainer>
        </div>
      </div>
    </>
  );
};
