<script setup lang="ts">
const res = await $fetch('/api/test')
</script>

<template>
  <div>
    <h1>Test</h1>
    <p>{{ res.id }}</p>
  </div>
</template>
