import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderCTA() {
  return `
    <section class="section" id="contacto" style="background-color: var(--brand-light); position: relative; overflow: hidden; padding: 4rem 0;">
      <!-- Decoración de fondo -->
      <div style="position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: rgba(59, 130, 246, 0.08); border-radius: 50%; filter: blur(60px); pointer-events: none;"></div>
      <div style="position: absolute; bottom: -100px; left: -100px; width: 400px; height: 400px; background: rgba(59, 130, 246, 0.12); border-radius: 50%; filter: blur(60px); pointer-events: none;"></div>
      
      <div class="container" style="position: relative; z-index: 1;">
        
        <div class="grid-2" style="align-items: stretch; max-width: 950px; margin: 0 auto; gap: 1.5rem;">
          <!-- Información de contacto -->
          <div class="contact-info" style="padding: 2rem; background: var(--brand); color: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); display: flex; flex-direction: column; position: relative; overflow: hidden;">
            
            <div style="position: absolute; top: 0; right: 0; width: 150px; height: 150px; background: rgba(255, 255, 255, 0.05); border-radius: 50%; transform: translate(30%, -30%); pointer-events: none;"></div>
            
            <h3 style="color: white; font-size: 1.5rem; margin-bottom: 0.5rem;">Información de contacto</h3>
            <p style="color: rgba(255,255,255,0.8); margin-bottom: 2rem; font-size: 0.95rem; line-height: 1.5;">
              Estamos aquí para ayudarte. Mándanos un mensaje y responderemos a la brevedad.
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 1.5rem; flex-grow: 1;">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; backdrop-filter: blur(4px);">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <span style="display: block; font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-bottom: 0.15rem;">Correo Electrónico</span>
                  <a href="mailto:lesly@updm.mx" style="color: white; font-weight: 500; font-size: 1rem; text-decoration: none; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">lesly@updm.mx</a>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; backdrop-filter: blur(4px);">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <span style="display: block; font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-bottom: 0.15rem;">Teléfono</span>
                  <a href="#" style="color: white; font-weight: 500; font-size: 1rem; text-decoration: none; pointer-events: none;">Próximamente</a>
                </div>
              </div>
            </div>
            
            <div style="margin-top: 2rem; background: rgba(0,0,0,0.1); padding: 1rem; border-radius: var(--radius-md);">
              <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8); margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Horario de atención
              </p>
              <p style="font-weight: 500; color: white; font-size: 0.9rem;">Lunes a Viernes, 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <!-- Formulario -->
          <div class="card" style="border: none; box-shadow: var(--shadow-lg); padding: 2rem; background: white;">
            <h3 style="margin-bottom: 0.25rem; font-size: 1.5rem;">Envíanos un mensaje</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem;">Completa el formulario y te responderemos en breve.</p>
            
            <form id="lead-form" novalidate>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="lead-name" style="margin-bottom: 0.25rem; font-size: 0.8rem;">Nombre completo <span style="color: var(--danger)">*</span></label>
                  <input class="form-control" id="lead-name" name="name" type="text" placeholder="Ej. Carlos Ramírez" required style="padding: 0.5rem 0.75rem; font-size: 0.9rem;" />
                  <span class="error-message" data-error-for="name" style="font-size: 0.75rem; min-height: 1rem;"></span>
                </div>
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="lead-company" style="margin-bottom: 0.25rem; font-size: 0.8rem;">Empresa (Opcional)</label>
                  <input class="form-control" id="lead-company" name="company" type="text" placeholder="Ej. Mi Empresa S.A." style="padding: 0.5rem 0.75rem; font-size: 0.9rem;" />
                  <span class="error-message" data-error-for="company" style="font-size: 0.75rem; min-height: 1rem;"></span>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="lead-phone" style="margin-bottom: 0.25rem; font-size: 0.8rem;">Teléfono <span style="color: var(--danger)">*</span></label>
                  <input class="form-control" id="lead-phone" name="phone" type="tel" placeholder="Ej. 81 1234 5678" required style="padding: 0.5rem 0.75rem; font-size: 0.9rem;" />
                  <span class="error-message" data-error-for="phone" style="font-size: 0.75rem; min-height: 1rem;"></span>
                </div>
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="lead-email" style="margin-bottom: 0.25rem; font-size: 0.8rem;">Correo electrónico <span style="color: var(--danger)">*</span></label>
                  <input class="form-control" id="lead-email" name="email" type="email" placeholder="tu@correo.com" required style="padding: 0.5rem 0.75rem; font-size: 0.9rem;" />
                  <span class="error-message" data-error-for="email" style="font-size: 0.75rem; min-height: 1rem;"></span>
                </div>
              </div>
              
              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label class="form-label" for="lead-need" style="margin-bottom: 0.25rem; font-size: 0.8rem;">Mensaje <span style="color: var(--danger)">*</span></label>
                <textarea class="form-control" id="lead-need" name="need" rows="2" placeholder="¿En qué te podemos ayudar?" required style="resize: vertical; min-height: 60px; padding: 0.5rem 0.75rem; font-size: 0.9rem;"></textarea>
                <span class="error-message" data-error-for="need" style="font-size: 0.75rem; min-height: 1rem;"></span>
              </div>
              
              <button class="btn btn-primary premium-reflejo" type="submit" style="width: 100%; font-size: 1rem; padding: 0.75rem; display: flex; justify-content: center; gap: 0.5rem; align-items: center; border-radius: var(--radius-lg);">
                Enviar mensaje
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <p id="lead-form-status" style="margin-top: 0.5rem; text-align: center; font-size: 0.8rem; color: var(--text-muted); min-height: 1rem;"></p>
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
