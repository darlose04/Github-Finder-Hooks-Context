import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  // this state doesn't need to be App level, it's relevant to this component
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  // if you don't use arrow functions, you have to explicitly bind 'this'
  // this.onSubmit.bind(this) below in the form tag

  onSubmit = e => {
    e.preventDefault(); // using this prevents the default action of it submitting to a file
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      // this will pass the props up to App. Add it as a prop in the Search component in App.js
      // if this happens a lot, it's called prop drilling, sending props up and down the application, which can get messy
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  // once the form is submitted, it's calling onSubmit in the search component,
  // then calling a function in the props called searchUsers and passing in the
  // text. In App.js, we set the prop in the Search component to call
  // this.searchUsers in the App.js

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
