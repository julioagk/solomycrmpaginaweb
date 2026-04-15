import { isWhatsAppConfigured } from '../config/contact.js'
import { getWhatsAppLink } from '../config/contact.js'
import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderCTA() {
  const hasWhatsApp = isWhatsAppConfigured()
  const trialLink = getWhatsAppLink('Hola, quiero probar SOLOMYCRM y conocer el flujo comercial.')

  return `
    <section class="page-section section cta" id="solicitar-demo">
      <div class="section-head">
        <p class="tag">OFERTA COMERCIAL</p>
        <h2>Para equipos que necesitan orden comercial y mas conversion</h2>
        <p class="section-lead">
          Para equipos B2B y B2C, closers, prospectores, pymes y agencias que quieren ejecutar mejor.
        </p>
      </div>

      <div class="feature-grid">
        <article class="feature-card">
          <h3>Para quien es</h3>
          <p>Equipos comerciales B2B/B2C, areas de prospeccion y cierre, pymes y agencias.</p>
        </article>
        <article class="feature-card">
          <h3>Que incluye</h3>
          <p>Implementacion, capacitacion y soporte para adopcion rapida del equipo.</p>
        </article>
        <article class="feature-card">
          <h3>Resultado esperado</h3>
          <p>Menor tiempo de respuesta, mas reuniones efectivas y mejor tasa de conversion.</p>
        </article>
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
            Agendar llamada
          </a>
        </div>
        <p id="lead-form-status" class="contact-note" role="status" aria-live="polite"></p>
      </form>

      <p class="contact-note">
        ${
          hasWhatsApp
            ? 'Completa el formulario y abrimos WhatsApp con tu informacion para iniciar implementacion y demo.'
            : 'Configura el numero de WhatsApp para activar la captacion de leads.'
        }
      </p>

      <p class="contact-note">
        Deja de perder oportunidades por desorden comercial. Centraliza tu operacion y convierte mas con un CRM disenado para vender.
      </p>
    </section>
  `;
}

export function renderCTAPage() {
  return `
    ${renderHeader()}
    <main>
      ${renderCTA()}
    </main>
    ${renderFooter()}
  `
}

