<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import RentPost from "../Posts/RentPost.vue";
import { config, data } from "@maptiler/sdk";


const searchQuery = ref("");
const fetchedApartments = ref([]);

config.apiKey = import.meta.env.VITE_MAP_TOKEN;
const geojsonData = await data.get(import.meta.env.VITE_MAP_DATASET);
fetchedApartments.value = geojsonData;
console.log(fetchedApartments.value)
</script>

<template>
  <div class="flex flex-col overflow-scroll h-screen px-5! w-full">
    <div class="flex justify-between items-center gap-5! mt-5!">
      <InputText
        v-model="searchQuery"
        placeholder="Suche"
        class="rounded-full! border-gray-200! py-2.5! px-4!"
        variant="filled"
      />
      <Button
        label="Filter"
        outlined
        severity="secondary"
        class="rounded-full! py-2.5! px-6! border-gray-200! text-gray-700!"
      />
    </div>
    <div>
      <h2 class="font-bold text-gray-900 pt-7! text-2xl">
        Wohnungsverkauf in Linz (Sekundärmarkt)
      </h2>
      <p class="text-sm pt-3!">28.695 Anzeigen für 13.881 Objekte</p>
    </div>

    <!-- Sort + Subscribe -->
    <!-- <div class="flex items-center gap-2 px-4 pb-3 border-b border-gray-100">
    </div> -->
    <div class="flex-1">
      <div class="p-4">
        <div class="flex flex-col gap-3">
          <RentPost v-for="apartment in fetchedApartments?.features" :key="apartment.properties.id" :apartment="apartment.properties"/>
        </div>
      </div>
    </div>
  </div>
</template>
