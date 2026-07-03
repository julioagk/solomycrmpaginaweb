import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'
import logoImg from '../assets/image.png'

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

export function renderHero() {
  return `
    ${renderHeader()}
    <main>
      <!-- Hero Principal (Bento Grid) -->
      <section class="section hero" id="inicio" style="padding: 1.5rem; overflow: hidden; position: relative; height: calc(100vh - 72px); display: flex; flex-direction: column; box-sizing: border-box;">
        <!-- Elementos decorativos de fondo -->
        <div style="position: absolute; top: -10%; left: -5%; width: 50%; height: 50%; background: radial-gradient(circle, var(--brand-light) 0%, transparent 70%); z-index: -1; opacity: 0.8;"></div>
        <div style="position: absolute; bottom: 10%; right: -5%; width: 40%; height: 40%; background: radial-gradient(circle, var(--brand-light) 0%, transparent 70%); z-index: -1; opacity: 0.6;"></div>
        
        <div class="container" style="max-width: 100%; padding: 0; flex: 1; display: flex; flex-direction: column;">
          
          <!-- Bento Grid Container -->
          <div class="bento-grid" style="
            display: grid; 
            grid-template-columns: repeat(3, 1fr); 
            grid-template-rows: 1fr 1fr; 
            gap: 0.75rem;
            width: 100%;
            flex: 1;
          ">
            
            <!-- Bloque A (Izquierda, alto completo) -->
          <div class="bento-card" style="
            grid-column: 1 / 2; 
            grid-row: 1 / 3; 
            border-radius: 1.25rem; 
            background: white;
            border: 2px solid #e2e8f0;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          ">
            ${renderFloatingIcons(15)}
            <style>
              #benefits-list::-webkit-scrollbar { display: none; }
              #benefits-list { -ms-overflow-style: none; scrollbar-width: none; }
            </style>
            <div style="position: relative; z-index: 10; padding: 2.25rem; display: flex; flex-direction: column; height: 100%;">
              <h2 style="font-size: clamp(2rem, 3vw, 2.5rem); font-weight: 900; color: #0f172a; line-height: 0.95; margin: 0 0 1.5rem 0; letter-spacing: -0.05em;">
                Por qué elegir<br/><span style="color: var(--brand);">nuestro CRM</span>
              </h2>
              
              <div id="benefits-list" style="display: flex; flex-direction: column; gap: 0.75rem; flex-grow: 1; overflow-y: auto;">
                <!-- JS se encargará de rellenar esto -->
              </div>
            </div>
          </div>
            
            <!-- Bloque B (Arriba Derecha, ancho) -->
            <div class="bento-card" style="
              grid-column: 2 / 4; 
              grid-row: 1 / 2; 
              border-radius: 1.25rem; 
              background: white;
              border: 2px solid #e2e8f0;
              padding: 3rem;
              position: relative;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            ">
              ${renderFloatingIcons(30)}
              <div style="position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; width: 100%;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem;">
                  <img src="${logoImg}" style="height: 60px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));" />
                  <h1 style="font-size: clamp(3.5rem, 6vw, 5rem); font-weight: 900; letter-spacing: -0.05em; line-height: 1; margin: 0; color: #0f172a;">
                    SOLOMY<span style="color: var(--brand);">CRM</span>
                  </h1>
                </div>
                <div id="hero-phrase-carousel" style="transition: all 0.5s ease-in-out; margin-top: 1.5rem; width: 100%; text-align: center;">
                  <p id="hero-phrase-text" style="font-size: 1.4rem; font-weight: 600; color: #64748b; margin: 0; letter-spacing: -0.02em;">El CRM más fácil de usar.</p>
                </div>
              </div>
            </div>
            
            <!-- Bloque C (Abajo Centro) -->
            <div class="bento-card" style="
              grid-column: 2 / 3; 
              grid-row: 2 / 3; 
              border-radius: 1.25rem; 
              background: white;
              border: 2px solid #e2e8f0;
              padding: 2.5rem;
              position: relative;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
            ">
              ${renderFloatingIcons(15)}
              <div id="modules-carousel" style="position: relative; z-index: 10; width: 100%; transition: all 0.5s ease-in-out;">
                <div id="module-icon" style="margin-bottom: 1rem; filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                </div>
                <h3 id="module-title" style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin: 0 0 0.5rem 0; letter-spacing: -0.02em;">Dashboard Intuitivo</h3>
                <p id="module-desc" style="font-size: 0.95rem; font-weight: 500; color: #64748b; margin: 0; line-height: 1.5;">Métricas y gráficas de ventas actualizadas en tiempo real. Obtén una vista panorámica de todo tu embudo de ventas al instante y toma mejores decisiones basadas en datos y rendimiento real.</p>
              </div>
            </div>
            
            <!-- Bloque D (Abajo Derecha) -->
            <div class="bento-card" style="
              grid-column: 3 / 4; 
              grid-row: 2 / 3; 
              border-radius: 1.25rem; 
              background: white;
              border: 2px solid #e2e8f0;
              padding: 2.5rem 2rem;
              position: relative;
              overflow: hidden;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
              align-items: center;
            ">
              ${renderFloatingIcons(15)}
              <div style="position: relative; z-index: 10; display: flex; flex-direction: column; gap: 0.25rem;">
                <span style="font-size: 2.5rem; font-weight: 900; color: var(--brand); letter-spacing: -0.05em; line-height: 1;">+3x</span>
                <span style="font-size: 0.65rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Conversión</span>
              </div>
              <div style="position: relative; z-index: 10; display: flex; flex-direction: column; gap: 0.25rem;">
                <span style="font-size: 2.5rem; font-weight: 900; color: #0f172a; letter-spacing: -0.05em; line-height: 1;">+150%</span>
                <span style="font-size: 0.65rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Productividad</span>
              </div>
              <div style="position: relative; z-index: 10; display: flex; flex-direction: column; gap: 0.25rem;">
                <span style="font-size: 2.5rem; font-weight: 900; color: #0f172a; letter-spacing: -0.05em; line-height: 1;">10k+</span>
                <span style="font-size: 0.65rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Prospectos</span>
              </div>
              <div style="position: relative; z-index: 10; display: flex; flex-direction: column; gap: 0.25rem;">
                <span style="font-size: 2.5rem; font-weight: 900; color: var(--brand); letter-spacing: -0.05em; line-height: 1;">24/7</span>
                <span style="font-size: 0.65rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Disponibilidad</span>
              </div>
            </div>
            
          </div>
          
        </div>
        
        <style>
          @keyframes floatDown {
            0% { top: -15%; }
            100% { top: 115%; }
          }
          
          /* Estilos responsive para el Bento Grid */
          @media (max-width: 992px) {
            .section.hero {
              height: auto !important;
              min-height: 100vh;
            }
            .bento-grid {
              grid-template-columns: 1fr !important;
              grid-template-rows: auto !important;
              gap: 0.75rem !important;
            }
            .bento-card {
              grid-column: 1 / -1 !important;
              grid-row: auto !important;
              min-height: 250px;
            }
          }
        </style>
      </section>

      <!-- Sección: Cómo Funciona -->
      <section class="section how-it-works" style="padding: 6rem 1.5rem; background-color: var(--bg-body); text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #0f172a; margin-bottom: 1rem; letter-spacing: -0.03em;">
            Tu ciclo de venta, <span style="color: var(--brand);">optimizado</span>
          </h2>
          <p style="color: #64748b; font-size: 1.1rem; max-width: 600px; margin: 0 auto 4rem auto; line-height: 1.6;">
            Automatiza tu proceso comercial paso a paso. Deja que el sistema haga el trabajo pesado por ti.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
            
            <!-- Paso 1 -->
            <div style="background: white; border: 2px solid #e2e8f0; border-radius: 1.25rem; padding: 2.5rem 1.5rem; position: relative; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; align-items: center;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 20px 25px -5px rgba(0, 0, 0, 0.1)'; this.style.borderColor='var(--brand)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#e2e8f0'">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--brand-light); color: var(--brand); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;">1. Captura</h3>
              <p style="color: #64748b; font-size: 0.9rem; line-height: 1.5; margin: 0;">
                Recopila leads automáticamente desde WhatsApp, web y formularios sin esfuerzo.
              </p>
            </div>

            <!-- Paso 2 -->
            <div style="background: white; border: 2px solid #e2e8f0; border-radius: 1.25rem; padding: 2.5rem 1.5rem; position: relative; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; align-items: center;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 20px 25px -5px rgba(0, 0, 0, 0.1)'; this.style.borderColor='var(--brand)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#e2e8f0'">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--brand-light); color: var(--brand); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;">2. Ordena</h3>
              <p style="color: #64748b; font-size: 0.9rem; line-height: 1.5; margin: 0;">
                Organiza y clasifica a tus prospectos en un embudo visual totalmente estructurado.
              </p>
            </div>

            <!-- Paso 3 -->
            <div style="background: white; border: 2px solid #e2e8f0; border-radius: 1.25rem; padding: 2.5rem 1.5rem; position: relative; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; align-items: center;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 20px 25px -5px rgba(0, 0, 0, 0.1)'; this.style.borderColor='var(--brand)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#e2e8f0'">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--brand-light); color: var(--brand); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><line x1="8" y1="14" x2="8.01" y2="14"></line><line x1="12" y1="14" x2="12.01" y2="14"></line><line x1="16" y1="14" x2="16.01" y2="14"></line><line x1="8" y1="18" x2="8.01" y2="18"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="16" y1="18" x2="16.01" y2="18"></line></svg>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;">3. Agenda & Seguimiento</h3>
              <p style="color: #64748b; font-size: 0.9rem; line-height: 1.5; margin: 0;">
                Programa citas, tareas y recordatorios. Mantén el contacto sin olvidar a ningún prospecto.
              </p>
            </div>

            <!-- Paso 4 -->
            <div style="background: white; border: 2px solid #e2e8f0; border-radius: 1.25rem; padding: 2.5rem 1.5rem; position: relative; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; align-items: center;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 20px 25px -5px rgba(0, 0, 0, 0.1)'; this.style.borderColor='var(--brand)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.borderColor='#e2e8f0'">
              <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--brand-light); color: var(--brand); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
                <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;">4. Cierra</h3>
              <p style="color: #64748b; font-size: 0.9rem; line-height: 1.5; margin: 0;">
                Aumenta tu conversión, analiza tus métricas en tiempo real y sella el trato con éxito.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Sección: CTA Banner -->
      <section style="padding: 8rem 1.5rem; background-color: var(--bg-body); position: relative; display: flex; justify-content: center;">

        <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center; position: relative; z-index: 10;">
          <h2 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; color: #0f172a; margin-bottom: 1.5rem; letter-spacing: -0.04em; line-height: 1.1;">
            Empieza a vender <span style="color: var(--brand);">más rápido</span>, hoy mismo.
          </h2>
          <p style="color: #64748b; font-size: 1.2rem; max-width: 600px; margin: 0 auto 3rem auto; line-height: 1.6;">
            Únete a los equipos de ventas que ya automatizaron su flujo de trabajo y duplicaron su tasa de cierre. Sin complicaciones.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="https://app.solomycrm.com" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 1rem 2.5rem; border: none; border-radius: 99px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: all 0.3s; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4); display: flex; align-items: center; gap: 0.5rem; color: white; text-decoration: none;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 20px 25px -5px rgba(59, 130, 246, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 25px -5px rgba(59, 130, 246, 0.4)'">
              Ir al CRM
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            <a href="/funcionalidades" data-link style="padding: 1rem 2.5rem; background: white; color: #0f172a; border: 1px solid #e2e8f0; border-radius: 99px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: all 0.3s; text-decoration: none;" onmouseover="this.style.borderColor='var(--brand)'; this.style.color='var(--brand)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='#0f172a'">
              Ver Funciones
            </a>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}
