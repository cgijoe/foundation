import { createApp } from "vue";
import Keycloak from "keycloak-js";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

let initOptions = {
  url: "http://localhost:8080/auth",
  realm: "keycloak-demo",
  clientId: "app-vue",
  onLoad: "login-required",
};

let keycloak = new Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    console.log(":D");
  }

  const app = createApp(App);
  app.use(router);
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
