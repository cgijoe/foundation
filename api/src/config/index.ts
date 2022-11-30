const dotenv = require("dotenv");
dotenv.config();

export default {
  applicationPort: parseInt(process.env.PORT || "3001"),
  appFrontendUrl: process.env.APP_FRONTEND,
  appSecret: process.env.APP_SECRET,
  dbType: process.env.DB_TYPE,
  dbURL: process.env.DB_URL,
  dbPort: parseInt(process.env.DB_PORT || "3306"),
  dbName: process.env.DB_NAME,
  dbUserName: process.env.DB_USER_NAME,
  dbPassword: process.env.DB_PASSWORD,
};

export const keycloakConfig = {
  realm: process.env.KEYCLOAK_REALM || "",
  "auth-server-url": process.env.KEYCLOAK_AUTH_SERVER_URL || "",
  "ssl-required": "external",
  resource: process.env.KEYCLOAK_RESOURCE || "",
  "public-client": true,
  "confidential-port": 0,
  "bearer-only": true,
  realmPublicKey: process.env.KEYCLOAK_REALM_PUBLIC_KEY,
};
