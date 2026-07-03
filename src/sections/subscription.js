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

        /* ── MODAL REGISTRO+PAGO ── */
        #register-payment-modal {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(15,23,42,0.65);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          opacity: 0; pointer-events: none;
          transition: opacity 0.25s ease;
        }
        #register-payment-modal.is-visible { opacity: 1; pointer-events: all; }
        .rp-modal-box {
          background: white; border-radius: 20px;
          width: 100%; max-width: 520px; max-height: 92vh; overflow-y: auto;
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
          transform: translateY(16px) scale(0.98);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          position: relative;
        }
        #register-payment-modal.is-visible .rp-modal-box { transform: translateY(0) scale(1); }
        .rp-modal-header {
          padding: 1.75rem 2rem 1.25rem;
          border-bottom: 1px solid var(--border-light);
          position: relative;
        }
        .rp-plan-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: var(--theme-50); color: var(--theme-600);
          font-size: 0.75rem; font-weight: 700;
          padding: 0.3rem 0.75rem; border-radius: 99px;
          letter-spacing: 0.05em; text-transform: uppercase;
          margin-bottom: 0.6rem;
        }
        .rp-modal-body { padding: 1.5rem 2rem 2rem; }
        .rp-field-group { display: grid; gap: 0.9rem; margin-bottom: 0.9rem; }
        .rp-field-group.two-col { grid-template-columns: 1fr 1fr; }
        @media (max-width: 480px) {
          .rp-field-group.two-col { grid-template-columns: 1fr; }
          .rp-modal-body { padding: 1.25rem; }
          .rp-modal-header { padding: 1.25rem; }
        }
        .rp-field { display: flex; flex-direction: column; gap: 0.3rem; }
        .rp-field label { font-size: 0.78rem; font-weight: 600; color: var(--text-main); letter-spacing: 0.02em; }
        .rp-input {
          padding: 0.65rem 0.9rem; border: 1.5px solid var(--border-light);
          border-radius: 9px; font-size: 0.9rem; font-family: inherit;
          background: #f8fafc; color: var(--text-main); transition: all 0.2s; width: 100%;
        }
        .rp-input:focus {
          outline: none; border-color: var(--brand); background: white;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
        }
        .rp-input.is-error { border-color: var(--danger); background: #fff5f5; }
        .rp-input.is-ok { border-color: var(--success); }
        .rp-field-error { font-size: 0.73rem; color: var(--danger); min-height: 1rem; font-weight: 500; }
        .rp-field-hint { font-size: 0.73rem; color: var(--text-muted); min-height: 1rem; }
        .rp-strength-bar { height: 4px; border-radius: 99px; background: #e2e8f0; overflow: hidden; margin-top: 4px; }
        .rp-strength-fill { height: 100%; border-radius: 99px; transition: all 0.3s; width: 0%; }
        .rp-password-wrapper { position: relative; }
        .rp-eye-btn {
          position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; color: var(--text-muted);
          padding: 0; display: flex; align-items: center;
        }
        .rp-divider { border: none; border-top: 1px solid var(--border-light); margin: 1.25rem 0; }
        .rp-summary {
          background: var(--theme-50); border: 1px solid var(--theme-200);
          border-radius: 12px; padding: 1rem 1.25rem;
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .rp-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--theme-600), var(--theme-500));
          color: white; font-weight: 700; padding: 0.95rem; border-radius: 12px;
          cursor: pointer; border: none; font-family: inherit; font-size: 1rem;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          transition: all 0.25s; box-shadow: 0 4px 15px rgba(37,99,235,0.3);
        }
        .rp-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(37,99,235,0.4); }
        .rp-submit-btn:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
        .rp-close-btn {
          position: absolute; top: 1rem; right: 1rem;
          background: #f1f5f9; border: none; border-radius: 50%;
          width: 32px; height: 32px; cursor: pointer; font-size: 1.1rem;
          color: var(--text-muted); display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .rp-close-btn:hover { background: var(--border-light); color: var(--text-main); }
        .rp-global-error {
          background: #fee2e2; border: 1px solid #fca5a5; color: #b91c1c;
          font-size: 0.82rem; font-weight: 600; padding: 0.65rem 1rem;
          border-radius: 8px; margin-bottom: 1rem; display: none;
        }
        .rp-global-error.show { display: block; }
        .rp-secure-note {
          text-align: center; font-size: 0.75rem; color: var(--text-muted);
          margin-top: 0.85rem; display: flex; align-items: center;
          justify-content: center; gap: 0.35rem;
        }
        .rp-spinner {
          width: 18px; height: 18px; border: 2.5px solid rgba(255,255,255,0.4);
          border-top-color: white; border-radius: 50%;
          animation: rp-spin 0.7s linear infinite; display: none;
        }
        @keyframes rp-spin { to { transform: rotate(360deg); } }
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
            <button class="btn-subscribe open-register-modal" data-plan="mensual" data-label="Plan Mensual" data-price="$199/mes" id="btn-subscribe-mensual">
              Suscribirme
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
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
            <button class="btn-subscribe open-register-modal" data-plan="mensual_equipo" data-label="Plan Mensual Equipo" data-price="$299/mes" id="btn-subscribe-mensual-equipo">
              Suscribirme
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
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
            <button class="btn-subscribe annual open-register-modal" data-plan="anual" data-label="Plan Anual" data-price="$2,189/año" id="btn-subscribe-anual">
              Suscribirme — Ahorro máximo
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
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

    <!-- ══ MODAL: REGISTRO + PAGO FUSIONADO ══ -->
    <div id="register-payment-modal" role="dialog" aria-modal="true" aria-labelledby="rp-modal-title">
      <div class="rp-modal-box">
        <div class="rp-modal-header">
          <button class="rp-close-btn" id="rp-close-btn" aria-label="Cerrar">×</button>
          <div class="rp-plan-badge">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <span id="rp-plan-label">Plan Mensual</span>
          </div>
          <h2 id="rp-modal-title" style="font-size:1.4rem;font-weight:800;color:var(--text-main);margin-bottom:0.15rem;">Crea tu cuenta y suscríbete</h2>
          <p style="font-size:0.85rem;color:var(--text-muted);margin:0;">Completa tus datos y paga de forma segura con Stripe.</p>
        </div>

        <div class="rp-modal-body">
          <div class="rp-global-error" id="rp-global-error"></div>
          <form id="rp-form" novalidate autocomplete="off">
            <input type="hidden" id="rp-plan-input" name="plan" value="">

            <div class="rp-field-group two-col">
              <div class="rp-field">
                <label for="rp-nombre">Nombre completo <span style="color:var(--danger)">*</span></label>
                <input type="text" id="rp-nombre" name="nombre" class="rp-input" placeholder="Carlos Ramírez" autocomplete="name" required>
                <span class="rp-field-error" id="err-nombre"></span>
              </div>
              <div class="rp-field">
                <label for="rp-telefono">Teléfono (opcional)</label>
                <input type="tel" id="rp-telefono" name="telefono" class="rp-input" placeholder="55 1234 5678" autocomplete="tel">
                <span class="rp-field-hint"></span>
              </div>
            </div>

            <div class="rp-field-group">
              <div class="rp-field">
                <label for="rp-email">Correo electrónico <span style="color:var(--danger)">*</span></label>
                <input type="email" id="rp-email" name="email" class="rp-input" placeholder="tu@correo.com" autocomplete="email" required>
                <span class="rp-field-error" id="err-email"></span>
              </div>
            </div>

            <div class="rp-field-group">
              <div class="rp-field">
                <label for="rp-usuario">Usuario para el CRM <span style="color:var(--danger)">*</span></label>
                <input type="text" id="rp-usuario" name="usuario" class="rp-input" placeholder="miusuario123" autocomplete="username" required minlength="3">
                <span class="rp-field-error" id="err-usuario"></span>
                <span class="rp-field-hint" id="hint-usuario">Con esto iniciarás sesión en el CRM.</span>
              </div>
            </div>

            <div class="rp-field-group two-col">
              <div class="rp-field">
                <label for="rp-contrasena">Contraseña <span style="color:var(--danger)">*</span></label>
                <div class="rp-password-wrapper">
                  <input type="password" id="rp-contrasena" name="contrasena" class="rp-input" style="padding-right:2.5rem;" placeholder="Mínimo 6 caracteres" autocomplete="new-password" required>
                  <button type="button" class="rp-eye-btn" id="rp-eye-pass" aria-label="Ver contraseña">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </button>
                </div>
                <div class="rp-strength-bar"><div class="rp-strength-fill" id="rp-strength-fill"></div></div>
                <span class="rp-field-error" id="err-contrasena"></span>
              </div>
              <div class="rp-field">
                <label for="rp-confirmar">Confirmar contraseña <span style="color:var(--danger)">*</span></label>
                <div class="rp-password-wrapper">
                  <input type="password" id="rp-confirmar" name="confirmar" class="rp-input" style="padding-right:2.5rem;" placeholder="Repite tu contraseña" autocomplete="new-password" required>
                  <button type="button" class="rp-eye-btn" id="rp-eye-confirm" aria-label="Ver confirmación">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </button>
                </div>
                <span class="rp-field-error" id="err-confirmar"></span>
              </div>
            </div>

            <hr class="rp-divider">

            <div class="rp-summary">
              <div>
                <div style="font-size:0.8rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Plan seleccionado</div>
                <div style="font-size:1rem;font-weight:800;color:var(--text-main);" id="rp-summary-label">—</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:1.5rem;font-weight:900;color:var(--brand);" id="rp-summary-price">—</div>
              </div>
            </div>

            <button type="submit" class="rp-submit-btn" id="rp-submit-btn">
              <div class="rp-spinner" id="rp-spinner"></div>
              <svg id="rp-lock-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              <span id="rp-submit-text">Continuar al pago seguro</span>
            </button>

            <div class="rp-secure-note">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              Pago seguro 256-bit SSL · Procesado por Stripe
            </div>
          </form>
        </div>
      </div>
    </div>
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
