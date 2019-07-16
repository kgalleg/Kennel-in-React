const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/ownersFromAPI/${id}`)
    .then(locationData => locationData.json())
  },
  getAll() {
    return fetch(`${remoteURL}/ownersFromAPI`)
    .then(locationData => locationData.json())
  },

    post(newOwner) {
    return fetch(`${remoteURL}/ownersFromAPI`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    }).then(data => data.json())
  }
}