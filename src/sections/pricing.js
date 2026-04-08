export function renderPricing() {
  return `
    <section class="page-section section" id="funcionalidades">
      <div class="section-head">
        <p class="tag">FUNCIONALIDADES CLAVE</p>
        <h2>Herramientas para operar ventas con disciplina comercial</h2>
      </div>

      <div class="feature-grid">
        <article class="feature-card">
          <h3>Embudo de ventas por etapas</h3>
          <p>Visualiza cada oportunidad desde lead nuevo hasta cierre ganado o perdido.</p>
        </article>
        <article class="feature-card">
          <h3>Historial de actividades</h3>
          <p>Registra llamadas, WhatsApp, correo y citas en una linea de tiempo por cuenta.</p>
        </article>
        <article class="feature-card">
          <h3>Recordatorios y calendario</h3>
          <p>Define proxima accion para no dejar prospectos en pausa ni tareas sin ejecutar.</p>
        </article>
        <article class="feature-card">
          <h3>Metricas comerciales</h3>
          <p>Mide conversion por etapa, seguimiento efectivo y cierre por vendedor o equipo.</p>
        </article>
        <article class="feature-card">
          <h3>Prospectos y clientes en un solo lugar</h3>
          <p>Controla la transicion de lead a cliente sin perder contexto ni informacion clave.</p>
        </article>
        <article class="feature-card">
          <h3>Privacidad por registro</h3>
          <p>Cada registro puede marcarse como privado o compartido con reglas claras de acceso.</p>
        </article>
      </div>
    </section>

    <section class="page-section section" id="colaboracion">
      <div class="section-head">
        <p class="tag">COLABORACION CON CONTROL</p>
        <h2>Trabajo en equipo sin perder propiedad de cartera</h2>
        <p class="section-lead">
          Cada usuario tiene sus propios prospectos/clientes y decide si cada registro es
          privado o compartido. Solo ve quien esta autorizado.
        </p>
      </div>

      <div class="visibility-filters" aria-label="Filtros de visibilidad">
        <span>Mis registros</span>
        <span>Compartidos</span>
        <span>Todos visibles</span>
      </div>

      <div class="collab-grid">
        <article class="collab-card">
          <p class="collab-badge">Privado</p>
          <h3>Lead: Distribuidora Norte</h3>
          <p>Solo visible para su propietario y perfiles autorizados.</p>
          <p class="owner-line">Propietario: Andrea Ruiz</p>
        </article>
        <article class="collab-card shared">
          <p class="collab-badge">Compartido</p>
          <h3>Lead: Grupo Delta Retail</h3>
          <p>Visible para seguimiento de equipo y transferencia al Closer.</p>
          <p class="owner-line">Compartido por: Carlos Mendez</p>
        </article>
        <article class="collab-card">
          <p class="collab-badge">No autorizado</p>
          <h3>Registro restringido</h3>
          <p>Si no tiene permisos, el sistema no muestra el registro.</p>
          <p class="owner-line">Acceso bloqueado por politicas de privacidad.</p>
        </article>
      </div>
    </section>

    <section class="page-section section" id="beneficios">
      <div class="section-head">
        <p class="tag">BENEFICIOS COMERCIALES</p>
        <h2>Resultados diarios para un equipo que vende en serio</h2>
      </div>
      <div class="benefits-grid">
        <article class="benefit-card">
          <h3>Mas cierres</h3>
          <p>Negociacion con contexto completo para acelerar decisiones del prospecto.</p>
        </article>
        <article class="benefit-card">
          <h3>Menos fugas de leads</h3>
          <p>Recordatorios y proxima accion obligatoria para mantener el avance activo.</p>
        </article>
        <article class="benefit-card">
          <h3>Mejor control del equipo</h3>
          <p>Visibilidad real de pipeline, productividad y colaboracion por usuario.</p>
        </article>
      </div>
    </section>

    <section class="page-section section" id="prueba-social">
      <div class="section-head">
        <p class="tag">PRUEBA SOCIAL</p>
        <h2>Equipos comerciales que ya operan con MYSOLOCRM</h2>
      </div>
      <div class="social-grid">
        <article class="social-card">
          <p>"Subimos nuestra tasa de seguimiento efectivo en ocho semanas."</p>
          <span>Gerencia Comercial, Distribuidora Industrial</span>
        </article>
        <article class="social-card">
          <p>"Ahora sabemos exactamente que lead esta en riesgo y quien debe actuar."</p>
          <span>Head de Ventas, SaaS B2B</span>
        </article>
        <article class="social-card">
          <p>"La separacion Prospector/Closer se volvio medible y escalable."</p>
          <span>Director Comercial, Servicios Financieros</span>
        </article>
      </div>
    </section>

    <section class="page-section section faq" id="faq">
      <div class="section-head">
        <p class="tag">FAQ</p>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div class="faq-list">
        <details>
          <summary>Que diferencia a MYSOLOCRM de un CRM generico?</summary>
          <p>Esta enfocado en operacion comercial real: captacion, seguimiento, reuniones y cierre con trazabilidad.</p>
        </details>
        <details>
          <summary>Puedo separar roles entre Prospector y Closer?</summary>
          <p>Si. Cada rol puede operar sus actividades con visibilidad segun permisos y flujo del embudo.</p>
        </details>
        <details>
          <summary>Como funciona la privacidad por registro?</summary>
          <p>Cada prospecto o cliente puede marcarse como privado o compartido. Solo lo ve quien esta autorizado.</p>
        </details>
        <details>
          <summary>Que filtros de visibilidad estan disponibles?</summary>
          <p>Mis registros, compartidos y todos visibles, con identificacion de propietario y compartido por.</p>
        </details>
        <details>
          <summary>Incluye historial y calendario?</summary>
          <p>Si. Registra llamadas, WhatsApp, correos y citas, con recordatorios y vista de agenda comercial.</p>
        </details>
      </div>
    </section>
  `;
}
