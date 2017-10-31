const API_URL = 'http://52.38.180.245:3001'

export default {
  getMSStudentRecords (context) {
    const endpoint = API_URL + '/students/MS'
    return context.$http.get(endpoint).then((data) => {
      return data
    })
  },
  getPhDStudentRecords (context) {
    const endpoint = API_URL + '/students/PHD'
    return context.$http.get(endpoint).then((data) => {
      return data
    })
  }
}
