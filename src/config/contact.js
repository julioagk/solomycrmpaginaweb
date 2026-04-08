const whatsappPhone = '+52 8136458366'
const defaultMessage = 'Hola, quiero informacion sobre MYSOLOCRM.'

function normalizePhone(phone) {
  return phone.replace(/\D/g, '')
}

export function isWhatsAppConfigured() {
  return Boolean(normalizePhone(whatsappPhone))
}

export function getWhatsAppLink(customMessage = defaultMessage) {
  const phone = normalizePhone(whatsappPhone)

  if (!phone) {
    return null
  }

  const encodedMessage = encodeURIComponent(customMessage)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}
