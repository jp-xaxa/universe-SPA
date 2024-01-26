import { home, universe, explore, bodyBackground } from "./controls.js"

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location

    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })
  }

  render() {
    const { pathname } = window.location
    const rota = this.rotas[pathname] || this.rotas[404]
    fetch(rota)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
        if (rota === "./pages/home.html") {
          document.body.style.backgroundImage = "url('/imgs/bg-spa.png')"
        } else if (rota === "./pages/exploration.html") {
          document.body.style.backgroundImage =
            "url('/imgs/mountains-universe-3.png')"
        } else {
          document.body.style.backgroundImage =
            "url(/imgs/mountains-universe02.png)"
        }
      })
  }
}
