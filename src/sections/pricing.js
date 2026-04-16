import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderPricing() {
  return `
    <section class="page-section section" id="funcionalidades">
      <div class="section-head">
        <p class="tag">MODULOS CLAVE</p>
        <h2>Todo lo importante para vender, sin ruido operativo</h2>
      </div>

      <div class="feature-grid">
        <article class="feature-card">
          <h3>Gestión de prospectos y clientes</h3>
          <p>Centraliza datos y transiciona oportunidades sin perder contexto comercial.</p>
        </article>
        <article class="feature-card">
          <h3>Embudo comercial por etapas</h3>
          <p>Visualiza avance desde primer contacto hasta venta ganada o perdida.</p>
        </article>
        <article class="feature-card">
          <h3>Calendario comercial</h3>
          <p>Integra Google Calendar para agendar, confirmar y ejecutar reuniones con orden.</p>
        </article>
        <article class="feature-card">
          <h3>Gestión de equipo y metas</h3>
          <p>Monitorea objetivos, actividad y avance comercial por vendedor o celula.</p>
        </article>
        <article class="feature-card">
          <h3>Tareas y recordatorios</h3>
          <p>Define siguiente accion para reducir fuga y acelerar el ciclo de venta.</p>
        </article>
        <article class="feature-card">
          <h3>Plantillas para mensajes</h3>
          <p>Usa plantillas de WhatsApp y correo para estandarizar seguimiento comercial.</p>
        </article>
      </div>
    </section>

    <section class="page-section section" id="diferenciadores">
      <div class="section-head">
        <p class="tag">DIFERENCIADORES PARA VENDER</p>
        <h2>Por qué SOLOMYCRM acelera la ejecución comercial</h2>
        <p class="section-lead">
          Diseñado para equipos de ventas que necesitan acción diaria, seguimiento consistente
          y visibilidad real de resultados.
        </p>
      </div>

      <div class="benefits-grid">
        <article class="collab-card">
          <h3>Flujo comercial de punta a punta</h3>
          <p>Desde captación hasta cierre, con historial y contexto en cada oportunidad.</p>
        </article>
        <article class="collab-card">
          <h3>Enfoque en ejecucion diaria</h3>
          <p>Actividades claras para prospectores y closers con prioridad comercial.</p>
        </article>
        <article class="collab-card">
          <h3>Colaboracion con visibilidad compartida</h3>
          <p>El equipo ve lo necesario para avanzar cuentas sin perder control.</p>
        </article>
        <article class="collab-card">
          <h3>Automatización práctica</h3>
          <p>Agenda, plantillas y seguimiento automático para vender de forma consistente.</p>
        </article>
        <article class="collab-card">
          <h3>Fácil adopción</h3>
          <p>Interfaz pensada para uso comercial diario sin curva larga de aprendizaje.</p>
        </article>
        <article class="collab-card">
          <h3>Control por equipo</h3>
          <p>Metas, conversiones y rendimiento visibles para líderes comerciales.</p>
        </article>
      </div>
    </section>
  `;
}

export function renderPricingPage() {
  return `
    ${renderHeader()}
    <main>
      ${renderPricing()}
    </main>
    ${renderFooter()}
  `
}

