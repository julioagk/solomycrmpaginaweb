import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'
import { renderHeaderMobile } from './mobile/headerMobile.js'
import { renderFooterMobile } from './mobile/footerMobile.js'
import logoImg from '../assets/image.png'

const isMobile = window.matchMedia('(max-width: 768px)').matches

function renderFloatingIcons(count = 20) {
  const icons = [
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M7 3v4h4" /><path d="M9 17l0 4" /><path d="M17 14l0 7" /><path d="M13 13l0 8" /><path d="M21 12l0 9" /></svg>`,
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 21v-14" /><path d="M9 15l3 -3l3 3" /><path d="M15 10l3 -3l3 3" /><path d="M3 21l18 0" /><path d="M12 21l0 -9" /><path d="M3 6l3 -3l3 3" /><path d="M6 21v-18" /></svg>`,
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" /></svg>`,
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>`,
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" /><path d="M7 10a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8" /><path d="M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /></svg>`
  ];
  let html = '<div style="position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0;">';
  for (let i = 0; i < count; i++) {
    const icon = icons[i % icons.length];
    const left = (i / count) * 100 + (Math.random() * (100 / count) * 0.2);
    const duration = 12 + Math.random() * 6;
    const delay = -(Math.random() * 30);
    const scale = 0.8 + Math.random() * 0.4;
    const opacity = 0.2 + Math.random() * 0.4;
    
    html += `
      <div class="floating-icon" style="
        position: absolute;
        left: ${left}%;
        top: -15%;
        opacity: ${opacity};
        transform: scale(${scale});
        color: #cbd5e1;
        animation: floatDown ${duration}s linear infinite;
        animation-delay: ${delay}s;
      ">
        ${icon}
      </div>
    `;
  }
  html += '</div>';
  return html;
}

