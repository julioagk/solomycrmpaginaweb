import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

import dashboardImage from '../assets/dashboard.png'
import calendarioImage from '../assets/calendario.png'
import listaImage from '../assets/listaprospectosyclientes.png'
import panelImage from '../assets/panelclientes.png'
import equiposImage from '../assets/equipos.png'

export function renderPricing() {
  return `
    <section class="section" id="funcionalidades" style="height: calc(100vh - 80px); display: flex; align-items: center; justify-content: center; padding: 0; background: linear-gradient(180deg, #f8fafc 0%, var(--brand-light) 100%); overflow: hidden; position: relative;">
      
      <div class="swiper features-swiper" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; padding: 4rem 0;">
        <div class="swiper-wrapper">
          
          <!-- Slide 1: Dashboard -->
          <div class="swiper-slide" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0 3.5rem;">
            <div style="min-height: 90px; text-align: center; display: flex; flex-direction: column; align-items: center;" class="slide-text-content">
              <h3 style="font-size: 1.6rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; letter-spacing: -0.02em;">Dashboard Inteligente</h3>
              <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.2rem; max-width: 700px;">Tu rendimiento, metas y métricas clave en una sola vista.</p>
            </div>
            <div style="width: 100%; max-width: 1100px; display: flex; align-items: center; justify-content: center;">
              <img src="${dashboardImage}" alt="Dashboard en SOLOMYCRM" style="width: 100%; height: auto; display: block; border-radius: 16px; box-shadow: 0 20px 60px -15px rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.08);" />
            </div>
          </div>

          <!-- Slide 2: Calendario -->
          <div class="swiper-slide" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0 3.5rem;">
            <div style="min-height: 90px; text-align: center; display: flex; flex-direction: column; align-items: center;" class="slide-text-content">
              <h3 style="font-size: 1.6rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; letter-spacing: -0.02em;">Calendario Integrado</h3>
              <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.2rem; max-width: 700px;">Organiza reuniones y actividades sin salir de la plataforma.</p>
            </div>
            <div style="width: 100%; max-width: 1100px; display: flex; align-items: center; justify-content: center;">
              <img src="${calendarioImage}" alt="Calendario en SOLOMYCRM" style="width: 100%; height: auto; display: block; border-radius: 16px; box-shadow: 0 20px 60px -15px rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.08);" />
            </div>
          </div>

          <!-- Slide 3: Lista de Prospectos y Clientes -->
          <div class="swiper-slide" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0 3.5rem;">
            <div style="min-height: 90px; text-align: center; display: flex; flex-direction: column; align-items: center;" class="slide-text-content">
              <h3 style="font-size: 1.6rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; letter-spacing: -0.02em;">Lista de Prospectos y Clientes</h3>
              <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.2rem; max-width: 700px;">Base de datos centralizada con historial completo de cada contacto.</p>
            </div>
            <div style="width: 100%; max-width: 1100px; display: flex; align-items: center; justify-content: center;">
              <img src="${listaImage}" alt="Lista de Prospectos y Clientes en SOLOMYCRM" style="width: 100%; height: auto; display: block; border-radius: 16px; box-shadow: 0 20px 60px -15px rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.08);" />
            </div>
          </div>

          <!-- Slide 4: Panel Clientes -->
          <div class="swiper-slide" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0 3.5rem;">
            <div style="min-height: 90px; text-align: center; display: flex; flex-direction: column; align-items: center;" class="slide-text-content">
              <h3 style="font-size: 1.6rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; letter-spacing: -0.02em;">Panel de Clientes</h3>
              <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.2rem; max-width: 700px;">Seguimiento detallado de cada oportunidad en su ciclo de venta.</p>
            </div>
            <div style="width: 100%; max-width: 1100px; display: flex; align-items: center; justify-content: center;">
              <img src="${panelImage}" alt="Panel de Clientes en SOLOMYCRM" style="width: 100%; height: auto; display: block; border-radius: 16px; box-shadow: 0 20px 60px -15px rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.08);" />
            </div>
          </div>

          <!-- Slide 5: Equipos -->
          <div class="swiper-slide" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0 3.5rem;">
            <div style="min-height: 90px; text-align: center; display: flex; flex-direction: column; align-items: center;" class="slide-text-content">
              <h3 style="font-size: 1.6rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; letter-spacing: -0.02em;">Gestión de Equipos</h3>
              <p style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.2rem; max-width: 700px;">Mide el progreso de tu equipo comercial y analiza su rendimiento.</p>
            </div>
            <div style="width: 100%; max-width: 1100px; display: flex; align-items: center; justify-content: center;">
              <img src="${equiposImage}" alt="Gestión de Equipos en SOLOMYCRM" style="width: 100%; height: auto; display: block; border-radius: 16px; box-shadow: 0 20px 60px -15px rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.08);" />
            </div>
          </div>

        </div>
        
        <!-- Lateral Invisible Areas for Clicking -->
        <div class="swiper-button-prev-custom" style="position: absolute; top: 0; left: 0; z-index: 10; cursor: pointer; width: 15vw; height: 100%; background: transparent;"></div>
        
        <div class="swiper-button-next-custom" style="position: absolute; top: 0; right: 0; z-index: 10; cursor: pointer; width: 15vw; height: 100%; background: transparent;"></div>

        <!-- Custom Pagination -->
        <div class="swiper-pagination custom-pagination" style="bottom: 1.5rem;"></div>

      </div>
      
      <!-- Custom Pagination Styles -->
      <style>
        .custom-pagination .swiper-pagination-bullet {
          width: 24px;
          height: 6px;
          border-radius: 4px;
          background: var(--text-muted);
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 40px;
          background: var(--brand);
          opacity: 1;
        }
        /* Removed custom hover effects for the invisible arrows */

        /* 3D Coverflow Effect Styles */
        .features-swiper .swiper-slide {
          width: 1000px; /* Fixed width for 'auto' slidesPerView */
          max-width: 90vw;
          transition: all 0.5s ease;
          opacity: 0; /* Hide all slides by default */
          pointer-events: none;
        }
        .features-swiper .swiper-slide-prev,
        .features-swiper .swiper-slide-next {
          opacity: 0.6;
          pointer-events: auto;
        }
        .features-swiper .swiper-slide-active {
          opacity: 1;
          pointer-events: auto;
          cursor: grab;
        }
        .features-swiper .swiper-slide-active:active {
          cursor: grabbing;
        }
        .features-swiper .swiper-slide .slide-text-content {
          transition: opacity 0.3s ease;
        }
        .features-swiper .swiper-slide:not(.swiper-slide-active) .slide-text-content {
          opacity: 0;
          visibility: hidden;
        }
      </style>

    </section>
  `;
}

export function renderPricingPage() {
  return `
    ${renderHeader()}
    <main>
      ${renderPricing()}
    </main>
    ${renderFooter()}
  `
}
