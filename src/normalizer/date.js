import dayjsPtBR from 'dayjs/locale/pt-br'
import dayjs from 'dayjs'

const date_normalizer = date => {
  const dateObject = new Date(date)
  dateObject.setMonth(dateObject.getMonth() + 1)
  const formatted_date = dayjs(dateObject)
    .locale(dayjsPtBR)
    .format('MMMM [de] YYYY')

  return formatted_date.charAt(0).toUpperCase() + formatted_date.slice(1)
}

export default date_normalizer
