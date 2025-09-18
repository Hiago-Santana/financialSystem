<template>
    <div class="flex gap-4">
        <div class="flex border border-gray-300 rounded-md w-full">
            <div class="flex justify-between w-full p-2">
                <span class="flex flex-col">
                    <span class="text-gray-600">Saldo Total</span>
                    <span class="font-bold text-sm md:text-xl text-gray-800">R$  {{ formatMoney(sum) }}</span>
                </span>
                <span class="flex items-center justify-center rounded-md bg-gray-200 my-6">
                    <span class="material-symbols-outlined">
                        attach_money
                    </span>
                </span>
            </div>
        </div>
        <div class="flex border border-gray-300 rounded-md w-full">
            <div class="flex justify-between w-full p-2">
                <span class="flex flex-col">
                    <span class="text-gray-600">Receitas</span>
                    <span class="font-bold text-sm md:text-xl text-gray-800">R$ {{ formatMoney(revenue) }}</span>
                </span>
                <span class="flex items-center justify-center rounded-md text-green-500 bg-green-200 my-6">
                    <span class="material-symbols-outlined">
                        arrow_upward_alt
                    </span>
                </span>
            </div>
        </div>
        <div class="flex border border-gray-300 rounded-md w-full">
            <div class="flex justify-between w-full p-2">
                <span class="flex flex-col">
                    <span class="text-gray-600">Despesas</span>
                    <span class="font-bold text-sm md:text-xl text-red-500">R$ {{ formatMoney(expense) }}</span>
                </span>
                <span class="flex items-center justify-center rounded-md text-red-500 bg-red-200 my-6">
                    <span class="material-symbols-outlined">
                        arrow_downward_alt
                    </span>
                </span>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref, toRef, onMounted, computed } from 'vue';
import { formatMoney } from '../../../utils/formatters';
import { openDb, listTransactions } from '../../../composables/useIndexedDB';

const props = defineProps({
    transactions: {
        type: Array,
        required: true,
        default: () => []
    }
})
const transactionsProp = toRef(props, 'transactions')

const sum = computed(() => { return transactionsProp.value.reduce((sum, item) => sum + item.value, 0) });
const revenue = computed(() => {
    const revenue = transactionsProp.value.filter(u => u.type === 'revenue');
    return revenue.reduce((sum, item) => sum + item.value, 0);
});

const expense = computed(() => {
    const expense = transactionsProp.value.filter(u => u.type === 'expense');
    return expense.reduce((sum, item) => sum + item.value, 0) * -1;
})

const database = ref();
onMounted(async () => {
    console.log("props.transactions", sum.value)
})

</script>