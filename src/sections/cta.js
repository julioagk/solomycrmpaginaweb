import { isWhatsAppConfigured } from '../config/contact.js'
import { getWhatsAppLink } from '../config/contact.js'

export function renderCTA() {
  const hasWhatsApp = isWhatsAppConfigured()
  const trialLink = getWhatsAppLink('Hola, quiero probar CRM DR y conocer el flujo comercial.')

  return `
    <section class="page-section section cta" id="solicitar-demo">
      <div class="section-head">
        <p class="tag">CTA FINAL</p>
        <h2>Activa un proceso comercial mas ordenado y predecible</h2>
        <p class="section-lead">
          Solicita una demo guiada de CRM DR o inicia una prueba para validar tu flujo real de ventas.
        </p>
      </div>

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
            Objetivo comercial actual
            <textarea id="lead-need" name="need" rows="4" required></textarea>
            <span class="lead-field-error" data-error-for="need" aria-live="polite"></span>
          </label>
        </div>

        <div class="contact-actions">
          <button
            class="btn btn-primary ${hasWhatsApp ? '' : 'btn-disabled'}"
            type="submit"
            data-track="lead_whatsapp_submit_click"
            ${hasWhatsApp ? '' : 'disabled'}
          >
            Solicitar demo
          </button>
          <a
            id="probar-ahora"
            class="btn btn-secondary ${hasWhatsApp ? '' : 'btn-disabled'}"
            href="${hasWhatsApp && trialLink ? trialLink : '#'}"
            target="_blank"
            rel="noopener noreferrer"
            data-track="cta_trial_click"
            ${hasWhatsApp ? '' : 'aria-disabled="true"'}
          >
            Probar ahora
          </a>
        </div>
        <p id="lead-form-status" class="contact-note" role="status" aria-live="polite"></p>
      </form>

      <p class="contact-note">
        ${
          hasWhatsApp
            ? 'Completa el formulario y abrimos WhatsApp con tus datos precargados para la demo.'
            : 'Configura el numero de WhatsApp para activar la captacion de leads.'
        }
      </p>
    </section>
  `;
}
