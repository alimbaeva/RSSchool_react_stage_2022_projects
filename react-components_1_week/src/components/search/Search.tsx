/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import './search.css';

// interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> { }

export default class Search extends React.Component<{}, { value: string }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    let valueI: string | null = '';
    if (localStorage.getItem('valueInput')) {
      valueI = localStorage.getItem('valueInput');
    }
    if (valueI) {
      this.setState({ value: valueI });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.value);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="search">
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div className="img-search">
            <img
              className="img-search__search"
              src="https://i.ibb.co/Vvy864S/search.png"
              alt="search"
            />
            <img
              className="img-search__close"
              src="https://i.ibb.co/CMChtYx/close-2.png"
              alt="close-2"
            />
          </div>
          <button
            type="submit"
            className="search-btn"
            onClick={() => localStorage.setItem('valueInput', this.state.value)}
          >
            search
          </button>
        </form>
      </div>
    );
  }
}
