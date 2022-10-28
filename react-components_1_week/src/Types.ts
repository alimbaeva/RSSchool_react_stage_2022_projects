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

export interface StateForm {
  page: number;
  name: string;
  gender: string;
  status: string;
  type: string;
}

export enum ActionTypeForm {
  DATA = 'DATA',
}
