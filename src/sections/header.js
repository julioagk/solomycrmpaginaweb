import logoImg from '../assets/image.png'

export function renderHeader() {
  return `
    <header class="navbar" style="padding: 1.25rem 0;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        
        <!-- Logo -->
        <a href="/" data-link data-track="nav_logo_click" class="logo" aria-label="SOLOMYCRM - Inicio" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
          <img src="${logoImg}" alt="Logo SOLOMYCRM" style="height: 38px; width: auto; object-fit: contain;" />
          <span style="font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.02em;">SOLOMY<span style="color: var(--brand);">CRM</span></span>
        </a>

        <!-- Links Center -->
        <nav class="nav-menu" aria-label="Navegación principal" style="display: flex; gap: 2.5rem; align-items: center;">
          <a href="/" data-link data-track="nav_inicio_click" class="nav-link" style="font-size: 0.95rem; font-weight: 500; color: var(--text-muted);">Inicio</a>
          <a href="/proceso" data-link data-track="nav_como_funciona_click" class="nav-link" style="font-size: 0.95rem; font-weight: 500; color: var(--text-muted);">Cómo funciona</a>
          <a href="/funcionalidades" data-link data-track="nav_funcionalidades_click" class="nav-link" style="font-size: 0.95rem; font-weight: 500; color: var(--text-muted);">Módulos</a>
        </nav>

        <!-- CTA Right -->
        <div style="display: flex; gap: 1.25rem; align-items: center;" class="nav-actions">
          <a class="nav-link" href="https://app.solomycrm.com/" target="_blank" rel="noopener noreferrer" style="font-size: 0.95rem; font-weight: 600; color: var(--text-main);">Iniciar sesión</a>
          <a class="btn btn-primary" href="/contacto" data-link data-track="nav_contacto_click" style="padding: 0.6rem 1.25rem; font-size: 0.9rem;">Solicitar demo</a>
        </div>

      </div>
    </header>
  `;
}
