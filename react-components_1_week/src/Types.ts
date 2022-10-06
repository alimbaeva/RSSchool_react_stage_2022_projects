export interface CartsT {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface InputsDataT {
  id: number;
  htmlFor: string;
  labelText: string;
  type: string;
  dataTestid: string;
  name: string;
  ref: string;
}

export interface InputRadioT {
  id: number;
  htmlFor: string;
  labelText: string;
  type: string;
  dataTestid: string;
  name: string;
  value: string;
  ref: string;
}

export interface Cart {
  name: string | undefined;
  lastname: string | undefined;
  date: string | undefined;
  file: string | undefined;
  email: string | undefined;
  sex: string | undefined;
}

export interface FormElements extends HTMLFormControlsCollection {
  fname: HTMLInputElement;
}
export interface UsernameFormElement extends HTMLFormElement {
  readonly: FormElements;
}
