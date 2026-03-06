<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import RentPost from "../Posts/RentPost.vue";
import SelectedPost from "../Posts/SelectedPost.vue";
import { useMapStore } from "../../stores/mapStore";
import { computed } from "vue";

const mapStore = useMapStore();
const selectedApartments = computed(() => mapStore.selectedApartment ? [mapStore.selectedApartment] : []);
</script>

<template>
  <div class="flex flex-col overflow-scroll h-screen px-5! w-full">
    <div class="flex justify-between items-center gap-5! mt-5!">
      <InputText
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
      <!-- <p class="text-sm pt-3!">{{mapStore.apartmentsData?.features.length}} Anzeigen für 13.881 Objekte</p> -->
    </div>
    <div class="flex-1">
      <div class="p-4">
        <div class="flex flex-col gap-3">
          <RentPost v-if="!selectedApartments.length" v-for="apartment in mapStore.apartmentsData?.features" :key="apartment.properties.id" :apartment="apartment.properties"/>
          <SelectedPost v-if="selectedApartments" v-for="selectedApartment in selectedApartments" :key="selectedApartment.id" :apartment="selectedApartment" />
        </div>
      </div>
    </div>
  </div>
</template>
