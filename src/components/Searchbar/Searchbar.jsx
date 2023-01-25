import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.value);
  };

  render() {
    return (
      <>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="search"
            placeholder="search"
            aria-label="search"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className="SearchForm-button">Search</button>
        </form>
      </>
    );
  }
}

export default Searchbar;
