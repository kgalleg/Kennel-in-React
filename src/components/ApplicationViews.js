import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import LocationList from './location/LocationList'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import OwnerList from './owner/OwnerList'
import AnimalManager from '../modules/AnimalManager'
import LocationsManager from '../modules/LocationsManager'
import OwnersManager from '../modules/OwnersManager'
import EmployeeManager from '../modules/EmployeeManager'



// const url = "http://localhost:5002/"

class ApplicationViews extends Component {

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
        search: []
    }


    componentDidMount() {
        const newState = {}

        AnimalManager.getAll()
        // fetch("http://localhost:5002/animalsFromAPI")
        //     .then(r => r.json())
            .then(animals => newState.animals = animals)

         EmployeeManager.getAll()

            // .then(() => fetch("http://localhost:5002/employeesFromAPI")
            // .then(r => r.json()))
            .then(employees => newState.employees = employees)

        LocationsManager.getAll()

            // .then(() => fetch("http://localhost:5002/locationsFromAPI")
            // .then(r => r.json()))
            .then(locations => newState.locations = locations)

            OwnersManager.getAll()
            // .then(() => fetch("http://localhost:5002/ownersFromAPI")
            // .then(r => r.json()))
            .then(owners => newState.owners= owners)

            .then(() => this.setState(newState))
    }



    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animalsFromAPI/${id}`, {
            method: "DELETE"
        })
    .then(AnimalManager.getAll)
    .then(animals => {
        this.props.history.push("/animals")
        this.setState({ animals: animals })
    })
        // .then(e => e.json())
        // .then(() => fetch(`http://localhost:5002/animalsFromAPI`))
        // .then(e => e.json())
        // .then(animals => this.setState({
        //     animals: animals
        //})
      //)
    }
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employeesFromAPI/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employeesFromAPI`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        })
      )
    }
    deleteOwner = id => {
        return fetch(`http://localhost:5002/ownersFromAPI/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/ownersFromAPI`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        })
      )
    }










    addAnimal = (animal) =>
    AnimalManager.post(animal)
      .then(() => AnimalManager.getAll())
      .then(animals =>
        this.setState({
          animals: animals
        })
      );




    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} animals={this.state.animals}
                    owners={this.state.owners} deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    let animal = this.state.animals.find(animal =>
                    animal.id === parseInt(props.match.params.animalId)
                    )

                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }

                    return <AnimalDetail animal={animal} dischargeAnimal={this.deleteAnimal}/>

                }} />
                    <Route path="/animals/new" render={(props) => {
                    return <AnimalForm
                    {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                    deleteEmployee={this.deleteEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner}/>
                }} />
                {/* <Route path="/search" render={(props) => {
                    // return <SearchResults />
                }} /> */}
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)




// APImanager.get for search?





//history, location and match -given to you by the router...
//props in parenthesis as argument - what is given to you by the router

//componentDid MOunt

//props - data thats been sent down from parent componenent

//  \d is regex - like secret code - here is a pattern - if it matches or doesnt then do this.
// \d one digin from 0 to 9 you could do \d\d  the + means one or more...


//...props tells js that you want to iterate in whatever items in whatever props is in. props as an argument isbeing passed as an argument (props)
                    //route itself is a react component - child componenet of application views
                    //...props joins two objects - pulling each property out and sticking
                    //takes one props object and adding it to another props object.
                    //when i need history, need...props or use withRouther on every export default