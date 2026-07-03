const isMobile = window.matchMedia('(max-width: 768px)').matches

export function renderCheckoutPage() {
  const params = new URLSearchParams(window.location.search)
  const plan = params.get('plan') || 'mensual'
  
  let label = 'Plan Mensual'
  let price = '$199/mes'
  if (plan === 'mensual_equipo') {
    label = 'Plan Mensual (Equipo)'
    price = '$299/mes'
  } else if (plan === 'anual') {
    label = 'Plan Anual'
    price = '$2,189/año'
  }

  return `
    <style>
      .checkout-layout {
        display: flex;
        min-height: 100vh;
        width: 100%;
        background-color: #ffffff;
      }
      .checkout-left {
        flex: 1;
        background: linear-gradient(145deg, #0f172a 0%, #1e3a8a 100%);
        color: white;
        padding: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
      }
      .checkout-left::before {
        content: '';
        position: absolute;
        top: -50%; left: -50%; width: 200%; height: 200%;
        background: radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 60%);
        pointer-events: none;
      }
      .checkout-right {
        flex: 1.2;
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #ffffff;
      }
      .checkout-form-container {
        width: 100%;
        max-width: 480px;
      }
      .co-title {
        font-size: 2rem;
        font-weight: 800;
        color: var(--text-main);
        margin-bottom: 0.5rem;
        letter-spacing: -0.03em;
      }
      .co-subtitle {
        color: var(--text-muted);
        font-size: 1rem;
        margin-bottom: 2.5rem;
      }
      .co-field-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
      }
      .co-input-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.25rem;
      }
      .co-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-main);
        margin-bottom: 0.4rem;
      }
      .co-input-wrapper {
        position: relative;
      }
      .co-input {
        width: 100%;
        padding: 0.75rem 1rem;
        padding-left: 2.75rem;
        border: 1.5px solid var(--border-light);
        border-radius: 12px;
        font-size: 0.95rem;
        font-family: inherit;
        background: #f8fafc;
        color: var(--text-main);
        transition: all 0.2s ease;
      }
      .co-input:focus {
        outline: none;
        border-color: var(--brand);
        background: #ffffff;
        box-shadow: 0 0 0 4px rgba(59,130,246,0.1);
      }
      .co-input.is-error {
        border-color: var(--danger);
        background: #fff5f5;
      }
      .co-icon {
        position: absolute;
        left: 0.85rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.1rem;
        height: 1.1rem;
        color: #94a3b8;
        pointer-events: none;
      }
      .co-eye-btn {
        position: absolute;
        right: 0.85rem;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #94a3b8;
        cursor: pointer;
        padding: 0;
        display: flex;
      }
      .co-eye-btn:hover { color: var(--text-main); }
      .co-error-msg {
        font-size: 0.75rem;
        color: var(--danger);
        margin-top: 0.35rem;
        min-height: 1.1rem;
        font-weight: 500;
      }
      .co-submit-btn {
        width: 100%;
        background: var(--brand);
        color: white;
        font-weight: 700;
        padding: 1rem;
        border-radius: 12px;
        border: none;
        font-size: 1.05rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        box-shadow: 0 4px 14px rgba(37,99,235,0.3);
        transition: all 0.25s ease;
        margin-top: 0.5rem;
      }
      .co-submit-btn:hover {
        background: var(--brand-hover);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(37,99,235,0.4);
      }
      .co-global-error {
        background: #fee2e2;
        color: #b91c1c;
        padding: 1rem;
        border-radius: 12px;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 1.5rem;
        display: none;
        border: 1px solid #fca5a5;
      }
      @media (max-width: 900px) {
        .checkout-layout { flex-direction: column; }
        .checkout-left { padding: 2rem; flex: none; }
        .checkout-right { padding: 2rem 1.5rem; }
        .co-field-grid { grid-template-columns: 1fr; gap: 0; }
      }
    </style>

    <main class="checkout-layout">
      
      <!-- Panel Izquierdo (Contexto y Valor) -->
      <div class="checkout-left">
        <div style="position:relative; z-index:10;">
          <a href="/" style="color:white; font-size:1.6rem; font-weight:900; text-decoration:none; letter-spacing:-0.5px; display:inline-flex; align-items:center; gap:0.5rem;">
            <div style="width:32px; height:32px; background:white; border-radius:8px; display:flex; align-items:center; justify-content:center;">
              <svg width="20" height="20" fill="var(--brand)" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
            </div>
            SOLOMYCRM
          </a>
          
          <h1 style="font-size:2.8rem; font-weight:800; margin-top:4rem; line-height:1.15; letter-spacing:-0.03em;">
            Estás a un paso de revolucionar tus ventas.
          </h1>
          <p style="font-size:1.1rem; opacity:0.8; margin-top:1.25rem; max-width:400px; line-height:1.6;">
            Únete a cientos de empresas que ya han optimizado su gestión comercial con nuestra plataforma.
          </p>
          
          <!-- Resumen del Plan -->
          <div style="margin-top:3.5rem; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); padding:1.75rem; border-radius:16px; backdrop-filter:blur(12px);">
            <div style="font-size:0.8rem; text-transform:uppercase; letter-spacing:1px; opacity:0.7; margin-bottom:0.5rem; font-weight:600;">Plan Seleccionado</div>
            <div style="font-size:1.6rem; font-weight:800; display:flex; justify-content:space-between; align-items:center;">
              <span>${label}</span>
              <span style="color:#93c5fd;">${price}</span>
            </div>
            
            <hr style="border:none; border-top:1px solid rgba(255,255,255,0.1); margin:1.25rem 0;">
            
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.9rem;">
              <li style="display:flex; align-items:center; gap:0.75rem;">
                <div style="background:rgba(59,130,246,0.2); padding:4px; border-radius:50%;"><svg width="14" height="14" fill="none" stroke="#93c5fd" viewBox="0 0 24 24"><path stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                <span style="opacity:0.95; font-size:0.95rem; font-weight:500;">Acceso completo al CRM</span>
              </li>
              <li style="display:flex; align-items:center; gap:0.75rem;">
                <div style="background:rgba(59,130,246,0.2); padding:4px; border-radius:50%;"><svg width="14" height="14" fill="none" stroke="#93c5fd" viewBox="0 0 24 24"><path stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                <span style="opacity:0.95; font-size:0.95rem; font-weight:500;">Embudos visuales e intuitivos</span>
              </li>
              <li style="display:flex; align-items:center; gap:0.75rem;">
                <div style="background:rgba(59,130,246,0.2); padding:4px; border-radius:50%;"><svg width="14" height="14" fill="none" stroke="#93c5fd" viewBox="0 0 24 24"><path stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                <span style="opacity:0.95; font-size:0.95rem; font-weight:500;">Soporte y actualizaciones</span>
              </li>
            </ul>
          </div>
        </div>

        <div style="position:relative; z-index:10; margin-top:3rem; display:flex; align-items:center; gap:1rem;">
          <div style="display:flex; align-items:center; gap:0.5rem; opacity:0.8;">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <span style="font-size:0.9rem; font-weight:500;">Pago 100% seguro por Stripe</span>
          </div>
        </div>
      </div>

      <!-- Panel Derecho (Formulario) -->
      <div class="checkout-right">
        <div class="checkout-form-container">
          
          <h2 class="co-title">Crea tu cuenta</h2>
          <p class="co-subtitle">Completa tus datos para configurar tu espacio.</p>
          
          <div id="co-global-error" class="co-global-error"></div>

          <form id="checkout-form" novalidate autocomplete="off">
            <input type="hidden" id="co-plan-input" value="${plan}">
            
            <div class="co-field-grid">
              <div class="co-input-group">
                <label class="co-label">Nombre completo</label>
                <div class="co-input-wrapper">
                  <svg class="co-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  <input type="text" id="co-nombre" class="co-input" placeholder="Carlos Ramírez" required>
                </div>
                <div class="co-error-msg" id="err-nombre"></div>
              </div>
              <div class="co-input-group">
                <label class="co-label">Teléfono <span style="font-weight:400; color:var(--text-muted);">(Opcional)</span></label>
                <div class="co-input-wrapper">
                  <svg class="co-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <input type="tel" id="co-telefono" class="co-input" placeholder="+52 123 456 7890">
                </div>
                <div class="co-error-msg"></div>
              </div>
            </div>

            <div class="co-input-group">
              <label class="co-label">Correo electrónico</label>
              <div class="co-input-wrapper">
                <svg class="co-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <input type="email" id="co-email" class="co-input" placeholder="tu@correo.com" required>
              </div>
              <div class="co-error-msg" id="err-email"></div>
            </div>

            <div class="co-input-group">
              <label class="co-label">Usuario para el CRM</label>
              <div class="co-input-wrapper">
                <svg class="co-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                <input type="text" id="co-usuario" class="co-input" placeholder="miusuario123" required>
              </div>
              <div class="co-error-msg" id="err-usuario"></div>
            </div>

            <div class="co-field-grid">
              <div class="co-input-group">
                <label class="co-label">Contraseña</label>
                <div class="co-input-wrapper">
                  <svg class="co-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  <input type="password" id="co-contrasena" class="co-input" placeholder="••••••••" required>
                  <button type="button" id="co-eye-pass" class="co-eye-btn"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
                </div>
                <!-- Strength bar -->
                <div style="height:4px; background:#e2e8f0; border-radius:4px; margin-top:6px; overflow:hidden;">
                  <div id="co-strength-fill" style="height:100%; width:0%; background:#10b981; transition:all 0.3s;"></div>
                </div>
                <div class="co-error-msg" id="err-contrasena"></div>
              </div>
              
              <div class="co-input-group">
                <label class="co-label">Confirmar Contraseña</label>
                <div class="co-input-wrapper">
                  <svg class="co-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <input type="password" id="co-confirmar" class="co-input" placeholder="••••••••" required>
                  <button type="button" id="co-eye-confirm" class="co-eye-btn"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
                </div>
                <div class="co-error-msg" id="err-confirmar"></div>
              </div>
            </div>

            <button type="submit" id="co-submit-btn" class="co-submit-btn">
              <svg id="co-lock-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              <svg id="co-spinner" viewBox="0 0 24 24" style="display:none; width:20px; height:20px; animation:spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"></circle><path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              <span id="co-submit-text">Continuar al pago seguro</span>
            </button>
            <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:1.5rem; line-height:1.5;">
              Al continuar, aceptas nuestros términos de servicio y políticas de privacidad.<br>
              Serás redirigido a Stripe para completar tu pago.
            </p>
          </form>

        </div>
      </div>

    </main>

    <style>
      @keyframes spin { 100% { transform: rotate(360deg); } }
    </style>
  `
}
