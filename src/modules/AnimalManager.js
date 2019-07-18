const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animalsFromAPI/${id}`)
    .then(animalData => animalData.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animalsFromAPI`)
    .then(animalData => animalData.json())
  },

    post(newAnimal) {
    return fetch(`${remoteURL}/animalsFromAPI`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },

  //this is used in chapter 11 - edit 
  put(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
}






// import APIManager from "./APIManager"

// const remoteURL = "http://localhost:5002"

//   /*
//     Remember that the first argument for Object.create() is the
//     object that will be in this object's prototype chain.
// */

// /*
// if desired, one could add properties specific to a certain resource using the properties inherited from APIManager
// */
// export default Object.create(APIManager, {

//   get(id) {
//     return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
//   },
//   getAll() {
//     return fetch(`${remoteURL}/animals`).then(e => e.json())
//   }
// })
