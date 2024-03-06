<template>
  <div class="flex flex-col space-y-2 text-center">
    <h1 class="text-2xl font-semibold tracking-tight">
      Request Invite
    </h1>
    <p class="text-sm text-muted-foreground">
      Enter your email below to send an invite request.
    </p>
  </div>
  <div class="grid gap-6">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
            required
          />
        </div>
        <Button :disabled="isLoading">
          <svg viewBox="0 0 24 24" height="1.2em" class="mr-2 h-4 w-4 animate-spin" v-if="isLoading">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56">
            </path>
          </svg>
          Send request
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <Button variant="outline" type="button" :disabled="isLoading">
      <svg viewBox="0 0 24 24" height="1.2em" class="mr-2 h-4 w-4 animate-spin" v-if="isLoading">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56">
        </path>
      </svg>
      <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" v-else class="mr-2 h-4 w-4" alt="google">
      Google
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { Label } from '@ui/label'

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>