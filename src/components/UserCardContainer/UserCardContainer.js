import React, { Component } from "react";
import UserTable from "../UserTable/UserTable";
import API from "../../utils/API";
import AgeBtn from "../AgeBtn/AgeBtn";
import MalesBtn from "../FilterByMalesBtn/FilterByMalesBtn"
import FemalesBtn from "../FilterByFemalesBtn/FilterByFemalesBtn"


class UserCardContainer extends Component {

  state = {
    results: [],
    sort: "main"
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
    this.setState({ sort: "age" });
  };

  showMales = event => {
    console.log("Filter By Males!")
    this.setState({ sort: "male" })
  }

  showFemales = event => {
    console.log("Filter By Females")
    this.setState({ sort: "female" })
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
        <div>
        <AgeBtn ageBtnClick={this.ageBtnClick}></AgeBtn>
        <MalesBtn filterMales={this.showMales}></MalesBtn>
        <FemalesBtn filterFemales={this.showFemales}></FemalesBtn>
        </div>
        <UserTable results={this.state.results} sort={this.state.sort}></UserTable>
      </div>
      );
  }
}


export default UserCardContainer;