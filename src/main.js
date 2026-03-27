import './style.css'
import { Router } from './router.js'
import { renderHero } from './sections/hero.js'
import { renderProcess } from './sections/process.js'
import { renderPricing } from './sections/pricing.js'
import { renderCTA } from './sections/cta.js'
import { trackEvent } from './analytics.js'
import { getWhatsAppLink } from './config/contact.js'

// Initialize router
const router = new Router()

// Register routes
router.register('/', renderHero)
router.register('/inicio', renderHero)
router.register('/proceso', renderProcess)
router.register('/paquetes', renderPricing)
router.register('/contacto', renderCTA)

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
		phone: 'Escribe un telefono de contacto.',
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
			'Hola, quiero una demostracion de SOLOMYCRM.',
			'',
			`Nombre: ${payload.name}`,
			`Empresa: ${payload.company}`,
			`Telefono: ${payload.phone}`,
			`Necesidad: ${payload.need}`,
		].join('\n')

		const whatsappLink = getWhatsAppLink(message)

		if (!whatsappLink) {
			if (statusElement) {
				statusElement.textContent = 'WhatsApp no esta configurado en este momento.'
			}
			trackEvent('lead_whatsapp_missing_configuration', { path: window.location.pathname })
			return
		}

		window.open(whatsappLink, '_blank', 'noopener,noreferrer')
		if (statusElement) {
			statusElement.textContent = 'Listo. Abrimos WhatsApp con tu informacion precargada.'
		}
		clearFormErrors(form)

		trackEvent('lead_whatsapp_submit_success', {
			path: window.location.pathname,
			source: 'contact_form',
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
