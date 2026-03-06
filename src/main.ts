import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(pinia)
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
