import { KeycloakClient } from '@/utilities/Keycloak'
import type { KeycloakProfile } from 'keycloak-js'
import { defineStore } from 'pinia'

export interface IProfileStoreState {
  profile?: KeycloakProfile | null
  loading: boolean
  error?: Error | null
}

export const useProfileStore = defineStore('profile', {
  state: (): IProfileStoreState => ({
    profile: null,
    loading: false,
    error: null,
  }),
  actions: {
    async loadKeycloakProfile() {
      this.loading = true
      try {
        this.profile = await KeycloakClient.getInstance().loadUserProfile()
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
  },
})
