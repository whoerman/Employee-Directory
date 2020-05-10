import React, { Component } from 'react';
import Employeecard from './Employeecard';

class Employees extends Component {
    render() {
        return (
            <div>
                {this.props.employees.filter( (employee) => {
                if (JSON.stringify(employee).includes(this.props.search)) {
                    return true
                }
                    return false
                // return true
                }).map(employee => (
                    <Employeecard key={employee.id} employee={employee} />
                ))}
            </div>
        );
    }



}

export default Employees