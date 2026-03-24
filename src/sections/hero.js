import { renderHeader } from './header.js'

export function renderHero() {
  return `
    ${renderHeader()}
    <main>
      <section class="hero-shell section">
        <div class="hero-copy">
          <p class="tag">CRM COMERCIAL ORIENTADO A CIERRE</p>
          <h1>SOLOMYCRM</h1>
          <p class="lead">
            Convierte seguimiento en ventas con un flujo claro entre prospeccion,
            reuniones y cierre.
          </p>
          <p class="hero-cta-copy">
            Implementa una operacion comercial ordenada desde el primer dia.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contacto" data-link>Quiero una demostracion</a>
            <a class="btn btn-secondary" href="/paquetes" data-link>Comparar paquetes</a>
          </div>
          <div class="hero-points">
            <span>Seguimiento centralizado</span>
            <span>Pipeline visible</span>
            <span>Cierre mas predecible</span>
          </div>
        </div>

        <aside class="hero-panel" aria-label="Resumen comercial">
          <p class="panel-tag">OPERACION COMERCIAL</p>
          <h3>Todo el flujo en una sola vista</h3>
          <ul>
            <li><strong>Prospeccion:</strong> captura y organiza contactos nuevos.</li>
            <li><strong>Seguimiento:</strong> ejecuta tareas sin perder oportunidades.</li>
            <li><strong>Cierre:</strong> llega a cada reunion con contexto completo.</li>
          </ul>
          <div class="panel-metrics">
            <article>
              <p class="metric-title">Modelo</p>
              <p class="metric-value">Individual / Equipo</p>
            </article>
            <article>
              <p class="metric-title">Implementacion</p>
              <p class="metric-value">Rapida y guiada</p>
            </article>
          </div>
        </aside>
      </section>

      <section class="home-details section">
        <h2>Mas control comercial desde el primer dia</h2>
        <p class="section-lead">
          SOLOMYCRM te ayuda a ordenar contactos, priorizar seguimiento y enfocar
          a tu equipo en lo que realmente mueve ventas.
        </p>

        <div class="home-grid">
          <article class="home-card">
            <h3>Que resuelve</h3>
            <ul>
              <li>Prospectos sin seguimiento claro.</li>
              <li>Perdida de oportunidades por falta de orden.</li>
              <li>Reuniones sin contexto comercial previo.</li>
            </ul>
          </article>

          <article class="home-card">
            <h3>Para quien es</h3>
            <ul>
              <li>Equipos que venden por llamadas y reuniones.</li>
              <li>Negocios que quieren escalar su pipeline.</li>
              <li>Emprendedores que hacen prospeccion y cierre.</li>
            </ul>
          </article>

          <article class="home-card">
            <h3>Lo que obtienes</h3>
            <ul>
              <li>Seguimientos consistentes y medibles.</li>
              <li>Mayor conversion de cita a venta.</li>
              <li>Visibilidad total de cada oportunidad.</li>
            </ul>
          </article>
        </div>

        <div class="home-strip">
          <p>Organiza prospectos</p>
          <p>Automatiza seguimiento</p>
          <p>Mejora cierres</p>
          <p>Escala tu operacion</p>
        </div>
      </section>
    </main>
    <footer>
      <p>SOLOMYCRM · Sistema comercial para prospectar, dar seguimiento y cerrar ventas.</p>
    </footer>
  `;
}
