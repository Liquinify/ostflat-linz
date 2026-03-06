<script setup lang="ts">
<<<<<<< HEAD
=======
import { Suspense } from "vue";
>>>>>>> d3a27523424809522c366ca52ca3d62085424778
import LinzMap from "./components/Maps/LinzMap.vue";
import MapSidebar from "./components/Sidebar/MapSidebar.vue";
</script>

<template>
  <!-- <Header /> -->
  <main class="flex h-screen">
<<<<<<< HEAD
    <MapSidebar />
=======
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
>>>>>>> d3a27523424809522c366ca52ca3d62085424778
    <LinzMap />
  </main>
</template>

<style scoped></style>
