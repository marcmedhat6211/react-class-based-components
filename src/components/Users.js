import { useState, Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    /**
     * to initialize the state, you have to do it in the class constructor
     * in class based component, the state is ALWAYS an object
     * and it has to have the name "state"
     * it is only one state object that groups all the states together
     */
    super();
    this.state = {
      showUsers: true,
      anotherState: "another state",
    };
  }

  // will work once a user is removed from the DOM elements
  componentWillUnmount() {
    console.log("User will unmount!");
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No Users provided!");
    }
  }

  toggleUsersHandler() {
    /**
     * this method doesn't replace the old object, but it merges its values with the old object, it just changes the required value
     * this is of course done by react behind the scenes
     */
    this.setState((curState) => {
      // a special method coming from the component class
      return { showUsers: !curState.showUsers }; // this will only overrides the showUsers value in the state object
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {" "}
          {/* you have to bind the this keyword so that you make sure you are talking about this class */}
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
