import dayjs from '../helpers/dayjs'

const date_normalizer = date => {
  const dateObject = new Date(date)
  dateObject.setMonth(dateObject.getMonth() + 1)
  const formatted_date = dayjs(dateObject).format('MMMM [de] YYYY')
  return formatted_date.charAt(0).toUpperCase() + formatted_date.slice(1)
}

export default date_normalizer
