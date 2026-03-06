import { defineStore } from 'pinia';
import { ref } from 'vue';
import { data } from "@maptiler/sdk";

export const useMapStore = defineStore('map', () => {
  const selectedApartment = ref<any>(null);
  const apartmentsData = ref<any>(null);
  const isLoading = ref(true);
  const error = ref<string | null>(null);


  function setSelectedApartment(apartment: any) {
    selectedApartment.value = apartment;
  }

  async function fetchApartmentsData() {
    const geojsonData = await data.get(import.meta.env.VITE_MAP_DATASET);
    apartmentsData.value = geojsonData;
  }

  return { apartmentsData, isLoading, error, selectedApartment, setSelectedApartment, fetchApartmentsData };
});
