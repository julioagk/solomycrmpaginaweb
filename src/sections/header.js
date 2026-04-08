import logoSolomycrm from '../assets/logosolomycrm.png'

export function renderHeader() {
  return `
    <header class="navbar">
      <div class="navbar-container">
        <a href="/" data-link data-track="nav_logo_click" class="logo" aria-label="SOLOMYCRM - Inicio">
          <img src="${logoSolomycrm}" alt="Logo SOLOMYCRM" class="logo-mark" />
          <span class="logo-text">SOLOMYCRM</span>
        </a>
        <nav class="nav-menu">
          <a href="/" data-link data-track="nav_inicio_click" class="nav-link">Inicio</a>
          <a href="/proceso" data-link data-track="nav_como_funciona_click" class="nav-link">Proceso</a>
          <a href="/funcionalidades" data-link data-track="nav_funcionalidades_click" class="nav-link">Funcionalidades</a>
          <a href="/contacto" data-link data-track="nav_demo_click" class="nav-link btn btn-primary">Solicitar demo</a>
        </nav>
      </div>
    </header>
  `;
}

