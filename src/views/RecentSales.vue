<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@ui/avatar'
</script>

<template>
  <div class="space-y-8">
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="https://tailus.io/sources/blocks/social/preview/images/google.svg" alt="google" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Alphabet
        </p>
        <p class="text-sm text-muted-foreground">
          Parent company for Google LLC.
        </p>
      </div>
      <div class="ml-auto font-medium">
        +$1,999.00
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="flex h-9 w-9 items-center justify-center space-y-0 border">
        <AvatarImage src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="Twitter" />
        <AvatarFallback>JL</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Twitter
        </p>
        <p class="text-sm text-muted-foreground">
          Social media
        </p>
      </div>
      <div class="ml-auto font-medium">
        +$39.00
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="https://cdn-icons-png.flaticon.com/128/10096/10096381.png" alt="Amazon" />
        <AvatarFallback>IN</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Amazon
        </p>
        <p class="text-sm text-muted-foreground">
          Ecommerce, Data etc
        </p>
      </div>
      <div class="ml-auto font-medium">
        +$299.00
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="https://cdn-icons-png.flaticon.com/128/732/732230.png" alt="Nvidia" />
        <AvatarFallback>WK</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Nvidia
        </p>
        <p class="text-sm text-muted-foreground">
          Computer processors and chips
        </p>
      </div>
      <div class="ml-auto font-medium">
        +$99.00
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="https://cdn-icons-png.flaticon.com/128/6033/6033716.png" alt="Meta" />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Meta
        </p>
        <p class="text-sm text-muted-foreground">
          Facebook, Instagram, WhatsApp...
        </p>
      </div>
      <div class="ml-auto font-medium">
        +$39.00
      </div>
    </div>
  </div>
</template>
