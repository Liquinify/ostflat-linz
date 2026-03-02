<template>
  <div class="relative w-full h-full">
    <div class="absolute w-full h-full" ref="mapContainer"></div>
  </div>
</template>

<script setup lang="ts">
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { useMap } from "../../composables/useMap";    

const { mapContainer } = useMap();


// const handleApartmentPolygons = async (coordinates:number[][]) => {
//     const coordinateLists = [];
//     const DELAY_MS = 4000;

//     for (const [ltd, lng] of coordinates) {
//       await new Promise(resolve => setTimeout(resolve, DELAY_MS));

//       const query = `[out:json];
//       (
//         way(around:7,${lng},${ltd})["building"];
//       );
//       out geom;`;

//       try {
//         const result = await axios.post('https://overpass-api.de/api/interpreter', `data=${encodeURIComponent(query)}`, {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           }
//         });
//         coordinateLists.push({
//           coordinates: result.data.elements.geometry,
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     return coordinateLists;
// }
</script>
