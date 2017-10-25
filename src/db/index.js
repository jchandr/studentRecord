const API_URL = 'http://localhost:3001'

export default {
  getStudentRecords (context) {
    const endpoint = API_URL + '/students'
    return context.$http.get(endpoint).then((data) => {
      return data
    })
  }
}
