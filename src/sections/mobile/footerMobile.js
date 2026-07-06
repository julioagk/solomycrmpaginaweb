import logoImage from '../../assets/logosolomycrm.png'
import { getWhatsAppLink } from '../../config/contact.js'

export function renderFooterMobile() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = getWhatsAppLink()

  return `
    <footer style="
      background-color: var(--brand);
      padding: 2rem 1.25rem 1.25rem;
      margin-top: auto;
      font-family: 'Poppins', sans-serif;
    ">
      <!-- Logo + tagline -->
      <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.5rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.15);">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <img src="${logoImage}" alt="Logo SOLOMYCRM" style="height: 28px; width: auto; filter: brightness(0) invert(1);" />
          <span style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 800; color: white; letter-spacing: -0.02em;">SOLOMYCRM</span>
        </div>
        <p style="color: rgba(255,255,255,0.8); font-size: 0.8rem; line-height: 1.5; margin: 0; max-width: 280px;">
          El CRM diseñado para escalar tus ventas.
        </p>
        <a href="https://app.solomycrm.com" target="_blank" rel="noopener noreferrer" style="
          display: inline-block; margin-top: 0.5rem;
          padding: 0.55rem 1.5rem;
          background: white; color: var(--brand);
          border-radius: 8px; font-weight: 700;
          font-size: 0.85rem; text-decoration: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        ">Ir al CRM →</a>
      </div>

      <!-- Nav links (horizontal, compact) -->
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1.5rem; margin-bottom: 1.5rem;">
        <a href="/" data-link style="color: rgba(255,255,255,0.9); text-decoration: none; font-size: 0.85rem; font-weight: 500;">Inicio</a>
        <a href="/funcionalidades" data-link style="color: rgba(255,255,255,0.9); text-decoration: none; font-size: 0.85rem; font-weight: 500;">Funciones</a>
        <a href="/precios" data-link style="color: rgba(255,255,255,0.9); text-decoration: none; font-size: 0.85rem; font-weight: 500;">Precios</a>
        ${whatsappLink ? `<a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color: rgba(255,255,255,0.9); text-decoration: none; font-size: 0.85rem; font-weight: 500;">WhatsApp</a>` : ''}
        <a href="mailto:info@solomycrm.com" style="color: rgba(255,255,255,0.9); text-decoration: none; font-size: 0.85rem; font-weight: 500;">Contacto</a>
      </div>

      <!-- Bottom -->
      <div style="text-align: center; display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; justify-content: center; gap: 1.25rem;">
          <a href="https://app.solomycrm.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer" style="color: rgba(255,255,255,0.65); text-decoration: none; font-size: 0.75rem;">Privacidad</a>
          <a href="https://app.solomycrm.com/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" style="color: rgba(255,255,255,0.65); text-decoration: none; font-size: 0.75rem;">Términos</a>
        </div>
        <div style="color: rgba(255,255,255,0.6); font-size: 0.72rem;">
          &copy; ${currentYear} SOLOMYCRM. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `
}
