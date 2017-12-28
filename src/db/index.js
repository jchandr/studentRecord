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
  },
  getStudentInfo (context, id) {
    const endpoint = API_URL + 'students/' + id
    return context.$http.get(endpoint).then(({body}) => {
      return body
    })
  },
  getStudentFundingInfo (context, id) {
    const endpoint = API_URL + 'students/' + id + '/funding'
    return context.$http.get(endpoint).then(({body}) => {
      return body
    })
  },
  createStudentFundingInfo (context, id, data) {
    const endpoint = API_URL + 'students/' + id + '/funding'
    return context.$http.post(endpoint, data).then(({body}) => {
      return body
    })
  }
}
