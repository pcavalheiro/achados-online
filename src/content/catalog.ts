import type { AffiliateKey } from "./affiliate-links";
import { SITE_URL } from "./site";

export type ReviewCategory = "audio" | "wearables" | "casa";

export interface Top5Roundup {
  order: number;
  badge: string;
  resumo: string;
  melhorPara: string[];
  pontosFortes: string[];
  pontosFracos: string[];
  destaque: string;
}

/** Full product/review entry for listings, SEO, and roundups */
export interface CatalogEntry {
  id: string;
  /** URL segment when a dedicated review exists, e.g. airpods-pro */
  slug: string | null;
  nome: string;
  nomeCurto: string;
  img: string;
  ogImage: string;
  ratingLabel: string;
  ratingValue: number;
  amazonGoKey: AffiliateKey;
  category: ReviewCategory;
  updatedAt: string;
  updatedLabel: string;
  featuredHome: boolean;
  homeTag: string;
  homeDescricao: string;
  idealPara: string[];
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  /** Related review slugs for internal linking */
  relatedSlugs: string[];
  /** Top 5 auriculares roundup (subset of catalog) */
  top5?: Top5Roundup;
}

export const CATALOG: CatalogEntry[] = [
  {
    id: "airpods-pro",
    slug: "airpods-pro",
    nome: "AirPods 4 com cancelamento de ruído",
    nomeCurto: "AirPods 4 com cancelamento de ruído",
    img: "/images/airpods.jpg",
    ogImage: "/images/airpods.jpg",
    ratingLabel: "4.6/5",
    ratingValue: 4.6,
    amazonGoKey: "airpods",
    category: "audio",
    updatedAt: "2026-03-01",
    updatedLabel: "março de 2026",
    featuredHome: true,
    homeTag: "Mais procurado",
    homeDescricao:
      "Auriculares premium com cancelamento ativo de ruído, áudio adaptativo e excelente integração com o ecossistema Apple.",
    idealPara: ["Música", "Chamadas", "Utilizadores Apple"],
    metaTitle: "AirPods 4 com cancelamento de ruído – Vale a pena comprar?",
    metaDescription:
      "Análise simples e direta para perceber se os AirPods 4 com cancelamento ativo de ruído valem a pena em 2026.",
    relatedSlugs: ["smartwatch", "aspirador"],
    top5: {
      order: 1,
      badge: "Melhor para iPhone",
      resumo:
        "A escolha mais simples para quem usa iPhone e quer conforto, integração rápida e uma experiência muito prática no dia a dia.",
      melhorPara: ["Utilizadores de iPhone", "Chamadas", "Uso diário"],
      pontosFortes: [
        "Integração excelente com iPhone, iPad e Mac",
        "Design leve e confortável",
        "Boa experiência para chamadas e deslocações",
      ],
      pontosFracos: [
        "Preço mais alto",
        "Menos interessantes fora do ecossistema Apple",
      ],
      destaque: "Melhor para quem quer experiência Apple sem complicações.",
    },
  },
  {
    id: "sony-wf-c710n",
    slug: null,
    nome: "Sony WF-C710N",
    nomeCurto: "Sony WF-C710N",
    img: "/images/sony-wf-c710n.jpg",
    ogImage: "/images/sony-wf-c710n.jpg",
    ratingLabel: "4.5/5",
    ratingValue: 4.5,
    amazonGoKey: "sony_wf_c710n",
    category: "audio",
    updatedAt: "2026-03-01",
    updatedLabel: "março de 2026",
    featuredHome: false,
    homeTag: "",
    homeDescricao: "",
    idealPara: [],
    metaTitle: "",
    metaDescription: "",
    relatedSlugs: ["airpods-pro"],
    top5: {
      order: 2,
      badge: "Melhor equilíbrio",
      resumo:
        "Uma opção muito equilibrada para quem quer bom som, ANC competente e boa autonomia sem entrar no segmento premium mais caro.",
      melhorPara: ["Qualidade/preço", "Chamadas", "Uso diário"],
      pontosFortes: [
        "Boa combinação de som, ANC e bateria",
        "Microfones competentes para chamadas",
        "Preço mais acessível que modelos premium",
      ],
      pontosFracos: [
        "Não têm o estatuto premium dos topo de gama",
        "Menos impacto de marca do que AirPods",
      ],
      destaque: "Escolha mais equilibrada para a maioria das pessoas.",
    },
  },
  {
    id: "soundcore-liberty-4-nc",
    slug: null,
    nome: "Anker Soundcore Liberty 4 NC",
    nomeCurto: "Soundcore Liberty 4 NC",
    img: "/images/liberty-4-nc.jpg",
    ogImage: "/images/liberty-4-nc.jpg",
    ratingLabel: "4.5/5",
    ratingValue: 4.5,
    amazonGoKey: "liberty_4_nc",
    category: "audio",
    updatedAt: "2026-03-01",
    updatedLabel: "março de 2026",
    featuredHome: false,
    homeTag: "",
    homeDescricao: "",
    idealPara: [],
    metaTitle: "",
    metaDescription: "",
    relatedSlugs: ["airpods-pro"],
    top5: {
      order: 3,
      badge: "Melhor relação qualidade/preço",
      resumo:
        "Auriculares muito competitivos para quem quer cancelamento de ruído, bateria e muitas funcionalidades por menos dinheiro.",
      melhorPara: ["Custo/benefício", "Viagens", "Uso diário"],
      pontosFortes: [
        "Boa autonomia",
        "ANC forte para o preço",
        "Muito completos em funcionalidades",
      ],
      pontosFracos: [
        "Afinação sonora menos neutra de origem",
        "Marca menos aspiracional que Apple ou Sony",
      ],
      destaque: "Provavelmente a compra mais segura para quem quer poupar.",
    },
  },
  {
    id: "earfun-air-pro-4",
    slug: null,
    nome: "EarFun Air Pro 4",
    nomeCurto: "EarFun Air Pro 4",
    img: "/images/earfun-air-pro-4.jpg",
    ogImage: "/images/earfun-air-pro-4.jpg",
    ratingLabel: "4.4/5",
    ratingValue: 4.4,
    amazonGoKey: "earfun_air_pro_4",
    category: "audio",
    updatedAt: "2026-03-01",
    updatedLabel: "março de 2026",
    featuredHome: false,
    homeTag: "",
    homeDescricao: "",
    idealPara: [],
    metaTitle: "",
    metaDescription: "",
    relatedSlugs: ["airpods-pro"],
    top5: {
      order: 4,
      badge: "Melhor barato",
      resumo:
        "Uma das escolhas mais fortes abaixo do segmento premium, com bom som, boa app e um conjunto de funções muito completo para o preço.",
      melhorPara: ["Orçamento controlado", "ANC", "Android e iPhone"],
      pontosFortes: [
        "Preço competitivo",
        "Boa qualidade de som",
        "Muitas funções para a gama",
      ],
      pontosFracos: [
        "Marca menos conhecida",
        "Menos prestígio do que Apple ou Sony",
      ],
      destaque:
        "Faz muito sentido para quem quer gastar menos sem cair em modelos fracos.",
    },
  },
  {
    id: "soundcore-space-a40",
    slug: null,
    nome: "Anker Soundcore Space A40",
    nomeCurto: "Soundcore Space A40",
    img: "/images/space-a40.jpg",
    ogImage: "/images/space-a40.jpg",
    ratingLabel: "4.4/5",
    ratingValue: 4.4,
    amazonGoKey: "space_a40",
    category: "audio",
    updatedAt: "2026-03-01",
    updatedLabel: "março de 2026",
    featuredHome: false,
    homeTag: "",
    homeDescricao: "",
    idealPara: [],
    metaTitle: "",
    metaDescription: "",
    relatedSlugs: ["airpods-pro"],
    top5: {
      order: 5,
      badge: "Melhor abaixo de 100€",
      resumo:
        "Uma opção muito forte para quem procura ANC competente e preço mais baixo, especialmente para viagens e uso diário.",
      melhorPara: ["Até 100€", "Viagens", "Trabalho"],
      pontosFortes: [
        "Excelente valor no segmento budget",
        "ANC muito competente",
        "Formato discreto e confortável",
      ],
      pontosFracos: [
        "Não têm o som mais premium da lista",
        "Design menos apelativo para alguns utilizadores",
      ],
      destaque:
        "Boa escolha para quem quer gastar pouco e ainda assim comprar bem.",
    },
  },
  {
    id: "smartwatch",
    slug: "smartwatch",
    nome: "Smartwatch com Monitorização de Saúde",
    nomeCurto: "Smartwatch com Monitorização de Saúde",
    img: "/images/smartwatch.jpg",
    ogImage: "/images/smartwatch.jpg",
    ratingLabel: "4.3/5",
    ratingValue: 4.3,
    amazonGoKey: "smartwatch",
    category: "wearables",
    updatedAt: "2026-03-01",
    updatedLabel: "março de 2026",
    featuredHome: true,
    homeTag: "Boa escolha diária",
    homeDescricao:
      "Relógio inteligente ideal para acompanhar atividade física, sono, batimentos cardíacos e notificações do telemóvel.",
    idealPara: ["Atividade física", "Saúde", "Uso diário"],
    metaTitle: "Smartwatch com Monitorização de Saúde – Vale a pena comprar?",
    metaDescription:
      "Uma análise simples para perceber se este tipo de smartwatch é uma boa escolha para acompanhar saúde e atividade física no dia a dia.",
    relatedSlugs: ["airpods-pro", "aspirador"],
  },
  {
    id: "aspirador",
    slug: "aspirador",
    nome: "Aspirador Robot para Limpeza Diária",
    nomeCurto: "Aspirador Robot para Limpeza Diária",
    img: "/images/aspirador.jpg",
    ogImage: "/images/aspirador.jpg",
    ratingLabel: "4.4/5",
    ratingValue: 4.4,
    amazonGoKey: "aspirador",
    category: "casa",
    updatedAt: "2026-03-01",
    updatedLabel: "março de 2026",
    featuredHome: true,
    homeTag: "Melhor para casa",
    homeDescricao:
      "Solução prática para manter a casa limpa com menos esforço, indicada para manutenção diária de vários tipos de chão.",
    idealPara: ["Casa", "Limpeza diária", "Poupar tempo"],
    metaTitle: "Aspirador Robot para Limpeza Diária – Vale a pena?",
    metaDescription:
      "Uma solução prática para manter a casa limpa com menos esforço. Vê se vale mesmo a pena investir num aspirador robot.",
    relatedSlugs: ["airpods-pro", "smartwatch"],
  },
];

