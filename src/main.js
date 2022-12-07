import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

import router from "./router";

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(vuetify).mount("#app");
