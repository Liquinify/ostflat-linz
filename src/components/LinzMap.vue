<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { Map, MapStyle, config } from '@maptiler/sdk';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
  config.apiKey = import.meta.env.VITE_MAP_TOKEN;

  const initialState = { lng: 14.294, lat: 48.302, zoom: 12 };

  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: "base-v4",
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }));

}),
onUnmounted(() => {
  map.value?.remove();
})
</script>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: 100vh /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>