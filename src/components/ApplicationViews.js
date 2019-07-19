import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import LocationList from './location/LocationList'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import AnimalManager from '../modules/AnimalManager'
// import LocationsManager from '../modules/LocationsManager'
// import OwnersManager from '../modules/OwnersManager'
// import EmployeeManager from '../modules/EmployeeManager'
import APIManager from '../modules/APIManager'
import Login from './authentication/Login'
import AnimalEditForm from './animal/AnimalEditForm'

// const url = "http://localhost:5002/"

class ApplicationViews extends Component {

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
    }



    componentDidMount() {
        const newState = {};

                 APIManager.all("animalsFromAPI")
      .then(animals => (newState.animals = animals))
      .then(() => APIManager.all("employeesFromAPI"))
      .then(employees => (newState.employees = employees))
      .then(() => APIManager.all("locationsFromAPI"))
      .then(locations => (newState.locations = locations))
      .then(() => APIManager.all("ownersFromAPI"))
      .then(owners => (newState.owners = owners))
      .then(() => this.setState(newState))
  }



    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    //this will return true or false/ yes or no



    //another way to delete below:
    deleteAnimal = (id) => {
        return APIManager.delete("animalsFromAPI", id)
          .then(() => APIManager.all("animalsFromAPI"))
          .then(animals => {
            this.props.history.push("/animals");
            this.setState({ animals: animals });
          });
      };

      deleteOwner = (id) => {
        return APIManager.delete("ownersFromAPI", id)
          .then(() => APIManager.all("animalsFromAPI"))
          .then(owners => {
            this.props.history.push("/owners");
            this.setState({ owners: owners });
          });
      };

      deleteEmployee = (id) => {
        return APIManager.delete("employeesFromAPI", id)
          .then(() => APIManager.all("employeesFromAPI"))
          .then(employees => {
            this.props.history.push("/employees");
            this.setState({ employees: employees });
          });
      };


//original add animal from chapter 8
    // addAnimal = (animal) =>
    // AnimalManager.post(animal)
    //   .then(() => AnimalManager.getAll())
    //   .then(animals =>
    //     this.setState({
    //       animals: animals
    //     })
    //   );

      addAnimal = (animal) =>
      APIManager.post("animalsFromAPI", animal)
      .then(() => APIManager.all("animalsFromAPI"))
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

      addEmployee = (employee) =>
      APIManager.post("employeesFromAPI", employee)
      .then(() => APIManager.all("employeesFromAPI"))
      .then(employees =>
        this.setState({
          employees: employees
        })
      );


//chapter 11 edit animal
      updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
        .then(() => AnimalManager.getAll())
        .then(animals => {
          this.setState({
            animals: animals
          })
        });
      };


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                    animals={this.state.animals}
                    owners={this.state.owners}
                    deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    let animal = this.state.animals.find(animal =>
                    animal.id === parseInt(props.match.params.animalId)
                    )
//if animal isn't found create a default one like this below
                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }

                    return <AnimalDetail animal={animal} dischargeAnimal={this.deleteAnimal}/>

                }}
                />
                    <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal}/>
                    }}/>

                    <Route path="/animals/new" render={(props) => {
                    return <AnimalForm
                    {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                }}
                />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList
                        deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees}
                        animals={this.state.animals} />
                        //argument passed into this that will create a key names animals, or employees or delteEmployee
                    } else {
                        return <Redirect to="/login" />
                    }
                    // return <EmployeeList employees={this.state.employees}
                    // deleteEmployee={this.deleteEmployee} /> this was the original code
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm
                    {...props}
                       addEmployee={this.addEmployee}
                       animals={this.state.animals} />
                }}
                />

                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                    employee.id === parseInt(props.match.params.employeeId)
                    )

                    if (!employee) {
                        employee = {id:404, person: "404", name: "Employee not found"}
                    }

                    return <EmployeeDetail
                    employee={employee}
                    dischargeEmployee={this.deleteEmployee}/>
                }}/>

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner}/>
                } else {
                    return <Redirect to="/login" />
                    }
                }} />


                <Route path="/login" component={Login} />
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



                    //this below was the original fetch call and used separate modules inside the modules folder

    //     AnimalManager.getAll()
    //     // fetch("http://localhost:5002/animalsFromAPI")
    //     //     .then(r => r.json())
    //         .then(animals => newState.animals = animals)

    //      EmployeeManager.getAll()

    //         // .then(() => fetch("http://localhost:5002/employeesFromAPI")
    //         // .then(r => r.json()))
    //         .then(employees => newState.employees = employees)

    //     LocationsManager.getAll()

    //         // .then(() => fetch("http://localhost:5002/locationsFromAPI")
    //         // .then(r => r.json()))
    //         .then(locations => newState.locations = locations)

    //         OwnersManager.getAll()
    //         // .then(() => fetch("http://localhost:5002/ownersFromAPI")
    //         // .then(r => r.json()))
    //         .then(owners => newState.owners= owners)

    //         .then(() => this.setState(newState))
    // }

    //Deleteting that works right now....
    // deleteAnimal = id => {
    //     return fetch(`http://localhost:5002/animalsFromAPI/${id}`, {
    //         method: "DELETE"
    //     })
    // .then(AnimalManager.getAll)
    // .then(animals => {
    //     this.props.history.push("/animals")
    //     this.setState({ animals: animals })
    // })
    //     // .then(e => e.json())
    //     // .then(() => fetch(`http://localhost:5002/animalsFromAPI`))
    //     // .then(e => e.json())
    //     // .then(animals => this.setState({
    //     //     animals: animals
    //     //})
    //   //)
    // }

    // deleteEmployee = id => {
    //     return fetch(`http://localhost:5002/employeesFromAPI/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:5002/employeesFromAPI`))
    //     .then(e => e.json())
    //     this.props.history.push("/employees")
    //     .then(employees => this.setState({employees: employees})
    //   )
    // }

    // Chapter 5 stretch goal delete (another way to delete if refactored)
    // deleteAnimal = (id) => {
    //     return APIManager.removeAndList(id)
    //     .then(animals => this.setState({
    //         animals: animals
    //       })
    //     )
    //   }


    //old version
    // deleteOwner = id => {
    //     return fetch(`http://localhost:5002/ownersFromAPI/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:5002/ownersFromAPI`))
    //     .then(e => e.json())
    //     .then(owners => this.setState({
    //         owners: owners
    //     })
    //   )
    // }