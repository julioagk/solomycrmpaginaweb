import { renderHeaderMobile } from './headerMobile.js'
import { renderFooterMobile } from './footerMobile.js'
import logoImg from '../../assets/image.png'

export function renderHeroMobile() {
  return `
    ${renderHeaderMobile()}
    <main>

      <!-- ===== HERO SECTION MOBILE ===== -->
      <section style="
        padding: 1.5rem 1rem 0;
        background: var(--bg-body);
        position: relative;
        overflow: hidden;
      ">
        <!-- Background blobs -->
        <div style="position: absolute; top: -5%; left: -10%; width: 55%; height: 45%; background: radial-gradient(circle, var(--brand-light) 0%, transparent 70%); z-index: 0; opacity: 0.9; pointer-events: none;"></div>
        <div style="position: absolute; bottom: 5%; right: -10%; width: 45%; height: 40%; background: radial-gradient(circle, var(--brand-light) 0%, transparent 70%); z-index: 0; opacity: 0.7; pointer-events: none;"></div>

        <!-- Main hero card (replaces bento grid block B) -->
        <div style="
          position: relative; z-index: 10;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 1.25rem;
          padding: 1.75rem 1.25rem;
          text-align: center;
          margin-bottom: 1rem;
          overflow: hidden;
        ">
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <img src="${logoImg}" style="height: 36px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08));" />
            <h1 style="font-size: 2.4rem; font-weight: 900; letter-spacing: -0.05em; line-height: 1; margin: 0; color: #0f172a;">
              SOLOMY<span style="color: var(--brand);">CRM</span>
            </h1>
          </div>
          <p id="hero-phrase-text-mobile" style="font-size: 1rem; font-weight: 600; color: #64748b; margin: 0 0 1.25rem; line-height: 1.4; letter-spacing: -0.01em;">El CRM más fácil de usar.</p>

          <!-- CTA buttons -->
          <div style="display: flex; gap: 0.65rem; justify-content: center; flex-wrap: wrap;">
            <a href="https://app.solomycrm.com" data-track="hero_crm_click_mobile" target="_blank" rel="noopener noreferrer"
              class="btn btn-primary premium-reflejo"
              style="padding: 0.65rem 1.25rem; font-size: 0.88rem; border-radius: 10px; font-weight: 700; text-decoration: none; border: none; display: inline-flex; align-items: center; gap: 0.4rem;">
              Ir al CRM
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a class="premium-reflejo" data-track="hero_demo_click_mobile" href="https://app.solomycrm.com/?demo=true" target="_blank" rel="noopener noreferrer" style="
              padding: 0.9rem 1.5rem; border-radius: 12px; cursor: pointer; background: #f59e0b; border: none; color: white; font-weight: 700; box-shadow: 0 4px 15px rgba(245,158,11,0.3); text-decoration: none; display: inline-flex; align-items: center;
            ">Demo</a>
          </div>
        </div>

        <!-- Stats strip (replaces bento block D) -->
        <div style="
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
          margin-bottom: 1rem;
        ">
          <div style="background: white; border: 2px solid #e2e8f0; border-radius: 0.875rem; padding: 0.875rem 0.25rem; text-align: center;">
            <span style="font-size: 1.4rem; font-weight: 900; color: var(--brand); letter-spacing: -0.04em; display: block; line-height: 1;">+3x</span>
            <span style="font-size: 0.55rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #94a3b8;">Conversión</span>
          </div>
          <div style="background: white; border: 2px solid #e2e8f0; border-radius: 0.875rem; padding: 0.875rem 0.25rem; text-align: center;">
            <span style="font-size: 1.4rem; font-weight: 900; color: #0f172a; letter-spacing: -0.04em; display: block; line-height: 1;">+150%</span>
            <span style="font-size: 0.55rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #94a3b8;">Productividad</span>
          </div>
          <div style="background: white; border: 2px solid #e2e8f0; border-radius: 0.875rem; padding: 0.875rem 0.25rem; text-align: center;">
            <span style="font-size: 1.4rem; font-weight: 900; color: #0f172a; letter-spacing: -0.04em; display: block; line-height: 1;">10k+</span>
            <span style="font-size: 0.55rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #94a3b8;">Prospectos</span>
          </div>
          <div style="background: white; border: 2px solid #e2e8f0; border-radius: 0.875rem; padding: 0.875rem 0.25rem; text-align: center;">
            <span style="font-size: 1.4rem; font-weight: 900; color: var(--brand); letter-spacing: -0.04em; display: block; line-height: 1;">24/7</span>
            <span style="font-size: 0.55rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #94a3b8;">Disponible</span>
          </div>
        </div>

        <!-- Features module card (replaces bento block C) -->
        <div style="
          background: white; border: 2px solid #e2e8f0; border-radius: 1.25rem;
          padding: 1.25rem; text-align: center; margin-bottom: 1rem;
          position: relative; overflow: hidden;
        ">
          <div id="module-icon-mobile" style="margin-bottom: 0.6rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.12));">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
          </div>
          <h3 id="module-title-mobile" style="font-size: 1.05rem; font-weight: 900; color: #0f172a; margin: 0 0 0.35rem; letter-spacing: -0.02em;">Dashboard Intuitivo</h3>
          <p id="module-desc-mobile" style="font-size: 0.82rem; color: #64748b; margin: 0; line-height: 1.5;">Métricas y gráficas de ventas actualizadas en tiempo real.</p>
        </div>

        <!-- Benefits list (replaces bento block A) -->
        <div style="
          background: white; border: 2px solid #e2e8f0; border-radius: 1.25rem;
          padding: 1.25rem; margin-bottom: 1rem;
        ">
          <h2 style="font-size: 1.1rem; font-weight: 900; color: #0f172a; line-height: 1.1; margin: 0 0 1rem 0; letter-spacing: -0.04em;">
            Por qué elegir<br/><span style="color: var(--brand);">nuestro CRM</span>
          </h2>
          <div id="benefits-list" style="display: flex; flex-direction: column; gap: 0.6rem;">
            <!-- JS fills this -->
          </div>
        </div>
      </section>

      <!-- ===== HOW IT WORKS (mobile) ===== -->
      <section style="padding: 3rem 1rem; background-color: var(--bg-body); text-align: center;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; letter-spacing: -0.03em;">
          Tu ciclo de venta, <span style="color: var(--brand);">optimizado</span>
        </h2>
        <p style="color: #64748b; font-size: 0.9rem; margin: 0 auto 2rem; line-height: 1.6; max-width: 280px;">
          Automatiza tu proceso comercial paso a paso.
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${[
            { num: '1', icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>', title: 'Captura', desc: 'Recopila leads automáticamente desde WhatsApp, web y formularios.' },
            { num: '2', icon: '<path d="M4 6h16M4 12h16M4 18h16"/>', title: 'Ordena', desc: 'Organiza y clasifica a tus prospectos en un embudo visual.' },
            { num: '3', icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>', title: 'Agenda & Seguimiento', desc: 'Programa citas, tareas y recordatorios automáticamente.' },
            { num: '4', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>', title: 'Cierra', desc: 'Aumenta tu conversión y analiza métricas en tiempo real.' },
          ].map(step => `
            <div style="
              background: white; border: 2px solid #e2e8f0; border-radius: 1rem;
              padding: 1rem 1.25rem;
              display: flex; align-items: center; gap: 1rem;
              text-align: left;
            ">
              <div style="width: 44px; height: 44px; flex-shrink: 0; border-radius: 50%; background: var(--brand-light); color: var(--brand); display: flex; align-items: center; justify-content: center;">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">${step.icon}</svg>
              </div>
              <div>
                <h3 style="font-size: 0.95rem; font-weight: 800; color: #0f172a; margin: 0 0 0.2rem;">${step.num}. ${step.title}</h3>
                <p style="font-size: 0.8rem; color: #64748b; margin: 0; line-height: 1.4;">${step.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ===== CTA BANNER (mobile) ===== -->
      <section style="
        padding: 3.5rem 1.25rem;
        background-color: var(--bg-body);
        position: relative; text-align: center;
      ">

        <div style="position: relative; z-index: 10;">
          <h2 style="font-size: 1.75rem; font-weight: 900; color: #0f172a; margin-bottom: 1rem; letter-spacing: -0.04em; line-height: 1.15;">
            Empieza a vender <span style="color: var(--brand);">más rápido</span>, hoy mismo.
          </h2>
          <p style="color: #64748b; font-size: 0.9rem; margin: 0 auto 1.75rem; line-height: 1.6; max-width: 300px;">
            Únete a los equipos que ya automatizaron su flujo y duplicaron su tasa de cierre.
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: center;">
            <a href="https://app.solomycrm.com" data-track="hero_crm_click_mobile" target="_blank" rel="noopener noreferrer"
              class="btn-primary"
              style="padding: 0.9rem 2rem; border: none; border-radius: 99px; font-weight: 700; font-size: 1rem; cursor: pointer; box-shadow: 0 8px 20px -5px rgba(59,130,246,0.4); display: inline-flex; align-items: center; gap: 0.5rem; color: white; text-decoration: none; background: var(--brand);">
              Ir al CRM
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="/funcionalidades" data-link style="padding: 0.9rem 2rem; background: white; color: #0f172a; border: 1px solid #e2e8f0; border-radius: 99px; font-weight: 700; font-size: 1rem; cursor: pointer; text-decoration: none;">
              Ver Funciones
            </a>
          </div>
        </div>
      </section>

    </main>
    ${renderFooterMobile()}
  `;
}
