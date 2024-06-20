export function followerCountFormat(n: number) {
  if (n < 1e3)
    return n
  if (n >= 1e3 && n < 1e6)
    return `${+(n / 1e3).toFixed(1)}K`
  if (n >= 1e6 && n < 1e9)
    return `${+(n / 1e6).toFixed(1)}M`
  if (n >= 1e9 && n < 1e12)
    return `${+(n / 1e9).toFixed(1)}B`
  if (n >= 1e12)
    return `${+(n / 1e12).toFixed(1)}T`
}

export const formatDate: (timestamp: string) => string = (timestamp) => {
  const date = new Date(timestamp)
  const formattedDate = `${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getFullYear()}`
  return formattedDate
}

export function formatNumberToK(n: number) {
  if (n >= 1000)
    return `${(n / 1000).toFixed(1)}K`
  else
    return n.toString()
}
