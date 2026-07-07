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

// Initialize router
const router = new Router()

// Register routes — use mobile components when on a small screen
router.register('/', isMobile ? renderHeroMobile : renderHero)
router.register('/inicio', isMobile ? renderHeroMobile : renderHero)
router.register('/funcionalidades', isMobile ? renderPricingMobile : renderPricingPage)
router.register('/precios', isMobile ? renderSubscriptionMobile : renderSubscriptionPage)

import { renderCheckoutPage } from './sections/checkout.js'
router.register('/pago', renderCheckoutPage)

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

		const submitBtn = form.querySelector('button[type="submit"]')
		const originalBtnHTML = submitBtn.innerHTML
		submitBtn.innerHTML = `
			Enviando...
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
			<style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
		`
		submitBtn.disabled = true

		// Enviar por correo via Formspree
		fetch('https://formspree.io/f/xnjkyqzr', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				name: payload.name,
				company: payload.company,
				phone: payload.phone,
				email: payload.email,
				message: payload.need // Formspree suele preferir 'message' pero enviamos todo
			})
		}).then(response => {
			submitBtn.innerHTML = originalBtnHTML
			submitBtn.disabled = false
			if (response.ok) {
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
			} else {
				response.json().then(data => {
					if (Object.hasOwn(data, 'errors')) {
						console.error('Formspree validation error:', data.errors.map(error => error.message).join(", "))
					}
					throw new Error('Error en Formspree')
				})
			}
		}).catch((error) => {
			submitBtn.innerHTML = originalBtnHTML
			submitBtn.disabled = false
			console.error('Formspree error:', error)
			showModal({
				type: 'error',
				title: 'Algo salió mal',
				message: 'No pudimos enviar tu mensaje. Por favor escríbenos a info@solomycrm.com',
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

// ── Lógica de la página de Checkout (/pago) ────────────────────────
function setupCheckoutForm() {
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function setFieldState(id, state, message) {
    const input = document.getElementById(id)
    const errEl = document.getElementById('err-' + id.replace('co-', ''))
    if (input) {
      input.classList.remove('is-error', 'is-ok')
      if (state === 'error') input.classList.add('is-error')
      else if (state === 'ok') input.classList.add('is-ok')
    }
    if (errEl) errEl.textContent = message || ''
  }

  function clearAllErrors() {
    ['co-nombre','co-email','co-usuario','co-contrasena','co-confirmar'].forEach(id => {
      setFieldState(id, '', '')
    })
    const fillEl = document.getElementById('co-strength-fill')
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
    const btn = document.getElementById('co-submit-btn')
    const spinner = document.getElementById('co-spinner')
    const lockIcon = document.getElementById('co-lock-icon')
    const text = document.getElementById('co-submit-text')
    if (!btn) return
    btn.disabled = loading
    if (spinner) spinner.style.display = loading ? 'block' : 'none'
    if (lockIcon) lockIcon.style.display = loading ? 'none' : 'block'
    if (text) text.textContent = loading ? 'Validando...' : 'Continuar al pago seguro'
  }

  function showGlobalError(msg) {
    const el = document.getElementById('co-global-error')
    if (el) { el.textContent = msg; el.style.display = 'block' }
  }

  // Delegated events
  document.addEventListener('click', (e) => {
    // Eye toggle pass
    if (e.target.closest('#co-eye-pass')) {
      const inp = document.getElementById('co-contrasena')
      if (inp) inp.type = inp.type === 'password' ? 'text' : 'password'
      return
    }
    // Eye toggle confirm
    if (e.target.closest('#co-eye-confirm')) {
      const inp = document.getElementById('co-confirmar')
      if (inp) inp.type = inp.type === 'password' ? 'text' : 'password'
      return
    }
  })

  // Password strength on input
  document.addEventListener('input', (e) => {
    if (e.target.id === 'co-contrasena') {
      const val = e.target.value
      const fillEl = document.getElementById('co-strength-fill')
      if (fillEl && val) {
        const s = getPasswordStrength(val)
        fillEl.style.width = s.pct + '%'
        fillEl.style.background = s.color
      } else if (fillEl) {
        fillEl.style.width = '0%'
      }
    }
  })

  // Form submit
  document.addEventListener('submit', async (e) => {
    const form = e.target.closest('#checkout-form')
    if (!form) return
    e.preventDefault()

    clearAllErrors()
    document.getElementById('co-global-error').style.display = 'none'

    const nombre   = document.getElementById('co-nombre').value.trim()
    const email    = document.getElementById('co-email').value.trim()
    const usuario  = document.getElementById('co-usuario').value.trim()
    const contrasena = document.getElementById('co-contrasena').value
    const confirmar  = document.getElementById('co-confirmar').value
    const plan     = document.getElementById('co-plan-input').value
    const telefono = document.getElementById('co-telefono')?.value.trim() || ''

    let valid = true
    if (!nombre) { setFieldState('co-nombre', 'error', 'Ingresa tu nombre completo.'); valid = false }
    if (!email || !EMAIL_RE.test(email)) { setFieldState('co-email', 'error', 'Ingresa un correo electrónico válido.'); valid = false }
    if (!usuario || usuario.length < 3) { setFieldState('co-usuario', 'error', 'El usuario debe tener al menos 3 caracteres.'); valid = false }
    if (!contrasena || contrasena.length < 6) { setFieldState('co-contrasena', 'error', 'La contraseña debe tener al menos 6 caracteres.'); valid = false }
    if (contrasena !== confirmar) { setFieldState('co-confirmar', 'error', 'Las contraseñas no coinciden.'); valid = false }
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
          if (data.errors.usuario) setFieldState('co-usuario', 'error', data.errors.usuario)
          if (data.errors.email) setFieldState('co-email', 'error', data.errors.email)
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

setupCheckoutForm()

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

// Removed checkPaymentStatus as success is now handled in checkout.js

