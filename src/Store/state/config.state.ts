import { ConfigInterface} from '../../models/config.interface';



export interface ConfigState {
    config: ConfigInterface;
  }

export const initialConfigState: ConfigSate = {
    config: null
  };
