<script setup lang="ts">
const res = await $fetch('/api/test')
if (!res) {
  throw new Error('error!')
}
console.log('IDは、' + res.id + 'です！')
</script>

<template>
  <div>
    <h1>Test</h1>
    <p>{{ res }}</p>
  </div>
</template>
