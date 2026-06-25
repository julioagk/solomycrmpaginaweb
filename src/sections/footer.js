import logoImage from '../assets/logosolomycrm.png'
import { getWhatsAppLink } from '../config/contact.js'

export function renderFooter() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = getWhatsAppLink()

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="logo" style="margin-bottom: 1rem;">
              SOLOMY<span style="color: var(--brand);">CRM</span>
            </div>
            <p style="max-width: 400px; font-size: 0.875rem;">
              CRM comercial para captar, dar seguimiento y cerrar ventas con trazabilidad completa.
            </p>
          </div>

          <div class="footer-col">
            <h4>Navegación</h4>
            <ul class="footer-links">
              <li><a href="/" data-link>Inicio</a></li>
              <li><a href="/proceso" data-link>Proceso</a></li>
              <li><a href="/funcionalidades" data-link>Funcionalidades</a></li>
              <li><a href="/contacto" data-link>Contacto</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contacto</h4>
            <ul class="footer-links">
              ${
                whatsappLink
                  ? `<li><a href="${whatsappLink}" target="_blank" rel="noopener noreferrer">WhatsApp: +52 81 3645 8366</a></li>`
                  : `<li><span style="color: var(--text-muted); font-size: 0.875rem;">WhatsApp: +52 81 3645 8366</span></li>`
              }
              <li><a href="mailto:lesly@updm.mx">lesly@updm.mx</a></li>
            </ul>
            ${
              whatsappLink
                ? `<a class="btn btn-primary" href="/contacto" data-link style="margin-top: 1rem; font-size: 0.875rem; padding: 0.5rem 1rem;">Solicitar demo</a>`
                : ''
            }
          </div>
        </div>

        <div class="footer-bottom">
          <div>&copy; ${currentYear} SOLOMYCRM. Todos los derechos reservados.</div>
          <div style="display: flex; gap: 1rem;">
            <a href="https://app.solomycrm.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">Política de Privacidad</a>
            <a href="https://app.solomycrm.com/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  `
}
