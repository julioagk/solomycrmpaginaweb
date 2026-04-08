import logoSolomycrm from '../assets/logosolomycrm.png'

export function renderHeader() {
  return `
    <header class="navbar">
      <div class="navbar-container">
        <a href="/" data-link data-track="nav_logo_click" class="logo" aria-label="CRM DR - Inicio">
          <img src="${logoSolomycrm}" alt="Logo CRM DR" class="logo-mark" />
          <span class="logo-text">CRM DR</span>
        </a>
        <nav class="nav-menu">
          <a href="#como-funciona" data-track="nav_como_funciona_click" class="nav-link">Como funciona</a>
          <a href="#funcionalidades" data-track="nav_funcionalidades_click" class="nav-link">Funcionalidades</a>
          <a href="#colaboracion" data-track="nav_colaboracion_click" class="nav-link">Colaboracion</a>
          <a href="#solicitar-demo" data-track="nav_demo_click" class="nav-link btn btn-primary">Solicitar demo</a>
        </nav>
      </div>
    </header>
  `;
}
