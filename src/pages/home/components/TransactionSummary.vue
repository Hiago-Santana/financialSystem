<template>
    <h1>TransactionSummary</h1>
    {{ transactions }}
    <div class="flex flex-col">
        <span>Saldo Total</span>
        <span></span>

    </div>
</template>
<script setup>
import { ref, toRef, onMounted, computed } from 'vue';
import { openDb, listTransactions } from '../../../composables/useIndexedDB';

const props = defineProps([ "transactions" ])
const transactionsProp = toRef(props, 'transactions')

const sum = computed(() => { return transactionsProp.value.reduce((sum, item) => sum + item.value, 0)});

const database = ref();
onMounted(async () => {
    console.log("props.transactions",sum)
})

</script>