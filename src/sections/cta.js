import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderCTA() {
  return `
    <section class="page-section section cta-section" id="solicitar-demo">
      <div class="section-head">
        <h2>Solicitar demo</h2>
        <p class="section-lead">
          Completa el formulario y te contactamos en menos de 24 horas.
        </p>
      </div>

      <div class="cta-trust-row" aria-label="Beneficios de contacto">
        <span class="cta-trust-chip">Respuesta en menos de 24h</span>
        <span class="cta-trust-chip">Demo guiada</span>
      </div>

      <div class="cta-layout">

        <!-- Panel izquierdo: beneficios -->
        <aside class="cta-panel">
          <p class="cta-panel-label">¿Por qué agendar una demo?</p>
          <ul class="cta-benefits">
            <li class="cta-benefit">
              <span class="cta-benefit-icon">✓</span>
              <div>
                <strong>Sin compromiso</strong>
                <p>Conoce el sistema sin presión de compra.</p>
              </div>
            </li>
            <li class="cta-benefit">
              <span class="cta-benefit-icon">✓</span>
              <div>
                <strong>Demo personalizada</strong>
                <p>Te mostramos casos de uso según tu industria.</p>
              </div>
            </li>
            <li class="cta-benefit">
              <span class="cta-benefit-icon">✓</span>
              <div>
                <strong>Onboarding incluido</strong>
                <p>Implementación y capacitación desde el primer día.</p>
              </div>
            </li>
          </ul>
          <div class="cta-panel-footer">
            <a href="mailto:lesly@updm.mx" class="cta-email-link" data-track="cta_email_click">
              ✉ lesly@updm.mx
            </a>
          </div>
        </aside>

        <!-- Panel derecho: formulario -->
        <div class="cta-form-wrap">
          <p class="cta-form-title">Agenda tu demo gratuita</p>
          <p class="cta-form-subtitle">Cuéntanos tu situación y te mostramos cómo adaptarlo a tu equipo.</p>
          <form id="lead-form" class="lead-form-v2" novalidate>
            <div class="lead-form-row">
              <label class="lead-field-v2" for="lead-name">
                <span class="lead-label">Nombre completo</span>
                <input id="lead-name" name="name" type="text" autocomplete="name" placeholder="Ej. Carlos Ramírez" required />
                <span class="lead-field-error" data-error-for="name" aria-live="polite"></span>
              </label>
              <label class="lead-field-v2" for="lead-company">
                <span class="lead-label">Empresa</span>
                <input id="lead-company" name="company" type="text" autocomplete="organization" placeholder="Ej. Distribuidora Norte" required />
                <span class="lead-field-error" data-error-for="company" aria-live="polite"></span>
              </label>
            </div>
            <div class="lead-form-row">
              <label class="lead-field-v2" for="lead-phone">
                <span class="lead-label">Teléfono</span>
                <input id="lead-phone" name="phone" type="tel" autocomplete="tel" placeholder="Ej. 81 1234 5678" required />
                <span class="lead-field-error" data-error-for="phone" aria-live="polite"></span>
              </label>
              <label class="lead-field-v2" for="lead-email">
                <span class="lead-label">Correo electrónico</span>
                <input id="lead-email" name="email" type="email" autocomplete="email" placeholder="tu@empresa.com" required />
                <span class="lead-field-error" data-error-for="email" aria-live="polite"></span>
              </label>
            </div>
            <label class="lead-field-v2 full-width" for="lead-need">
              <span class="lead-label">¿Qué quieres mejorar en tu proceso comercial?</span>
              <textarea id="lead-need" name="need" rows="3" placeholder="Ej. Quiero mejorar el seguimiento de prospectos y la visibilidad del equipo." required></textarea>
              <span class="lead-field-error" data-error-for="need" aria-live="polite"></span>
            </label>
            <button class="btn btn-primary cta-submit-btn" type="submit" data-track="lead_email_submit_click">
              Solicitar demo gratuita →
            </button>
            <p id="lead-form-status" class="contact-note" role="status" aria-live="polite"></p>
          </form>
        </div>

      </div>
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
