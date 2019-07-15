import React, { Component } from 'react';
import dog from "./DogIcon.svg"
import "./animal.css"

export default class AnimalList extends Component {
        render() {
            return (
                <section className="animals">
                    {/* <h3>Animals</h3> */}
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={dog} className="icon--dog" alt="cute doggy"/>
                                    <h5>{animal.name}</h5>
                                    <div>Owner Name: <br/> {this.props.owners.find(owner =>
                                     owner.id === animal.ownerId).name}</div>
                                    <button
                                        onClick={() => this.props.deleteAnimal(animal.id)}
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



    //instead of find, you can use filter method to add multiple owners.


//animal is just taco, it can be whatever,
//so when you map through the array of animals, it
//that goes to animal, which is taco, and then grabs animal.id
//which is the key and then gets the animal.name and puts that int he DOM




// export default class AnimalList extends Component {
//     render() {
//         return (
//             <section className="animals">
//                 <h3>Animals</h3>
//                 <ul>
//             {
//                 this.props.animals.map( animal =>
//                     <li key={animal.id}>
//                         {animal.name}
//                         {
//                             this.props.owners.map(owner =>
//                                 owner.id === animal.ownerId ? <h5 key={owner.id}> {owner.name}</h5> : ""
//                                 )
//                         }
//                     </li>
//                 )
//             }
//             </ul>
//             </section>
//         )
//     }
// }



