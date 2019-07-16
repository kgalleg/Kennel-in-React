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
  }
}
