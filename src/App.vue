<script setup lang="ts">
import { Suspense } from "vue";
import LinzMap from "./components/Maps/LinzMap.vue";
import MapSidebar from "./components/Sidebar/MapSidebar.vue";
</script>

<template>
  <!-- <Header /> -->
  <main class="flex h-screen">
    <Suspense>
      <template #default>
        <MapSidebar />
      </template>
      <template #fallback>
        <div class="flex items-center justify-center h-full w-full">
          <p class="text-gray-500 text-lg">Loading...</p>
        </div>
      </template>
    </Suspense>
    <LinzMap />
  </main>
</template>

<style scoped></style>
