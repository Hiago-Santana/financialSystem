<template>
    <div class="flex flex-col gap-6 w-full">
        <transaction-summary :transactions="transactions"></transaction-summary>
        <recent-transactions :transactions="transactions"></recent-transactions>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { openDb, listTransactions } from '../../composables/useIndexedDB';
import TransactionSummary from './components/TransactionSummary.vue';
import RecentTransactions from './components/RecentTransactions.vue';

const database = ref();
const transactions = ref();

onMounted(async () => {
    database.value = await openDb();
    transactions.value = await listTransactions(database.value);
})

</script>