<template>
    <div class="flex items-center ">
        <select @change="onChange" :value="category" class="rounded-md bg-gray-200 p-2 dark:bg-fourth">
            <option value="all">Todas as categorias</option>
            <option value="work">Trabalho</option>
            <option value="alimentanction">Alimentação</option>
            <option value="transport">Transporte</option>
            <option value="accounts">Contas</option>
            <option value="health">Saúde</option>
            <option value="investment">Investimento</option>
            <option value="leisure">Lazer</option>
            <option value="education">Educação</option>
            <option value="other">Outros</option>
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