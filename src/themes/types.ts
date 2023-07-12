import { DomainsName } from '@/themes/helpers';
import { ProductType } from '@/types/product';

export type DomainType = 'Sobank' | 'Onbank' | 'Sop';

export type DomainProps<T> = { [key in DomainsName]: T };
export type ProductProps<T> = { [key in ProductType | 'home_page']: T };

export type BannerProps = {
  title: string;
  subtitle: string;
  image: string;
  btnText: string;
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
  advantages?: { title: string; subtitle: string; type: advantageType }[];
  popularProducts?: {
    title: string;
    subtitle: string;
    image: productType;
  }[];
  freeDelivery?: { title: string; list: string[] };
  freeCard?: {
    title: string;
    subtitle: string;
    image: string;
  };
  getCredit?: { title: string; list: string[] };
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
};

export type LandingType = {
  banner: DomainProps<ProductProps<BannerProps>>;
  loan: DomainProps<ProductProps<LoanProps>>;
  footer: DomainProps<FooterProps>;
};
