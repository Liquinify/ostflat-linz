<script setup lang="ts">
import { Button, Select } from "primevue";
import { ref } from "vue";

const selectedApartmentType = ref();
const apartmentType = ref([
  { name: "Wohnung mieten", code: "WHM" },
  { name: "Haus mieten", code: "HSM" },
  { name: "WG-Zimmer", code: "WGZ" },
]);

const selectedCity = ref();
const cities = ref([
  { name: "Linz", code: "LNZ" },
  { name: "Wien", code: "WIE" },
]);
</script>

<template>
  <header
    class="bg-[url('./assets/images/hero-vienna.jpg')] bg-cover min-h-120 flex"
  >
    <LandingNavigations />
    <div class="flex justify-center items-center flex-col gap-10 flex-1">
      <h1 class="text-white font-bold text-left text-5xl">
        Finde dein Zuhause in Österreich <br />
        ein OstFlat(placeholder name)
      </h1>
      <form
        class="min-h-17.5 px-5! py-3! rounded-xl flex md:flex-row flex-col justify-center items-center gap-2 bg-white"
        @submit.prevent=""
      >
        <Select
          v-model="selectedApartmentType"
          :options="apartmentType"
          :defaultValue="apartmentType[0]"
          optionLabel="name"
          variant="filled"
          placeholder="Select a City"
          class="w-full md:w-60 border-none!"
        />
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          editable
          class="w-97.5 border-none!"
          variant="filled"
          placeholder="City here"
        />
        <Button class="rounded-xl primary-[50]" type="submit" label="Search" />
      </form>
    </div>
  </header>
</template>
