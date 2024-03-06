<template>
  <div class="max-w-5xl mx-auto py-5 px-4">
    <h1 class="text-3xl font-bold mb-5">
      Extra views
    </h1>

    <div class="w-full flex gap-4 flex-col md:flex-row">
<!--      <Card class="w-full">-->
<!--        <CardHeader>-->
<!--          <CardTitle>Team</CardTitle>-->
<!--          <CardDescription>-->
<!--            Meet our team members-->
<!--          </CardDescription>-->
<!--        </CardHeader>-->
<!--        <CardContent>-->
<!--          <TeamList />-->
<!--        </CardContent>-->
<!--      </Card>-->
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Recent stocks</CardTitle>
          <CardDescription>
            Invest in stocks from companies worldwide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentSales />
        </CardContent>
      </Card>
    </div>

  </div>
</template>

<script setup lang="ts">

import RecentSales from '@views/RecentSales.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui/card'
import TeamList from '@views/TeamList.vue'
</script>


<style scoped>

</style>