const experience_date_normalizer = date => {
  const dateObject = new Date(date)
  dateObject.setMonth(dateObject.getMonth() + 1)

  const formatted_date = Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    year: 'numeric',
  }).format(dateObject)

  return formatted_date.charAt(0).toUpperCase() + formatted_date.slice(1)
}

export default experience_date_normalizer
