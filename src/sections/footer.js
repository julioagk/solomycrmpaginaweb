import logoImage from '../assets/logosolomycrm.png'
import { getWhatsAppLink } from '../config/contact.js'

export function renderFooter() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = getWhatsAppLink()

  return `
    <footer style="background-color: var(--brand); padding: 3rem 0 1.5rem; margin-top: auto; position: relative; font-family: 'Poppins', sans-serif;">
      
      <div class="container" style="position: relative; z-index: 10; max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
        
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 2rem; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 2rem;">
          
          <!-- Logo y Descripción Breve -->
          <div style="display: flex; flex-direction: column; gap: 0.5rem; flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <img src="${logoImage}" alt="Logo SOLOMYCRM" style="height: 32px; width: auto; filter: brightness(0) invert(1);" />
              <span style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 800; color: white; letter-spacing: -0.02em;">SOLOMY<span style="color: white;">CRM</span></span>
            </div>
            <p style="color: rgba(255,255,255,0.85); font-size: 0.85rem; line-height: 1.5; max-width: 320px; margin: 0;">
              El CRM diseñado para escalar tus ventas. Simplicidad, seguimiento automático y resultados extraordinarios.
            </p>
          </div>

          <!-- Navegación Compacta -->
          <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
            <a href="/" data-link style="color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">Inicio</a>
            <a href="/funcionalidades" data-link style="color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">Funciones</a>
            <a href="/precios" data-link style="color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">Precios</a>
            ${whatsappLink ? `<a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">WhatsApp</a>` : ''}
            <a href="mailto:lesly@updm.mx" style="color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">Contacto</a>
          </div>

          <!-- Botón de acción -->
          <div>
            <a href="https://app.solomycrm.com" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 0.5rem 1.25rem; background: white; color: var(--brand); border: none; border-radius: var(--radius-md); font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); text-decoration: none;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'">Ir al CRM</a>
          </div>

        </div>

        <!-- Footer Bottom -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
          <div style="color: rgba(255,255,255,0.7); font-size: 0.8rem;">
            &copy; ${currentYear} SOLOMYCRM. Todos los derechos reservados.
          </div>
          <div style="display: flex; gap: 1.5rem;">
            <a href="https://app.solomycrm.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.8rem; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Privacidad</a>
            <a href="https://app.solomycrm.com/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.8rem; transition: color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  `
}
