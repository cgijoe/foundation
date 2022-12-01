import type { AxiosRequestHeaders } from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'
import apiClient from './utilities/apiClient'

import './assets/main.css'
import { KeycloakClient } from './utilities/Keycloak'

const keycloak = KeycloakClient.getInstance()
keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  if (!authenticated) {
    window.location.reload()
  } else {
    apiClient.interceptors.request.use((request) => {
      ;(
        request.headers as AxiosRequestHeaders
      ).Authorization = `Bearer ${keycloak?.token}`
      return request
    })
  }

  const app = createApp(App)

  const vuetify = createVuetify({
    components,
    directives,
  })

  app.use(createPinia())
  app.use(router)
  app.use(vuetify)

  app.mount('#app')
})
