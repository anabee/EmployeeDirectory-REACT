import React from "react"; 
import TableRows from "./TableRows";

function Table(props){
    // console.log(props.employees)
    // const employeeList = props.employees.results;

    return (
        <div className="container">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  {
      props.employees.map(employee => (
        <TableRows 
        key = {employee.id.value}
        picture = {employee.picture.thumbnail}
        name = {employee.name.first}
        lastname = {employee.name.last}
        phone = {employee.phone}
        email = {employee.email}
        dob = {employee.dob.date}
        />
      ))
  }
  
</table>
        </div>
    ); 
}

export default Table; 