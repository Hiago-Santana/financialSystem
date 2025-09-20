<template>
    <div class="w-full">
        <div class="flex justify-between my-4 gap-2">
            <h1>Transações</h1>
            <div class="flex gap-2"><category-filter @onChange="changeFilterCategory"></category-filter>
                <type-filter @onChange="changeFilterType"></type-filter>
            </div>
        </div>
        <table class="border border-gray-300 rounded-md overflow-hidden border-separate border-spacing-0 devide-y w-full dark:border-gray-800">
            <tr class="bg-gray-200 text-gray-800 dark:bg-fourth dark:text-gray-200">
                <th class="py-1">Descrição</th>
                <th>Categoria</th>
                <th>Data</th>
                <th>Valor</th>
            </tr>
            <tr v-for="filtereds in filtered" :key="filtereds.id" class="text-center text-gray-600 dark:text-gray-300">
                <td class="capitalize py-2">{{ filtereds.description }}</td>
                <td>{{ translateCategory(filtereds.category) }}</td>
                <td>{{ formatDate(filtereds.date) }}</td>
                <td :class="filtereds.type === 'expense' ? 'text-red-500 font-semibold' : 'text-green-700 font-semibold'">R$ {{
                    formatMoney(filtereds.value) }}</td>
            </tr>
        </table>
    </div>


</template>
<script setup>
import { ref, onMounted } from 'vue';
import { openDb, listTransactions } from '../../composables/useIndexedDB';
import { formatDate, formatMoney } from '../../utils/formatters';
import { translateCategory } from '../../utils/translation';
import CategoryFilter from './components/CategoryFilter.vue';
import TypeFilter from './components/TypeFilter.vue';

const database = ref();
const transaction = ref([]);
const filtered = ref([]);
const categoryFilter = ref('all');
const typeFilter = ref('all');


onMounted(async () => {
    database.value = await openDb();
    transaction.value = await listTransactions(database.value);
    filter();
})

const changeFilterCategory = (category) => {
    console.log("category", category)
    if (!category) {
        categoryFilter.value = 'all'
    } else {
        categoryFilter.value = category
    };
    filter();
}

const changeFilterType = (type) => {
    if (!type) {
        typeFilter.value = 'all'
    } else {
        typeFilter.value = type
    };
    filter();
}

const filter = () => {
    switch (true) {
        case categoryFilter.value === 'all' && typeFilter.value === 'all':
            filtered.value = transaction.value;
            break;
        case categoryFilter.value !== 'all' && typeFilter.value === 'all':
            filtered.value = transaction.value.filter((item) => item.category === categoryFilter.value)
            break;
        case categoryFilter.value === 'all' && typeFilter.value !== 'all':
            filtered.value = transaction.value.filter((item) => item.type === typeFilter.value)
            break;
        case categoryFilter.value !== 'all' && typeFilter.value !== 'all':
            filtered.value = transaction.value.filter((item) => item.category === categoryFilter.value && item.type === typeFilter.value);
            break;
        default:
            filtered.value = transaction.value;
    }
}

</script>