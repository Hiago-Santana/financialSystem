import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", () => {
    const showPage = ref(null);
    
    async function init() {
        showPage.value = 'dashboard';        
  }

  return { showPage, init };
});
