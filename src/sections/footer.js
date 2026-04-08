import { getWhatsAppLink } from '../config/contact.js'

export function renderFooter() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = getWhatsAppLink()

  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <section class="footer-block">
          <p class="footer-title">CRM DR</p>
          <p class="footer-copy">
            CRM comercial para captar, dar seguimiento y cerrar ventas con trazabilidad completa.
          </p>
        </section>

        <nav class="footer-block" aria-label="Navegacion del sitio">
          <p class="footer-heading">Navegacion</p>
          <a href="#inicio" class="footer-link">Inicio</a>
          <a href="#como-funciona" class="footer-link">Como funciona</a>
          <a href="#funcionalidades" class="footer-link">Funcionalidades</a>
          <a href="#faq" class="footer-link">FAQ</a>
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
              ? `<a class="btn btn-primary footer-cta" href="#solicitar-demo" data-track="footer_demo_click">Solicitar demo</a>`
              : ''
          }
        </section>
      </div>

      <p class="footer-legal">© ${currentYear} CRM DR. Todos los derechos reservados.</p>
    </footer>
  `
}
