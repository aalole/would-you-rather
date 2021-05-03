import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Image } from "semantic-ui-react";
import { setAuthorized } from "../actions/authUser";
import "../css/nav.css";

const Navigations = (props) => {
  const { setAuthorized, authUser, users } = props;

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthorized(null);
  };
  return (
    <div>
      <div className="nav-wrapper">
        <Link className="link" to="/">
          home
        </Link>
        <Link className="link" to="/create-new-poll">
          create new poll
        </Link>
        <Link className="link" to="/board">
          leader board{" "}
        </Link>
        <Menu.Menu>
          <Menu.Item>
            <span>
              <Image
                src={users[authUser].avatarURL}
                avatar
                spaced="right"
                verticalAlign="bottom"
              />
              {users[authUser].name}
            </span>
          </Menu.Item>
          <Menu.Item className="logout">
            <button className="logoutbtn"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </Menu.Item>
        </Menu.Menu>
      </div>
    </div>
  );
};

function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users,
  };
}

export default connect(mapStateToProps, {setAuthorized })(Navigations);
