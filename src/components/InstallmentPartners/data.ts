import logoAdidas from '../../assets/InstallmentPartners/adidasLogo.svg';
import logoApple from '../../assets/InstallmentPartners/appleLogo.svg';
import logoLamoda from '../../assets/InstallmentPartners/lamodaLogo.svg';

export interface InstallmentProps {
  image: string;
  title: string;
}

const installmentPartners: InstallmentProps[] = [
  { title: 'Спорт', image: logoAdidas },
  { title: 'Электроника', image: logoApple },
  { title: 'Одежда', image: logoLamoda },
  { title: 'Электроника', image: '' },
  { title: 'Спорт', image: '' },
];

export default installmentPartners;
