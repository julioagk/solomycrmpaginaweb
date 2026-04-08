import { renderHeader } from './header.js'
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
            SOLOMYCRM ordena captacion, seguimiento, reuniones, negociacion y cierre
            en un solo flujo para Prospectores y Closers.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contacto" data-link data-track="hero_demo_click">Solicitar demo</a>
            <a class="btn btn-secondary" href="/funcionalidades" data-link data-track="hero_trial_click">Ver funcionalidades</a>
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

      <section class="page-section section">
        <div class="section-head">
          <p class="tag">NAVEGA POR ETAPAS</p>
          <h2>Explora cada parte del CRM en su propia pagina</h2>
          <p class="section-lead">
            Consulta el flujo comercial, funcionalidades y contacto en rutas separadas para una navegacion mas clara.
          </p>
        </div>
        <div class="feature-grid">
          <article class="feature-card">
            <h3>Proceso comercial</h3>
            <p>Conoce la secuencia completa de captacion, seguimiento, negociacion y cierre.</p>
            <a class="btn btn-secondary" href="/proceso" data-link data-track="home_process_click">Ir a proceso</a>
          </article>
          <article class="feature-card">
            <h3>Funcionalidades</h3>
            <p>Revisa embudo, actividades, colaboracion y privacidad por registro.</p>
            <a class="btn btn-secondary" href="/funcionalidades" data-link data-track="home_features_click">Ir a funcionalidades</a>
          </article>
          <article class="feature-card">
            <h3>Contacto</h3>
            <p>Solicita demo o inicia prueba para validar tu operacion comercial.</p>
            <a class="btn btn-secondary" href="/contacto" data-link data-track="home_contact_click">Ir a contacto</a>
          </article>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}

