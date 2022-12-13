import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import db from './plugins/firebase'

loadFonts();

import router from "./router";

const pinia = createPinia();
window.db = db;

createApp(App).use(pinia).use(router).use(vuetify).mount("#app");
