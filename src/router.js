export class Router {
  constructor() {
    this.routes = {}
    this.currentRoute = null
  }

  register(path, handler) {
    this.routes[path] = handler
  }

  navigate(path) {
    const handler = this.routes[path] || this.routes['/']
    if (!handler) return

    window.history.pushState(null, null, path)
    this.currentRoute = path
    this.render()
  }

  render() {
    const handler = this.routes[this.currentRoute] || this.routes['/']
    const app = document.querySelector('#app')
    if (handler && app) {
      app.innerHTML = handler()
    }
  }

  listen() {
    window.addEventListener('popstate', () => {
      this.currentRoute = window.location.pathname
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
    this.currentRoute = window.location.pathname || '/'
    this.listen()
    this.render()
  }
}
