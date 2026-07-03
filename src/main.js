import './style.css'
import { Router } from './router.js'
import { renderHero } from './sections/hero.js'
import { renderPricingPage } from './sections/pricing.js'
import { renderSubscriptionPage } from './sections/subscription.js'
import { initCascade, initHeroText, initHeroPhrases, initBenefitsAnimation, initHeroTextMobile, initHeroPhrasesMobile } from './animations.js'
import { trackEvent } from './analytics.js'

// ── Mobile component imports ─────────────────────────────────
import { renderHeroMobile } from './sections/mobile/heroMobile.js'
import { renderPricingMobile } from './sections/mobile/pricingMobile.js'
import { renderSubscriptionMobile } from './sections/mobile/subscriptionMobile.js'
import { initMobileMenu } from './sections/mobile/headerMobile.js'
import { initMobileSlider } from './sections/mobile/pricingMobile.js'

// ── Device detection (evaluated once at boot) ─────────────────
const isMobile = window.matchMedia('(max-width: 768px)').matches

import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_4wpqrr7'
const EMAILJS_TEMPLATE_ID = 'template_sh906y3'
const EMAILJS_PUBLIC_KEY = 'vHksxDcHgxvB7ZPHk'

// Inicializar EmailJS (requerido en v4)
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })

// Initialize router
const router = new Router()

// Register routes — use mobile components when on a small screen
router.register('/', isMobile ? renderHeroMobile : renderHero)
router.register('/inicio', isMobile ? renderHeroMobile : renderHero)
router.register('/funcionalidades', isMobile ? renderPricingMobile : renderPricingPage)
router.register('/precios', isMobile ? renderSubscriptionMobile : renderSubscriptionPage)

// ── Modal helpers ────────────────────────────────────────────
function showModal({ type, title, message }) {
	let overlay = document.getElementById('lead-modal')
	if (!overlay) {
		overlay = document.createElement('div')
		overlay.id = 'lead-modal'
		overlay.className = 'modal-overlay'
		overlay.setAttribute('role', 'dialog')
		overlay.setAttribute('aria-modal', 'true')
		overlay.style.zIndex = '10000'
		overlay.innerHTML = `
			<div class="modal-box">
				<div class="modal-icon" id="lead-modal-icon"></div>
				<h3 id="lead-modal-title"></h3>
				<p id="lead-modal-message"></p>
				<button class="btn btn-primary modal-close" id="lead-modal-close">Entendido</button>
			</div>
		`
		document.body.appendChild(overlay)

		overlay.addEventListener('click', (e) => {
			if (e.target === overlay) closeModal()
		})
		document.getElementById('lead-modal-close').addEventListener('click', closeModal)
	}

	document.getElementById('lead-modal-icon').className = `modal-icon ${type}`
	document.getElementById('lead-modal-icon').textContent = type === 'success' ? '✓' : '✕'
	document.getElementById('lead-modal-title').textContent = title
	document.getElementById('lead-modal-message').textContent = message

	requestAnimationFrame(() => overlay.classList.add('is-visible'))
}

function closeModal() {
	const overlay = document.getElementById('lead-modal')
	if (overlay) overlay.classList.remove('is-visible')
}

function setupClickTracking() {
	document.addEventListener('click', (event) => {
		const target = event.target.closest('[data-track]')
		if (!target) return

		trackEvent(target.dataset.track, {
			path: window.location.pathname,
			label: target.textContent.trim(),
			href: target.getAttribute('href') || null,
		})
	})
}

