<template>
  <div></div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { ToastAction } from '@ui/toast'
import { watchImmediate } from '@vueuse/core'
import { useToast } from '@ui/toast/use-toast'
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { toast } = useToast()
const { needRefresh, updateServiceWorker } = useRegisterSW();

watchImmediate(needRefresh, (needRefreshValue) => {
  if (needRefreshValue) {
    toast({
    title: 'There is a new version of the app',
    description: 'click on reload button to update.',
    duration: 5000,
    action: h(ToastAction, {
      altText: 'Reload',
      onClick: () => updateServiceWorker(true)
    }, {
      default: () => 'Reload',
    }),
  });
  }
})
</script>



<style scoped>

</style>