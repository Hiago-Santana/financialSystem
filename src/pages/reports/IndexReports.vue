<template>
    <div class="w-full">
        <reports-header class="my-4"></reports-header>
        <div class="grid grid-cols-2 gap-4">
            <expense-by-category :transactions="transactions"></expense-by-category>
            <monthy-summary :transactions="transactions"></monthy-summary>            
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { openDb, listTransactions } from '../../composables/useIndexedDB';
import ReportsHeader from './components/ReportsHeader.vue';
import ExpenseByCategory from './components/ExpenseByCategory.vue';
import MonthySummary from './components/MonthySummary.vue';

const database = ref();
const transactions = ref();

onMounted(async () => {
    database.value = await openDb();
    transactions.value = await listTransactions(database.value);
})

</script>