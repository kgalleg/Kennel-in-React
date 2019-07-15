import React, { Component } from 'react';


//this is another component
export default class EmployeeList extends Component {
        render() {
            return (
                <section className="employees">
                {
                    this.props.employees.map(employee =>
                        //employee list now has access to employees through //props.
                        <div key={employee.id}>
                            {employee.name}
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
