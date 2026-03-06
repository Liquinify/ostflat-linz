<script setup lang="ts">
import LinzMap from "./components/Maps/LinzMap.vue";
import MapSidebar from "./components/Sidebar/MapSidebar.vue";
</script>

<template>
  <!-- <Header /> -->
  <main class="flex h-screen">
    <MapSidebar />
    <LinzMap />
  </main>
</template>

<style scoped></style>
