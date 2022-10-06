import React, { PropsWithChildren } from 'react';
import { Cart, UsernameFormElement } from '../../Types';
import './style/forms.css';

export const carts: Cart[] = localStorage.getItem('carts')
  ? JSON.parse(localStorage.getItem('carts')!)
  : [];

console.log(carts);
export default class FormsData extends React.Component {
  inputFname: React.RefObject<HTMLInputElement> | null;
  inputLname: React.RefObject<HTMLInputElement> | null;
  inputDate: React.RefObject<HTMLInputElement> | null;
  inputEmail: React.RefObject<HTMLInputElement> | null;
  inputFile: React.RefObject<HTMLInputElement> | null;
  sexF: string;
  sexM: string;
  constructor(props: PropsWithChildren) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputFname = React.createRef();
    this.inputLname = React.createRef();
    this.inputDate = React.createRef();
    this.inputEmail = React.createRef();
    this.inputFile = React.createRef();
    this.sexF = '';
    this.sexM = '';
  }

  handleSubmit(e: React.FormEvent<UsernameFormElement>): void {
    e.preventDefault();
    const cart = {
      name: this.inputFname?.current?.value,
      lastname: this.inputLname?.current?.value,
      date: this.inputDate?.current?.value,
      file: this.inputFile?.current?.value,
      email: this.inputEmail?.current?.value,
      sex: this.sexM ? this.sexM : this.sexF,
    };
    carts.push(cart);
    localStorage.setItem('carts', JSON.stringify(carts));
    this.consolvieu();
  }

  consolvieu() {
    console.log(carts);
  }

  render(): React.ReactNode {
    return (
      <div>
        <div data-testid="forms-page" className="forms">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="fname">
              First name:
              <input type="text" data-testid="fname" name="fname" ref={this.inputFname} required />
            </label>

            <label htmlFor="lname">
              Last name:
              <input type="text" data-testid="lname" name="lname" ref={this.inputLname} required />
            </label>

            <label htmlFor="date-delivery">
              Date delivery:
              <input
                type="date"
                data-testid="date-delivery"
                name="date-delivery"
                ref={this.inputDate}
                required
              />
            </label>

            <label htmlFor="myfile">
              Select a file:
              <input type="file" data-testid="myfile" name="myfile" ref={this.inputFile} required />
            </label>

            <label htmlFor="email">
              Enter your email:
              <input type="email" data-testid="email" name="email" ref={this.inputEmail} required />
            </label>

            <div className="block-form_item">
              <label htmlFor="male">
                male
                <input
                  type="radio"
                  data-testid="male"
                  name="sex"
                  value="male"
                  onClick={(e) => {
                    this.sexM = e.currentTarget.value;
                    this.sexF = '';
                  }}
                ></input>
              </label>

              <label htmlFor="female">
                female
                <input
                  type="radio"
                  data-testid="female"
                  name="sex"
                  value="female"
                  onClick={(e) => {
                    this.sexF = e.currentTarget.value;
                    this.sexM = '';
                  }}
                ></input>
              </label>
            </div>

            <div className="block-form_item">
              <input className="btn-form" type="submit" value="Submit" />
              <input className="btn-form" type="reset" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
