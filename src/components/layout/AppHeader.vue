<template>
    <div class="flex justify-between border-b w-full p-4 border-gray-200">
        <div class="flex justify-center items-center gap-2">
            <div class=" text-white text-2xl bg-gray-900 rounded-md p-1 font-semibold dark:bg-white dark:text-gray-900">
                R$
            </div>
            <h1 class="font-semibold">
                FinanceControl
            </h1>
        </div>
        <div>
            <primary-button label="+ Nova Transação"></primary-button>
        </div>
    </div>
</template>
<script setup>
import PrimaryButton from '../ui/buttons/PrimaryButton.vue';
</script>