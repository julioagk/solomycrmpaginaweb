import './style.css'
import { Router } from './router.js'
import { renderHero } from './sections/hero.js'
import { renderProcess } from './sections/process.js'
import { renderPricing } from './sections/pricing.js'
import { renderCTA } from './sections/cta.js'

// Initialize router
const router = new Router()

// Register routes
router.register('/', renderHero)
router.register('/inicio', renderHero)
router.register('/proceso', renderProcess)
router.register('/paquetes', renderPricing)
router.register('/contacto', renderCTA)

// Start router
router.start()
