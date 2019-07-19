import React, { Component } from "react"
import "./employee.css"
import employees from "./employees.svg"


export default class EmployeeDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employee">
                <div key={ this.props.employee.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        <img src={employees} className="icon--employees" alt="employees"/>
                                {this.props.employee.name}
                        </h4>
                        <h6 className="card-title">{ this.props.employee.position }</h6>
                        <button onClick={
                                () => {this.setState(
                                        { saveDisabled: true },
                                        () => this.props.dischargeEmployee(this.props.employee.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}