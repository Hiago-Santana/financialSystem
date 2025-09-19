<template>
    <div class="border border-gray-200 rounded-md p-4">
        <h2 class="text-lg font-semibold mb-4">Gastos por Categoria</h2>

        <div v-for="expenses in expense" :key="expenses.id" class="flex items-center justify-between mb-3">
            <!-- Category name -->
            <span class="text-sm text-gray-700 font-medium w-24">
                {{ translateCategory(expenses.category) }}
            </span>

            <!-- Bar -->
            <div class="flex-1 mx-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="h-2 rounded-full bg-black"
                        :style="{ width: ((expenses.value / maxValue) * 100) + '%' }">
                    </div>
                </div>
            </div>

            <!-- Value -->
            <span class="text-sm text-gray-700 font-medium w-20 text-right">
                R$ {{ expenses.value.toFixed(2) }}
            </span>
        </div>
    </div>
</template>
<script setup>
import { computed, toRef } from 'vue'
import { translateCategory } from '../../../utils/translation'

const props = defineProps({
    transactions: {
        type: Array,
        required: true,
        default: () => []
    }
})

const transactionsProps = toRef(props, 'transactions');
const expense = computed(() => transactionsProps.value.filter(e => e.type === 'expense'))
const maxValue = computed(() => {
    if (!expense.value.length) return 1
    return Math.min(...expense.value.map(t => Number(t.value)))
})
</script>
