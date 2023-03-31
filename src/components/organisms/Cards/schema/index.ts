import WorldImg from "../../../../assets/images/CardContent/world.png";
import StockImg from "../../../../assets/images/CardContent/stock.png";
import TradeImg from "../../../../assets/images/CardContent/trades.png";
import DiscountImg from "../../../../assets/images/CardContent/discount.png";
import ShippingImg from "../../../../assets/images/CardContent/shipping.png";

type propsItems = {
  img: string;
  alt: string;
  strong: string;
  span: string;
};

export const items: propsItems[] = [
  {
    img: WorldImg,
    alt: "world",
    strong: "Produtos importados",
    span: "Produtos de Alta Qualidade",
  },
  {
    img: StockImg,
    alt: "stock",
    strong: "Estoque no Brazil",
    span: "Produtos mais perto de você!",
  },
  {
    img: TradeImg,
    alt: "trade",
    strong: "Trocas Garantidas",
    span: "Trocas em até 48 horas, vejas as regras",
  },
  {
    img: DiscountImg,
    alt: "discount",
    strong: "Ganhe 5% off",
    span: "Pagando à vista no Cartão",
  },
  {
    img: ShippingImg,
    alt: "ship",
    strong: "Frete Grátis",
    span: "Em compras acima de R$ 499,00",
  },
];
