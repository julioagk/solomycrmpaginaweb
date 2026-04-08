import { getWhatsAppLink } from '../config/contact.js'

export function renderFooter() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = getWhatsAppLink()

  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <section class="footer-block">
          <p class="footer-title">SOLOMYCRM</p>
          <p class="footer-copy">
            CRM comercial para captar, dar seguimiento y cerrar ventas con trazabilidad completa.
          </p>
        </section>

        <nav class="footer-block" aria-label="Navegacion del sitio">
          <p class="footer-heading">Navegacion</p>
          <a href="/" data-link class="footer-link">Inicio</a>
          <a href="/proceso" data-link class="footer-link">Proceso</a>
          <a href="/funcionalidades" data-link class="footer-link">Funcionalidades</a>
          <a href="/contacto" data-link class="footer-link">Contacto</a>
        </nav>

        <section class="footer-block">
          <p class="footer-heading">Contacto</p>
          ${
            whatsappLink
              ? `<a class="footer-link footer-contact-link" href="${whatsappLink}" target="_blank" rel="noopener noreferrer" data-track="footer_phone_whatsapp_click">WhatsApp: +52 81 3645 8366</a>`
              : `<p class="footer-copy">WhatsApp: +52 81 3645 8366</p>`
          }
          <p class="footer-copy">Atencion para demos, onboarding y consultoria comercial.</p>
          ${
            whatsappLink
              ? `<a class="btn btn-primary footer-cta" href="/contacto" data-link data-track="footer_demo_click">Solicitar demo</a>`
              : ''
          }
        </section>
      </div>

      <p class="footer-legal">&copy; ${currentYear} SOLOMYCRM. Todos los derechos reservados.</p>
    </footer>
  `
}

