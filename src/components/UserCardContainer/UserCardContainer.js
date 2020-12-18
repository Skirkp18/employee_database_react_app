import React, { Component } from "react";
import UserTable from "../UserTable/UserTable";
import API from "../../utils/API";


class UserCardContainer extends Component {

  state = {
    results: []
  };

  componentDidMount() {
    this.getUsers();
  };

  getUsers = () => {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err))
  };

  handleBtnClick = event => {
    console.log("click");
  }

  render() {
    // console.log(this.state.results)
    if (this.state.results.length === 0) {
      return (
        <div>
          <h1>Loading Employees!</h1>
        </div>
      )
    }
    return (
      <div>
        <UserTable results={this.state.results}></UserTable>
      </div>
      );
  }
}


export default UserCardContainer;