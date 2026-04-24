export function renderHeader() {
  return `
    <header class="navbar">
      <div class="navbar-container">
        <div class="navbar-internal-glow"></div>
        <a href="/" data-link data-track="nav_logo_click" class="logo" aria-label="SOLOMYCRM - Inicio">
          <strong class="logo-text">
            <span class="brand-spacer" aria-hidden="true">solomycrm.com</span>
            <span
              class="brand-typewriter"
              data-typewriter
              data-typewriter-text="solomycrm.com"
              aria-hidden="true"
            ></span>
          </strong>
        </a>

        <nav class="nav-menu" aria-label="Navegación principal">
          <a href="/" data-link data-track="nav_inicio_click" class="nav-link">Inicio</a>
          <a href="/proceso" data-link data-track="nav_como_funciona_click" class="nav-link">Cómo funciona</a>
          <a href="/contacto" data-link data-track="nav_contacto_click" class="nav-link">Contáctanos</a>
        </nav>
      </div>
    </header>
  `;
}


