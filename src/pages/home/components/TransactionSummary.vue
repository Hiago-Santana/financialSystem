<template>
    <div class="flex border border-gray-300 rounded-md">
        <div class="flex justify-between w-full p-2">
            <span class="flex flex-col">
                <span class="text-gray-600">Saldo Total</span>
                <span class="font-bold text-xl text-gray-800">R$ {{ sum }}</span>
            </span>
            <span class="flex items-center justify-center rounded-md bg-gray-200 p-4">$</span>


        </div>

    </div>
</template>
<script setup>
import { ref, toRef, onMounted, computed } from 'vue';
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

const database = ref();
onMounted(async () => {
    console.log("props.transactions", sum.value)
})

</script>