import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'
import panelClienteImage from '../assets/panelcliente.png'
import calendarSectionImage from '../assets/calendariocrm.png'

export function renderProcess() {
  return `
    <section class="section" id="como-funciona">
      <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
          <span class="tag">CÓMO FUNCIONA EN 4 PASOS</span>
          <h2>Proceso simple para ejecutar y convertir</h2>
          <p style="max-width: 700px; margin: 0 auto;">
            Desde la captura del prospecto hasta la medición de resultados, todo queda centralizado.
          </p>
        </div>

        <div class="grid-2" style="margin-bottom: 4rem;">
          <div class="card" style="text-align: center;">
            <div style="background-color: var(--brand-light); color: var(--brand); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 1rem;">1</div>
            <h3>Captura prospectos</h3>
            <p>Registra leads desde formularios, llamadas, referidos o WhatsApp en segundos.</p>
          </div>
          <div class="card" style="text-align: center;">
            <div style="background-color: var(--brand-light); color: var(--brand); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 1rem;">2</div>
            <h3>Da seguimiento</h3>
            <p>Asigna actividades y recordatorios para mantener cada oportunidad activa.</p>
          </div>
          <div class="card" style="text-align: center;">
            <div style="background-color: var(--brand-light); color: var(--brand); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 1rem;">3</div>
            <h3>Agenda y reuniones</h3>
            <p>Sincroniza calendario y documenta resultado, acuerdos y próxima acción.</p>
          </div>
          <div class="card" style="text-align: center;">
            <div style="background-color: var(--brand-light); color: var(--brand); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 0 auto 1rem;">4</div>
            <h3>Convierte y mide</h3>
            <p>Mueve a cliente y revisa conversión, ventas y desempeño comercial por vendedor.</p>
          </div>
        </div>

        <div class="grid-2">
          <figure style="text-align: center;">
            <img src="${panelClienteImage}" alt="Panel de cliente en SOLOMYCRM" style="max-width: 100%; height: auto; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);" loading="lazy" />
            <figcaption style="margin-top: 1rem; color: var(--text-muted); font-size: 0.875rem;">Vista real del panel de cliente dentro de SOLOMYCRM.</figcaption>
          </figure>

          <figure style="text-align: center;">
            <img src="${calendarSectionImage}" alt="Sección de calendario en SOLOMYCRM" style="max-width: 100%; height: auto; border-radius: var(--radius-lg); border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);" loading="lazy" />
            <figcaption style="margin-top: 1rem; color: var(--text-muted); font-size: 0.875rem;">Vista real de la sección de calendario dentro de SOLOMYCRM.</figcaption>
          </figure>
        </div>

        <div style="text-align: center; margin-top: 4rem;">
          <a class="btn btn-primary" href="/contacto" data-link style="margin-right: 1rem;">Solicitar demo</a>
          <a class="btn btn-secondary" href="/funcionalidades" data-link>Ver módulos</a>
        </div>
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
