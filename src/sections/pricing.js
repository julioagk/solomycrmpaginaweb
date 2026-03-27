import { renderHeader } from './header.js'

export function renderPricing() {
  return `
    ${renderHeader()}
    <main>
      <div class="page-section">
        <div class="section pricing">
          <h2>Paquetes de trabajo</h2>
          <p class="section-lead">Elige el modelo que mejor se adapta a tu operacion comercial.</p>

          <div class="pricing-grid">
            <article class="price-card">
              <p class="plan-name">Plan Individual</p>
              <h3>Un perfil, control total</h3>
              <p>
                Una sola persona ejecuta la prospeccion y tambien actua como closer.
                Ideal para operaciones compactas que necesitan traccion inmediata.
              </p>
              <ul>
                <li>Busqueda de prospectos y calificacion inicial.</li>
                <li>Seguimiento comercial en una sola bandeja.</li>
                <li>Agenda, reunion y cierre desde el mismo flujo.</li>
              </ul>
              <a class="btn btn-primary" href="/contacto" data-link data-track="pricing_individual_click">Solicitar plan Individual</a>
            </article>

            <article class="price-card featured">
              <p class="plan-name">Plan Equipo</p>
              <h3>Especializacion para escalar</h3>
              <p>
                Dos prospectadores alimentan el pipeline mientras el closer se enfoca en
                reuniones y cierres. Perfecto para crecer sin perder ritmo.
              </p>
              <ul>
                <li>2 prospectadores trabajando agenda y seguimiento.</li>
                <li>1 closer dedicado a reuniones y cierre de ventas.</li>
                <li>Vision compartida de avance comercial por etapa.</li>
              </ul>
              <a class="btn btn-primary" href="/contacto" data-link data-track="pricing_team_click">Solicitar plan Equipo</a>
            </article>
          </div>

          <div class="pricing-bottom-cta">
            <p>No estas seguro de cual elegir? Te recomendamos el plan ideal segun tu operacion.</p>
            <a class="btn btn-primary" href="/contacto" data-link data-track="pricing_advisory_click">Hablar con asesoria comercial</a>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p>SOLOMYCRM · Sistema comercial para prospectar, dar seguimiento y cerrar ventas.</p>
    </footer>
  `;
}
