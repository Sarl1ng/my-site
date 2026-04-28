import { serviceFaq, type FaqItem } from "./faq";

export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  fullDescription: string[];
  advantages: string[];
  faq: FaqItem[];
  relatedServices: string[];
  category: "Прочистка" | "Сантехника" | "Трубы";
  icon: string;
};

const commonAdvantages = [
  "Выезд мастера по заявке",
  "Осмотр проблемы перед началом работ",
  "Согласование объема и стоимости",
  "Работа с квартирами, домами и коммерческими объектами",
];

const service = (
  slug: string,
  title: string,
  category: Service["category"],
  icon: string,
  relatedServices: string[],
  shortDescription?: string,
): Service => ({
  slug,
  title,
  metaTitle: `${title} в Новороссийске | PRO Сервис`,
  metaDescription:
    `${title} в Новороссийске и Краснодарском крае. Выезд мастера, заявка по телефону, аккуратная диагностика и согласование работ.`,
  h1: `${title} в Новороссийске`,
  shortDescription:
    shortDescription ??
    `${title}: выездной формат работ для квартир, частных домов и коммерческих объектов. Точные условия и стоимость требуют подтверждения.`,
  fullDescription: [
    "Эта страница подготовлена как SEO-основа под дальнейшую точную верстку и наполнение по старому сайту. Контент не переносит WordPress-логику и служебные данные.",
    "TODO: добавить подтвержденное описание услуги, список работ, ограничения, районы выезда и условия гарантии от владельца сайта.",
  ],
  advantages: commonAdvantages,
  faq: serviceFaq,
  relatedServices,
  category,
  icon,
});

export const services: Service[] = [
  service("ustranenie-zasorov", "Устранение засоров", "Прочистка", "drain", [
    "prochistka-kanalizaczii",
    "prochistka-unitaza",
    "gidrodinamicheskaya-ochistka-kanalizaczii",
  ]),
  service("prochistka-kanalizaczii", "Прочистка канализации", "Прочистка", "pipe", [
    "ustranenie-zasorov",
    "gidrodinamicheskaya-ochistka-kanalizaczii",
    "mehanicheskaya-prochistka-kanalizaczii",
  ]),
  service("gidrodinamicheskaya-ochistka-kanalizaczii", "Гидродинамическая очистка канализации", "Прочистка", "water", [
    "prochistka-kanalizaczii",
    "prochistka-livnevoj-kanalizaczii",
    "elektromehanicheskaya-prochistka-kanalizaczii",
  ]),
  service("mehanicheskaya-prochistka-kanalizaczii", "Механическая прочистка канализации", "Прочистка", "tool", [
    "prochistka-kanalizaczii",
    "ustranenie-zasorov",
    "elektromehanicheskaya-prochistka-kanalizaczii",
  ]),
  service("prochistka-livnevoj-kanalizaczii", "Прочистка ливневой канализации", "Прочистка", "rain", [
    "gidrodinamicheskaya-ochistka-kanalizaczii",
    "prochistka-kanalizaczii",
    "ustranenie-zasorov",
  ]),
  service("elektromehanicheskaya-prochistka-kanalizaczii", "Электромеханическая прочистка канализации", "Прочистка", "cable", [
    "mehanicheskaya-prochistka-kanalizaczii",
    "prochistka-kanalizaczii",
    "gidrodinamicheskaya-ochistka-kanalizaczii",
  ]),
  service("prochistka-unitaza", "Прочистка унитаза", "Прочистка", "toilet", [
    "ustranenie-zasorov",
    "prochistka-kanalizaczii",
    "ustanovka-unitaza",
  ]),
  service("ustanovka-santehniki", "Установка сантехники", "Сантехника", "sink", [
    "ustanovka-rakoviny",
    "ustanovka-smesitelya",
    "ustanovka-unitaza",
  ]),
  service("ustanovka-rakoviny", "Установка раковины", "Сантехника", "sink", [
    "ustanovka-santehniki",
    "ustanovka-smesitelya",
    "zamena-vodyanyh-trub-hvs-gvs",
  ]),
  service("ustanovka-smesitelya", "Установка смесителя", "Сантехника", "tap", [
    "ustanovka-rakoviny",
    "ustanovka-santehniki",
    "ustanovka-vanny",
  ]),
  service("ustanovka-vanny", "Установка ванны", "Сантехника", "bath", [
    "ustanovka-santehniki",
    "ustanovka-smesitelya",
    "zamena-trub",
  ]),
  service("ustanovka-unitaza", "Установка унитаза", "Сантехника", "toilet", [
    "prochistka-unitaza",
    "ustanovka-santehniki",
    "zamena-kanalizaczionnyh-trub",
  ]),
  service("ustanovka-dushevoj-kabiny", "Установка душевой кабины", "Сантехника", "shower", [
    "ustanovka-santehniki",
    "ustanovka-vanny",
    "ustanovka-smesitelya",
  ]),
  service("ustanovka-schetchikov-vody", "Установка счетчиков воды", "Сантехника", "meter", [
    "ustanovka-santehniki",
    "zamena-vodyanyh-trub-hvs-gvs",
    "ustanovka-smesitelya",
  ]),
  service("ustanovka-vodonagrevatelya", "Установка водонагревателя", "Сантехника", "boiler", [
    "ustanovka-santehniki",
    "zamena-vodyanyh-trub-hvs-gvs",
    "ustanovka-smesitelya",
  ]),
  service("zamena-trub", "Замена труб", "Трубы", "pipes", [
    "zamena-kanalizaczionnyh-trub",
    "zamena-vodyanyh-trub-hvs-gvs",
    "zamena-stoyakov",
  ]),
  service("zamena-kanalizaczionnyh-trub", "Замена канализационных труб", "Трубы", "sewer", [
    "zamena-trub",
    "prochistka-kanalizaczii",
    "ustanovka-unitaza",
  ]),
  service("zamena-vodyanyh-trub-hvs-gvs", "Замена водяных труб ХВС/ГВС", "Трубы", "waterpipe", [
    "zamena-trub",
    "ustanovka-santehniki",
    "ustanovka-schetchikov-vody",
  ]),
  service("zamena-stoyakov", "Замена стояков", "Трубы", "riser", [
    "zamena-trub",
    "zamena-kanalizaczionnyh-trub",
    "zamena-vodyanyh-trub-hvs-gvs",
  ]),
  service("zamena-radiatorov", "Замена радиаторов", "Трубы", "radiator", [
    "zamena-trub-otopleniya",
    "zamena-trub",
    "zamena-stoyakov",
  ]),
  service("zamena-trub-otopleniya", "Замена труб отопления", "Трубы", "heat", [
    "zamena-radiatorov",
    "zamena-trub",
    "zamena-stoyakov",
  ]),
];

export const popularServiceSlugs = [
  "ustranenie-zasorov",
  "prochistka-kanalizaczii",
  "ustanovka-santehniki",
  "ustanovka-unitaza",
  "ustanovka-smesitelya",
  "zamena-trub",
];

export const serviceGroups = [
  {
    title: "Прочистка",
    services: services.filter((item) => item.category === "Прочистка"),
  },
  {
    title: "Сантехника",
    services: services.filter((item) => item.category === "Сантехника"),
  },
  {
    title: "Трубы",
    services: services.filter((item) => item.category === "Трубы"),
  },
];

export const getServiceBySlug = (slug: string) => services.find((item) => item.slug === slug);

export const getRelatedServices = (service: Service) =>
  service.relatedServices.map((slug) => getServiceBySlug(slug)).filter((item): item is Service => Boolean(item));
