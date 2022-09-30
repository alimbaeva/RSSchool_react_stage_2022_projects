import React from 'react';
import './search.css';

export default class Search extends React.Component {
  valueInput: string;
  valueInputLS: string | null;
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.valueInput = '';
    this.valueInputLS = localStorage.getItem('valueInput');
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="container">
        <div className="search">
          <input
            type="text"
            value={this.valueInputLS ? this.valueInputLS : 'null'}
            onChange={(e) => (this.valueInput = e.target.value)}
          />
          <div
            className="img-search"
            onClick={() => localStorage.setItem('valueInput', this.valueInput)}
          >
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
            className="search-btn"
            onClick={() => localStorage.setItem('valueInput', this.valueInput)}
          >
            search
          </button>
        </div>
      </div>
    );
  }
}
