import useLocalStorage from '@/hooks/useLocalStorage';
import { Nullable } from '@/types/default';

const ls = useLocalStorage();

const showCase = !!ls.get('showcase');
export interface ModalType {
  name: Nullable<string>;
  opened: boolean;
  showcase?: boolean;
}

const initialState: ModalType = {
  name: null,
  opened: false,
  showcase: showCase,
};

export default initialState;
