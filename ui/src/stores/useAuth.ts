import { defineStore } from 'pinia'
import Keycloak from 'keycloak-js'

export interface IAuthState {
  keycloak: Keycloak | null
  authenticated: boolean
}

export const useAuth = defineStore('counter', {
  state: (): IAuthState => ({
    keycloak: null,
    authenticated: false
  }),
  actions: {
    async initKeycloak() {
      this.keycloak = new Keycloak("../keycloak.json")
      this.authenticated = await this.keycloak.init({ onLoad: 'login-required' });
    },
    refreshToken() {
      setInterval(async () => {
        if (this.keycloak) {
          try {
            const refreshed = await this.keycloak.updateToken(70)
            if (refreshed) {
              console.log('Token refreshed' + refreshed)
            } else {
              console.warn(
                'Token not refreshed, valid for ' +
                  Math.round(
                    this.keycloak.tokenParsed!.exp! +
                      this.keycloak.timeSkew! -
                      new Date().getTime() / 1000
                  ) +
                  ' seconds'
              )
            }
          } catch (err) {
            console.error('Failed to refresh token')
          }
        }
      }, 60000)
    }
  },
})
