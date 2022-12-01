<script setup lang="ts">
const props = defineProps({
  note: null,
})
</script>
<template>
  <v-card class="mx-auto">
    <v-card-text>
      <h1>{{ note.title }}</h1>
      <p class="mt-4">{{ note.description }}</p>
    </v-card-text>
  </v-card>
</template>
