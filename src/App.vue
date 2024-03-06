<template>
  <Toaster />
  <RouterView />
  <RefreshServiceWorker />

</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import Toaster from '@ui/toast/Toaster.vue'
import RefreshServiceWorker from '@/components/RefreshServiceWorker.vue'
</script>