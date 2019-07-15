import React, { Component } from 'react';




export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                       <p>Owner Name: {owner.name}</p>
                       <p>Phone: {owner.phoneNumber}</p> <br/>
                    </div>
                )
            }
            </section>
        )
    }
}
