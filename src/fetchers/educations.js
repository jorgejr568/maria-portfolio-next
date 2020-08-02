import fetcher from './index'
import api_normalizer from '../normalizer/api'

const fetch_educations = () => {
  return new Promise(resolve => {
    fetcher.get('/educations').then(({ data: { data: api_resources } }) => {
      const normalized_resources = api_resources.map(api_normalizer)
      resolve(normalized_resources)
    })
  })
}

export default fetch_educations
