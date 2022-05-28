import { Component } from "react";

import classes from "./User.module.css";

/**
 * The class based component is an alternative way of creating components
 * you have to extend from class Component which gives you the ability to turn that class into a component and to use the props keyword which is a property of that parent class
 */
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
