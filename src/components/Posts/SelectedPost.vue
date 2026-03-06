<template>
  <div class="flex flex-row justify-between items-center gap-4 mt-2! hover:cursor-pointer">
    <div class="w-75 h-77 shrink-0">
      <Carousel :value="images" :numVisible="1" :numScroll="1" :circular="true">
      <template #item="{ data: image }">
        <img
          :src="image"
          alt="Image"
          class="h-74 w-72 object-cover rounded-lg"
        />
      </template>
    </Carousel>
    </div>
    <section class="">
      <h1 class="text-xl font-bold text-gray-900">
        {{ props.apartment.PRICE_FOR_DISPLAY }}
      </h1>
      <h2 class="text-xl font-bold text-gray-900">
        {{ props.apartment.NAME }}
      </h2>
      <div>
        <h3 class="text-lg font-semibold text-gray-900">
          {{ props.apartment.ADDRESS }}
        </h3>
        <p class="text-sm text-gray-500">
          {{ props.apartment.POSTCODE }}, {{ props.apartment.LOCATION }}
        </p>
        <p class="text-sm text-gray-600 mt-2! line-clamp-2">
          {{ props.apartment.BODY_DYN }}
        </p>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col justify-between mt-2! gap-3">
          <div class="">
            <div>
              <p class="text-sm font-semibold text-gray-900">
                {{ props.apartment.NUMBER_OF_ROOMS }} Zimmer
              </p>
            </div>
          </div>
          <div class="text-left">
            <div>
              <p class="text-sm font-semibold text-gray-900">
                {{ props.apartment.ESTATE_SIZE }} m²
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div>
              <p class="text-sm font-semibold text-gray-900"></p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-end pt-2 gap-3">
          <div class="">
            <div>
              <p class="text-sm font-semibold text-gray-900">Brick</p>
            </div>
          </div>
          <div class="">
            <div>
              <p class="text-sm font-semibold text-gray-900">With furniture</p>
            </div>
          </div>
          <div class="flex items-center">
            <p class="text-sm font-semibold text-gray-900"></p>
          </div>
        </div>
      </div>
      <Button
        label="Weitere Details"
        class="p-3! bg-black text-white rounded mt-3!"
        severity="secondary"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Carousel, Button } from 'primevue';
import type { ApartmentAttributes } from '../../types/ApartmentAttributes';

const props = defineProps<{
  apartment: ApartmentAttributes;
}>();

const images = computed(() =>
  props.apartment.advert_image_list.split(',')
);
</script>
<style scoped>

:deep(.p-carousel) {
  position: relative;
  height: 100%;
}

:deep(.p-carousel-content) {
  height: 100%;
}

:deep(.p-carousel-items-container) {
  height: 100%;
}

:deep(.p-carousel-item) {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.p-carousel-prev-button) {
  display: none;
  background: black 50% !important;
  opacity: 80% !important;
  position: absolute;
  left: 5% !important;
  z-index: 1111;
  border-radius: 12px;
}

:deep(.p-carousel-next-button) {
  display: none;
  background: black !important;
  opacity: 80% !important;
  position: absolute;
  right: 5% !important;
  z-index: 1111;
  border-radius: 12px;
}

:deep(.p-carousel):hover {
  :deep(.p-carousel-prev-button) {
    display: flex;
  }
  :deep(.p-carousel-next-button) {
    display: flex;
  }
}

:deep(.p-icon) {
  color: white !important;
}

:deep(.p-carousel-indicator-list) {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 10%;
}

:deep(.p-carousel-indicator-button) {
  width: 0.4rem;
  height: 0.4rem;
  opacity: 100%;
  background: gray !important;
  border-radius: 50% !important;
}

:deep(.p-carousel-indicator-active) {
  button {
    width: 0.5rem;
    height: 0.5rem;
    background-color: white !important;
  }
}
</style>