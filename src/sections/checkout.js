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
    ${isMobile ? '' : `<nav class="navbar"><div class="container"><a href="/" data-link class="logo">SOLOMYCRM</a></div></nav>`}
    <main style="min-height:90vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--theme-50) 0%,white 100%);padding:2rem;">
      <div style="width:100%;max-width:520px;background:white;border-radius:24px;box-shadow:0 30px 60px -15px rgba(37,99,235,0.15);border:1px solid var(--border-light);overflow:hidden;">
        
        <!-- Header del Formulario -->
        <div style="background:linear-gradient(135deg,var(--theme-600),var(--theme-700));padding:2rem;text-align:center;color:white;">
          <h1 style="font-size:1.75rem;font-weight:800;margin-bottom:0.5rem;color:white;">Crea tu cuenta</h1>
          <p style="opacity:0.9;font-size:0.95rem;margin:0;">Estás a un paso de revolucionar tus ventas.</p>
        </div>

        <!-- Formulario -->
        <div style="padding:2rem;">
          <form id="checkout-form" style="display:flex;flex-direction:column;gap:1.25rem;">
            <input type="hidden" id="co-plan-input" value="${plan}">
            
            <div id="co-global-error" class="rp-global-error" style="display:none;background:#fee2e2;color:#b91c1c;padding:0.75rem;border-radius:8px;font-size:0.85rem;font-weight:600;text-align:center;"></div>

            <!-- Resumen del Plan -->
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:1rem;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <span style="display:block;font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Plan Seleccionado</span>
                <strong id="co-summary-label" style="font-size:1.05rem;color:var(--text-main);">${label}</strong>
              </div>
              <div style="text-align:right;">
                <span style="display:block;font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Total</span>
                <strong id="co-summary-price" style="font-size:1.05rem;color:var(--brand);">${price}</strong>
              </div>
            </div>

            <!-- Datos Personales -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
              <div class="rp-input-group">
                <label class="rp-label">Nombre completo</label>
                <div class="rp-input-wrapper">
                  <svg class="rp-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  <input type="text" id="co-nombre" class="rp-input" placeholder="Juan Pérez">
                </div>
                <span class="rp-error-msg" id="err-co-nombre"></span>
              </div>
              <div class="rp-input-group">
                <label class="rp-label">Teléfono <span style="font-weight:400;color:#94a3b8;">(Opcional)</span></label>
                <div class="rp-input-wrapper">
                  <svg class="rp-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <input type="tel" id="co-telefono" class="rp-input" placeholder="+52 123 456 7890">
                </div>
              </div>
            </div>

            <!-- Correo y Usuario -->
            <div class="rp-input-group">
              <label class="rp-label">Correo electrónico</label>
              <div class="rp-input-wrapper">
                <svg class="rp-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <input type="email" id="co-email" class="rp-input" placeholder="juan@ejemplo.com">
              </div>
              <span class="rp-error-msg" id="err-co-email"></span>
            </div>

            <div class="rp-input-group">
              <label class="rp-label">Nombre de usuario (Para login)</label>
              <div class="rp-input-wrapper">
                <svg class="rp-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                <input type="text" id="co-usuario" class="rp-input" placeholder="juanperez123">
              </div>
              <span class="rp-error-msg" id="err-co-usuario"></span>
            </div>

            <!-- Contraseñas -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
              <div class="rp-input-group">
                <label class="rp-label">Contraseña</label>
                <div class="rp-input-wrapper">
                  <svg class="rp-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  <input type="password" id="co-contrasena" class="rp-input" placeholder="••••••••">
                  <button type="button" id="co-eye-pass" class="rp-eye-btn"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
                </div>
                <div class="rp-strength-bar"><div class="rp-strength-fill" id="co-strength-fill"></div></div>
                <span class="rp-error-msg" id="err-co-contrasena"></span>
              </div>
              
              <div class="rp-input-group">
                <label class="rp-label">Confirmar Contraseña</label>
                <div class="rp-input-wrapper">
                  <svg class="rp-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <input type="password" id="co-confirmar" class="rp-input" placeholder="••••••••">
                  <button type="button" id="co-eye-confirm" class="rp-eye-btn"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></button>
                </div>
                <span class="rp-error-msg" id="err-co-confirmar"></span>
              </div>
            </div>

            <!-- Submit -->
            <button type="submit" id="co-submit-btn" style="margin-top:0.5rem;width:100%;background:linear-gradient(135deg,var(--theme-600),var(--theme-500));color:white;font-weight:700;padding:1rem;border-radius:12px;border:none;font-size:1.05rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:0.5rem;box-shadow:0 8px 20px rgba(37,99,235,0.3);transition:all 0.25s;">
              <svg id="co-lock-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              <svg id="co-spinner" class="rp-spinner" viewBox="0 0 24 24" style="display:none;"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              <span id="co-submit-text">Continuar al pago seguro</span>
            </button>
            <p style="text-align:center;font-size:0.75rem;color:var(--text-muted);margin:0;">
              Al continuar, aceptas nuestros términos de servicio.<br>
              Serás redirigido a Stripe para completar tu pago de forma segura.
            </p>
          </form>
        </div>
      </div>
    </main>
  `
}
