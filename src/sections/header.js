export function renderHeader() {
  const currentPath = window.location.pathname || '/'
  const normalizedPath = currentPath === '/inicio' ? '/' : currentPath
  const isActive = (path) => normalizedPath === path

  return `
    <header class="navbar">
      <div class="navbar-container">
        <a href="/" data-link data-track="nav_logo_click" class="logo">SOLOMYCRM</a>
        <nav class="nav-menu">
          <a href="/" data-link data-track="nav_inicio_click" class="nav-link ${isActive('/') ? 'is-active' : ''}">Inicio</a>
          <a href="/proceso" data-link data-track="nav_proceso_click" class="nav-link ${isActive('/proceso') ? 'is-active' : ''}">Proceso</a>
          <a href="/paquetes" data-link data-track="nav_paquetes_click" class="nav-link ${isActive('/paquetes') ? 'is-active' : ''}">Paquetes</a>
          <a href="/contacto" data-link data-track="nav_demo_click" class="nav-link btn btn-primary ${isActive('/contacto') ? 'is-active' : ''}">Agenda tu demo</a>
        </nav>
      </div>
    </header>
  `;
}
