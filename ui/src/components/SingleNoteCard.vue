<script setup lang="ts">
import AddOrEditNoteForm from './AddOrEditNoteForm.vue'
import { useNotesStore } from '../stores/useNotesStore'

const props = defineProps({
  note: null,
})

const notesStore = useNotesStore()
</script>
<template>
  <v-card class="mx-auto">
    <v-card-text>
      <h1>{{ note.title }}</h1>
      <p class="mt-4">{{ note.description }}</p>
    </v-card-text>
    <v-card-actions>
      <AddOrEditNoteForm :note="note" />
      <v-btn color="red" @click="notesStore.deleteNote(note.id)">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
