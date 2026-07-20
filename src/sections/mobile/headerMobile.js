import logoImg from '../../assets/image.png'

export function renderHeaderMobile() {
  const path = window.location.pathname;
  const isInicio = path === '/' || path === '/inicio';
  const isFunciones = path === '/funcionalidades';
  const isPrecios = path === '/precios';

  const colorInicio = isInicio ? 'var(--brand)' : '#94a3b8';
  const colorFunciones = isFunciones ? 'var(--brand)' : '#94a3b8';
  const colorPrecios = isPrecios ? 'var(--brand)' : '#94a3b8';

  return `
    <header class="navbar-mobile" style="
      padding: 0.75rem 1rem;
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    ">
      <!-- Logo -->
      <a href="/" data-link data-track="nav_logo_click_mobile" aria-label="SOLOMYCRM - Inicio" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none;">
        <img src="${logoImg}" alt="Logo SOLOMYCRM" style="height: 30px; width: auto; object-fit: contain;" />
        <span style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.03em;">SOLOMY<span style="color: var(--brand);">CRM</span></span>
      </a>

      <!-- Right side: CTA + Hamburger -->
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <a href="https://app.solomycrm.com/" target="_blank" rel="noopener noreferrer"
          class="btn btn-primary premium-reflejo"
          style="padding: 0.45rem 0.9rem; font-size: 0.78rem; border-radius: 8px; border: none; font-weight: 700; white-space: nowrap; text-decoration: none; display: inline-flex; align-items: center;">
          Ir al CRM
        </a>

        <!-- Hamburger button -->
        <button id="mobile-menu-toggle" aria-label="Abrir menú" style="
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          color: var(--text-main);
          transition: background 0.2s;
        ">
          <svg id="hamburger-icon" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Drawer Menu -->
    <div id="mobile-drawer-overlay" style="
      position: fixed; inset: 0; z-index: 999;
      background: rgba(15,23,42,0.45);
      opacity: 0; pointer-events: none;
      transition: opacity 0.25s ease;
    "></div>

    <nav id="mobile-drawer" aria-label="Menú móvil" style="
      position: fixed;
      top: 0; right: 0;
      width: 75%; max-width: 280px;
      height: 100%;
      background: white;
      z-index: 1001;
      display: flex;
      flex-direction: column;
      padding: 1.25rem 1.5rem;
      gap: 0;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
      box-shadow: -8px 0 32px rgba(0,0,0,0.12);
    ">
      <!-- Drawer header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #e2e8f0;">
        <span style="font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 800; color: var(--text-main);">Menú</span>
        <button id="mobile-menu-close" aria-label="Cerrar menú" style="background: transparent; border: none; cursor: pointer; color: #94a3b8; padding: 0.25rem;">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Nav Links -->
      <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1;">
        <a href="/" data-link data-track="nav_inicio_click_mobile" style="
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.85rem 0.75rem;
          border-radius: 10px;
          font-size: 1rem; font-weight: 700;
          color: ${colorInicio};
          text-decoration: none;
          background: ${isInicio ? 'var(--brand-light)' : 'transparent'};
          transition: background 0.2s;
        ">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Inicio
        </a>
        <a href="/funcionalidades" data-link data-track="nav_funcionalidades_click_mobile" style="
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.85rem 0.75rem;
          border-radius: 10px;
          font-size: 1rem; font-weight: 700;
          color: ${colorFunciones};
          text-decoration: none;
          background: ${isFunciones ? 'var(--brand-light)' : 'transparent'};
          transition: background 0.2s;
        ">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Funciones
        </a>
        <a href="/precios" data-link data-track="nav_precios_click_mobile" style="
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.85rem 0.75rem;
          border-radius: 10px;
          font-size: 1rem; font-weight: 700;
          color: ${colorPrecios};
          text-decoration: none;
          background: ${isPrecios ? 'var(--brand-light)' : 'transparent'};
          transition: background 0.2s;
        ">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Precios
        </a>
      </div>

      <!-- Bottom CTAs in drawer -->
      <div style="display: flex; flex-direction: column; gap: 0.75rem; padding-top: 1.25rem; border-top: 1px solid #e2e8f0;">
        <button class="btn open-contact-modal" data-track="header_contact_click_mobile" style="
          width: 100%; padding: 0.75rem; font-size: 0.9rem;
          border-radius: 10px; cursor: pointer;
          background: transparent; border: 2px solid var(--brand);
          color: var(--brand); font-weight: 700; font-family: inherit;
          transition: all 0.2s;
        ">Contacto</button>
        <a class="premium-reflejo" data-track="header_demo_click_mobile" href="https://app.solomycrm.com/?demo=true" target="_blank" rel="noopener noreferrer" style="
          display: block; width: 100%; padding: 0.75rem;
          font-size: 0.9rem; border-radius: 10px; text-align: center;
          background: #f59e0b; color: white; font-weight: 700;
          text-decoration: none; box-sizing: border-box;
        ">Demo gratis</a>
        <a href="https://app.solomycrm.com/" data-track="header_crm_click_mobile" target="_blank" rel="noopener noreferrer" class="btn btn-primary premium-reflejo" style="
          display: block; width: 100%; padding: 0.75rem;
          font-size: 0.9rem; border-radius: 10px; text-align: center;
          font-weight: 700; text-decoration: none; box-sizing: border-box; border: none;
        ">Ir al CRM →</a>
      </div>
    </nav>
  `;
}

/**
 * Inicializa el menú hamburguesa móvil.
 * Llamar DESPUÉS de que el HTML haya sido inyectado en el DOM
 * (los scripts inline dentro de innerHTML no se ejecutan).
 */
export function initMobileMenu() {
  const toggle  = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer  = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');

  if (!toggle || !drawer || !overlay) return;

  function openDrawer() {
    drawer.style.transform = 'translateX(0)';
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.style.transform = 'translateX(100%)';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Cierra al navegar desde el drawer
  drawer.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}
