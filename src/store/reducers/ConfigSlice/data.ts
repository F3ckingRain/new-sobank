import { MOBILE_WIDTH } from '@/constants/resolution';

export type ViewportType = 'mobile' | 'desktop';
export interface ConfigType {
  viewport: ViewportType;
}

const initialState: ConfigType = {
  viewport: document.body.clientWidth < MOBILE_WIDTH ? 'mobile' : 'desktop',
};

export default initialState;
