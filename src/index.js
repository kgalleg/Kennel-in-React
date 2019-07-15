import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennels'

import './index.css'



ReactDOM.render(
    <Router>
        <Kennel />
    </Router>
    , document.getElementById('root'))





// ReactDOM.render(<Kennel />, document.getElementById('root'))

//component is another funciton that will return another object to us that has a bunch of methods and values on it.
//when I make a Kennel, it will contain all the properties of the component object when I make it.

//this is a factory function that returns something to you

//do this when you want to make a component class Kennel extends Component
//Kennel is the top level parent component, the only one that you need to render
//Kennel is a function that calls another function which is EmployeeList

