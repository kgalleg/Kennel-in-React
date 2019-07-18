import React, { Component } from 'react';
import employees from "./employees.svg"
import "./employee.css"
import { Link } from "react-router-dom";
import AnimalCard from "../animal/AnimalCard"

//this is another component
export default class EmployeeList extends Component {
        render() {
            return (
                <section className="employees">
                {/* <h4>Employee List</h4> */}
                {
                    <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card card--employee">
                        <div className="card-body">
                            <div className="card-title">
                            <img src={employees} className="icon--employees" alt="employees"/>
                                <h5>{employee.name}</h5>
                            <a href="#"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</a>
                            </div>
{/* //this above is a representation of one employee */}
                            <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            {/* take all the props passed to animalLIst and pass them down */}
                            </div>

                        </div>
                    </div>
                )
            }
            </section>

//.filter .map - end results is an array - and it will be rendering it
//state of animal list is in application views... animals{this.state.animals}
//when you call filter, you get an array - so its running filter on all the animals,
//filter is a test, if that evaluates to true, then that will be added to the new array that is being created... since filter creates an array, then we can add a .map to it.
//for every animal that this employee is incharge of, make an animal card. key, then pass one animal object at a time animal = {anml}

//this was my code before the above
                    // this.props.employees.map(employee =>
                    //     <div key={employee.id} className="card">
                    //         <div className="card-body">
                    //             <div className="card-title">
                    //                 <img src={employees} className="icon--employees" alt="employees"/>
                    //                 <p>{employee.name}</p>
                    //                 <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                    //                 <button
                    //                     onClick={() => this.props.deleteEmployee(employee.id)}
                    //                     className="card-link">Delete
                    //                     </button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // )
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