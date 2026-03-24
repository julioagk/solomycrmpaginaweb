export function renderHeader() {
  return `
    <header class="navbar">
      <div class="navbar-container">
        <a href="/" data-link class="logo">SOLOMYCRM</a>
        <nav class="nav-menu">
          <a href="/" data-link class="nav-link">Inicio</a>
          <a href="/proceso" data-link class="nav-link">Proceso</a>
          <a href="/paquetes" data-link class="nav-link">Paquetes</a>
          <a href="/contacto" data-link class="nav-link btn btn-primary">Agenda tu demo</a>
        </nav>
      </div>
    </header>
  `;
}
