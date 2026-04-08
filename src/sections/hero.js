import { renderHeader } from './header.js'
import { renderProcess } from './process.js'
import { renderPricing } from './pricing.js'
import { renderCTA } from './cta.js'
import { renderFooter } from './footer.js'

export function renderHero() {
  return `
    ${renderHeader()}
    <main>
      <section class="hero-shell section" id="inicio">
        <div class="hero-copy">
          <p class="tag">CRM COMERCIAL PARA EQUIPOS DE VENTAS</p>
          <h1>Convierte prospectos en clientes con trazabilidad real</h1>
          <p class="lead">
            CRM DR ordena captacion, seguimiento, reuniones, negociacion y cierre
            en un solo flujo para Prospectores y Closers.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#solicitar-demo" data-track="hero_demo_click">Solicitar demo</a>
            <a class="btn btn-secondary" href="#probar-ahora" data-track="hero_trial_click">Probar ahora</a>
          </div>
          <div class="hero-points">
            <span>Embudo por etapas</span>
            <span>Actividades con historial</span>
            <span>Control de privacidad por registro</span>
          </div>
        </div>

        <aside class="hero-panel" aria-label="Vista previa del dashboard CRM">
          <p class="panel-tag">DASHBOARD COMERCIAL</p>
          <h3>Pipeline visible para todo el equipo autorizado</h3>
          <div class="pipeline-mockup">
            <article>
              <p class="metric-title">Nuevos prospectos</p>
              <p class="metric-value">34</p>
            </article>
            <article>
              <p class="metric-title">Seguimientos hoy</p>
              <p class="metric-value">19</p>
            </article>
            <article>
              <p class="metric-title">Reuniones agendadas</p>
              <p class="metric-value">8</p>
            </article>
            <article>
              <p class="metric-title">Cierres del mes</p>
              <p class="metric-value">11</p>
            </article>
          </div>
          <p class="panel-note">Cada registro muestra propietario, estado y actividad reciente.</p>
        </aside>
      </section>

      ${renderProcess()}
      ${renderPricing()}
      ${renderCTA()}
    </main>
    ${renderFooter()}
  `;
}
