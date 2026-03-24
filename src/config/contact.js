const whatsappPhone = ''
const defaultMessage = 'Hola, quiero informacion sobre SOLOMYCRM.'

function normalizePhone(phone) {
  return phone.replace(/\D/g, '')
}

export function getWhatsAppLink() {
  const phone = normalizePhone(whatsappPhone)

  if (!phone) {
    return null
  }

  const encodedMessage = encodeURIComponent(defaultMessage)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

export function isWhatsAppConfigured() {
  return Boolean(normalizePhone(whatsappPhone))
}
