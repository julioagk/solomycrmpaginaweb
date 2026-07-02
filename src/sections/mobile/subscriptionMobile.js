import { renderHeaderMobile } from './headerMobile.js'
import { renderFooterMobile } from './footerMobile.js'

function checkSVG() {
  return `<svg width="18" height="18" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
}
function crossSVG() {
  return `<svg width="18" height="18" fill="none" stroke="#ef4444" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`
}

function featureItem(svg, text, subtext = '') {
  return `
    <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
      ${svg}
      <div>
        <span style="font-size: 0.88rem; color: var(--text-muted); display: block;">${text}</span>
        ${subtext ? `<span style="font-size: 0.72rem; color: var(--brand); font-weight: 600;">${subtext}</span>` : ''}
      </div>
    </li>
  `
}

export function renderSubscriptionMobile() {
  return `
    ${renderHeaderMobile()}
    <main>
      <section style="padding: 1.5rem 1rem 3rem; background-color: var(--bg-body);">

        <!-- Section header -->
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; letter-spacing: -0.03em; margin-bottom: 0.35rem;">
            Planes y <span style="color: var(--brand);">Precios</span>
          </h2>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">Elige el plan que se adapta a tu equipo.</p>
        </div>

        <!-- Cards stack -->
        <div style="display: flex; flex-direction: column; gap: 1rem;">

          <!-- Plan "A la Antigua" (joke) -->
          <div style="background: white; border-radius: 14px; border: 1px dashed #cbd5e1; padding: 1.25rem; opacity: 0.72;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: #64748b; margin: 0 0 0.2rem;">Plan "A la Antigua"</h3>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0 0 1rem;">Para los que aman vivir al límite.</p>
            <div style="margin-bottom: 1rem;">
              <span style="font-size: 2rem; font-weight: 900; color: #64748b; line-height: 1;">$0</span>
              <span style="font-size: 0.85rem; color: var(--text-muted);">/mes</span>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0 0 1rem; display: flex; flex-direction: column; gap: 0.6rem;">
              ${featureItem(crossSVG(), '<span style="text-decoration: line-through;">Acceso al CRM</span>')}
              ${featureItem(crossSVG(), 'Caos total garantizado')}
              ${featureItem(crossSVG(), 'Uso de Excel y Post-its')}
              ${featureItem(crossSVG(), 'Pérdida de prospectos')}
            </ul>
            <button style="width: 100%; border: 1px solid #cbd5e1; background: #f1f5f9; color: #94a3b8; font-weight: 600; padding: 0.7rem; border-radius: 8px; cursor: not-allowed; font-family: inherit; font-size: 0.88rem;">Seguir Sufriendo</button>
          </div>

          <!-- Plan Mensual -->
          <div style="background: white; border-radius: 14px; border: 1px solid var(--border-light); padding: 1.25rem;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin: 0 0 0.2rem;">Pago Mensual</h3>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0 0 1rem;">Flexibilidad total, cancela cuando quieras.</p>
            <div style="margin-bottom: 1rem;">
              <span style="font-size: 2rem; font-weight: 900; color: var(--text-main); line-height: 1;">$199</span>
              <span style="font-size: 0.85rem; color: var(--text-muted);">/mes</span>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0 0 1rem; display: flex; flex-direction: column; gap: 0.6rem;">
              ${featureItem(checkSVG(), '<strong>1 cuenta · 2 usuarios</strong>', '+ Usuarios extra desde la app')}
              ${featureItem(checkSVG(), 'Embudos de venta visuales')}
              ${featureItem(checkSVG(), 'Recordatorios y tareas automáticas')}
              ${featureItem(checkSVG(), 'Métricas en tiempo real')}
              ${featureItem(checkSVG(), 'Soporte y actualizaciones')}
            </ul>
            <button disabled style="width: 100%; border: 1px solid #cbd5e1; background: #f1f5f9; color: #94a3b8; font-weight: 600; padding: 0.7rem; border-radius: 8px; cursor: not-allowed; font-family: inherit; font-size: 0.88rem;">Próximamente</button>
          </div>

          <!-- Plan Mensual Equipo -->
          <div style="background: white; border-radius: 14px; border: 1px solid var(--border-light); padding: 1.25rem;">
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin: 0 0 0.2rem;">Pago Mensual (Equipo)</h3>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0 0 1rem;">Ideal para equipos en crecimiento.</p>
            <div style="margin-bottom: 1rem;">
              <span style="font-size: 2rem; font-weight: 900; color: var(--text-main); line-height: 1;">$299</span>
              <span style="font-size: 0.85rem; color: var(--text-muted);">/mes</span>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0 0 1rem; display: flex; flex-direction: column; gap: 0.6rem;">
              ${featureItem(checkSVG(), '<strong>1 cuenta · 4 usuarios</strong>', '+ Usuarios extra desde la app')}
              ${featureItem(checkSVG(), 'Embudos de venta visuales')}
              ${featureItem(checkSVG(), 'Recordatorios y tareas automáticas')}
              ${featureItem(checkSVG(), 'Métricas en tiempo real')}
              ${featureItem(checkSVG(), 'Soporte y actualizaciones')}
            </ul>
            <button disabled style="width: 100%; border: 1px solid #cbd5e1; background: #f1f5f9; color: #94a3b8; font-weight: 600; padding: 0.7rem; border-radius: 8px; cursor: not-allowed; font-family: inherit; font-size: 0.88rem;">Próximamente</button>
          </div>

          <!-- Plan Anual (featured) -->
          <div style="background: white; border-radius: 14px; border: 2px solid var(--brand); padding: 1.25rem; position: relative; box-shadow: 0 12px 28px -8px rgba(37,99,235,0.18);">
            <div style="position: absolute; top: -11px; left: 50%; transform: translateX(-50%); background: var(--brand); color: white; padding: 0.15rem 0.9rem; border-radius: 99px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.05em; white-space: nowrap;">1 MES GRATIS</div>
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--brand); margin: 0 0 0.2rem;">Pago Anual</h3>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0 0 1rem;">La opción más inteligente para ahorrar.</p>
            <div style="margin-bottom: 1rem;">
              <span style="font-size: 2rem; font-weight: 900; color: var(--text-main); line-height: 1;">$2,189</span>
              <span style="font-size: 0.85rem; color: var(--text-muted);">/año</span>
            </div>
            <ul style="list-style: none; padding: 0; margin: 0 0 1rem; display: flex; flex-direction: column; gap: 0.6rem;">
              ${featureItem(checkSVG(), '<strong>1 cuenta · 2 usuarios</strong>', '+ Usuarios extra desde la app')}
              ${featureItem(checkSVG(), 'Embudos de venta visuales')}
              ${featureItem(checkSVG(), 'Recordatorios y tareas automáticas')}
              ${featureItem(checkSVG(), 'Métricas en tiempo real')}
              ${featureItem(checkSVG(), 'Soporte y actualizaciones')}
            </ul>
            <button disabled style="width: 100%; border: 1px solid #cbd5e1; background: #f1f5f9; color: #94a3b8; font-weight: 600; padding: 0.7rem; border-radius: 8px; cursor: not-allowed; font-family: inherit; font-size: 0.88rem;">Próximamente</button>
          </div>

        </div>

        <!-- Payment logos -->
        <div style="margin-top: 2rem; text-align: center;">
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem; font-weight: 500;">Pagos 100% seguros procesados por:</p>
          <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap; opacity: 0.8;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" style="height: 28px; object-fit: contain;">
            <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadopago/logo__large.png" alt="Mercado Pago" style="height: 24px; object-fit: contain;">
          </div>
        </div>

      </section>
    </main>
    ${renderFooterMobile()}
  `;
}
