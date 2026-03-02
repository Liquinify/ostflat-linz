import { markRaw, onMounted, onUnmounted, ref, shallowRef } from "vue";
import { Map, config, data } from "@maptiler/sdk";

export const useMap = () => {
  const mapContainer = shallowRef<any | HTMLElement>();
  const map = shallowRef<any>(null);
  const apartmentsData = ref<any>(null);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  onMounted(async () => {
    try {
      const centerPosition = { lng: 14.294, lat: 48.302, zoom: 12 };
      config.apiKey = import.meta.env.VITE_MAP_TOKEN;

      const geojsonData = await data.get(import.meta.env.VITE_MAP_DATASET);
      apartmentsData.value = geojsonData;

      const maptilerMap = markRaw(
        new Map({
          container: mapContainer.value,
          style: import.meta.env.VITE_MAP_STYLE,
          center: [centerPosition.lng, centerPosition.lat],
          zoom: centerPosition.zoom,
        }),
      );

      map.value = maptilerMap;

      map.value.on("load", () => {
        if (apartmentsData.value) {
          map.value.addSource("active-buildings", {
            type: "geojson",
            data: apartmentsData.value,
          });

          map.value.addLayer({
            id: "active-buildings",
            type: "fill",
            source: "active-buildings",
            paint: {
              "fill-color": "#6B7C93",
              "fill-opacity": 0.8,
              "fill-outline-color": "#000",
            },
          });
        }
      });
      isLoading.value = false;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : "Failed to load apartments data";
      isLoading.value = false;
    }
  });


  onUnmounted(() => {
    map.value?.remove();
  });

  return { mapContainer, map, apartmentsData, isLoading, error };
};
