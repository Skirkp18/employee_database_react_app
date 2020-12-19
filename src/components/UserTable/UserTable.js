import React from "react";
import Table from "react-bootstrap/Table"


function UserTable({ results, sort }) {

    console.log(results);

    let usersArray = [];

    
    for (let i = 0; i < results.length; i++) {


        const user = {
         name: results[i].name.first + " " + results[i].name.last,
         gender: results[i].gender,
         age: results[i].dob.age,
         email: results[i].email
        }

        usersArray.push(user);

    }

    console.log(usersArray);

    if (sort === "age") {
       usersArray.sort((a, b) => (a.age > b.age) ? 1 : -1); 
    }


    if (sort === "male") {

        usersArray = usersArray.filter((obj) => {
            return obj.gender === "male"})
        console.log(usersArray);

        const tableItems = [];

        for (let i = 0; i < usersArray.length; i++) {

           const name = usersArray[i].name;
           const gender = usersArray[i].gender;
           const age = usersArray[i].age;
           const email = usersArray[i].email;

            tableItems.push(<tr key={i}><th>{i}</th><th>{name}</th><th>{gender}</th><th>{age}</th><th>{email}</th></tr>)
        }

        console.log(tableItems);

        return (<div>
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {tableItems}           
        </tbody>
        </Table>
        </div>)


    } else if (sort === "female") {
        usersArray = usersArray.filter((obj) => {
            return obj.gender === "female"})
        console.log(usersArray);

        const tableItems = [];

        for (let i = 0; i < usersArray.length; i++) {

           const name = usersArray[i].name;
           const gender = usersArray[i].gender;
           const age = usersArray[i].age;
           const email = usersArray[i].email;

            tableItems.push(<tr key={i}><th>{i}</th><th>{name}</th><th>{gender}</th><th>{age}</th><th>{email}</th></tr>)
        }

        console.log(tableItems);

        return (<div>
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {tableItems}           
        </tbody>
        </Table>
        </div>)
    } 

    return ( <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{usersArray[0].name}</td>
            <td>{usersArray[0].gender}</td>
            <td>{usersArray[0].age}</td>
            <td>{usersArray[0].email}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{usersArray[1].name}</td>
            <td>{usersArray[1].gender}</td>
            <td>{usersArray[1].age}</td>
            <td>{usersArray[1].email}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{usersArray[2].name}</td>
            <td>{usersArray[2].gender}</td>
            <td>{usersArray[2].age}</td>
            <td>{usersArray[2].email}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{usersArray[3].name}</td>
            <td>{usersArray[3].gender}</td>
            <td>{usersArray[3].age}</td>
            <td>{usersArray[3].email}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{usersArray[4].name}</td>
            <td>{usersArray[4].gender}</td>
            <td>{usersArray[4].age}</td>
            <td>{usersArray[4].email}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{usersArray[5].name}</td>
            <td>{usersArray[5].gender}</td>
            <td>{usersArray[5].age}</td>
            <td>{usersArray[5].email}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{usersArray[6].name}</td>
            <td>{usersArray[6].gender}</td>
            <td>{usersArray[6].age}</td>
            <td>{usersArray[6].email}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{usersArray[7].name}</td>
            <td>{usersArray[7].gender}</td>
            <td>{usersArray[7].age}</td>
            <td>{usersArray[7].email}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{usersArray[8].name}</td>
            <td>{usersArray[8].gender}</td>
            <td>{usersArray[8].age}</td>
            <td>{usersArray[8].email}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>{usersArray[9].name}</td>
            <td>{usersArray[9].gender}</td>
            <td>{usersArray[9].age}</td>
            <td>{usersArray[9].email}</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )}


export default UserTable;