<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useNotesStore } from './stores/useNotesStore'
import { KeycloakClient } from './Keycloak'

const notes = useNotesStore()
const keycloak = KeycloakClient.getInstance()
</script>

<template>
  <v-app>
    <v-app-bar color="white">
      <v-app-bar-title>Hello</v-app-bar-title>
      <template v-slot:append>
        <v-btn>Notes</v-btn>
        <v-btn>Users</v-btn>
        <v-btn>Profile</v-btn>
        <v-btn @click="keycloak.logout">Logout</v-btn>
      </template>
    </v-app-bar>

    <div class="wrapper">
      <HelloWorld msg="Hi there!" />
      <button @click="notes.getNotes">Get Notes</button>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </v-app>

  <RouterView />
</template>

<style scoped>
.wrapper {
  margin-top: 80px;
}
</style>
