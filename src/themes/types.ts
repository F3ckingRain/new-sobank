import { CSSProperties } from 'react';

import { THEME } from '@/types/config';
import { ProductType } from '@/types/product';

export type DomainProps<T> = { [key in THEME]: T };
export type ProductProps<T> = { [key in ProductType | 'home_page']: T };

export type HeaderProps = {
  logo: string;
};

export type BannerProps = {
  title: string;
  subtitle: string;
  image: string;
  btnText: string;
  imageStyle?: CSSProperties;
  layoutStyle?: CSSProperties;
};

export type productType =
  | 'creditCard'
  | 'creditCash'
  | 'cashback'
  | 'casko'
  | 'investment'
  | 'hypothec';

export type advantageType =
  | 'limit'
  | 'period'
  | 'delivery'
  | 'percent'
  | 'cashback'
  | 'refinance';

export type LoanProps = {
  advantages?: {
    list: { title: string; subtitle: string; type: advantageType }[];
    layoutStyle?: CSSProperties;
  };
  popularProducts?: {
    list: {
      title: string;
      subtitle: string;
      image: productType;
    }[];
    layoutStyle?: CSSProperties;
  };
  freeDelivery?: { title: string; list: string[]; layoutStyle?: CSSProperties };
  freeCard?: {
    title: string;
    subtitle: string;
    image: string;
    layoutStyle?: string;
  };
  getCredit?: { title: string; list: string[]; layoutStyle?: CSSProperties };
};

export type socialType = 'viber' | 'vk' | 'telegram';
export interface SocialsProps {
  title: string;
  subtitle: string;
  links: { name: string; link: string; image: socialType }[];
}

export type footerLinkType = {
  path?: string;
  name: string;
};
export type AccordionProps = {
  title: string;
  content: string[] | footerLinkType[];
};

export type FooterProps = {
  socials: SocialsProps;
  accordions: AccordionProps[];
  copyright: string;
  layoutStyle?: CSSProperties;
};

export type LandingType = {
  yandexMetrics: DomainProps<string>;
  favicon: DomainProps<string>;
  banner: DomainProps<ProductProps<BannerProps>>;
  loan: DomainProps<ProductProps<LoanProps>>;
  footer: DomainProps<FooterProps>;
};
