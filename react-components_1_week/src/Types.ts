import { Character } from './rickiMartyTypes';

export interface IFormInput {
  firstName: string;
  lname: string;
  dateDelivery: string;
  myfile: string;
  // myfile: File | null;
  email: string;
  sex: string;
  errors: string;
}

export interface CardSort {
  name: string;
  status: string;
  gender: string;
}

export enum ActionType {
  DATA = 'DATA',
  PAGE = 'PAGE',
  ALLPAGE = 'ALLPAGE',
  CARDSORT = 'CARDSORT',
  RESET = 'RESET',
  LOADING = 'LOADING',
}

export interface State {
  data?: [];
  page?: number;
  allPages?: number | null;
  cardSort?: { status: string; gender: string };
  type?: string;
  loading?: boolean;
}

export type Props = {
  carts: Character;
};

export interface Typecontext {
  dataSearch: string[];
  set: (el: string[]) => void;
}