export function renderCheckoutPage() {
  const params = new URLSearchParams(window.location.search)
  const plan = params.get('plan') || 'mensual'
  const sessionId = params.get('session_id')
  const cancelled = params.get('cancelled')
  
  let label = 'Plan Mensual'
  let price = '$199/mes'
  if (plan === 'mensual_equipo') {
    label = 'Plan Mensual (Equipo)'
    price = '$299/mes'
  } else if (plan === 'anual') {
    label = 'Plan Anual'
    price = '$2,189/año'
  }

  const headerHtml = isMobile ? renderHeaderMobile() : renderHeader()
  const footerHtml = isMobile ? renderFooterMobile() : renderFooter()

  // Timeline dynamic variables
  const step2Class = sessionId ? 'completed' : 'active'
  const step2Icon  = sessionId ? '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : '2'
  const step3Class = sessionId ? 'completed' : 'pending'
  const step3Icon  = sessionId ? '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : '3'
  const line2Width = sessionId ? '70%' : '35%'
  
  // Dynamic Right Card Content
  let rightCardContent = ''
  
  if (sessionId) {
    rightCardContent = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
        <div style="width: 80px; height: 80px; background: #dcfce7; color: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; box-shadow: 0 0 0 10px rgba(220, 252, 231, 0.5);">
          <svg width="45" height="45" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 style="font-size: 1.8rem; font-weight: 900; color: #0f172a; margin-bottom: 1rem; letter-spacing: -0.03em;">¡Pago Exitoso!</h3>
        <p style="font-size: 1.05rem; color: #64748b; margin-bottom: 2rem; line-height: 1.6;">Tu cuenta ha sido creada correctamente. Ya puedes acceder a todas las herramientas de tu nuevo CRM.</p>
        <a href="https://app.solomycrm.com" class="co-submit-btn" style="text-decoration: none;">
          Ir a mi CRM ahora
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
    `
  } else {
    let errorHTML = ''
    if (cancelled) {
      errorHTML = `<div style="background: #fee2e2; color: #b91c1c; padding: 0.85rem; border-radius: 0.75rem; font-size: 0.9rem; font-weight: 600; text-align: center; margin-bottom: 1.5rem; border: 1px solid #fca5a5;">Has cancelado el proceso de pago. Puedes volver a intentarlo cuando estés listo.</div>`
    }
    rightCardContent = `
      <h3 style="font-size: 1.6rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;">Crea tu cuenta</h3>
      <p style="font-size: 1rem; color: #64748b; margin-bottom: 1.5rem;">Ingresa tus datos para comenzar tu experiencia en SOLOMYCRM.</p>
      
      ${errorHTML}
      <div id="co-global-error" class="co-global-error"></div>

      <form id="checkout-form" novalidate autocomplete="off" style="display: flex; flex-direction: column; gap: 1.25rem; flex: 1;">
        <input type="hidden" id="co-plan-input" value="${plan}">
        
        <div class="co-input-group">
          <label class="co-label">Nombre completo <span style="color: var(--danger)">*</span></label>
          <div class="co-input-wrapper">
            <input type="text" id="co-nombre" class="co-input" placeholder="Ej. Carlos Ramírez" required>
          </div>
          <div class="co-error-msg" id="err-nombre"></div>
        </div>

        <div class="co-input-group">
          <label class="co-label">Correo electrónico <span style="color: var(--danger)">*</span></label>
          <div class="co-input-wrapper">
            <input type="email" id="co-email" class="co-input" placeholder="tu@correo.com" required>
          </div>
          <div class="co-error-msg" id="err-email"></div>
        </div>

        <div class="form-row-2">
          <div class="co-input-group">
            <label class="co-label">Teléfono <span style="font-weight:400; color:#64748b;">(Opcional)</span></label>
            <div class="co-input-wrapper">
              <input type="tel" id="co-telefono" class="co-input" placeholder="Ej. 81 1234 5678">
            </div>
            <div class="co-error-msg"></div>
          </div>
          <div class="co-input-group">
            <label class="co-label">Usuario <span style="color: var(--danger)">*</span></label>
            <div class="co-input-wrapper">
              <input type="text" id="co-usuario" class="co-input" placeholder="miusuario123" required>
            </div>
            <div class="co-error-msg" id="err-usuario"></div>
          </div>
        </div>

        <div class="form-row-2">
          <div class="co-input-group">
            <label class="co-label">Contraseña <span style="color: var(--danger)">*</span></label>
            <div class="co-input-wrapper">
              <input type="password" id="co-contrasena" class="co-input" placeholder="••••••••" required>
              <button type="button" id="co-eye-pass" class="co-eye-btn"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
            </div>
            <div style="height:4px; background:#e2e8f0; border-radius:4px; margin-top:6px; overflow:hidden;">
              <div id="co-strength-fill" style="height:100%; width:0%; background:#10b981; transition:all 0.3s;"></div>
            </div>
            <div class="co-error-msg" id="err-contrasena"></div>
          </div>
          
          <div class="co-input-group">
            <label class="co-label">Confirmar Contraseña <span style="color: var(--danger)">*</span></label>
            <div class="co-input-wrapper">
              <input type="password" id="co-confirmar" class="co-input" placeholder="••••••••" required>
              <button type="button" id="co-eye-confirm" class="co-eye-btn"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
            </div>
            <div class="co-error-msg" id="err-confirmar"></div>
          </div>
        </div>

        <button type="submit" id="co-submit-btn" class="co-submit-btn" style="margin-top: auto;">
          <svg id="co-lock-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          <svg id="co-spinner" viewBox="0 0 24 24" style="display:none; width:18px; height:18px; animation:spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"></circle><path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <span id="co-submit-text">Continuar al pago seguro</span>
        </button>
      </form>
    `
  }


  return `
    ${headerHtml}
    <style>
      .checkout-layout {
        background-color: #f8fafc;
        min-height: calc(100vh - 72px);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      
      .bento-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.75rem; /* Match hero.js gap */
        max-width: 100%;
        width: 100%;
        position: relative;
        z-index: 10;
        flex: 1;
      }
      
      @media (min-width: 900px) {
        .bento-grid {
          grid-template-columns: 1fr 1.5fr;
          grid-template-rows: auto 1fr;
        }
        
        /* Asignación de áreas del Bento */
        .card-timeline { grid-column: 1 / 2; grid-row: 1 / 2; }
        .card-summary  { grid-column: 1 / 2; grid-row: 2 / 3; }
        .card-form     { grid-column: 2 / 3; grid-row: 1 / 3; }
      }

      .bento-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 1.25rem;
        padding: 2rem;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02), 0 10px 15px -3px rgba(0,0,0,0.03);
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      @media (max-width: 600px) {
        .bento-card { padding: 1.5rem; }
        .checkout-layout { padding: 2rem 1rem; }
      }

      /* Estilos de Timeline */
      .checkout-timeline {
        width: 100%; 
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        position: relative;
        margin-top: 1.5rem;
      }
      
      .timeline-step {
        position: relative; z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
      }
      
      .timeline-circle {
        width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; 
        font-weight: 700; font-size: 0.85rem; background: #ffffff;
      }
      .timeline-circle.completed { background: var(--brand); color: white; }
      .timeline-circle.active { background: var(--brand); color: white; box-shadow: 0 0 0 5px rgba(59,130,246,0.15); }
      .timeline-circle.pending { border: 2px solid #e2e8f0; color: #94a3b8; }
      
      .timeline-label { font-size: 0.75rem; font-weight: 600; text-align: center; }
      .timeline-label.completed { color: #0f172a; }
      .timeline-label.active { color: var(--brand); font-weight: 700; }
      .timeline-label.pending { color: #94a3b8; }

      /* Estilos Formulario */
      .co-input-group { display: flex; flex-direction: column; }
      .co-label { font-size: 0.85rem; font-weight: 600; color: #475569; margin-bottom: 0.4rem; display: block; }
      .co-input-wrapper { position: relative; }
      .co-input {
        width: 100%; box-sizing: border-box; padding: 0.85rem 1rem; border: 1px solid #e2e8f0;
        border-radius: 0.75rem; font-size: 0.95rem; font-family: inherit; background: #f8fafc;
        color: #0f172a; transition: all 0.2s ease;
      }
      .co-input:focus { outline: none; border-color: var(--brand); background: #ffffff; box-shadow: 0 0 0 4px rgba(59,130,246,0.1); }
      .co-input.is-error { border-color: var(--danger); background: #fff5f5; }
      
      .co-eye-btn { position: absolute; right: 0.8rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: #94a3b8; cursor: pointer; padding: 0; display: flex; }
      .co-eye-btn:hover { color: #0f172a; }
      
      .co-error-msg { font-size: 0.75rem; color: var(--danger); margin-top: 0.3rem; min-height: 1.1rem; font-weight: 500; }
      
      .co-submit-btn {
        width: 100%; background: var(--brand); color: white; font-weight: 700; padding: 1rem;
        border-radius: 0.75rem; border: none; font-size: 1.05rem; cursor: pointer; display: flex;
        align-items: center; justify-content: center; gap: 0.5rem; transition: all 0.25s ease;
        margin-top: 1rem; box-shadow: 0 4px 6px -1px rgba(59,130,246,0.2);
      }
      .co-submit-btn:hover { background: var(--brand-hover); transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(59,130,246,0.3); }
      
      .co-global-error { background: #fee2e2; color: #b91c1c; padding: 0.85rem; border-radius: 0.75rem; font-size: 0.9rem; font-weight: 600; text-align: center; margin-bottom: 1.5rem; display: none; border: 1px solid #fca5a5; }
      
      @keyframes spin { 100% { transform: rotate(360deg); } }
      @keyframes floatDown { 0% { top: -15%; } 100% { top: 115%; } }

      .form-row-2 { display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-bottom: 0.5rem; }
      .form-row-email { display: grid; grid-template-columns: 1fr; gap: 0.5rem; margin-bottom: 0.5rem; }
      @media (min-width: 600px) {
        .form-row-2 { grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 0; }
        .form-row-email { grid-template-columns: 1.3fr 1fr; gap: 1.25rem; margin-bottom: 0; }
      }
    </style>

    <main class="checkout-layout">
      <div class="bento-grid">
        
        <!-- Tarjeta 1: Logo y Timeline -->
        <div class="bento-card card-timeline">
          ${renderFloatingIcons(15)}
          <div style="position: relative; z-index: 10; display: flex; flex-direction: column; justify-content: center; height: 100%;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
              <img src="${logoImg}" alt="Logo" style="height: 32px; object-fit: contain;" />
              <h2 style="font-size: 1.3rem; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.02em;">SOLOMY<span style="color: var(--brand);">CRM</span></h2>
            </div>
            
            <h3 style="font-size: 1.1rem; font-weight: 700; color: #475569; margin: 0;">Progreso</h3>
            
            <div class="checkout-timeline">
              <!-- Conectores -->
              <div style="position: absolute; top: 16px; left: 15%; right: 15%; height: 2px; background: #e2e8f0; z-index: 1;"></div>
              <div style="position: absolute; top: 16px; left: 15%; width: ${line2Width}; height: 2px; background: var(--brand); z-index: 2; transition: width 0.5s ease;"></div>
              
              <div class="timeline-step">
                <div class="timeline-circle completed">
                  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="timeline-label completed">Plan</span>
              </div>
              <div class="timeline-step">
                <div class="timeline-circle ${step2Class}">${step2Icon}</div>
                <span class="timeline-label ${step2Class}">Cuenta</span>
              </div>
              <div class="timeline-step">
                <div class="timeline-circle ${step3Class}">${step3Icon}</div>
                <span class="timeline-label ${step3Class}">Pago</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tarjeta 2: Resumen del Plan + Beneficios y Seguridad -->
        <div class="bento-card card-summary">
          ${renderFloatingIcons(15)}
          <div style="position: relative; z-index: 10; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <div>
              <h3 style="font-size: 1.3rem; font-weight: 800; color: #0f172a; margin-bottom: 1.25rem;">Tu Suscripción</h3>
              
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #64748b; margin-bottom: 0.5rem; font-weight: 700;">Plan Elegido</div>
                <div style="font-size: 1.4rem; font-weight: 900; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; color: #0f172a; gap: 0.5rem;">
                  <span>${label}</span>
                  <span style="color: var(--brand);">${price}</span>
                </div>
              </div>

              <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.85rem; margin: 0 0 1.5rem 0;">
                <li style="display: flex; align-items: center; gap: 0.75rem;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: #eff6ff; color: var(--brand); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span style="font-size: 0.95rem; color: #475569; font-weight: 500;">Acceso completo al CRM</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.75rem;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: #eff6ff; color: var(--brand); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span style="font-size: 0.95rem; color: #475569; font-weight: 500;">Embudos visuales e intuitivos</span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.75rem;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: #eff6ff; color: var(--brand); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span style="font-size: 0.95rem; color: #475569; font-weight: 500;">Soporte prioritario 24/7</span>
                </li>
              </ul>
            </div>

            <div style="display: flex; align-items: center; gap: 0.75rem; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1rem; border-radius: 0.75rem;">
              <svg width="24" height="24" fill="none" stroke="#10b981" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink: 0;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span style="font-size: 0.85rem; font-weight: 600; color: #065f46; line-height: 1.3;">Pago seguro y encriptado por Stripe</span>
            </div>
          </div>
        </div>

        <!-- Tarjeta 3: Formulario o Éxito -->
        <div class="bento-card card-form">
          ${renderFloatingIcons(20)}
          <div style="position: relative; z-index: 10; display: flex; flex-direction: column; height: 100%;">
            ${rightCardContent}
          </div>
        </div>

      </div>
    </main>
    ${footerHtml}
  `
}

