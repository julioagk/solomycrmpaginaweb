import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderSubscription() {
  return `
    <section class="section" id="precios" style="padding: 2rem 1.5rem 6rem; background-color: var(--bg-body);">
      <style>
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        @media (max-width: 1100px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
        .pricing-card { transition: all 0.3s ease; }
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(37,99,235,0.15), 0 10px 10px -5px rgba(37,99,235,0.04);
          border-color: var(--brand) !important;
          z-index: 10;
        }
        .btn-subscribe {
          width: 100%; background: var(--brand); color: white;
          font-weight: 700; padding: 0.85rem; border-radius: 10px;
          cursor: pointer; border: none; font-family: inherit; font-size: 0.95rem;
          transition: all 0.25s ease; display: flex; align-items: center;
          justify-content: center; gap: 0.5rem;
        }
        .btn-subscribe:hover {
          background: var(--brand-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,99,235,0.3);
        }
        .btn-subscribe.annual {
          background: linear-gradient(135deg, var(--theme-600), var(--theme-500));
          box-shadow: 0 4px 15px rgba(37,99,235,0.25);
        }
        .btn-subscribe.annual:hover { box-shadow: 0 10px 25px rgba(37,99,235,0.4); }

        /* Estilos del modal eliminados porque ahora usamos una página separada */
      </style>

      <div class="container" style="max-width: 1300px; width: 100%; margin: 0 auto;">

        <!-- Grid de Precios -->
        <div class="pricing-grid">
          
          <!-- Plan Free (Broma) -->
          <div class="pricing-card" style="background:white;border-radius:16px;border:1px dashed #cbd5e1;padding:2rem;display:flex;flex-direction:column;opacity:0.7;position:relative;">
            <h3 style="font-size:1.3rem;font-weight:800;color:#64748b;margin-bottom:0.25rem;">Plan "A la Antigua"</h3>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1.5rem;">Para los que aman vivir al límite y perder ventas.</p>
            <div style="margin-bottom:2rem;">
              <span style="font-size:2.5rem;font-weight:900;color:#64748b;line-height:1;">$0</span><span style="font-size:0.95rem;color:var(--text-muted);">/mes</span>
            </div>
            <ul style="list-style:none;padding:0;margin:0 0 2rem;flex-grow:1;display:flex;flex-direction:column;gap:0.85rem;">
              <li style="display:flex;align-items:flex-start;gap:0.6rem;">
                <svg width="20" height="20" fill="none" stroke="#ef4444" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span style="font-size:0.95rem;color:var(--text-muted);text-decoration:line-through;">Acceso al CRM</span>
              </li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;">
                <svg width="20" height="20" fill="none" stroke="#ef4444" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span style="font-size:0.95rem;color:var(--text-muted);">Caos total garantizado</span>
              </li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;">
                <svg width="20" height="20" fill="none" stroke="#ef4444" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span style="font-size:0.95rem;color:var(--text-muted);">Uso de Excel, libretas y Post-its</span>
              </li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;">
                <svg width="20" height="20" fill="none" stroke="#ef4444" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span style="font-size:0.95rem;color:var(--text-muted);">Pérdida de prospectos por olvido</span>
              </li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;">
                <svg width="20" height="20" fill="none" stroke="#ef4444" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span style="font-size:0.95rem;color:var(--text-muted);">Estrés y desorganización 24/7</span>
              </li>
            </ul>
            <button style="width:100%;border:1px solid #cbd5e1;background:#f1f5f9;color:#94a3b8;font-weight:600;padding:0.8rem;border-radius:8px;cursor:not-allowed;font-family:inherit;">Seguir Sufriendo</button>
          </div>

          <!-- Plan Mensual -->
          <div class="pricing-card" style="background:white;border-radius:16px;border:1px solid var(--border-light);padding:2rem;display:flex;flex-direction:column;position:relative;">
            <h3 style="font-size:1.3rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">Pago Mensual</h3>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1.5rem;">Flexibilidad total, cancela cuando quieras.</p>
            <div style="margin-bottom:2rem;">
              <span style="font-size:2.5rem;font-weight:900;color:var(--text-main);line-height:1;">$199</span><span style="font-size:0.95rem;color:var(--text-muted);">/mes</span>
            </div>
            <ul style="list-style:none;padding:0;margin:0 0 2rem;flex-grow:1;display:flex;flex-direction:column;gap:0.85rem;">
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:0.1rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><div><span style="font-size:0.95rem;color:var(--text-muted);display:block;"><strong>1 cuenta con 2 usuarios</strong></span><span style="font-size:0.75rem;color:var(--brand);font-weight:600;">+ Usuarios extra desde la app</span></div></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Embudos de venta visuales</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Recordatorios y tareas automáticas</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Métricas en tiempo real</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Soporte y actualizaciones</span></li>
            </ul>
            <a href="/pago?plan=mensual" data-link class="btn-subscribe" style="text-decoration:none;">
              Suscribirme
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          <!-- Plan Mensual Equipo -->
          <div class="pricing-card" style="background:white;border-radius:16px;border:1px solid var(--border-light);padding:2rem;display:flex;flex-direction:column;position:relative;">
            <h3 style="font-size:1.3rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">Pago Mensual (Equipo)</h3>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1.5rem;">Ideal para equipos comerciales en crecimiento.</p>
            <div style="margin-bottom:2rem;">
              <span style="font-size:2.5rem;font-weight:900;color:var(--text-main);line-height:1;">$299</span><span style="font-size:0.95rem;color:var(--text-muted);">/mes</span>
            </div>
            <ul style="list-style:none;padding:0;margin:0 0 2rem;flex-grow:1;display:flex;flex-direction:column;gap:0.85rem;">
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:0.1rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><div><span style="font-size:0.95rem;color:var(--text-muted);display:block;"><strong>1 cuenta con 4 usuarios</strong></span><span style="font-size:0.75rem;color:var(--brand);font-weight:600;">+ Usuarios extra desde la app</span></div></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Embudos de venta visuales</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Recordatorios y tareas automáticas</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Métricas en tiempo real</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Soporte y actualizaciones</span></li>
            </ul>
            <a href="/pago?plan=mensual_equipo" data-link class="btn-subscribe" style="text-decoration:none;">
              Suscribirme
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          <!-- Plan Anual -->
          <div class="pricing-card" style="background:white;border-radius:16px;border:2px solid var(--brand);padding:2rem;display:flex;flex-direction:column;position:relative;box-shadow:0 15px 30px -10px rgba(37,99,235,0.15);">
            <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--brand);color:white;padding:0.2rem 1rem;border-radius:12px;font-size:0.75rem;font-weight:700;letter-spacing:0.05em;white-space:nowrap;">1 MES GRATIS</div>
            <h3 style="font-size:1.3rem;font-weight:800;color:var(--brand);margin-bottom:0.25rem;">Pago Anual</h3>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1.5rem;">La opción más inteligente para ahorrar a largo plazo.</p>
            <div style="margin-bottom:2rem;">
              <span style="font-size:2.5rem;font-weight:900;color:var(--text-main);line-height:1;">$2,189</span><span style="font-size:0.95rem;color:var(--text-muted);">/año</span>
            </div>
            <ul style="list-style:none;padding:0;margin:0 0 2rem;flex-grow:1;display:flex;flex-direction:column;gap:0.85rem;">
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:0.1rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><div><span style="font-size:0.95rem;color:var(--text-muted);display:block;"><strong>1 cuenta con 2 usuarios</strong></span><span style="font-size:0.75rem;color:var(--brand);font-weight:600;">+ Usuarios extra desde la app</span></div></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Embudos de venta visuales</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Recordatorios y tareas automáticas</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Métricas en tiempo real</span></li>
              <li style="display:flex;align-items:flex-start;gap:0.6rem;"><svg width="20" height="20" fill="none" stroke="var(--brand)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span style="font-size:0.95rem;color:var(--text-muted);">Soporte y actualizaciones</span></li>
            </ul>
            <a href="/pago?plan=anual" data-link class="btn-subscribe annual" style="text-decoration:none;">
              Suscribirme — Ahorro máximo
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
        
        <!-- Payment Gateways -->
        <div style="margin-top:2rem;text-align:center;">
          <p style="font-size:0.95rem;color:var(--text-muted);margin-bottom:1.5rem;font-weight:500;">Pagos 100% seguros procesados por:</p>
          <div style="display:flex;justify-content:center;align-items:center;gap:3rem;flex-wrap:wrap;opacity:0.8;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" style="height:35px;object-fit:contain;">
            <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadopago/logo__large.png" alt="Mercado Pago" style="height:30px;object-fit:contain;">
          </div>
        </div>

      </div>
    </section>
  `;
}

export function renderSubscriptionPage() {
  return `
    ${renderHeader()}
    <main>
      ${renderSubscription()}
    </main>
    ${renderFooter()}
  `
}
