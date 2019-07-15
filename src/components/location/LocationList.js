import React, { Component } from 'react';


//this is another component
export default class LocationList extends Component {
        render() {
            return (
                <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name}
                        </div>
                    )
                }
                </section>
            )
        }
    }