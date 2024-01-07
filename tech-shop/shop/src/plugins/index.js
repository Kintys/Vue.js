/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import i18n from './i18n'
import { createPinia } from 'pinia'

export function registerPlugins(app) {
    app.use(vuetify).use(createPinia()).use(router).use(i18n)
}
