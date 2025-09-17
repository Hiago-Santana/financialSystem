<template>
    <div>
        <transaction-summary :transactions="transactions"></transaction-summary>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { openDb, listTransactions } from '../../composables/useIndexedDB';
import TransactionSummary from './components/TransactionSummary.vue';

const database = ref();
const transactions = ref();

onMounted(async () => {
    database.value = await openDb();
    transactions.value = await listTransactions(database.value);
})

</script>