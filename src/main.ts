import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
<<<<<<< HEAD
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(pinia)
=======

createApp(App)
>>>>>>> d3a27523424809522c366ca52ca3d62085424778
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: "p",
        darkModeSelector: false,
        cssLayer: {
          name: "primevue",
          order: "primevue",
        },
      },
    },
  })
  .mount("#app");
