<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AddOrEditNoteForm from '../components/AddOrEditNoteForm.vue'
import SingleNoteCard from '../components/SingleNoteCard.vue'
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
    <AddOrEditNoteForm class="mt-4" />
    <div class="mt-8 grid" v-if="(notesStore.notes || []).length > 0">
      <SingleNoteCard
        v-for="note in notesStore.notes"
        :key="note.id"
        :note="note"
      />
    </div>
    <div class="mt-8" v-else>No notes data</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}
</style>
