<template>
    <div class="w-full border border-gray-300 rounded-md p-4 dark:bg-third dark:border-gray-800">
        <h2 class="font-semibold text-2xl text-gray-800 dark:text-white">Transações Recentes</h2>
        <div v-for="transactions in transctionsProps" :key="transactions.id" class="flex flex-col my-4">
            <div class="flex items-center gap-4 border border-gray-300 rounded-md p-2 bg-gray-100 dark:bg-fourth dark:border-gray-800">
                <div class="flex justify-between items-center w-full">
                    <div class="flex items-center gap-2">
                        <div>
                            <span v-if="transactions.type === 'revenue'"
                                class="material-symbols-outlined flex items-center justify-center rounded-md text-green-500 bg-green-200 my-6 dark:bg-green-200/8">
                                arrow_upward_alt
                            </span>
                            <span v-else
                                class="material-symbols-outlined flex items-center justify-center rounded-md text-red-500 bg-red-200 my-6 dark:bg-red-500/8">
                                arrow_downward_alt
                            </span>
                        </div>
                        <div>
                            <div class="font-semibold text-xl text-gray-700 capitalize dark:text-gray-200">{{ transactions.description }}</div>
                            <div class="text-gray-500 dark:text-gray-400">{{ translateCategory(transactions.category) }}</div>
                        </div>
                    </div>
                    <div>
                        <div :class="transactions.value < 0 ? 'text-red-500' : 'text-green-700'" class="font-semibold">R$ {{ formatMoney(transactions.value) }}</div>
                        <div class="text-gray-500 dark:text-gray-400">{{ formatDate(transactions.date) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { toRef } from 'vue';
import { translateCategory } from '../../../utils/translation';
import { formatMoney } from '../../../utils/formatters';
import { formatDate } from '../../../utils/formatters';

const props = defineProps({
    transactions: {
        type: Array,
        required: true,
        default: () => []
    }
})

const transctionsProps = toRef(props, 'transactions');

</script>