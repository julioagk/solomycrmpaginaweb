export class Router {
  constructor() {
    this.routes = {}
    this.currentRoute = null
  }

  normalize(path) {
    if (!path) return '/'
    const sanitized = String(path).trim()
    if (!sanitized || sanitized === '/') return '/'

    const withoutQuery = sanitized.split('?')[0].split('#')[0]
    const cleaned = withoutQuery.replace(/\/+$/, '')

    if (!cleaned || cleaned === '/') return '/'
    return cleaned.startsWith('/') ? cleaned : `/${cleaned}`
  }

  getRouteFromLocation() {
    return this.normalize(window.location.pathname)
  }

  register(path, handler) {
    this.routes[this.normalize(path)] = handler
  }

  navigate(path) {
    const targetPath = this.normalize(path)
    const handler = this.routes[targetPath] || this.routes['/']
    if (!handler) return

    if (targetPath === '/pago') {
      this.showPremiumTransition(() => {
        if (window.location.pathname + window.location.search !== path) {
          window.history.pushState({}, '', path)
        }
        this.currentRoute = targetPath
        this.render()
      })
      return
    }

    if (window.location.pathname + window.location.search !== path) {
      window.history.pushState({}, '', path)
    }

    this.currentRoute = targetPath
    this.render()
  }

  showPremiumTransition(callback) {
    let overlay = document.getElementById('premium-transition')
    if (!overlay) {
      overlay = document.createElement('div')
      overlay.id = 'premium-transition'
      overlay.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: #ffffff;
        z-index: 99999; display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
      `
      overlay.innerHTML = `
        <div style="width: 40px; height: 40px; border: 3px solid #e2e8f0; border-top-color: #2563eb; border-radius: 50%; animation: spin-loader 0.8s linear infinite;"></div>
        <style>@keyframes spin-loader { to { transform: rotate(360deg); } }</style>
      `
      document.body.appendChild(overlay)
    }
    
    overlay.style.pointerEvents = 'all'
    requestAnimationFrame(() => overlay.style.opacity = '1')
    
    setTimeout(() => {
      callback()
      setTimeout(() => {
        overlay.style.opacity = '0'
        setTimeout(() => overlay.style.pointerEvents = 'none', 300)
      }, 100)
    }, 400)
  }

  render() {
    const resolvedRoute = this.routes[this.currentRoute] ? this.currentRoute : '/'
    const handler = this.routes[resolvedRoute]
    const app = document.querySelector('#app')
    if (handler && app) {
      this.currentRoute = resolvedRoute
      app.innerHTML = handler()
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.dispatchEvent(
        new CustomEvent('route:changed', {
          detail: { path: resolvedRoute },
        }),
      )
    }
  }

  listen() {
    window.addEventListener('popstate', () => {
      this.currentRoute = this.getRouteFromLocation()
      this.render()
    })

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-link]')
      if (link) {
        e.preventDefault()
        this.navigate(link.getAttribute('href'))
      }
    })
  }

  start() {
    this.listen()
    this.currentRoute = this.getRouteFromLocation()
    this.render()
  }
}
