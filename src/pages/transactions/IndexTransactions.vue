<template>
    <div class="w-full">
        <div class="flex">
            <h1>Transações</h1>
        </div>
        <table class="border border-gray-300 rounded-md overflow-hidden border-separate border-spacing-0 w-full">
            <tr class="bg-gray-200 text-gray-800">
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Data</th>
                <th>Valor</th>
            </tr>
            <tr v-for="transactions in transaction" :key="transactions.id" class="text-center text-gray-600">
                <td class="capitalize">{{ transactions.description }}</td>
                <td>{{ translateCategory(transactions.category) }}</td>
                <td>{{ formatDate(transactions.date) }}</td>
                <td :class="transactions.type === 'expense' ? 'text-red-500' : 'text-green-700' ">R$ {{ formatMoney(transactions.value) }}</td>
            </tr>
        </table>
    </div>


</template>
<script setup>
import { ref, onMounted } from 'vue';
import { openDb, listTransactions } from '../../composables/useIndexedDB';
import { formatDate, formatMoney } from '../../utils/formatters';
import { translateCategory } from '../../utils/translation';

const database = ref();
const transaction = ref();

onMounted(async () => {
    database.value = await openDb();
    transaction.value = await listTransactions(database.value);
})

</script>