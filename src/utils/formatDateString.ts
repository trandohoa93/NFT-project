export function formatDateString(dateString: string) {
  const date = new Date(dateString)

  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const day = date.getUTCDate()
  const month = date.getUTCMonth()
  const year = date.getUTCFullYear()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const monthName = monthNames[month]

  const ampmHours = hours % 12 || 12
  const ampm = hours >= 12 ? 'PM' : 'AM'

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const formattedDate = `${ampmHours}:${formattedMinutes} ${ampm} on ${day}${getOrdinalSuffix(day)} ${monthName} ${year}`

  return formattedDate
}

export function formatYear(dateString: string) {
  const date = new Date(dateString)

  const month = date.getUTCMonth()
  const year = date.getUTCFullYear()

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const monthName = monthNames[month]
  const formattedDate = `${monthName}, ${year}`

  return formattedDate
}

function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21)
    return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export function formatDateToISO(date: Date | null): string | null {
  if (!date)
    return null
  return date.toISOString()
}
