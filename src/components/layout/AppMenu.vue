<template>
    <div class="flex flex-col items-center  p-4 mr-4 border-r h-full border-gray-200 bg-gray-100 dark:bg-fourth dark:border-gray-600">
        <div @click="goRouter('home')" :class="pageActived === 'home' ? setActiveButton : setDesactiveButton">Dashboard</div>
        <div @click="goRouter('transactions')" :class="pageActived === 'transactions' ? setActiveButton : setDesactiveButton">Transações</div>
        <div @click="goRouter('reports')" :class="pageActived === 'reports' ? setActiveButton : setDesactiveButton">Relatórios</div>
        
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useAppStore } from '../../globalStore/Store';
import { useRouter, useRoute } from 'vue-router';
import { goTo } from '../../router/navigationUtils';

const store = useAppStore();
const router = useRouter();
const route = useRoute();

const pageActived = computed(() => route.name)
const setActiveButton = ref('text-white bg-third rounded-md p-2 w-full font-semibold dark:bg-first transition-all duration-200 cursor-pointer');
const setDesactiveButton = ref('bg-transparent rounded-md p-2 w-full font-semibold transition-all duration-200 cursor-pointer');

const goRouter = (page) => {
    if (!router) return;
    goTo(router, page)
} 

</script>