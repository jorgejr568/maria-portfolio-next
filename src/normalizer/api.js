import date_normalizer from './date'

const date_fields = ['created_at', 'updated_at', 'started_at', 'finished_at']
const api_normalizer = ({ id, attributes }) => {
  const attrs = {}
  for (const attr in attributes)
    attrs[attr] =
      date_fields.indexOf(attr) > -1
        ? attributes[attr]
          ? date_normalizer(attributes[attr])
          : null
        : attributes[attr]

  return {
    id,
    ...attrs,
  }
}
export default api_normalizer
