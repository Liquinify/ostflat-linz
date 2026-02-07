<script setup lang="ts">
import { ref } from 'vue';
import Select from 'primevue/select';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Tag from 'primevue/tag';

const propertyType = ref(null);
const searchQuery = ref('');

const propertyTypes = ref([
  { label: 'Wohnungsverkauf', value: 'sale' },
  { label: 'Wohnungsmiete', value: 'rent' },
  { label: 'Häuser', value: 'houses' },
]);
</script>

<template>
  <div class="w-screen h-screen bg-white flex flex-col overflow-hidden shadow-lg border-r border-gray-200">

    <!-- Top bar: dropdown + currency toggle -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100">
      <Select
        v-model="propertyType"
        :options="propertyTypes"
        optionLabel="label"
        placeholder="Wohnungsverkauf"
        class="w-48 text-sm"
      />
    </div>

    <!-- Search + Filter -->
    <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
      <IconField class="flex-1">
        <InputIcon class="pi pi-search" />
        <InputText v-model="searchQuery" placeholder="Suche" class="w-full" />
      </IconField>
      <Button severity="secondary" outlined class="!gap-2 shrink-0">
        <i class="pi pi-sliders-h"></i>
        <span>Filter</span>
      </Button>
    </div>

    <!-- Title section -->
    <div class="px-4 pt-4 pb-2">
      <h2 class="text-xl font-bold text-gray-900 leading-tight">
        Wohnungsverkauf in Linz (Sekundärmarkt)
      </h2>
      <p class="text-sm text-gray-400 mt-1">
        28.695 Anzeigen für 13.881 Objekte
      </p>
    </div>

    <!-- Sort + Subscribe -->
    <div class="flex items-center gap-2 px-4 pb-3 border-b border-gray-100">
      <Button severity="secondary" outlined size="small" class="!gap-1.5">
        <span>Nach Bewertung</span>
        <i class="pi pi-sort-alt"></i>
      </Button>
      <Button severity="secondary" outlined size="small" class="!gap-1.5">
        <span>Abonnieren</span>
        <i class="pi pi-bell"></i>
      </Button>
    </div>

    <!-- Scrollable listings -->
    <div class="flex-1 overflow-y-auto">

      <!-- Property card -->
      <div class="border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
        <div class="flex gap-3">
          <!-- Image -->
          <div class="relative w-[160px] h-[180px] shrink-0 rounded-lg overflow-hidden bg-gray-200">
            <img
              src="https://placehold.co/320x360/1a1a2e/ffffff?text=Wohnung"
              alt="Wohnung"
              class="w-full h-full object-cover"
            />
            <button class="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
              <i class="pi pi-heart text-gray-500 text-sm"></i>
            </button>
          </div>

          <!-- Details -->
          <div class="flex-1 flex flex-col min-w-0">
            <!-- Price -->
            <div class="flex items-baseline justify-between">
              <span class="text-lg font-bold text-gray-900">€ 650.000</span>
              <div class="flex items-center gap-1">
                <span class="text-xs text-gray-400">€ 6.915 pro…</span>
                <i class="pi pi-ellipsis-v text-gray-300 text-xs"></i>
              </div>
            </div>

            <!-- Address -->
            <p class="text-sm font-medium text-gray-800 mt-1">
              Johann-Paul-II-Straße 12
            </p>
            <p class="text-xs text-gray-400 mt-0.5">
              WA Taryan Towers, Innere Stadt, Linz
            </p>

            <!-- Description -->
            <p class="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
              TARYAN TOWERS | Designer-Wohnung mit Aussicht für anspruchsvolle Kunden…
            </p>

            <!-- Property attributes -->
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-auto pt-2 text-xs text-gray-600">
              <span class="flex items-center gap-1">
                <i class="pi pi-th-large text-gray-400"></i>
                2 Zimmer
              </span>
              <span class="flex items-center gap-1">
                <i class="pi pi-wrench text-gray-400"></i>
                mit Renov…
              </span>
              <Tag value="AI" severity="info" rounded class="!text-[10px] !px-1.5 !py-0" />
            </div>

            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-600">
              <span class="flex items-center gap-1">
                <i class="pi pi-expand text-gray-400"></i>
                94 / 70 / 20 m²
              </span>
            </div>

            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-600">
              <span class="flex items-center gap-1">
                <i class="pi pi-building text-gray-400"></i>
                Stockwerk 8 von 33
              </span>
              <span class="flex items-center gap-1">
                <i class="pi pi-calendar text-gray-400"></i>
                2020
              </span>
            </div>

            <!-- Timestamps -->
            <div class="flex items-center gap-3 mt-2 text-[11px] text-gray-300">
              <span class="flex items-center gap-1">
                <i class="pi pi-refresh"></i>
                heute um 08:…
              </span>
              <span class="flex items-center gap-1">
                <i class="pi pi-clock"></i>
                erstellt am 11.…
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Second card (duplicate for scrollable feel) -->
      <div class="border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
        <div class="flex gap-3">
          <div class="relative w-[160px] h-[180px] shrink-0 rounded-lg overflow-hidden bg-gray-200">
            <img
              src="https://placehold.co/320x360/2d2d44/ffffff?text=Wohnung"
              alt="Wohnung"
              class="w-full h-full object-cover"
            />
            <button class="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition">
              <i class="pi pi-heart text-gray-500 text-sm"></i>
            </button>
          </div>
          <div class="flex-1 flex flex-col min-w-0">
            <div class="flex items-baseline justify-between">
              <span class="text-lg font-bold text-gray-900">€ 420.000</span>
              <div class="flex items-center gap-1">
                <span class="text-xs text-gray-400">€ 5.250 pro…</span>
                <i class="pi pi-ellipsis-v text-gray-300 text-xs"></i>
              </div>
            </div>
            <p class="text-sm font-medium text-gray-800 mt-1">
              Hauptstraße 45
            </p>
            <p class="text-xs text-gray-400 mt-0.5">
              WA Donaupark, Urfahr, Linz
            </p>
            <p class="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
              Moderne Wohnung mit Donau-Blick, hochwertige Ausstattung…
            </p>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-auto pt-2 text-xs text-gray-600">
              <span class="flex items-center gap-1">
                <i class="pi pi-th-large text-gray-400"></i>
                3 Zimmer
              </span>
              <span class="flex items-center gap-1">
                <i class="pi pi-wrench text-gray-400"></i>
                mit Renov…
              </span>
            </div>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-600">
              <span class="flex items-center gap-1">
                <i class="pi pi-expand text-gray-400"></i>
                80 / 58 / 15 m²
              </span>
            </div>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-600">
              <span class="flex items-center gap-1">
                <i class="pi pi-building text-gray-400"></i>
                Stockwerk 5 von 12
              </span>
              <span class="flex items-center gap-1">
                <i class="pi pi-calendar text-gray-400"></i>
                2018
              </span>
            </div>
            <div class="flex items-center gap-3 mt-2 text-[11px] text-gray-300">
              <span class="flex items-center gap-1">
                <i class="pi pi-refresh"></i>
                heute um 10:…
              </span>
              <span class="flex items-center gap-1">
                <i class="pi pi-clock"></i>
                erstellt am 05.…
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
