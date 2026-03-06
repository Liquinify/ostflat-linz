import { markRaw, onMounted, onUnmounted, shallowRef } from "vue";
import { useMapStore } from "../stores/mapStore";
import { Map, config } from "@maptiler/sdk";


export const useMap = () => {
  const mapStore = useMapStore();
  const mapContainer = shallowRef<any>(null);
  const map = shallowRef<any>(null);

  
  onMounted(() => {
    try {
      mapStore.isLoading = false;
      const centerPosition = { lng: 14.294, lat: 48.302, zoom: 12 };
      config.apiKey = import.meta.env.VITE_MAP_TOKEN;

      const maptilerMap = markRaw(
          new Map({
            container: mapContainer.value,
            style: import.meta.env.VITE_MAP_STYLE,
            center: [centerPosition.lng, centerPosition.lat],
            zoom: centerPosition.zoom,
          }),
      );

      map.value = maptilerMap;

      map.value.on("ready", async () => {
        await mapStore.fetchApartmentsData();
        
        map.value.addSource("active-buildings", {
          type: "geojson",
          data: mapStore.apartmentsData,
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
        mapStore.isLoading = false;
        map.value.on('mouseenter', 'active-buildings', () => {
          map.value.getCanvas().style.cursor = 'pointer';
        });
      
        map.value.on('mouseleave', 'active-buildings', () => {
          map.value.getCanvas().style.cursor = '';
        });
      
        map.value.on('click', 'active-buildings', (e: any) => {
          const apartment = e.features[0].properties;
          mapStore.setSelectedApartment(apartment);
          console.log(apartment)
        });
      });
    } catch (err) {
      mapStore.error = err instanceof Error ? err.message : "Failed to load apartments data";
      mapStore.isLoading = false;
    }
  });
  onUnmounted(() => {
    map.value.remove();
  });
  
  return { mapContainer };
};
