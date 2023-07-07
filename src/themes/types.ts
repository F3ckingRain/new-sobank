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

export type LoanProps = {
  advantages?: {};
  popularProducts?: { title: string; subtitle: string; image: string }[];
  freeDelivery?: {};
};

export type FooterProps = {};

export type LandingType = {
  banner: DomainProps<ProductProps<BannerProps>>;
  loan: DomainProps<ProductProps<LoanProps>>;
  footer: DomainProps<FooterProps>;
};
