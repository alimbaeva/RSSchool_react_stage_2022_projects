import React from 'react';
import './style/forms.css';

export default class Forms extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <div data-testid="forms-page" className="forms">
          <h2>Forms</h2>
          <form>
            <label htmlFor="fname">
              First name:
              <input type="text" data-testid="fname" name="fname" />
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
