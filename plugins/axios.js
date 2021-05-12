export default function ({ $axios, error: nuxtError }) {
  $axios.onRequest(config => {
    $axios.setHeader('Accept', 'application/json')
    $axios.setHeader('Authorization', 'Bearer qwertyuiopasdfghjklzxcvbnm123456')
  })
}