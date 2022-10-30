import { InputRadioT, InputsDataT } from 'Types';

export const inputsData: InputsDataT[] = [
  {
    id: 0,
    htmlFor: 'fname',
    labelText: 'First name:',
    type: 'text',
    dataTestid: 'fname',
    name: 'fname',
    ref: 'this.inputFname',
  },
  {
    id: 1,
    htmlFor: 'lname',
    labelText: 'Last name:',
    type: 'text',
    dataTestid: 'lname',
    name: 'lname',
    ref: 'this.inputLname',
  },
  {
    id: 2,
    htmlFor: 'date-delivery',
    labelText: 'Date delivery:',
    type: 'date',
    dataTestid: 'date-delivery',
    name: 'date-delivery',
    ref: 'this.inputDate',
  },
  {
    id: 3,
    htmlFor: 'myfile',
    labelText: 'Select a file:',
    type: 'file',
    dataTestid: 'myfile',
    name: 'myfile',
    ref: 'this.inputFile',
  },
  {
    id: 4,
    htmlFor: 'email',
    labelText: 'Enter your email:',
    type: 'email',
    dataTestid: 'email',
    name: 'email',
    ref: 'this.inputEmail',
  },
];

export const inputRadio: InputRadioT[] = [
  {
    id: 0,
    htmlFor: 'male',
    labelText: 'male',
    type: 'radio',
    dataTestid: 'male',
    name: 'sex',
    value: 'male',
    ref: 'this.inputEmail',
  },
  {
    id: 1,
    htmlFor: 'female',
    labelText: 'female',
    type: 'radio',
    dataTestid: 'female',
    name: 'sex',
    value: 'female',
    ref: 'this.inputEmail',
  },
];
