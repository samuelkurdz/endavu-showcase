<template>
  <div v-if="needRefresh" style="border: 1px solid red">
    <div class="message">
      New content is available, click on reload button to update.
    </div>

    <button @click="updateServiceWorker(true)">Reload</button>
    <button @click="needRefresh = false">Close</button>

  </div>
</template>

<script setup lang="ts">
  import { useRegisterSW } from 'virtual:pwa-register/vue'
  const { needRefresh, updateServiceWorker } = useRegisterSW();
</script>



<style scoped>

</style>