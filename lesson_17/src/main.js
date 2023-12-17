import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fab, fas, far)

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(store)
    .use(router)
    .use(vuetify)
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(FlagIcon)
    .mount('#app')
