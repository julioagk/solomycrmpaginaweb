import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderCTA() {
  return `
    <section class="section" id="solicitar-demo">
      <div class="container">
        
        <div class="grid-2">
          <aside class="cta-panel">
            <h2>Solicitar demo</h2>
            <p style="margin-bottom: 2rem;">Completa el formulario y te contactamos en menos de 24 horas.</p>
            
            <ul style="list-style: none; padding: 0; text-align: left; max-width: 300px; margin: 0 auto 3rem;">
              <li style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <span style="background: rgba(255,255,255,0.2); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</span>
                <div>
                  <strong>Sin compromiso</strong>
                  <p style="font-size: 0.875rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">Conoce el sistema sin presión.</p>
                </div>
              </li>
              <li style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <span style="background: rgba(255,255,255,0.2); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</span>
                <div>
                  <strong>Demo personalizada</strong>
                  <p style="font-size: 0.875rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">Casos de uso según tu industria.</p>
                </div>
              </li>
              <li style="display: flex; gap: 1rem;">
                <span style="background: rgba(255,255,255,0.2); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✓</span>
                <div>
                  <strong>Onboarding incluido</strong>
                  <p style="font-size: 0.875rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem;">Implementación desde el primer día.</p>
                </div>
              </li>
            </ul>
            
            <div>
              <a href="mailto:lesly@updm.mx" style="color: white; text-decoration: underline;">✉ lesly@updm.mx</a>
            </div>
          </aside>

          <div class="card" style="align-self: center;">
            <h3 style="margin-bottom: 0.5rem;">Agenda tu demo gratuita</h3>
            <p style="margin-bottom: 2rem; font-size: 0.875rem;">Cuéntanos tu situación y te mostramos cómo adaptarlo a tu equipo.</p>
            
            <form id="lead-form" novalidate>
              <div class="grid-2" style="gap: 1.5rem; margin-bottom: 1.5rem;">
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="lead-name">Nombre completo</label>
                  <input class="form-control" id="lead-name" name="name" type="text" placeholder="Ej. Carlos Ramírez" required />
                  <span class="error-message" data-error-for="name"></span>
                </div>
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="lead-company">Empresa</label>
                  <input class="form-control" id="lead-company" name="company" type="text" placeholder="Ej. Distribuidora Norte" required />
                  <span class="error-message" data-error-for="company"></span>
                </div>
              </div>
              
              <div class="grid-2" style="gap: 1.5rem; margin-bottom: 1.5rem;">
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="lead-phone">Teléfono</label>
                  <input class="form-control" id="lead-phone" name="phone" type="tel" placeholder="Ej. 81 1234 5678" required />
                  <span class="error-message" data-error-for="phone"></span>
                </div>
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="lead-email">Correo electrónico</label>
                  <input class="form-control" id="lead-email" name="email" type="email" placeholder="tu@empresa.com" required />
                  <span class="error-message" data-error-for="email"></span>
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label" for="lead-need">¿Qué quieres mejorar?</label>
                <textarea class="form-control" id="lead-need" name="need" rows="3" placeholder="Ej. Quiero mejorar el seguimiento de prospectos." required></textarea>
                <span class="error-message" data-error-for="need"></span>
              </div>
              
              <button class="btn btn-primary" type="submit" style="width: 100%;">Solicitar demo gratuita</button>
              <p id="lead-form-status" style="margin-top: 1rem; text-align: center; font-size: 0.875rem; color: var(--text-muted);"></p>
            </form>
          </div>
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
