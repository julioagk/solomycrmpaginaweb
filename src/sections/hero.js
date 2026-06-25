import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'

export function renderHero() {
  return `
    ${renderHeader()}
    <main>
      <!-- Hero Principal -->
      <section class="section hero" id="inicio" style="padding: 7rem 0 5rem;">
        <div class="container" style="display: flex; flex-direction: column; align-items: center; text-align: center; max-width: 900px; margin: 0 auto;">
          
          <span class="tag" style="margin-bottom: 1.5rem; padding: 0.4rem 1.2rem; font-size: 0.85rem; border-radius: 999px; background: var(--brand-light); color: var(--brand); font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">
            El CRM enfocado en ejecución
          </span>
          
          <h1 style="font-size: clamp(2.8rem, 6vw, 4.2rem); font-weight: 800; line-height: 1.05; color: var(--text-main); margin-bottom: 1.5rem; letter-spacing: -0.03em;">
            Convierte más prospectos en ventas con <span style="color: var(--brand);">control total</span>
          </h1>
          
          <p class="lead" style="font-size: 1.25rem; color: var(--text-muted); line-height: 1.6; max-width: 650px; margin: 0 auto 2.5rem;">
            Seguimiento inteligente, agenda integrada y visibilidad de resultados 
            para equipos comerciales que quieren trabajar rápido y sin distracciones.
          </p>
          
          <div class="hero-actions" style="display: flex; gap: 1.2rem; align-items: center; justify-content: center;">
            <a class="btn btn-primary" href="/contacto" data-link style="padding: 1rem 2rem; font-size: 1.05rem;">Solicitar demo gratuita</a>
            <a class="btn btn-secondary" href="/proceso" data-link style="padding: 1rem 2rem; font-size: 1.05rem;">Cómo funciona</a>
          </div>
          
        </div>
      </section>

      <!-- Subsección -->
      <section class="section" style="padding-top: 2rem;">
        <div class="container">
          <div style="text-align: center; margin-bottom: 4rem;">
            <h2 style="font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 700;">Sin funciones de más, solo lo que ayuda a vender</h2>
            <p style="max-width: 600px; margin: 1rem auto 0; font-size: 1.1rem; color: var(--text-muted);">
              SOLOMYCRM está pensado para equipos que quieren trabajar rápido con una herramienta clara.
            </p>
          </div>
          
          <div class="grid-3" style="gap: 2rem;">
            <div class="card" style="padding: 2.5rem; text-align: left;">
              <div style="background: var(--brand-light); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--brand);">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Todo en un solo lugar</h3>
              <p style="font-size: 1rem; color: var(--text-muted);">Clientes, prospectos, tareas y seguimiento en una vista simple para trabajar el día a día.</p>
            </div>
            <div class="card" style="padding: 2.5rem; text-align: left;">
              <div style="background: var(--brand-light); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--brand);">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Curva de aprendizaje corta</h3>
              <p style="font-size: 1rem; color: var(--text-muted);">No necesitas semanas de capacitación: la plataforma está diseñada para ser intuitiva desde el inicio.</p>
            </div>
            <div class="card" style="padding: 2.5rem; text-align: left;">
              <div style="background: var(--brand-light); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--brand);">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">Visibilidad compartida</h3>
              <p style="font-size: 1rem; color: var(--text-muted);">Muestra información y métricas clave a tu equipo sin perder el control comercial.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `;
}