export function getEntryBySlug(slug: string): CatalogEntry | undefined {
  return CATALOG.find((e) => e.slug === slug);
}

export function getFeaturedHomeProducts(): CatalogEntry[] {
  return CATALOG.filter((e) => e.featuredHome);
}

export function getTop5Headphones(): CatalogEntry[] {
  return CATALOG.filter((e) => e.top5).sort(
    (a, b) => (a.top5!.order ?? 0) - (b.top5!.order ?? 0),
  );
}

export function getReviewPages(): (CatalogEntry & { slug: string })[] {
  return CATALOG.filter(
    (e): e is CatalogEntry & { slug: string } => e.slug !== null,
  );
}

export function getRelatedEntries(
  slug: string,
  limit = 3,
): (CatalogEntry & { slug: string })[] {
  const entry = getEntryBySlug(slug);
  if (!entry) return [];
  return entry.relatedSlugs
    .map((s) => getEntryBySlug(s))
    .filter(
      (e): e is CatalogEntry & { slug: string } =>
        Boolean(e && e.slug !== null),
    )
    .slice(0, limit);
}

export function goPath(key: AffiliateKey): string {
  return `/go/${key}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

/** Editorial homepage comparison cards */
export const HOMEPAGE_COMPARACOES: {
  titulo: string;
  href: string;
  descricao: string;
}[] = [
  {
    titulo: "Top 5 alternativas aos AirPods",
    href: "/top-5-auriculares-bluetooth-estilo-airpods",
    descricao:
      "Compara 5 auriculares Bluetooth populares para quem quer qualidade, conforto e melhor relação qualidade/preço.",
  },
  {
    titulo: "AirPods 4: vale a pena comprar?",
    href: "/airpods-pro",
    descricao:
      "Vê se os AirPods 4 continuam a ser uma boa escolha para iPhone, chamadas e uso diário.",
  },
  {
    titulo: "Melhor opção para poupar sem comprar mal",
    href: "/top-5-auriculares-bluetooth-estilo-airpods",
    descricao:
      "Descobre modelos mais baratos que fazem sentido para quem quer ANC, conforto e boa autonomia.",
  },
];
