import React, { Component } from "react"
import "./animal.css"
import dog from "./DogIcon.svg"

export default class AnimalDetail extends Component {
    state = {
        saveDisabled: false
    }
//you have a state component here because it will only be local to Animal detail
// it does not need to be shared anywhere else only here in this component
//this set state has nothing to do with the rest of the applicaiton its just local to this component

    render() {
        return (
            <section className="animal">
                <div key={ this.props.animal.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog" alt="puppy"/>
                            { this.props.animal.name }
                        </h4>
                        <h6 className="card-title">{ this.props.animal.breed }</h6>
                        <button onClick={
                                () => { //this is setting its own state
                                    this.setState(
                                        { saveDisabled: true }, //this means to change the state of the button
                                        () => this.props.dischargeAnimal(this.props.animal.id) //dischargeAnimal is a function passed down from AnimalList?
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