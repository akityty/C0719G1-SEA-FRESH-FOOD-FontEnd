import {Role} from './role';

export interface UserOnline {
  userName?: string;
  password?: string;
  authorities?: Role[];
  accessToKen?: string;
}
