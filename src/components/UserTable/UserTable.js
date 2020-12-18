import React from "react";
import Table from "react-bootstrap/Table"


function UserTable({ results }) {

    console.log(results);

    const name = results[0].name.first + " " + results[0].name.last;
    console.log(name);
    

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
            <td>{results[0].name.first + " " + results[0].name.last}</td>
            <td>{results[0].gender}</td>
            <td>{results[0].dob.age}</td>
            <td>{results[0].email}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{results[1].name.first + " " + results[1].name.last}</td>
            <td>{results[1].gender}</td>
            <td>{results[1].dob.age}</td>
            <td>{results[1].email}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{results[2].name.first + " " + results[2].name.last}</td>
            <td>{results[2].gender}</td>
            <td>{results[2].dob.age}</td>
            <td>{results[2].email}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{results[3].name.first + " " + results[3].name.last}</td>
            <td>{results[3].gender}</td>
            <td>{results[3].dob.age}</td>
            <td>{results[3].email}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{results[4].name.first + " " + results[4].name.last}</td>
            <td>{results[4].gender}</td>
            <td>{results[4].dob.age}</td>
            <td>{results[4].email}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{results[5].name.first + " " + results[5].name.last}</td>
            <td>{results[5].gender}</td>
            <td>{results[5].dob.age}</td>
            <td>{results[5].email}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{results[6].name.first + " " + results[6].name.last}</td>
            <td>{results[6].gender}</td>
            <td>{results[6].dob.age}</td>
            <td>{results[6].email}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{results[7].name.first + " " + results[7].name.last}</td>
            <td>{results[7].gender}</td>
            <td>{results[7].dob.age}</td>
            <td>{results[7].email}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{results[8].name.first + " " + results[8].name.last}</td>
            <td>{results[8].gender}</td>
            <td>{results[8].dob.age}</td>
            <td>{results[8].email}</td>
          </tr>
          <tr>
            <td>10</td>
            <td>{results[9].name.first + " " + results[9].name.last}</td>
            <td>{results[9].gender}</td>
            <td>{results[9].dob.age}</td>
            <td>{results[9].email}</td>
          </tr>
        </tbody>
      </Table>
      </div>
)}

export default UserTable;