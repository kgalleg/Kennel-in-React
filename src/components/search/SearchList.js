import React, { Component } from 'react';


export default class SearchList extends Component {

render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <ul>
              {this.state.search.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}




// export default class OwnerList extends Component {
//     render() {
//         return (
//             <section className="owners">
//             {
//                 this.props.owners.map(owner =>
//                     <div key={owner.id}>
//                        <p>Owner Name: {owner.name}</p>
//                        <p>Phone: {owner.phoneNumber}</p> <br/>
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }