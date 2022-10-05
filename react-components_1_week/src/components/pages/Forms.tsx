import React, { PropsWithChildren } from 'react';
import './style/forms.css';

type State = {
  name?: string;
};

interface FormElements extends HTMLFormControlsCollection {
  fname: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly: FormElements;
}

// DetailedHTMLProps<HTMLAttributes<HTMLDivElement>>
export default class Forms extends React.Component {
  input: React.RefObject<HTMLInputElement> | null;
  // input: React.RefObject<HTMLInputElement> | null;
  state: State;
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(e: React.FormEvent<UsernameFormElement>): void {
    alert('Отправленное имя: ' + this.input?.current?.value);
    this.setState({
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
    });
    // event.preventDefault();
  }

  render(): React.ReactNode {
    return (
      <div className="container">
        <div data-testid="forms-page" className="forms">
          <h2>Forms</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="fname">
              First name:
              <input type="text" data-testid="fname" name="fname" ref={this.input} />
            </label>

            <label htmlFor="lname">
              Last name:
              <input type="text" data-testid="lname" name="lname" />
            </label>

            <label htmlFor="date-delivery">
              Date delivery:
              <input type="date" data-testid="date-delivery" name="date-delivery" />
            </label>

            <label htmlFor="myfile">
              Select a file:
              <input type="file" data-testid="myfile" name="myfile" />
            </label>

            <label htmlFor="email">
              Enter your email:
              <input type="email" data-testid="email" name="email" />
            </label>

            <div className="block-form_item">
              <label htmlFor="male">
                male
                <input type="radio" data-testid="male" name="sex" value="male"></input>
              </label>

              <label htmlFor="female">
                female
                <input type="radio" data-testid="female" name="sex" value="female"></input>
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
