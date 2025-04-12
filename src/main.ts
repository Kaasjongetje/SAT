import { mount } from 'svelte'
import './app.scss'
import App from './App.svelte'

const app = mount(App, {
  target: document.body,
})

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
}

export default app