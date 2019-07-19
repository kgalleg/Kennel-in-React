import React, { Component } from "react"
import { Link } from "react-router-dom"
import dog from "./DogIcon.svg"
import "./animal.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <img src={dog} className="icon--dog" alt="dog"/>
                        <h5>{this.props.animal.name}</h5>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>

                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                            }}
                            >
                            Edit
                            </button>

                        <button
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</button>
                    </div>
                </div>
            </div>
        )
    }
}

//now animal card can be injected anywhere wehre we need it,
//we need it now in the employee list, so we have to employee list to sent it animals data