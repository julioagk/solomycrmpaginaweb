import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderProcess() {
  return `
    <section class="page-section section process" id="como-funciona">
      <div class="section-head">
        <p class="tag">CÓMO FUNCIONA EN 4 PASOS</p>
        <h2>Proceso simple para ejecutar y convertir</h2>
        <p class="section-lead">
          Desde la captura del prospecto hasta la medicion de resultados, todo queda
          centralizado para que el equipo actúe rápido.
        </p>
      </div>

      <div class="steps">
        <article>
          <span>01</span>
          <h3>Captura prospectos</h3>
          <p>Registra leads desde formularios, llamadas, referidos o WhatsApp en segundos.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Da seguimiento</h3>
          <p>Asigna actividades y recordatorios para mantener cada oportunidad activa.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Agenda y registra reuniones</h3>
          <p>Sincroniza calendario y documenta resultado, acuerdos y próxima acción.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Convierte y mide</h3>
          <p>Mueve a cliente y revisa conversión, ventas y desempeño comercial por vendedor.</p>
        </article>
      </div>

      <div class="hero-actions process-actions">
        <a class="btn btn-primary" href="/contacto" data-link data-track="process_demo_click">Solicitar demo</a>
        <a class="btn btn-secondary" href="/funcionalidades" data-link data-track="process_modules_click">Ver módulos</a>
      </div>
    </section>
  `;
}

export function renderProcessPage() {
  return `
    ${renderHeader()}
    <main>
      ${renderProcess()}
    </main>
    ${renderFooter()}
  `
}

