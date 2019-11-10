import api from 'axios'

// set up axios
api.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

export default api
