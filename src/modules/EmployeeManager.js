const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employeesFromAPI/${id}`)
    .then(employeeData => employeeData.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employeesFromAPI`)
    .then(employeeData => employeeData.json())
  },

    post(newEmployee) {
    return fetch(`${remoteURL}/employeesFromAPI`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  }
}

