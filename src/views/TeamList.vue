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
        <AvatarImage src="https://thehub-io.imgix.net/files/s3/20231025112944-30f0bb770b7cfa25cc5d8c2b3e7b6627.jpg?fit=crop&w=300&h=300&auto=format&q=60" alt="Avatar" />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Martin Roland Knudsen
        </p>
        <p class="text-sm text-muted-foreground">
          CEO
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="flex h-9 w-9 items-center justify-center space-y-0 border">
        <AvatarImage src="https://thehub-io.imgix.net/files/s3/20231025113036-6b170f6475c6da1f06a442f6225349f7.jpg?fit=crop&w=300&h=300&auto=format&q=60" alt="Avatar" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Casper Sylvest Helledi
        </p>
        <p class="text-sm text-muted-foreground">
          FOUNDER, COO
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="https://thehub-io.imgix.net/files/s3/20231025113026-fd5f3028f74314e6da931aae98659a39.jpg?fit=crop&w=300&h=300&auto=format&q=60" alt="Avatar" />
        <AvatarFallback>JB</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Jesper Borgstrup
        </p>
        <p class="text-sm text-muted-foreground">
          FOUNDER, CTO
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="https://thehub-io.imgix.net/files/s3/20231025112954-2ec9e2a1adde2e9d29fa221e7418349f.jpg?fit=crop&w=300&h=300&auto=format&q=60" alt="Avatar" />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Sebastian Risom
        </p>
        <p class="text-sm text-muted-foreground">
          Design Lead
        </p>
      </div>
    </div>
    <div class="flex items-center">
      <Avatar class="h-9 w-9">
        <AvatarImage src="https://thehub-io.imgix.net/files/s3/20231025112504-8f7e1b1f4cd52337ab57d04f5da2226d.jpg?fit=crop&w=300&h=300&auto=format&q=60" alt="Avatar" />
        <AvatarFallback>CM</AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          Carla Simony McNair
        </p>
        <p class="text-sm text-muted-foreground">
          BUSINESS ANALYST
        </p>
      </div>
    </div>
  </div>
</template>
