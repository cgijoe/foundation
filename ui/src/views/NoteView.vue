<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore } from '../stores/useNotesStore'
import { useProfileStore } from '../stores/useProfileStore'

const notesStore = useNotesStore()
const profileStore = useProfileStore()

profileStore.loadKeycloakProfile()
notesStore.getNotes()

const { profile } = storeToRefs(profileStore)
</script>

<template>
  <div class="wrapper">
    <h1>Hi {{ profile?.username || 'There' }}</h1>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
