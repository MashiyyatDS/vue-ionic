import { createApp, provide, h } from 'vue'
import App from '@/App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'

/* Core CSS required for Ionic components to work properly */
// import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
// import '@ionic/vue/css/normalize.css'
// import '@ionic/vue/css/structure.css'
// import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
// import '@ionic/vue/css/padding.css'
// import '@ionic/vue/css/float-elements.css'
// import '@ionic/vue/css/text-alignment.css'
// import '@ionic/vue/css/text-transformation.css'
// import '@ionic/vue/css/flex-utils.css'
// import '@ionic/vue/css/display.css'

/* Theme variables */
import './theme/variables.css'

/* Vuetify */
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

/* Apollo GraphQL */
import ApolloClient from '@/plugins/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, ApolloClient)
    },

    render: () => h(App),
})

app.use(IonicVue)
app.use(router)
app.use(vuetify)

router.isReady().then(() => {
    app.mount('#app')
})
