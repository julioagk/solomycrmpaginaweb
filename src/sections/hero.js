import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'
import dashboardImage from '../assets/dashboard.png'
import modulosImage from '../assets/modulos.png'

export function renderHero() {
  return `
    ${renderHeader()}
    <main>
      <section class="hero-shell section" id="inicio">
        <div class="hero-glow"></div>
        <div class="hero-copy" style="position: relative; overflow: hidden; z-index: 10;">
          <div id="hero-cascade" class="svg-cascade-container"></div>
          <p class="tag">CRM COMERCIAL PARA EQUIPOS DE VENTAS</p>
          <h1 class="crm-title">SOLOMY<span class="crm-accent">CRM</span></h1>
          <p class="crm-subtitle">
            Convierte más prospectos en ventas con seguimiento inteligente, agenda integrada
            y control total de tu equipo comercial.
          </p>
          <div class="hero-actions">
            <a
              class="btn btn-primary premium-reflejo"
              href="https://app.solomycrm.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-track="hero_crm_click"
              aria-label="Abrir SOLOMYCRM en una nueva pestaña"
            >
              Ir al CRM
            </a>
            <a class="btn btn-secondary" href="/contacto" data-link data-track="hero_contacto_click">Contáctanos</a>
            <a
              class="btn btn-secondary btn-demo-access"
              href="/proceso"
              data-link
              data-track="hero_proceso_click"
            >
              Cómo funciona
            </a>
          </div>
          <p class="hero-demo-note">Si ya tienes acceso, entra directo al CRM. Si no, te ayudamos desde contacto.</p>
          <div class="hero-points">
            <span>Gestión simple</span>
            <span>Agenda integrada</span>
            <span>Control de equipo</span>
          </div>
        </div>

        <aside class="hero-panel">
          <div class="panel-tag">VISTA PREVIA DEL SISTEMA</div>
          <h3>Dashboard de ventas</h3>
          
          <div class="panel-simple-box">
            <img src="${dashboardImage}" alt="Dashboard SOLOMYCRM" class="process-preview-image" style="margin-bottom: 1rem;" />
            <p class="panel-simple-title">Métricas clave en tiempo real</p>
            <ul class="panel-simple-list">
              <li>Visualización de embudo comercial</li>
              <li>Actividad diaria de prospectores</li>
              <li>Metas de ventas por mes</li>
            </ul>
          </div>

          <div class="panel-note">
            Interfaz diseñada para la ejecución diaria sin distracciones.
          </div>
        </aside>
      </section>

      <section class="page-section section">
        <div class="section-head">
          <p class="tag">CRM SIMPLE Y DIRECTO</p>
          <h2>Sin funciones de más, solo lo que realmente ayuda a vender</h2>
          <p class="section-lead">
            SOLOMYCRM está pensado para equipos que quieren trabajar rápido, con una herramienta clara y sin complicaciones.
          </p>
        </div>
        <div class="feature-grid">
          <article class="feature-card premium-reflejo">
            <h3>Todo en un solo lugar</h3>
            <p>Clientes, prospectos, tareas y seguimiento en una vista simple para trabajar el día a día.</p>
          </article>
          <article class="feature-card premium-reflejo">
            <h3>Curva de aprendizaje corta</h3>
            <p>No necesitas semanas de capacitación: la plataforma está diseñada para ser intuitiva desde el inicio.</p>
          </article>
          <article class="feature-card premium-reflejo">
            <h3>Capturas reales del sistema</h3>
            <p>En la sección “Cómo funciona” mostramos imágenes reales como panel de cliente y calendario para que veas exactamente cómo se usa.</p>
          </article>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary premium-reflejo" href="/contacto" data-link data-track="home_demo_bottom_click">Solicitar demo</a>
          <a class="btn btn-secondary" href="/proceso" data-link data-track="home_process_click">Ver cómo funciona</a>
        </div>
      </section>

      <section class="page-section section">
        <div class="section-head">
          <p class="tag">NOVEDADES CONSTANTES</p>
          <h2>SOLOMYCRM evoluciona contigo</h2>
          <p class="section-lead">
            Módulos nuevos que se adaptan a cada tipo de cliente o necesidad.
          </p>
        </div>
        <div class="feature-grid">
          <article class="feature-card premium-reflejo">
            <h3>Actualizaciones constantes</h3>
            <p>Publicamos mejoras continuas para que el sistema sea más rápido, estable y útil en tu operación diaria.</p>
          </article>
          <article class="feature-card premium-reflejo">
            <h3>Módulos personalizados</h3>
            <p>Podemos adaptar módulos según tu tipo de cliente, industria y situación comercial sin volver el CRM complejo.</p>
          </article>
          <article class="feature-card premium-reflejo">
            <h3>Módulos nuevos de forma continua</h3>
            <p>Seguimos incorporando funciones prácticas que sí aportan valor, evitando herramientas que solo estorban.</p>
          </article>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary premium-reflejo" href="/contacto" data-link data-track="novedades_demo_click">Solicitar demo</a>
          <a class="btn btn-secondary" href="/proceso" data-link data-track="novedades_process_click">Ver cómo funciona</a>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}
