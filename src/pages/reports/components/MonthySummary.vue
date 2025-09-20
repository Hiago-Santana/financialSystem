<template>
    <div class="border border-gray-200 rounded-md p-4 dark:border-gray-800">
        <h2 class="text-lg font-semibold mb-4">Resumo Mensal</h2>
        <div>
            <div class="flex justify-between">
                <div class="text-sm text-gray-700 font-medium dark:text-gray-200">Total de Receitas</div>
                <div class="text-green-700 font-semibold">R$ {{ formatMoney(totalRevenue) }}</div>
            </div>
            <div class="flex justify-between">
                <div class="text-sm text-gray-700 font-medium dark:text-gray-200">Total de Despesas</div>
                <div class="text-red-500 font-semibold">R$ {{ formatMoney(totalExpense) }}</div>
            </div>
        </div>
        <hr class="text-gray-300 my-4 dark:border-gray-800">
        <div class="flex justify-between font-semibold ">
            <div class="">Saldo Liquido</div>
            <div :class="netBalance < 0 ? 'text-red-500' : 'text-green-700'">R$ {{ formatMoney(netBalance) }}</div>
        </div>

    </div>
</template>
<script setup>
import { computed, toRef, ref } from 'vue';
import { formatMoney } from '../../../utils/formatters';

const props = defineProps({
    transactions: {
        type: Array,
        required: true,
        default: []
    }
})

const transactionsProps = toRef(props, 'transactions');
const totalExpense = computed(() => {
    const expense = transactionsProps.value.filter(e => e.type === 'expense');
    return expense.reduce((sum, item) => sum + item.value, 0);
});
const totalRevenue = computed(() => {
    const revenue = transactionsProps.value.filter(e => e.type === 'revenue');
    return revenue.reduce((sum, item) => sum + item.value, 0);
})
const netBalance = computed(() => totalRevenue.value + totalExpense.value);
</script>