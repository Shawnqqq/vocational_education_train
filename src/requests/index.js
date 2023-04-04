import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b/64241d5cace6f33a22ff9305',
  headers: {'X-MASTER-KEY': '$2b$10$OrkBWFpQUsHApH8EEzNiYeGkWhEYVs3XVUaqNLbVubOyWU29wwSba'}
});

instance.interceptors.response.use(res => {
  if(res.data && res.data.record) {
    return res.data.record.data
  }
  return Promise.reject();
})

const getAccount = function() {
  return new Promise((resolve, reject) => {
    instance.get().then(resolve, reject)
  });
}

export default getAccount;
