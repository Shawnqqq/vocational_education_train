import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b/642c0d45ebd26539d0a448fc',
  headers: {'X-MASTER-KEY': '$2b$10$oErvtjx5jDj31bBmd7aeBedMhaz.883M.tH6fwoJuxHqmasz7H4mu'}
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
