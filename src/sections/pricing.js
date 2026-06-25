import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderPricing() {
  return `
    <section class="section" id="funcionalidades">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <span class="tag">MÓDULOS CLAVE</span>
          <h2>Todo lo importante para vender, sin ruido operativo</h2>
        </div>

        <div class="grid-3">
          <div class="card">
            <h3>Gestión de prospectos</h3>
            <p>Centraliza datos y transiciona oportunidades sin perder contexto comercial en ningún momento.</p>
          </div>
          <div class="card">
            <h3>Calendario comercial</h3>
            <p>Integra Google Calendar para agendar, confirmar y ejecutar reuniones con orden.</p>
          </div>
          <div class="card">
            <h3>Gestión de equipo y metas</h3>
            <p>Monitorea objetivos, actividad y avance comercial por vendedor o célula.</p>
          </div>
          <div class="card">
            <h3>Tareas y recordatorios</h3>
            <p>Define siguiente acción para reducir fuga y acelerar el ciclo de venta.</p>
          </div>
          <div class="card">
            <h3>Plantillas para mensajes</h3>
            <p>Usa plantillas de WhatsApp y correo para estandarizar seguimiento comercial.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="diferenciadores" style="background-color: white;">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <span class="tag">DIFERENCIADORES</span>
          <h2>Por qué SOLOMYCRM acelera la ejecución comercial</h2>
          <p style="max-width: 700px; margin: 0 auto;">Diseñado para equipos de ventas que necesitan acción diaria, seguimiento consistente y visibilidad real de resultados.</p>
        </div>

        <div class="grid-3">
          <div class="card">
            <h3>Flujo de punta a punta</h3>
            <p>Desde captación hasta cierre, con historial y contexto en cada oportunidad.</p>
          </div>
          <div class="card">
            <h3>Enfoque en ejecución diaria</h3>
            <p>Actividades claras para prospectores y closers con prioridad comercial.</p>
          </div>
          <div class="card">
            <h3>Visibilidad compartida</h3>
            <p>El equipo ve lo necesario para avanzar cuentas sin perder control.</p>
          </div>
          <div class="card">
            <h3>Automatización práctica</h3>
            <p>Agenda, plantillas y seguimiento automático para vender de forma consistente.</p>
          </div>
          <div class="card">
            <h3>Fácil adopción</h3>
            <p>Interfaz pensada para uso comercial diario sin curva larga de aprendizaje.</p>
          </div>
          <div class="card">
            <h3>Control por equipo</h3>
            <p>Metas, conversiones y rendimiento visibles para líderes comerciales.</p>
          </div>
        </div>
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
