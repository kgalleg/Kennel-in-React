import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
// import OwnerList from './owner/OwnerList'


const url = "http://localhost:5002/"

export default class ApplicationViews extends Component {

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
        search: []
    }

    componentDidMount() {
        const newState = {}

        fetch(`${url}animalsFromAPI`)
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employeesFromAPI")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locationsFromAPI")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => this.setState(newState))
    }



    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animalsFromAPI/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animalsFromAPI`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }





    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/search" render={(props) => {
                    return <searchList />
                }} />
            </React.Fragment>
        )
    }
}






//history, location and match -given to you by the router...
//props in parenthesis as argument - what is given to you by the router

//componentDid MOunt