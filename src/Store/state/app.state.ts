import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initalUserState} from './user.state';
import { ConfigState, initialConfigState} from './config.state';

export interface  IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: ConfigState;
}

export const initialAppState: IAppState = {
  users: initalUserState,
  config: initialConfigState
};


export function getInitialState(): IAppState {
  return initialAppState;
}
