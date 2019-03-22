export default ({ $axios, store }) => {
  if (process.server) {
    return
  }

  $axios.interceptors.request.use((request) => {
    // Get token from auth.js store
    const auth = store.state.auth.auth

    // Update token axios header
    if (auth) {
      request.headers.common.Authorization = auth.token
    }
    return request
  })
}
