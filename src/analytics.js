export function trackEvent(eventName, eventData = {}) {
  const payload = {
    event: eventName,
    ...eventData,
    timestamp: new Date().toISOString(),
  }

  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload)
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventData)
  }

  window.dispatchEvent(new CustomEvent('solomycrm:track', { detail: payload }))
}
