import Keycloak from 'keycloak-js'

export class KeycloakClient {
  private static _keycloak: Keycloak

  static getInstance = () => {
    if (!this._keycloak) {
      this._keycloak = new Keycloak('../keycloak.json')
    }
    return this._keycloak
  }
}
