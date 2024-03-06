<template>
  <div class="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <img class="mr-2 size-6 rounded absolute left-5 top-5 lg:hidden" src="/apple-touch-icon.png" alt="logo"/>
    <Button
      variant="ghost"
      class="absolute right-4 top-4 md:right-8 md:top-8"
    >
      Login
    </Button>
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-foreground" />
      <div class="z-20 flex items-center text-lg font-medium">
        <img class="mr-2 size-6 rounded" src="/apple-touch-icon.png" alt="logo"/>
        Endavu
      </div>
      <div class="z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            &ldquo;This app has saved me countless hours of searching for where to invest.
            My money is now at work for me faster&rdquo;
          </p>
          <footer class="text-sm">
            - James Bond
          </footer>
        </blockquote>
      </div>
    </div>

    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <RouterView />
        <p class="px-8 text-center text-sm text-muted-foreground">
          By clicking the send button, you agree to our
          <span class="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </span>
          and
          <span class="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Button} from "@ui/button"
</script>
