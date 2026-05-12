export type PriceItem = {
  title: string;
  price: string;
  source: "old-site" | "todo";
  href?: string;
  image?: string;
  alt?: string;
};

export type PriceCategory = {
  title: string;
  items: PriceItem[];
};

export const priceCategories: PriceCategory[] = [
  {
    title: "Популярные услуги прочистки",
    items: [
      {
        title: "Устранение засоров",
        price: "от 900 руб.",
        source: "old-site",
        href: "/ustranenie-zasorov/",
        image: "/images/home/ustranenie-zasorov.jpg",
        alt: "Мастер устраняет засор в канализации",
      },
      {
        title: "Устранение протечек",
        price: "от 1100 руб.",
        source: "old-site",
        image: "/images/home/ustranenie-protechek.jpg",
        alt: "Сантехник устраняет протечку",
      },
      {
        title: "Ремонт сантехники",
        price: "от 1500 руб.",
        source: "old-site",
        image: "/images/home/remont-santehniki.jpg",
        alt: "Ремонт сантехнического оборудования",
      },
      {
        title: "Установка унитаза",
        price: "от 2500 руб.",
        source: "old-site",
        href: "/ustanovka-unitaza/",
        image: "/images/home/ustanovka-unitaza.jpg",
        alt: "Установка унитаза мастером",
      },
      {
        title: "Установка смесителя",
        price: "от 1500 руб.",
        source: "old-site",
        href: "/ustanovka-smesitelya/",
        image: "/images/home/ustanovka-smesitelya.jpg",
        alt: "Установка смесителя",
      },
      {
        title: "Замена труб",
        price: "от 1950 руб.",
        source: "old-site",
        href: "/zamena-trub/",
        image: "/images/home/zamena-trub.jpg",
        alt: "Замена старых труб",
      },
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
