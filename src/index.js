import { Router } from "./router.js"
import { home, universe, explore, bodyBackground } from "./controls.js"

home.addEventListener("click", () => {
  home.classList.add("active")
  universe.classList.remove("active")
  explore.classList.remove("active")
  bodyBackground.classList.add("bodyHome")
  bodyBackground.classList.remove("bodyUniverse")
  bodyBackground.classList.remove("bodyExplore")
})

universe.addEventListener("click", () => {
  universe.classList.add("active")
  home.classList.remove("active")
  explore.classList.remove("active")
  bodyBackground.classList.add("bodyUniverse")
  bodyBackground.classList.remove("bodyHome")
  bodyBackground.classList.remove("bodyExplore")
})

explore.addEventListener("click", () => {
  explore.classList.add("active")
  universe.classList.remove("active")
  home.classList.remove("active")
  bodyBackground.classList.add("bodyExplore")
  bodyBackground.classList.remove("bodyUniverse")
  bodyBackground.classList.remove("bodyHome")
})

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
