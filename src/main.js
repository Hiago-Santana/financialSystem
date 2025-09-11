import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { useAppStore } from "./globalStore/Store";
import money from 'v-money3';

async function bootstrap() {
  const app = createApp(App);
  const pinia = createPinia();

  app.use(pinia);
  app.use(router);

  // Aguarda login automático ou qualquer inicialização assíncrona
  const store = useAppStore();
  await store.init();

  app.use(money, {
    precision: 2, // casas decimais
    prefix: "R$ ", // prefixo
    decimal: ",", // separador decimal
    thousands: ".", // separador de milhar
  });

  app.mount("#app");
}

bootstrap();
