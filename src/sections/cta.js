import { renderHeader } from './header.js'
import { getWhatsAppLink, isWhatsAppConfigured } from '../config/contact.js'

export function renderCTA() {
  const whatsappLink = getWhatsAppLink()
  const isConfigured = isWhatsAppConfigured()

  return `
    ${renderHeader()}
    <main>
      <div class="page-section">
        <div class="section card cta">
          <h2>Agenda una demostracion y acelera tus cierres</h2>
          <p>
            Te mostramos como adaptar SOLOMYCRM a tu operacion para que dejes de perder
            prospectos y conviertas mas reuniones en ventas.
          </p>
          <div class="contact-actions">
            ${
              isConfigured
                ? `<a class="btn btn-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp ahora</a>`
                : `<button class="btn btn-whatsapp btn-disabled" type="button" disabled>WhatsApp pendiente (proximamente)</button>`
            }
          </div>
          <p class="contact-note">
            ${
              isConfigured
                ? 'Respuesta directa para resolver dudas, elegir plan y agendar implementacion.'
                : 'Canal de WhatsApp listo para activarse. En cuanto tengamos numero, se habilita automaticamente.'
            }
          </p>
        </div>
      </div>
    </main>
    <footer>
      <p>SOLOMYCRM · Sistema comercial para prospectar, dar seguimiento y cerrar ventas.</p>
    </footer>
  `;
}
