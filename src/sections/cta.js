import { renderHeader } from './header.js'
import { isWhatsAppConfigured } from '../config/contact.js'
import { renderFooter } from './footer.js'

export function renderCTA() {
  const hasWhatsApp = isWhatsAppConfigured()

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
          <form id="lead-form" class="lead-form" novalidate>
            <div class="lead-form-grid">
              <label class="lead-field" for="lead-name">
                Nombre completo
                <input id="lead-name" name="name" type="text" autocomplete="name" required />
                <span class="lead-field-error" data-error-for="name" aria-live="polite"></span>
              </label>
              <label class="lead-field" for="lead-company">
                Empresa
                <input id="lead-company" name="company" type="text" autocomplete="organization" required />
                <span class="lead-field-error" data-error-for="company" aria-live="polite"></span>
              </label>
              <label class="lead-field" for="lead-phone">
                Telefono
                <input id="lead-phone" name="phone" type="tel" autocomplete="tel" required />
                <span class="lead-field-error" data-error-for="phone" aria-live="polite"></span>
              </label>
              <label class="lead-field" for="lead-need">
                Que necesitas resolver
                <textarea id="lead-need" name="need" rows="4" required></textarea>
                <span class="lead-field-error" data-error-for="need" aria-live="polite"></span>
              </label>
            </div>

            <div class="contact-actions">
              <button
                class="btn btn-whatsapp ${hasWhatsApp ? '' : 'btn-disabled'}"
                type="submit"
                data-track="lead_whatsapp_submit_click"
                ${hasWhatsApp ? '' : 'disabled'}
              >
                Enviar por WhatsApp
              </button>
            </div>
            <p id="lead-form-status" class="contact-note" role="status" aria-live="polite"></p>
          </form>
          <p class="contact-note">
            ${
              hasWhatsApp
                ? 'Llena el formulario y envia tus datos directo por WhatsApp.'
                : 'Configura el numero de WhatsApp para activar el contacto.'
            }
          </p>
        </div>
      </div>
    </main>
    ${renderFooter()}
  `;
}
