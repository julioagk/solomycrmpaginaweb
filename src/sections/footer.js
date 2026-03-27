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
            Sistema comercial para prospectar, dar seguimiento y cerrar ventas.
          </p>
        </section>

        <nav class="footer-block" aria-label="Navegacion del sitio">
          <p class="footer-heading">Navegacion</p>
          <a href="/" data-link class="footer-link">Inicio</a>
          <a href="/proceso" data-link class="footer-link">Proceso</a>
          <a href="/paquetes" data-link class="footer-link">Paquetes</a>
          <a href="/contacto" data-link class="footer-link">Contacto</a>
        </nav>

        <section class="footer-block">
          <p class="footer-heading">Contacto</p>
          <p class="footer-copy">WhatsApp: +52 81 3645 8366</p>
          <p class="footer-copy">Atencion para demos y asesoria comercial.</p>
          ${
            whatsappLink
              ? `<a class="btn btn-whatsapp footer-cta" href="${whatsappLink}" target="_blank" rel="noopener noreferrer" data-track="footer_whatsapp_click">Agendar demo por WhatsApp</a>`
              : ''
          }
        </section>
      </div>

      <p class="footer-legal">© ${currentYear} SOLOMYCRM. Todos los derechos reservados.</p>
    </footer>
  `
}
