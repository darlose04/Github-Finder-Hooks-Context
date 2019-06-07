import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// change class to functional component since it does not need state (until hooks were introduced, state could not be used with functional components)
// no longer need to use 'this' since it is just a function and not a class
// class UserItem extends Component {}
const UserItem = ({ user: { login, avatar_url } }) => {
  // two different ways of doing state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: "id",
  //     login: "mojombo",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo"
  //   };
  // }

  // STATE MOVES TO THE USERS.JS
  // state = {
  //   id: "id",
  //   login: "mojombo",
  //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //   html_url: "https://github.com/mojombo"
  // };

  // this is no longer needed because it can be destructured as an argument above
  // const { login, avatar_url, html_url } = props.user; // this comes from the prop of user that was passed into the UserItem tag in Users.js
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
