export type PriceItem = {
  title: string;
  price: string;
  source: "old-site" | "todo";
  href?: string;
};

export type PriceCategory = {
  title: string;
  items: PriceItem[];
};

export const priceCategories: PriceCategory[] = [
  {
    title: "Популярные услуги прочистки",
    items: [
      { title: "Устранение засоров", price: "от 900 руб.", source: "old-site", href: "/ustranenie-zasorov/" },
      { title: "Устранение протечек", price: "от 1100 руб.", source: "old-site" },
      { title: "Ремонт сантехники", price: "от 1500 руб.", source: "old-site" },
      { title: "Установка унитаза", price: "от 2500 руб.", source: "old-site", href: "/ustanovka-unitaza/" },
      { title: "Установка смесителя", price: "от 1500 руб.", source: "old-site", href: "/ustanovka-smesitelya/" },
      { title: "Замена труб", price: "от 1950 руб.", source: "old-site", href: "/zamena-trub/" },
    ],
  },
  {
    title: "Уточнить цену",
    items: [
      { title: "Гидродинамическая очистка", price: "TODO: подтвердить цену", source: "todo", href: "/gidrodinamicheskaya-ochistka-kanalizaczii/" },
      { title: "Механическая прочистка", price: "TODO: подтвердить цену", source: "todo", href: "/mehanicheskaya-prochistka-kanalizaczii/" },
      { title: "Замена стояков", price: "TODO: подтвердить цену", source: "todo", href: "/zamena-stoyakov/" },
      { title: "Установка водонагревателя", price: "TODO: подтвердить цену", source: "todo", href: "/ustanovka-vodonagrevatelya/" },
    ],
  },
];
