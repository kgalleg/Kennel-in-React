// import React, { Component } from 'react';


// export default class SearchResults extends Component {

// render() {
//     return (
//       <section className="search">
//         {

//                         this.state.search.map(item => (
// //                 <li key={item}>{item}</li>
// //
//                        <input type="text" id="keypress" onKeyPress={(event)=>
//                             this.add(event)}/>

// }             onKeyPress={(item) => this.props.search()}
// //                                     <li key={item}>{item}</li>
// //               ))}
// //
//           </section>
// //         </div>
// //       </div>
// //     )
// //   }
// // }










// // // export default class OwnerList extends Component {
// // //     render() {
// // //         return (
// // //             <section className="owners">
// // //             {
// // //                 this.props.owners.map(owner =>
// // //                     <div key={owner.id}>
// // //                        <p>Owner Name: {owner.name}</p>
// // //                        <p>Phone: {owner.phoneNumber}</p> <br/>
// // //                     </div>
// // //                 )
// // //             }
// // //             </section>
// // //         )
// // //     }
// // // }


// // export default class AnimalList extends Component {
// //     render() {
// //         return (
// //             <section className="search">
// //             {
// //                 this.props.animals.map(animal =>
// //                     <div key={animal.id} className="card">
// //                         <div className="card-body">
// //                             <div className="card-title">
// //                                 <img src={dog} className="icon--dog" alt="cute doggy"/>
// //                                 <h5>{animal.name}</h5>
// //                                 <div>Owner Name: <br/> {this.props.owners.find(owner =>
// //                                 //instead of find, you can use filter method to add multiple owners.
// //                                  owner.id === animal.ownerId).name}</div>
// //                                 <button
// //                                     onKeyPress={() => this.props.deleteAnimal(animal.id)}
// //                                     className="card-link">Delete</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )
// //             }
// //             </section>
// //         )
// //     }
// // }