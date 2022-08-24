import axios from 'axios'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/darvas'

 const api = axios.create({
    baseURL: url,
  });

  export default api;