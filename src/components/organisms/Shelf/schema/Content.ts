import FauxSkirt from "../../../../assets/images/Shelf/product01.png";
import RuchedRose from "../../../../assets/images/Shelf/product02.png";

type propsShelf = {
  img: string;
  alt: string;
  skus: {
    colors: string[];
  };
  value: string;
  title: string;
  info: string;
};

export const shelfContent: propsShelf[] = [
  {
    img: FauxSkirt,
    alt: "Faux Skirt",
    skus: {
      colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
    },
    value: "R$ 500,00",
    title: "Faux Suede Mini Skirt",
    info: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
  },
  {
    img: RuchedRose,
    alt: "Ruched Rose",
    skus: {
      colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
    },
    value: "R$ 320,00",
    title: "Ruched Rose Print Mini Skirt",
    info: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
  },
  {
    img: FauxSkirt,
    alt: "Faux Skirt",
    skus: {
      colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
    },
    value: "R$ 500,00",
    title: "Faux Suede Mini Skirt",
    info: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
  },
  {
    img: RuchedRose,
    alt: "Ruched Rose",
    skus: {
      colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
    },
    value: "R$ 320,00",
    title: "Ruched Rose Print Mini Skirt",
    info: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
  },
  {
    img: FauxSkirt,
    alt: "Faux Skirt",
    skus: {
      colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
    },
    value: "R$ 500,00",
    title: "Faux Suede Mini Skirt",
    info: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
  },
  {
    img: RuchedRose,
    alt: "Ruched Rose",
    skus: {
      colors: ["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"],
    },
    value: "R$ 320,00",
    title: "Ruched Rose Print Mini Skirt",
    info: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
  },
  {
    img: FauxSkirt,
    alt: "Faux Skirt",
    skus: {
      colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
    },
    value: "R$ 500,00",
    title: "Faux Suede Mini Skirt",
    info: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
  },
];
