import logoImg from '../assets/image.png'

export function renderHeader() {
  const path = window.location.pathname;
  const isInicio = path === '/' || path === '/inicio';
  const isFunciones = path === '/funcionalidades';
  const isPrecios = path === '/precios';
  
  const colorInicio = isInicio ? 'var(--text-main)' : '#94a3b8';
  const colorFunciones = isFunciones ? 'var(--text-main)' : '#94a3b8';
  const colorPrecios = isPrecios ? 'var(--text-main)' : '#94a3b8';

  return `
    <header class="navbar" style="padding: 1rem 0; position: sticky; top: 0; z-index: 1000; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-bottom: 2px solid #e2e8f0; transition: all 0.3s ease;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; max-width: 1400px; padding: 0 2rem;">
        
        <!-- Logo -->
        <a href="/" data-link data-track="nav_logo_click" class="logo" aria-label="SOLOMYCRM - Inicio" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
          <img src="${logoImg}" alt="Logo SOLOMYCRM" style="height: 38px; width: auto; object-fit: contain;" />
          <span style="font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.02em;">SOLOMY<span style="color: var(--brand);">CRM</span></span>
        </a>

        <!-- Links Center -->
        <nav class="nav-menu" aria-label="Navegación principal" style="display: flex; gap: 3.5rem; align-items: center;">
          <a href="/" data-link data-track="nav_inicio_click" class="nav-link" style="font-size: 0.9rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: ${colorInicio}; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='${colorInicio}'">INICIO</a>
          <a href="/funcionalidades" data-link data-track="nav_funcionalidades_click" class="nav-link" style="font-size: 0.9rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: ${colorFunciones}; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='${colorFunciones}'">FUNCIONES</a>
          <a href="/precios" data-link data-track="nav_precios_click" class="nav-link" style="font-size: 0.9rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: ${colorPrecios}; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='${colorPrecios}'">PRECIOS</a>
        </nav>

        <!-- CTA Right -->
        <div style="display: flex; gap: 1rem; align-items: center;" class="nav-actions">
          <button class="btn open-contact-modal" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; border-radius: var(--radius-md); cursor: pointer; background: transparent; border: 2px solid var(--brand); color: var(--brand); font-weight: 700; transition: all 0.2s ease; box-sizing: border-box; font-family: inherit; line-height: 1.5;" onmouseover="this.style.background='var(--brand)'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='var(--brand)'">Contacto</button>
          <a class="btn btn-primary premium-reflejo" href="https://app.solomycrm.com/" target="_blank" rel="noopener noreferrer" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; border-radius: var(--radius-md); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); border: 2px solid transparent; box-sizing: border-box; font-family: inherit; line-height: 1.5;">Ir al CRM</a>
          <a class="btn premium-reflejo" href="https://app.solomycrm.com/?demo=true" target="_blank" rel="noopener noreferrer" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; border-radius: var(--radius-md); cursor: pointer; background: #f59e0b; border: 2px solid #f59e0b; color: white; font-weight: 700; transition: all 0.2s ease; box-sizing: border-box; font-family: inherit; line-height: 1.5; text-decoration: none;" onmouseover="this.style.background='#d97706'; this.style.borderColor='#d97706'" onmouseout="this.style.background='#f59e0b'; this.style.borderColor='#f59e0b'">Demo</a>
        </div>

      </div>
    </header>
  `;
}
