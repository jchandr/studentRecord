const API_URL = 'http://localhost:3001/'

export default {
  getMSStudentRecords (context) {
    const endpoint = API_URL + 'students/ms'
    return context.$http.get(endpoint).then(({body}) => {
      return body
    })
  },
  getPhDStudentRecords (context) {
    const endpoint = API_URL + 'students/phd'
    return context.$http.get(endpoint).then(({body}) => {
      return body
    })
  }
}
