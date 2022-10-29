export const enum ActionType {
  ADDSEARCH = 'ADDSEARCH',
  ADDFORMS = 'ADDFORMS',
}

export type formCard = {
  firstName: string;
  lname: string;
  dateDelivery: string;
  myfile: string;
  email: string;
  sex: string;
  errors?: string;
};
export type search = {
  name: string;
  status: string;
  gender: string;
};

export interface StateType {
  search?: search;
  formCard?: formCard[] | undefined;
}

export interface Action {
  type: ActionType;
  payload: {
    search?: search;
    formCard?: formCard[] | undefined;
  };
}

export const initialStateSearch: StateType = {
  search: {
    name: '',
    status: '',
    gender: '',
  },
  formCard: [],
};
