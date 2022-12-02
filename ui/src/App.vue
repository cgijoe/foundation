<script setup lang="ts">
import { RouterView } from 'vue-router'
import { KeycloakClient } from './utilities/Keycloak'
const keycloak = KeycloakClient.getInstance()
</script>

<template>
  <v-app>
    <v-app-bar color="black">
      <v-app-bar-title>Hello</v-app-bar-title>
      <template v-slot:append>
        <v-btn to="/">Notes</v-btn>
        <v-btn @click="keycloak.logout">Logout</v-btn>
      </template>
    </v-app-bar>
    <main class="main">
      <RouterView />
    </main>
  </v-app>
</template>

<style scoped>
.main {
  margin-top: 100px;
}
</style>
