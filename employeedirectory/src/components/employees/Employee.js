import React, { Component } from 'react';
import Employeecard from './Employeecard';
//import Search from './Search';

class Employees extends Component {
    render() {
        return (
            <div>
                {this.props.employees.filter( (employee) => {
                // if (JSON.stringify(employee.name).contains(Search.userInput)) {
                //     return true
                // }
                //     return false
                return true
                }).map(employee => (
                    <Employeecard key={employee.id} employee={employee} />
                ))}
            </div>
        );
    }



}

export default Employees