const SVG_ICONS = [
  // 1. Chart Infographic
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M7 3v4h4" /><path d="M9 17l0 4" /><path d="M17 14l0 7" /><path d="M13 13l0 8" /><path d="M21 12l0 9" /></svg>',
  // 2. Chart Arrows
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21v-14" /><path d="M9 15l3 -3l3 3" /><path d="M15 10l3 -3l3 3" /><path d="M3 21l18 0" /><path d="M12 21l0 -9" /><path d="M3 6l3 -3l3 3" /><path d="M6 21v-18" /></svg>',
  // 3. Chatbot
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" /></svg>',
  // 4. Currency Dollar
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>',
  // 5. Cash
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" /><path d="M7 10a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8" /><path d="M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /></svg>'
];

export function initCascade(selector) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = ''; 

  const count = 35; // Más cantidad para que se note
  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    div.className = 'floating-svg';
    div.innerHTML = SVG_ICONS[i % SVG_ICONS.length];
    
    const x = Math.random() * 100; 
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * -25;
    const opacity = 0.3 + Math.random() * 0.3; // Mayor opacidad (0.3 a 0.6)
    
    div.style.left = `${x}%`;
    div.style.animationDuration = `${duration}s`;
    div.style.animationDelay = `${delay}s`;
    div.style.setProperty('--target-opacity', opacity);
    container.appendChild(div);
  }
}

export function initHeroText() {
  const container = document.getElementById('modules-carousel');
  const iconEl = document.getElementById('module-icon');
  const titleEl = document.getElementById('module-title');
  const descEl = document.getElementById('module-desc');
  if (!container || !iconEl || !titleEl || !descEl) return;

  const modules = [
    { 
      icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`, 
      title: "Dashboard Intuitivo", 
      desc: "Métricas y gráficas de ventas actualizadas en tiempo real. Obtén una vista panorámica de todo tu embudo de ventas al instante y toma mejores decisiones basadas en datos y rendimiento real." 
    },
    { 
      icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, 
      title: "Gestión de Clientes", 
      desc: "Toda la información de tus prospectos a un solo clic de distancia. Mantén un historial completo de interacciones, notas y documentos para dar el mejor seguimiento personalizado sin perder el hilo." 
    },
    { 
      icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>`, 
      title: "Tareas y Actividades", 
      desc: "Agenda reuniones, llamadas y pendientes sin que nada se te pase. Con el organizador inteligente, tu equipo sabrá exactamente qué hacer cada día para mantener el ritmo de cierre de ventas." 
    },
    { 
      icon: `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`, 
      title: "Notificaciones Proactivas", 
      desc: "Alertas inteligentes para que cierres tus tratos a tiempo. Te avisaremos cuando un cliente lleve mucho tiempo sin respuesta o cuando tengas una junta importante a punto de comenzar." 
    }
  ];

  let idx = 0; 

  setInterval(() => {
    container.style.opacity = '0';
    container.style.transform = 'translateX(-30px)';
    container.style.filter = 'blur(10px)';
    
    setTimeout(() => {
      idx = (idx + 1) % modules.length;
      const mod = modules[idx];
      
      iconEl.innerHTML = mod.icon;
      titleEl.innerText = mod.title;
      descEl.innerText = mod.desc;
      
      // Reset position for enter animation (sliding in from the right)
      container.style.transition = 'none';
      container.style.transform = 'translateX(30px)';
      
      // Force reflow
      void container.offsetWidth;
      
      container.style.transition = 'all 0.5s ease-in-out';
      container.style.opacity = '1';
      container.style.transform = 'translateX(0)';
      container.style.filter = 'blur(0px)';
    }, 500);
  }, 5000);
}

export function initHeroPhrases() {
  const container = document.getElementById('hero-phrase-carousel');
  const textEl = document.getElementById('hero-phrase-text');
  if (!container || !textEl) return;

  const phrases = [
    "El CRM más fácil de usar.",
    "Diseñado para aumentar tus ventas.",
    "Sin funciones innecesarias, solo lo esencial.",
    "Visibilidad total de tus prospectos 24/7."
  ];

  let idx = 0;
  setInterval(() => {
    container.style.opacity = '0';
    container.style.transform = 'translateX(-30px)';
    container.style.filter = 'blur(10px)';
    
    setTimeout(() => {
      idx = (idx + 1) % phrases.length;
      textEl.innerText = phrases[idx];
      
      container.style.transition = 'none';
      container.style.transform = 'translateX(30px)';
      void container.offsetWidth;
      
      container.style.transition = 'all 0.5s ease-in-out';
      container.style.opacity = '1';
      container.style.transform = 'translateX(0)';
      container.style.filter = 'blur(0px)';
    }, 500);
  }, 4500);
}