function initFeaturesSwiper() {
	const swiperEl = document.querySelector('.features-swiper');
	if (swiperEl) {
		new Swiper('.features-swiper', {
			modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
			loop: true,
			effect: 'coverflow',
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 0,
				stretch: 500,
				depth: 250,
				modifier: 1.5,
				slideShadows: false,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.swiper-button-next-custom',
				prevEl: '.swiper-button-prev-custom',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	}
}

function setupRouteTracking() {
	document.addEventListener('route:changed', (event) => {
		const routePath = event?.detail?.path || window.location.pathname
		trackEvent('page_view', { path: routePath })

		// Wire up mobile-specific interactivity after every render
		if (isMobile) {
			initMobileMenu()
		}

		if (routePath === '/' || routePath === '/inicio') {
			if (isMobile) {
				initHeroTextMobile()
				initHeroPhrasesMobile()
				initBenefitsAnimation()
			} else {
				initCascade('#hero-cascade')
				initHeroText()
				initHeroPhrases()
				initBenefitsAnimation()
			}
		}

		if (routePath === '/funcionalidades') {
			if (isMobile) {
				initMobileSlider()
			} else {
				initFeaturesSwiper()
			}
		}
	})
}



function setupContactModal() {
	let overlay = document.getElementById('contact-form-modal')
	if (!overlay) {
		overlay = document.createElement('div')
		overlay.id = 'contact-form-modal'
		overlay.className = 'modal-overlay'
		overlay.setAttribute('role', 'dialog')
		overlay.setAttribute('aria-modal', 'true')
		overlay.style.zIndex = '9999'
		overlay.style.backdropFilter = 'blur(4px)'
		
		overlay.innerHTML = `
			<div class="modal-box" style="padding: 2rem; max-width: 500px; text-align: left; position: relative;">
				<button id="close-contact-modal" style="position: absolute; top: 1rem; right: 1rem; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-muted);">&times;</button>
				<h3 style="margin-bottom: 0.25rem; font-size: 1.5rem; font-weight: 700; color: var(--text-main);">Envíanos un mensaje</h3>
				<p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem;">Completa el formulario y te responderemos en breve.</p>
				
				<form id="lead-form" novalidate>
				  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
					<div class="form-group" style="margin: 0;">
					  <label class="form-label" for="lead-name" style="margin-bottom: 0.25rem; font-size: 0.8rem; display: block; font-weight: 600;">Nombre completo <span style="color: var(--danger)">*</span></label>
					  <input class="form-control" id="lead-name" name="name" type="text" placeholder="Ej. Carlos Ramírez" required style="padding: 0.6rem 0.8rem; font-size: 0.9rem; width: 100%; box-sizing: border-box; border-radius: 6px; border: 1px solid var(--border-color, #e2e8f0);" />
					  <span class="error-message" data-error-for="name" style="font-size: 0.75rem; min-height: 1rem; color: var(--danger); display: block;"></span>
					</div>
					<div class="form-group" style="margin: 0;">
					  <label class="form-label" for="lead-company" style="margin-bottom: 0.25rem; font-size: 0.8rem; display: block; font-weight: 600;">Empresa (Opcional)</label>
					  <input class="form-control" id="lead-company" name="company" type="text" placeholder="Ej. Mi Empresa" style="padding: 0.6rem 0.8rem; font-size: 0.9rem; width: 100%; box-sizing: border-box; border-radius: 6px; border: 1px solid var(--border-color, #e2e8f0);" />
					  <span class="error-message" data-error-for="company" style="font-size: 0.75rem; min-height: 1rem; color: var(--danger); display: block;"></span>
					</div>
				  </div>
				  
				  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
					<div class="form-group" style="margin: 0;">
					  <label class="form-label" for="lead-phone" style="margin-bottom: 0.25rem; font-size: 0.8rem; display: block; font-weight: 600;">Teléfono <span style="color: var(--danger)">*</span></label>
					  <input class="form-control" id="lead-phone" name="phone" type="tel" placeholder="Ej. 81 1234 5678" required style="padding: 0.6rem 0.8rem; font-size: 0.9rem; width: 100%; box-sizing: border-box; border-radius: 6px; border: 1px solid var(--border-color, #e2e8f0);" />
					  <span class="error-message" data-error-for="phone" style="font-size: 0.75rem; min-height: 1rem; color: var(--danger); display: block;"></span>
					</div>
					<div class="form-group" style="margin: 0;">
					  <label class="form-label" for="lead-email" style="margin-bottom: 0.25rem; font-size: 0.8rem; display: block; font-weight: 600;">Correo electrónico <span style="color: var(--danger)">*</span></label>
					  <input class="form-control" id="lead-email" name="email" type="email" placeholder="tu@correo.com" required style="padding: 0.6rem 0.8rem; font-size: 0.9rem; width: 100%; box-sizing: border-box; border-radius: 6px; border: 1px solid var(--border-color, #e2e8f0);" />
					  <span class="error-message" data-error-for="email" style="font-size: 0.75rem; min-height: 1rem; color: var(--danger); display: block;"></span>
					</div>
				  </div>
				  
				  <div class="form-group" style="margin-bottom: 1.25rem;">
					<label class="form-label" for="lead-need" style="margin-bottom: 0.25rem; font-size: 0.8rem; display: block; font-weight: 600;">Mensaje <span style="color: var(--danger)">*</span></label>
					<textarea class="form-control" id="lead-need" name="need" rows="3" placeholder="¿En qué te podemos ayudar?" required style="resize: vertical; min-height: 80px; padding: 0.6rem 0.8rem; font-size: 0.9rem; width: 100%; box-sizing: border-box; border-radius: 6px; border: 1px solid var(--border-color, #e2e8f0);"></textarea>
					<span class="error-message" data-error-for="need" style="font-size: 0.75rem; min-height: 1rem; color: var(--danger); display: block;"></span>
				  </div>
				  
				  <button class="btn btn-primary" type="submit" style="width: 100%; font-size: 1rem; padding: 0.75rem; display: flex; justify-content: center; gap: 0.5rem; align-items: center; border-radius: 8px; cursor: pointer; border: none; background: var(--brand); color: white; font-weight: 600;">
					Enviar mensaje
					<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
				  </button>
				  <p id="lead-form-status" style="margin-top: 0.5rem; text-align: center; font-size: 0.8rem; color: var(--text-muted); min-height: 1rem;"></p>
				</form>
			</div>
		`
		document.body.appendChild(overlay)

		const closeModal = () => {
			overlay.classList.remove('is-visible')
		};

		overlay.addEventListener('click', (e) => {
			if (e.target === overlay) closeModal()
		})
		document.getElementById('close-contact-modal').addEventListener('click', closeModal)
	}

	document.addEventListener('click', (e) => {
		if (e.target.closest('.open-contact-modal')) {
			e.preventDefault();
			const modal = document.getElementById('contact-form-modal');
			if (modal) {
				modal.classList.add('is-visible');
			}
		}
	});
}

function setupLeadForm() {
	const fieldMessages = {
		name: 'Escribe tu nombre completo.',
		company: 'Escribe el nombre de tu empresa.',
		phone: 'Escribe un teléfono de contacto.',
		email: 'Escribe un correo electrónico válido.',
		need: 'Describe brevemente lo que necesitas resolver.',
	}

	const setFieldError = (form, fieldName, message) => {
		const errorElement = form.querySelector(`[data-error-for="${fieldName}"]`)
		const fieldElement = form.querySelector(`[name="${fieldName}"]`)
		if (errorElement) errorElement.textContent = message
		if (fieldElement) fieldElement.classList.toggle('input-invalid', Boolean(message))
	}

	const clearFormErrors = (form) => {
		Object.keys(fieldMessages).forEach((fieldName) => setFieldError(form, fieldName, ''))
	}

	document.addEventListener('submit', (event) => {
		const form = event.target.closest('#lead-form')
		if (!form) return
		event.preventDefault()

		const formData = new FormData(form)
		const payload = {
			name: String(formData.get('name') || '').trim(),
			company: String(formData.get('company') || '').trim(),
			phone: String(formData.get('phone') || '').trim(),
			email: String(formData.get('email') || '').trim(),
			need: String(formData.get('need') || '').trim(),
		}

		clearFormErrors(form)
		let hasErrors = false
		
		const requiredFields = ['name', 'phone', 'email', 'need']
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		
		Object.entries(payload).forEach(([fieldName, value]) => {
			if (requiredFields.includes(fieldName) && !value) {
				hasErrors = true
				setFieldError(form, fieldName, fieldMessages[fieldName])
			} else if (fieldName === 'email' && value && !emailRegex.test(value)) {
				hasErrors = true
				setFieldError(form, fieldName, 'Escribe un correo electrónico válido.')
			}
		})

		if (hasErrors) {
			trackEvent('lead_validation_error', { path: window.location.pathname })
			return
		}

		// Enviar por correo via EmailJS
		emailjs.send(
			EMAILJS_SERVICE_ID,
			EMAILJS_TEMPLATE_ID,
			{
				name: payload.name,
				company: payload.company,
				phone: payload.phone,
				email: payload.email,
				need: payload.need,
			}
		).then(() => {
			showModal({
				type: 'success',
				title: '¡Mensaje enviado!',
				message: 'Recibimos tu solicitud. En breve te contactamos para agendar tu demo.',
			})
			form.reset()
			const contactModal = document.getElementById('contact-form-modal')
			if (contactModal) {
				contactModal.classList.remove('is-visible')
			}
			trackEvent('lead_email_submit_success', { path: window.location.pathname })
		}).catch((error) => {
			console.error('EmailJS error status:', error?.status)
			console.error('EmailJS error text:', error?.text)
			showModal({
				type: 'error',
				title: 'Algo salió mal',
				message: 'No pudimos enviar tu mensaje. Por favor escríbenos a lesly@updm.mx',
			})
		})
	})

	document.addEventListener('input', (event) => {
		const field = event.target.closest('#lead-form [name]')
		if (!field) return
		const form = field.closest('#lead-form')
		if (!form) return
		const fieldName = field.getAttribute('name')
		if (!fieldName || !Object.hasOwn(fieldMessages, fieldName)) return
		
		const requiredFields = ['name', 'phone', 'email', 'need']
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		const value = String(field.value || '').trim()
		
		let errorMessage = ''
		if (requiredFields.includes(fieldName) && !value) {
			errorMessage = fieldMessages[fieldName]
		} else if (fieldName === 'email' && value && !emailRegex.test(value)) {
			errorMessage = 'Escribe un correo electrónico válido.'
		}
		
		setFieldError(form, fieldName, errorMessage)
	})
}

setupClickTracking()
setupRouteTracking()
setupContactModal()
setupLeadForm()

// ── Página de éxito post-pago ────────────────────────────────────────
function renderSuccessPage() {
  const params = new URLSearchParams(window.location.search)
  const sessionId = params.get('session_id')
  return `
    ${isMobile ? '' : `<nav class="navbar"><div class="container"><a href="/" data-link class="logo">SOLOMYCRM</a></div></nav>`}
    <main style="min-height:80vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--theme-50) 0%,white 100%);padding:2rem;">
      <div style="text-align:center;max-width:520px;padding:3rem 2rem;background:white;border-radius:24px;box-shadow:0 30px 60px -15px rgba(37,99,235,0.15);border:1px solid var(--border-light);">
        <div style="width:72px;height:72px;background:linear-gradient(135deg,var(--theme-500),var(--theme-600));border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;box-shadow:0 12px 30px rgba(37,99,235,0.3);">
          <svg width="32" height="32" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h1 style="font-size:2rem;font-weight:800;color:var(--text-main);margin-bottom:0.75rem;">¡Pago exitoso!</h1>
        <p style="color:var(--text-muted);font-size:1rem;margin-bottom:2rem;line-height:1.7;">
          Tu suscripción está activa. Te enviamos un correo con tus credenciales de acceso.<br>
          <strong style="color:var(--text-main);">Revisa tu bandeja de entrada</strong> (y spam, por si acaso).
        </p>
        <a href="https://crm.solomycrm.com" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:0.5rem;background:linear-gradient(135deg,var(--theme-600),var(--theme-500));color:white;font-weight:700;padding:0.9rem 2rem;border-radius:12px;text-decoration:none;font-size:1rem;box-shadow:0 8px 20px rgba(37,99,235,0.3);transition:all 0.25s;">
          Ir al CRM ahora
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
        <div style="margin-top:1.5rem;">
          <a href="/" data-link style="font-size:0.85rem;color:var(--text-muted);">← Volver a la página principal</a>
        </div>
      </div>
    </main>
  `
}

router.register('/success', renderSuccessPage)

// ── Modal de Registro + Pago ─────────────────────────────────────────
function setupRegisterPaymentModal() {
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function openModal(plan, label, price) {
    const modal = document.getElementById('register-payment-modal')
    if (!modal) return
    document.getElementById('rp-plan-input').value = plan
    document.getElementById('rp-plan-label').textContent = label
    document.getElementById('rp-summary-label').textContent = label
    document.getElementById('rp-summary-price').textContent = price
    document.getElementById('rp-global-error').className = 'rp-global-error'
    document.getElementById('rp-form').reset()
    clearAllErrors()
    modal.classList.add('is-visible')
    document.body.style.overflow = 'hidden'
    setTimeout(() => document.getElementById('rp-nombre')?.focus(), 300)
  }

  function closeModal() {
    const modal = document.getElementById('register-payment-modal')
    if (modal) {
      modal.classList.remove('is-visible')
      document.body.style.overflow = ''
    }
  }

  function setFieldState(id, state, message) {
    const input = document.getElementById(id)
    const errEl = document.getElementById('err-' + id.replace('rp-', ''))
    if (input) {
      input.classList.remove('is-error', 'is-ok')
      if (state === 'error') input.classList.add('is-error')
      else if (state === 'ok') input.classList.add('is-ok')
    }
    if (errEl) errEl.textContent = message || ''
  }

  function clearAllErrors() {
    ['rp-nombre','rp-email','rp-usuario','rp-contrasena','rp-confirmar'].forEach(id => {
      setFieldState(id, '', '')
    })
    const fillEl = document.getElementById('rp-strength-fill')
    if (fillEl) { fillEl.style.width = '0%'; fillEl.style.background = '#e2e8f0' }
  }

  function getPasswordStrength(pw) {
    let s = 0
    if (pw.length >= 6) s++
    if (pw.length >= 10) s++
    if (/[A-Z]/.test(pw)) s++
    if (/[0-9]/.test(pw)) s++
    if (/[^A-Za-z0-9]/.test(pw)) s++
    if (s <= 1) return { pct: 25, color: '#ef4444', label: 'Débil' }
    if (s <= 3) return { pct: 60, color: '#f59e0b', label: 'Media' }
    return { pct: 100, color: '#10b981', label: 'Fuerte' }
  }

  function setLoading(loading) {
    const btn = document.getElementById('rp-submit-btn')
    const spinner = document.getElementById('rp-spinner')
    const lockIcon = document.getElementById('rp-lock-icon')
    const text = document.getElementById('rp-submit-text')
    if (!btn) return
    btn.disabled = loading
    if (spinner) spinner.style.display = loading ? 'block' : 'none'
    if (lockIcon) lockIcon.style.display = loading ? 'none' : 'block'
    if (text) text.textContent = loading ? 'Validando...' : 'Continuar al pago seguro'
  }

  function showGlobalError(msg) {
    const el = document.getElementById('rp-global-error')
    if (el) { el.textContent = msg; el.className = 'rp-global-error show' }
  }

  // Delegated events — only wire up if modal exists in DOM
  document.addEventListener('click', (e) => {
    // Open modal
    const btn = e.target.closest('.open-register-modal')
    if (btn) {
      e.preventDefault()
      openModal(btn.dataset.plan, btn.dataset.label, btn.dataset.price)
      return
    }
    // Close button
    if (e.target.closest('#rp-close-btn')) { closeModal(); return }
    // Click backdrop
    const modal = document.getElementById('register-payment-modal')
    if (modal && e.target === modal) { closeModal(); return }
    // Eye toggle pass
    if (e.target.closest('#rp-eye-pass')) {
      const inp = document.getElementById('rp-contrasena')
      if (inp) inp.type = inp.type === 'password' ? 'text' : 'password'
      return
    }
    // Eye toggle confirm
    if (e.target.closest('#rp-eye-confirm')) {
      const inp = document.getElementById('rp-confirmar')
      if (inp) inp.type = inp.type === 'password' ? 'text' : 'password'
      return
    }
  })

  // Password strength on input
  document.addEventListener('input', (e) => {
    if (e.target.id === 'rp-contrasena') {
      const val = e.target.value
      const fillEl = document.getElementById('rp-strength-fill')
      if (fillEl && val) {
        const s = getPasswordStrength(val)
        fillEl.style.width = s.pct + '%'
        fillEl.style.background = s.color
      } else if (fillEl) {
        fillEl.style.width = '0%'
      }
    }
  })

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('register-payment-modal')
    if (e.key === 'Escape' && modal?.classList.contains('is-visible')) closeModal()
  })

  // Form submit
  document.addEventListener('submit', async (e) => {
    const form = e.target.closest('#rp-form')
    if (!form) return
    e.preventDefault()

    clearAllErrors()
    document.getElementById('rp-global-error').className = 'rp-global-error'

    const nombre   = document.getElementById('rp-nombre').value.trim()
    const email    = document.getElementById('rp-email').value.trim()
    const usuario  = document.getElementById('rp-usuario').value.trim()
    const contrasena = document.getElementById('rp-contrasena').value
    const confirmar  = document.getElementById('rp-confirmar').value
    const plan     = document.getElementById('rp-plan-input').value
    const telefono = document.getElementById('rp-telefono')?.value.trim() || ''

    let valid = true
    if (!nombre) { setFieldState('rp-nombre', 'error', 'Ingresa tu nombre completo.'); valid = false }
    if (!email || !EMAIL_RE.test(email)) { setFieldState('rp-email', 'error', 'Ingresa un correo electrónico válido.'); valid = false }
    if (!usuario || usuario.length < 3) { setFieldState('rp-usuario', 'error', 'El usuario debe tener al menos 3 caracteres.'); valid = false }
    if (!contrasena || contrasena.length < 6) { setFieldState('rp-contrasena', 'error', 'La contraseña debe tener al menos 6 caracteres.'); valid = false }
    if (contrasena !== confirmar) { setFieldState('rp-confirmar', 'error', 'Las contraseñas no coinciden.'); valid = false }
    if (!valid) return

    setLoading(true)

    try {
      const res = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, usuario, contraseña: contrasena, telefono, plan }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.errors) {
          if (data.errors.usuario) setFieldState('rp-usuario', 'error', data.errors.usuario)
          if (data.errors.email) setFieldState('rp-email', 'error', data.errors.email)
        } else {
          showGlobalError(data.error || 'Error al procesar. Intenta de nuevo.')
        }
        setLoading(false)
        return
      }

      // Redirigir a Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      } else {
        showGlobalError('No se pudo obtener la URL de pago.')
        setLoading(false)
      }
    } catch (err) {
      console.error('Error al crear sesión de pago:', err)
      showGlobalError('Error de conexión. Verifica tu internet e intenta de nuevo.')
      setLoading(false)
    }
  })
}

setupRegisterPaymentModal()

// Start router
router.start()

// Mobile menu init for initial render (route:changed already handles subsequent navigations)
if (isMobile) {
	initMobileMenu()
}

// Initial cascade call for the home page
if (window.location.pathname === '/' || window.location.pathname === '/inicio') {
	if (isMobile) {
		initHeroTextMobile()
		initHeroPhrasesMobile()
		initBenefitsAnimation()
	} else {
		initCascade('#hero-cascade')
		initHeroText()
		initHeroPhrases()
		initBenefitsAnimation()
	}
}

