const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/locationsFromAPI/${id}`)
    .then(locationData => locationData.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locationsFromAPI`)
    .then(locationData => locationData.json())
  },

    post(newLocation) {
    return fetch(`${remoteURL}/locationsFromAPI`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLocation)
    }).then(data => data.json())
  }
}