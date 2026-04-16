import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderCTA() {

  return `
    <section class="page-section section cta" id="solicitar-demo">
      <div class="section-head">
        <p class="tag">OFERTA COMERCIAL</p>
        <h2>Para equipos que necesitan orden comercial y más conversión</h2>
        <p class="section-lead">
          Para equipos B2B y B2C, closers, prospectores, pymes y agencias que quieren ejecutar mejor.
        </p>
      </div>

      <div class="feature-grid">
        <article class="feature-card">
          <h3>Para quien es</h3>
          <p>Equipos comerciales B2B/B2C, áreas de prospección y cierre, pymes y agencias.</p>
        </article>
        <article class="feature-card">
          <h3>Que incluye</h3>
          <p>Implementación, capacitación y soporte para adopción rápida del equipo.</p>
        </article>
        <article class="feature-card">
          <h3>Resultado esperado</h3>
          <p>Menor tiempo de respuesta, más reuniones efectivas y mejor tasa de conversión.</p>
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
            Teléfono
            <input id="lead-phone" name="phone" type="tel" autocomplete="tel" required />
            <span class="lead-field-error" data-error-for="phone" aria-live="polite"></span>
          </label>
          <label class="lead-field" for="lead-email">
            Correo electrónico
            <input id="lead-email" name="email" type="email" autocomplete="email" required />
            <span class="lead-field-error" data-error-for="email" aria-live="polite"></span>
          </label>
          <label class="lead-field" for="lead-need">
            Objetivo comercial actual
            <textarea id="lead-need" name="need" rows="4" required></textarea>
            <span class="lead-field-error" data-error-for="need" aria-live="polite"></span>
          </label>
        </div>

        <div class="contact-actions">
          <button
            class="btn btn-primary"
            type="submit"
            data-track="lead_email_submit_click"
          >
            Solicitar demo
          </button>
        </div>
        <p id="lead-form-status" class="contact-note" role="status" aria-live="polite"></p>
      </form>



      <p class="contact-note">
        ¿Prefieres escribir por correo? Contáctanos en
        <a href="mailto:lesly@updm.mx" data-track="cta_email_click" style="color: inherit; text-decoration: underline;">lesly@updm.mx</a>
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

