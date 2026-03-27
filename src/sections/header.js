export function renderHeader() {
  return `
    <header class="navbar">
      <div class="navbar-container">
        <a href="/" data-link data-track="nav_logo_click" class="logo">SOLOMYCRM</a>
        <nav class="nav-menu">
          <a href="/" data-link data-track="nav_inicio_click" class="nav-link">Inicio</a>
          <a href="/proceso" data-link data-track="nav_proceso_click" class="nav-link">Proceso</a>
          <a href="/paquetes" data-link data-track="nav_paquetes_click" class="nav-link">Paquetes</a>
          <a href="/contacto" data-link data-track="nav_demo_click" class="nav-link btn btn-primary">Agenda tu demo</a>
        </nav>
      </div>
    </header>
  `;
}
