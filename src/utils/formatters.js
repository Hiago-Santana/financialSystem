export function formatMoney(value) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

export function formatDate(dateString) {
  const [year, month, day] = dateString.split('-')
  return `${day}/${month}/${year}`
}
