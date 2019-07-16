import React, { Component } from 'react';
import owners from "./owners.svg"
import "./owner.css"
import { Link } from "react-router-dom";



export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                    <div className="card-body">
                            <div className="card-title">
                                <img src={owners} className="icon--owners" alt="owners"/>

                       <p>Owner Name: {owner.name}</p>
                       <p>Phone: {owner.phoneNumber}</p> <br/>
                       <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
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

