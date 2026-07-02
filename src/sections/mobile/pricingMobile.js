import { renderHeaderMobile } from './headerMobile.js'
import { renderFooterMobile } from './footerMobile.js'

import dashboardImage from '../../assets/dashboard.png'
import calendarioImage from '../../assets/calendario.png'
import listaImage from '../../assets/listaprospectosyclientes.png'
import panelImage from '../../assets/panelclientes.png'
import equiposImage from '../../assets/equipos.png'

const SLIDES = [
  { title: 'Dashboard Inteligente', desc: 'Tu rendimiento, metas y métricas clave en una sola vista.', img: dashboardImage, alt: 'Dashboard SOLOMYCRM' },
  { title: 'Calendario Integrado', desc: 'Organiza reuniones y actividades sin salir de la plataforma.', img: calendarioImage, alt: 'Calendario SOLOMYCRM' },
  { title: 'Lista de Prospectos', desc: 'Base de datos centralizada con historial completo de cada contacto.', img: listaImage, alt: 'Lista de Prospectos SOLOMYCRM' },
  { title: 'Panel de Clientes', desc: 'Seguimiento detallado de cada oportunidad en su ciclo de venta.', img: panelImage, alt: 'Panel Clientes SOLOMYCRM' },
  { title: 'Gestión de Equipos', desc: 'Mide el progreso de tu equipo comercial y analiza su rendimiento.', img: equiposImage, alt: 'Equipos SOLOMYCRM' },
]

function renderMobileSlides() {
  return SLIDES.map((s, i) => `
    <div class="mob-slide" data-index="${i}" style="
      min-width: 100%;
      padding: 0 1rem 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      scroll-snap-align: start;
    ">
      <div style="text-align: center;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin: 0 0 0.3rem; letter-spacing: -0.02em;">${s.title}</h3>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0;">${s.desc}</p>
      </div>
      <img src="${s.img}" alt="${s.alt}" style="
        width: 100%; max-width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 12px 40px -10px rgba(0,0,0,0.18);
        border: 1px solid rgba(0,0,0,0.07);
        display: block;
      " />
    </div>
  `).join('')
}

function renderDots() {
  return SLIDES.map((_, i) => `
    <button class="mob-dot" data-dot="${i}" aria-label="Ir a slide ${i + 1}" style="
      width: ${i === 0 ? '32px' : '8px'};
      height: 8px;
      border-radius: 99px;
      background: ${i === 0 ? 'var(--brand)' : '#cbd5e1'};
      border: none; cursor: pointer; padding: 0;
      transition: all 0.3s ease;
    "></button>
  `).join('')
}

export function renderPricingMobile() {
  return `
    ${renderHeaderMobile()}
    <main>
      <section style="
        background: linear-gradient(180deg, #f8fafc 0%, var(--brand-light) 100%);
        padding: 1.5rem 0 2rem;
        min-height: calc(100vh - 57px);
        display: flex;
        flex-direction: column;
      ">
        <!-- Section header -->
        <div style="text-align: center; padding: 0 1rem 1.25rem;">
          <h2 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-bottom: 0.35rem; letter-spacing: -0.03em;">Funcionalidades</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">Desliza para explorar cada módulo</p>
        </div>

        <!-- Slider container -->
        <div style="position: relative; flex: 1; overflow: hidden;">
          <div id="mob-features-track" style="
            display: flex;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            scroll-behavior: smooth;
          ">
            ${renderMobileSlides()}
          </div>

          <!-- Left / Right tap zones -->
          <div id="mob-prev" style="position: absolute; top: 0; left: 0; width: 20%; height: 100%; cursor: pointer; z-index: 5; background: transparent;"></div>
          <div id="mob-next" style="position: absolute; top: 0; right: 0; width: 20%; height: 100%; cursor: pointer; z-index: 5; background: transparent;"></div>
        </div>

        <!-- Dots pagination -->
        <div id="mob-dots" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem 0 0;">
          ${renderDots()}
        </div>

        <!-- Swipe hint (fades out) -->
        <p id="mob-swipe-hint" style="text-align: center; font-size: 0.72rem; color: #94a3b8; margin: 0.5rem 0 0; transition: opacity 1s;">
          ← Desliza para ver más →
        </p>
      </section>
    </main>
    ${renderFooterMobile()}

    <style>
      #mob-features-track::-webkit-scrollbar { display: none; }
    </style>
  `;
}

/**
 * Inicializa el carrusel de funcionalidades móvil.
 * Llamar DESPUÉS de que el HTML haya sido inyectado en el DOM.
 */
export function initMobileSlider() {
  const track = document.getElementById('mob-features-track');
  const hint  = document.getElementById('mob-swipe-hint');
  const dots  = document.querySelectorAll('.mob-dot');
  const prevBtn = document.getElementById('mob-prev');
  const nextBtn = document.getElementById('mob-next');

  if (!track) return;

  const total = SLIDES.length;
  let current = 0;

  function goTo(idx) {
    current = (idx + total) % total;
    track.scrollTo({ left: current * track.offsetWidth, behavior: 'smooth' });
    dots.forEach((d, i) => {
      d.style.width = i === current ? '32px' : '8px';
      d.style.background = i === current ? 'var(--brand)' : '#cbd5e1';
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  dots.forEach(d => {
    d.addEventListener('click', () => goTo(parseInt(d.dataset.dot)));
  });

  // Sincroniza dots al hacer scroll / swipe nativo
  let scrollTimer;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      if (idx !== current) goTo(idx);
    }, 80);
  });

  // Auto-advance
  let autoplay = setInterval(() => goTo(current + 1), 4500);
  track.addEventListener('touchstart', () => clearInterval(autoplay), { passive: true });

  // Desvanece el hint después de 2.5s
  setTimeout(() => { if (hint) hint.style.opacity = '0'; }, 2500);
}
