import { createApp } from "vue";
import Keycloak from "keycloak-js";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

let keycloak = new Keycloak("../keycloak.json");

keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
  if (!authenticated) {
    window.location.reload();
  } else {
    window.token = keycloak.token;
  }

  const vuetify = createVuetify({
    components,
    directives,
  });

  const app = createApp(App);
  app.use(router);
  app.use(vuetify);
  app.mount("#app");

  setInterval(() => {
    keycloak
      .updateToken(70)
      .then((refreshed) => {
        if (refreshed) {
          console.log("Token refreshed" + refreshed);
        } else {
          console.warn(
            "Token not refreshed, valid for " +
              Math.round(
                keycloak.tokenParsed.exp +
                  keycloak.timeSkew -
                  new Date().getTime() / 1000
              ) +
              " seconds"
          );
        }
      })
      .error(() => {
        console.error("Failed to refresh token");
      });
  }, 60000);
});
