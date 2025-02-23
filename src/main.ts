import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import PrimeVueTheme from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";
import "primeicons/primeicons.css";
import CountryFlag from "vue-country-flag-next";

const app = createApp(App);

const slavicmedia = definePreset(PrimeVueTheme, {
  semantic: {
    primary: {
      50: "{indigo.50}",
      100: "{indigo.100}",
      200: "{indigo.200}",
      300: "{indigo.300}",
      400: "{indigo.400}",
      500: "{indigo.500}",
      600: "{indigo.600}",
      700: "{indigo.700}",
      800: "{indigo.800}",
      900: "{indigo.900}",
      950: "{indigo.950}",
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: slavicmedia,
  },
});

app.component("CountryFlag", CountryFlag);

app.use(PrimeVue);
createApp(App).mount("#app");
