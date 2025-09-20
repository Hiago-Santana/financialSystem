<template>
    <div class="flex items-center ">
        <select @change="onChange" :value="category" class="rounded-md bg-gray-200 p-2 dark:bg-fourth">
            <option value="all">Todas os tipos</option>
            <option value="expense">Despesas</option>
            <option value="revenue">Receitas</option>
        </select>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const emit = defineEmits(['onChange']);

const category = ref('all');

const onChange = (event) => {
    category.value = event.target.value
    emit('onChange', category.value);
} 

</script>