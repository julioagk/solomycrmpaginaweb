import './style.css'
import { Router } from './router.js'
import { renderHero } from './sections/hero.js'
import { renderProcessPage } from './sections/process.js'
import { renderPricingPage } from './sections/pricing.js'
import { renderCTAPage } from './sections/cta.js'
import { trackEvent } from './analytics.js'
import { getWhatsAppLink } from './config/contact.js'
import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_SERVICE_ID  = 'service_4wpqrr7'
const EMAILJS_TEMPLATE_ID = 'template_sh906y3'
const EMAILJS_PUBLIC_KEY  = 'BUzcIop_RG77aWTGqQoOJ'

// Initialize router
const router = new Router()

// Register routes
router.register('/', renderHero)
router.register('/inicio', renderHero)
router.register('/proceso', renderProcessPage)
router.register('/funcionalidades', renderPricingPage)
router.register('/paquetes', renderPricingPage)
router.register('/contacto', renderCTAPage)

// ── Modal helpers ────────────────────────────────────────────
function showModal({ type, title, message }) {
	let overlay = document.getElementById('lead-modal')
	if (!overlay) {
		overlay = document.createElement('div')
		overlay.id = 'lead-modal'
		overlay.className = 'modal-overlay'
		overlay.setAttribute('role', 'dialog')
		overlay.setAttribute('aria-modal', 'true')
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

function setupRouteTracking() {
	document.addEventListener('route:changed', (event) => {
		const routePath = event?.detail?.path || window.location.pathname
		trackEvent('page_view', { path: routePath })
	})
}

function setupWhatsAppLeadForm() {
	const fieldMessages = {
		name: 'Escribe tu nombre completo.',
		company: 'Escribe el nombre de tu empresa.',
		phone: 'Escribe un teléfono de contacto.',
		need: 'Describe brevemente lo que necesitas resolver.',
	}

	const setFieldError = (form, fieldName, message) => {
		const errorElement = form.querySelector(`[data-error-for="${fieldName}"]`)
		const fieldElement = form.querySelector(`[name="${fieldName}"]`)
		if (errorElement) {
			errorElement.textContent = message
		}
		if (fieldElement) {
			fieldElement.classList.toggle('input-invalid', Boolean(message))
		}
	}

	const clearFormErrors = (form) => {
		Object.keys(fieldMessages).forEach((fieldName) => {
			setFieldError(form, fieldName, '')
		})
	}

	document.addEventListener('submit', (event) => {
		const form = event.target.closest('#lead-form')
		if (!form) return

		event.preventDefault()

		const statusElement = document.querySelector('#lead-form-status')
		const formData = new FormData(form)
		const payload = {
			name: String(formData.get('name') || '').trim(),
			company: String(formData.get('company') || '').trim(),
			phone: String(formData.get('phone') || '').trim(),
			need: String(formData.get('need') || '').trim(),
		}

		clearFormErrors(form)
		let hasErrors = false
		Object.entries(payload).forEach(([fieldName, value]) => {
			if (!value) {
				hasErrors = true
				setFieldError(form, fieldName, fieldMessages[fieldName])
			}
		})

		if (hasErrors) {
			if (statusElement) {
				statusElement.textContent = 'Revisa los campos marcados para continuar.'
			}
			trackEvent('lead_whatsapp_validation_error', { path: window.location.pathname })
			return
		}

		const message = [
			'Hola, quiero una demostración de SOLOMYCRM.',
			'',
			`Nombre: ${payload.name}`,
			`Empresa: ${payload.company}`,
			`Teléfono: ${payload.phone}`,
			`Necesidad: ${payload.need}`,
		].join('\n')

		const whatsappLink = getWhatsAppLink(message)

		if (!whatsappLink) {
			if (statusElement) {
				statusElement.textContent = 'WhatsApp no está configurado en este momento.'
			}
			trackEvent('lead_whatsapp_missing_configuration', { path: window.location.pathname })
			return
		}

		window.open(whatsappLink, '_blank', 'noopener,noreferrer')
		clearFormErrors(form)

		trackEvent('lead_whatsapp_submit_success', {
			path: window.location.pathname,
			source: 'contact_form',
		})

		// Send email notification via EmailJS
		emailjs.send(
			EMAILJS_SERVICE_ID,
			EMAILJS_TEMPLATE_ID,
			{
				name:    payload.name,
				company: payload.company,
				phone:   payload.phone,
				need:    payload.need,
			},
			EMAILJS_PUBLIC_KEY
		).then(() => {
			showModal({
				type: 'success',
				title: '¡Mensaje enviado!',
				message: 'Recibimos tu solicitud. En breve te contactamos para agendar tu demo.',
			})
			form.reset()
		}).catch((error) => {
			console.error('EmailJS error:', error)
			showModal({
				type: 'error',
				title: 'Algo salió mal',
				message: 'No pudimos enviar tu mensaje por correo. Por favor escríbenos directamente a lesly@updm.mx',
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

		const value = String(field.value || '').trim()
		setFieldError(form, fieldName, value ? '' : fieldMessages[fieldName])
	})
}

setupClickTracking()
setupRouteTracking()
setupWhatsAppLeadForm()

// Start router
router.start()

