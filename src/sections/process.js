import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderProcess() {
  return `
    <section class="page-section section process" id="como-funciona">
      <div class="section-head">
        <p class="tag">COMO FUNCIONA</p>
        <h2>Un flujo comercial claro de punta a punta</h2>
        <p class="section-lead">
          Desde la captacion del prospecto hasta la conversion a cliente, SOLOMYCRM
          mantiene todo el contexto para que no se pierdan oportunidades.
        </p>
      </div>

      <div class="steps">
        <article>
          <span>01</span>
          <h3>Captacion de prospectos</h3>
          <p>Registra leads de formularios, llamadas, WhatsApp o referidos y clasificalos al instante.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Seguimiento y recordatorios</h3>
          <p>Programa proxima accion por prospecto para ejecutar llamadas, correos y mensajes en tiempo.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Reuniones y negociacion</h3>
          <p>El Closer llega a cada reunion con historial completo para negociar con informacion real.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Conversion a cliente</h3>
          <p>Mueve la oportunidad a cliente y conserva toda la trazabilidad de interacciones y acuerdos.</p>
        </article>
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

