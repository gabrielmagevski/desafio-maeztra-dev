import { SKUButton } from "./SKU";

export type SKUProps = {
  color: string;
};

export const Sku = ({ color }: SKUProps) => (
  <>
    <SKUButton color={color} />
  </>
);
