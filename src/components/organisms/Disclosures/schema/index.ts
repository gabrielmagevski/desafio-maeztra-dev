export type propsDisclosures = {
  title: string;
  listContent: {
    list: string[];
  };
};

export const disclosures: propsDisclosures[] = [
  {
    title: "Informações",
    listContent: {
      list: ["Quem Somos", "Prazo de Envio", "Trocas e Devoluções", "Promoções e Cupons"],
    },
  },
  {
    title: "Minha Conta",
    listContent: {
      list: ["Minha Conta", "Meus Pedidos", "Cadastre-se"],
    },
  },
  {
    title: "Onde nos Encontrar",
    listContent: {
      list: ["Lojas", "Endereço"],
    },
  },
];
