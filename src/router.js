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

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath)
    }

    this.currentRoute = targetPath
    this.render()
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
