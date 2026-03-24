export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: "О нас", href: "/o-nas/" },
  {
    label: "Услуги",
    href: "/uslugi/",
    children: [
      {
        label: "Устранение засоров",
        href: "/ustranenie-zasorov/",
        children: [
          { label: "Прочистка канализации", href: "/prochistka-kanalizaczii/" },
          { label: "Гидродинамическая прочистка канализации в Краснодарском крае", href: "/gidrodinamicheskaya-ochistka-kanalizaczii/" },
          { label: "Механическая прочистка канализации", href: "/mehanicheskaya-prochistka-kanalizaczii/" },
          { label: "Прочистка ливневой канализации", href: "/prochistka-livnevoj-kanalizaczii/" },
          { label: "Электромеханическая прочистка канализации", href: "/elektromehanicheskaya-prochistka-kanalizaczii/" },
          { label: "Прочистка унитаза", href: "/prochistka-unitaza/" },
        ],
      },
      {
        label: "Установка сантехники",
        href: "/ustanovka-santehniki/",
        children: [
          { label: "Установка раковины", href: "/ustanovka-rakoviny/" },
          { label: "Установка смесителя", href: "/ustanovka-smesitelya/" },
          { label: "Установка ванны", href: "/ustanovka-vanny/" },
          { label: "Установка унитаза", href: "/ustanovka-unitaza/" },
          { label: "Установка душевой кабины", href: "/ustanovka-dushevoj-kabiny/" },
          { label: "Установка счетчиков воды", href: "/ustanovka-schetchikov-vody/" },
          { label: "Установка водонагревателя", href: "/ustanovka-vodonagrevatelya/" },
        ],
      },
      {
        label: "Замена труб",
        href: "/zamena-trub/",
        children: [
          { label: "Замена канализационных труб", href: "/zamena-kanalizaczionnyh-trub/" },
          { label: "Замена водяных труб ХВС ГВС", href: "/zamena-vodyanyh-trub-hvs-gvs/" },
          { label: "Замена стояков", href: "/zamena-stoyakov/" },
          { label: "Замена радиаторов", href: "/zamena-radiatorov/" },
          { label: "Замена труб отопления", href: "/zamena-trub-otopleniya/" },
        ],
      },
    ],
  },
  { label: "Цены", href: "/czeny/" },
];
