import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderHero() {
  return `
    ${renderHeader()}
    <main>
      <section class="hero-shell section" id="inicio">
        <div class="hero-copy">
          <p class="tag">CRM COMERCIAL PARA EQUIPOS DE VENTAS</p>
          <h1>SOLOMYCRM</h1>
          <p class="lead">
            Convierte mas prospectos en ventas con seguimiento inteligente, agenda integrada
            y control total de tu equipo comercial.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contacto" data-link data-track="hero_demo_click">Solicitar demo</a>
            <a class="btn btn-secondary" href="/contacto" data-link data-track="hero_trial_click">Probar gratis</a>
          </div>
          <div class="hero-points">
            <span>Embudo comercial con etapas claras</span>
            <span>Seguimiento y recordatorios automaticos</span>
            <span>Integracion con Google Calendar y Meet</span>
            <span>Gestion de equipo, metas y productividad</span>
            <span>Plantillas para WhatsApp y correo</span>
          </div>
        </div>

        <aside class="hero-panel" aria-label="Vista previa del dashboard CRM">
          <p class="panel-tag">PROPUESTA DE VALOR</p>
          <h3>Operacion comercial unificada para vender con mas control</h3>
          <div class="pipeline-mockup">
            <article>
              <p class="metric-title">Tiempo de respuesta</p>
              <p class="metric-value">-27%</p>
            </article>
            <article>
              <p class="metric-title">Reuniones efectivas</p>
              <p class="metric-value">+22%</p>
            </article>
            <article>
              <p class="metric-title">Conversion general</p>
              <p class="metric-value">+18%</p>
            </article>
            <article>
              <p class="metric-title">Fuga de oportunidades</p>
              <p class="metric-value">-31%</p>
            </article>
          </div>
          <p class="panel-note">Solicita una demo y descubre como aumentar tus cierres desde el primer mes.</p>
        </aside>
      </section>

      <section class="page-section section">
        <div class="section-head">
          <p class="tag">PROBLEMA QUE RESUELVE</p>
          <h2>El dolor real de los equipos comerciales</h2>
          <p class="section-lead">
            Muchas empresas no pierden ventas por falta de esfuerzo, sino por falta de seguimiento y orden operativo.
          </p>
        </div>
        <div class="feature-grid">
          <article class="feature-card">
            <h3>Leads que se enfrian</h3>
            <p>Sin recordatorios y proxima accion, los prospectos se quedan sin seguimiento.</p>
          </article>
          <article class="feature-card">
            <h3>Reuniones sin control</h3>
            <p>Se agenda la reunion, pero no se documentan acuerdos ni resultados.</p>
          </article>
          <article class="feature-card">
            <h3>Informacion dispersa</h3>
            <p>WhatsApp, notas y hojas de calculo separadas impiden decidir rapido.</p>
          </article>
          <article class="feature-card">
            <h3>Sin visibilidad del equipo</h3>
            <p>Falta claridad de metas, conversion y actividad por vendedor.</p>
          </article>
          <article class="feature-card">
            <h3>Poca estandarizacion</h3>
            <p>Cada vendedor trabaja distinto y se pierde consistencia comercial.</p>
          </article>
          <article class="feature-card">
            <h3>Dificil escalar ventas</h3>
            <p>Sin operacion centralizada, crecer el equipo baja el control del pipeline.</p>
          </article>
        </div>
      </section>

      <section class="page-section section">
        <div class="section-head">
          <p class="tag">BENEFICIOS PRINCIPALES</p>
          <h2>Resultados accionables para vender mejor</h2>
        </div>
        <div class="benefits-grid">
          <article class="benefit-card">
            <h3>Mas cierres</h3>
            <p>Seguimiento ordenado de cada oportunidad hasta convertirla en venta.</p>
          </article>
          <article class="benefit-card">
            <h3>Menos fuga de oportunidades</h3>
            <p>Recordatorios y tareas pendientes visibles para todo el equipo comercial.</p>
          </article>
          <article class="benefit-card">
            <h3>Mas productividad</h3>
            <p>Plantillas de mensajes y procesos repetibles para ejecutar mas en menos tiempo.</p>
          </article>
          <article class="benefit-card">
            <h3>Mejor control</h3>
            <p>Metas, conversiones y desempeno por vendedor en un solo panel.</p>
          </article>
          <article class="benefit-card">
            <h3>Operacion unificada</h3>
            <p>Prospectos, clientes, agenda y equipo conectados en una sola plataforma.</p>
          </article>
          <article class="benefit-card">
            <h3>Adopcion rapida</h3>
            <p>Interfaz enfocada en ejecucion diaria para que el equipo la use de verdad.</p>
          </article>
        </div>
      </section>

      <section class="page-section section">
        <div class="section-head">
          <p class="tag">SEGURIDAD Y CONTROL</p>
          <h2>Tu operacion comercial centralizada y protegida</h2>
          <p class="section-lead">
            La informacion del equipo se administra con control de acceso por rol y visibilidad segun responsabilidades.
          </p>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/contacto" data-link data-track="home_demo_bottom_click">Solicitar demo</a>
          <a class="btn btn-secondary" href="/proceso" data-link data-track="home_process_click">Ver como funciona</a>
        </div>
        <p class="contact-note">Deja de perder oportunidades por desorden comercial. Centraliza tu operacion y convierte mas con un CRM disenado para vender.</p>
      </section>
    </main>
    ${renderFooter()}
  `;
}

