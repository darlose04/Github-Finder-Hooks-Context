import React, { useState } from "react";
import PropTypes from "prop-types";

// convert to function component for hooks
// props are now brought in as arguments
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  // don't use it like this since we're using hooks
  // state = {
  //   text: ""
  // };

  const [text, setText] = useState("");

  // remove references to 'this'

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  // remove this.setState and just set it to the value we want to set it
  const onChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
    setText(e.target.value);
  };

  // this stuff gets brought in as an arg in the arrow function
  // const { showClear, clearUsers } = this.props;

  // since this is no longer in a Class, we can remove 'this'
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
