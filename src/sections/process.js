import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderProcess() {
  return `
    ${renderHeader()}
    <main>
      <div class="page-section">
        <div class="section card process">
          <h2>Flujo comercial SOLOMYCRM</h2>
          <p>
            Tu equipo trabaja con roles definidos para no perder prospectos en el
            camino y acelerar el cierre.
          </p>
          <div class="steps">
            <article>
              <span>01</span>
              <h3>Prospeccion</h3>
              <p>Busqueda activa de prospectos con datos organizados desde el dia uno.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Seguimiento</h3>
              <p>Secuencia de contactos para generar interes real y agendar citas.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Cierre</h3>
              <p>Reuniones con el cliente para resolver objeciones y concretar la venta.</p>
            </article>
          </div>
          <div class="process-cta">
            <p>Este proceso se adapta a tu operacion actual en pocos pasos.</p>
            <a class="btn btn-primary" href="/contacto" data-link data-track="process_demo_click">Quiero implementarlo</a>
          </div>
        </div>
      </div>
    </main>
    ${renderFooter()}
  `;
}
