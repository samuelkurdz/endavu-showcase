<template>
  <header>
    <h1 className="text-3xl font-bold underline">
      Welcome to Endavu!
    </h1>
  </header>
  <RefreshServiceWorker />

</template>

<script setup lang="ts">
  import RefreshServiceWorker from '@/components/RefreshServiceWorker.vue'
</script>