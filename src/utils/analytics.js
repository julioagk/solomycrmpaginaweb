export const trackEvent = (eventName, eventParams = {}) => {
  // 1. Enviar evento a Google Analytics / Google Ads
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  // 2. Enviar evento a Microsoft Clarity (si está disponible)
  if (typeof window.clarity === 'function') {
    window.clarity('set', eventName, eventParams.value || 'clicked');
  }

  // 3. Enviar evento a Hotjar (si está disponible y se requiere trigger)
  if (typeof window.hj === 'function') {
    // Hotjar usa triggers para grabaciones o heatmaps específicos
    window.hj('trigger', eventName);
  }

  console.log(`[Analytics] Evento disparado: ${eventName}`, eventParams);
};

// Utilidad para trackear clics en botones importantes
export const initClickTracking = () => {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a');
    if (!target) return;

    // Si el elemento tiene data-track="algo", lo trackeamos
    const trackName = target.getAttribute('data-track');
    if (trackName) {
      trackEvent(trackName, {
        text: target.innerText?.trim() || 'No text',
        url: window.location.pathname
      });
    }
  });
};
