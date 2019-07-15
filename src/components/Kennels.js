    import React, { Component } from "react"
    import NavBar from "./nav/NavBar"
    import ApplicationViews from "./ApplicationViews"

    import "./kennel.css"
    import "bootstrap/dist/css/bootstrap.min.css"


    export default class Kennel extends Component {
        render() {
            return (
                <React.Fragment>
                    <NavBar />
                    <ApplicationViews />
                </React.Fragment>
            )
        }
    }





//employees and foo is now part of Props properties.
//props is an object created in our behalf to make data available on or behalf, so it can use that data.
//the child component received the data in an object in a prop.

