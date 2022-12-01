<script setup lang="ts">
import { ref } from 'vue'
import { useNotesStore } from '../stores/useNotesStore'

const dialog = ref(false)
const props = defineProps({
  note: null,
})

const notesStore = useNotesStore()

const title = ref(props.note?.title || '')
const description = ref(props.note?.description || '')

const createNote = async () => {
  notesStore.createNote({
    title: title.value,
    description: description.value,
  })
  dialog.value = false
}

const updateNote = async () => {
  if (!props.note) {
    return
  }
  notesStore.updateNote(props.note.id, {
    title: title.value,
    description: description.value,
  })
  dialog.value = false
}
</script>
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px" persistent>
      <template v-slot:activator="{ props }">
        <v-btn variant="outlined" color="black" v-bind="props">{{
          note ? 'Update Note' : 'Add New Note'
        }}</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{
            note ? 'Update Note' : 'Add New Note'
          }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title*"
                  required
                  variant="outlined"
                  v-model="title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Description*"
                  variant="outlined"
                  v-model="description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="note ? updateNote() : createNote()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