export function initBenefitsAnimation() {
  const container = document.getElementById('benefits-list');
  if (!container) return;

  const benefits = [
    "✨ Simplicidad extrema",
    "🚀 Sin funciones de más",
    "📈 Seguimiento perfecto",
    "🤝 Trabajo en equipo",
    "⚡ Soporte ultra rápido",
    "📱 Móvil y Escritorio",
    "⏳ Más próximamente..."
  ];

  function runAnimation() {
    container.innerHTML = '';
    
    benefits.forEach((benefit, index) => {
      const item = document.createElement('div');
      item.innerHTML = `
        <div style="padding: 0.75rem 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; display: flex; align-items: center; gap: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); font-size: 0.95rem; font-weight: 700; color: #334155; opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s;">
          <span style="color: var(--brand); font-size: 1.1rem;">✓</span>
          ${benefit}
        </div>
      `;
      container.appendChild(item);
      
      // trigger reflow
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = item.firstElementChild;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }

  runAnimation();
}

// ── Mobile variants ─────────────────────────────────────────────

export function initHeroTextMobile() {
  const container = document.getElementById('modules-carousel-mobile') || document.querySelector('.mob-module-carousel');
  const iconEl = document.getElementById('module-icon-mobile');
  const titleEl = document.getElementById('module-title-mobile');
  const descEl = document.getElementById('module-desc-mobile');
  if (!iconEl || !titleEl || !descEl) return;

  const modules = [
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
      title: "Dashboard Intuitivo",
      desc: "Métricas y gráficas de ventas en tiempo real."
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: "Gestión de Clientes",
      desc: "Historial completo de interacciones con cada prospecto."
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>`,
      title: "Tareas y Actividades",
      desc: "Agenda reuniones y pendientes automáticamente."
    },
    {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
      title: "Alertas Inteligentes",
      desc: "Notificaciones para cerrar tratos a tiempo."
    }
  ];

  let idx = 0;
  const wrapEl = iconEl.closest('div') || iconEl.parentElement;

  setInterval(() => {
    if (wrapEl) { wrapEl.style.opacity = '0'; wrapEl.style.transform = 'translateX(-20px)'; }

    setTimeout(() => {
      idx = (idx + 1) % modules.length;
      const mod = modules[idx];
      iconEl.innerHTML = mod.icon;
      titleEl.innerText = mod.title;
      descEl.innerText = mod.desc;

      if (wrapEl) {
        wrapEl.style.transition = 'none';
        wrapEl.style.transform = 'translateX(20px)';
        void wrapEl.offsetWidth;
        wrapEl.style.transition = 'all 0.4s ease-in-out';
        wrapEl.style.opacity = '1';
        wrapEl.style.transform = 'translateX(0)';
      }
    }, 400);
  }, 4500);
}

export function initHeroPhrasesMobile() {
  const textEl = document.getElementById('hero-phrase-text-mobile');
  if (!textEl) return;

  const phrases = [
    "El CRM más fácil de usar.",
    "Diseñado para aumentar tus ventas.",
    "Sin funciones innecesarias.",
    "Visibilidad total de tus prospectos."
  ];

  let idx = 0;
  setInterval(() => {
    textEl.style.opacity = '0';
    textEl.style.transform = 'translateX(-15px)';

    setTimeout(() => {
      idx = (idx + 1) % phrases.length;
      textEl.innerText = phrases[idx];
      textEl.style.transition = 'none';
      textEl.style.transform = 'translateX(15px)';
      void textEl.offsetWidth;
      textEl.style.transition = 'all 0.4s ease-in-out';
      textEl.style.opacity = '1';
      textEl.style.transform = 'translateX(0)';
    }, 400);
  }, 4000);
}
