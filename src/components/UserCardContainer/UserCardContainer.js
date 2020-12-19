import React, { Component } from "react";
import UserTable from "../UserTable/UserTable";
import API from "../../utils/API";
import AgeBtn from "../AgeBtn/AgeBtn";


class UserCardContainer extends Component {

  state = {
    results: [],
    sort: "male"
  };

  componentDidMount() {
    this.getUsers();
  };

  getUsers = () => {
    API.search()
      .then((res) => {this.setState({ results: res.data.results })})
      .catch(err => console.log(err))
  };

  ageBtnClick = event => {
    console.log("Sort By Age (Young To Old)!");
    // console.log(this.state.results[0].dob.age)
    for (let i = 0; i < this.state.results.length; i++) {
        
    }
  };

  filterByGender = event => {
    console.log("Filter By Gender!")
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
        <AgeBtn ageBtnClick={this.ageBtnClick}></AgeBtn>
        <UserTable results={this.state.results} sort={this.state.sort}></UserTable>
      </div>
      );
  }
}


export default UserCardContainer;