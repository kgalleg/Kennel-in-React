import React, { Component } from 'react';
import employees from "./employees.svg"
import "./employee.css"
import { Link } from "react-router-dom";

//this is another component
export default class EmployeeList extends Component {
        render() {
            return (
                <section className="employees">
                {/* <h4>Employee List</h4> */}
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={employees} className="icon--employees" alt="employees"/>
                                    <p>{employee.name}</p>
                                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                    <button
                                        onClick={() => this.props.deleteEmployee(employee.id)}
                                        className="card-link">Delete
                                        </button>
                                </div>
                            </div>
                        </div>
                    )
                }
                </section>
            )
        }
    }

    //props - is an object that contains values that we can use inside a /////child component.

//Each component is its own thing, each component can have its own state and props

// this.setState ()  to update state chapter 5?




// original:
// export default class EmployeeList extends Component {
//     render() {
//         return (
//             <section className="employees">
//             {
//                 this.props.employees.map(employee =>
//                     //employee list now has access to employees through //props.
//                     <div key={employee.id}>
//                         {employee.name}
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }