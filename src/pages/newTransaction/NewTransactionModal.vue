<template>
    <form @submit.prevent>
        <div class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/20">
            <div
                class="flex flex-col gap-4 border bg-white dark:bg-third dark:border-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-md">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Nova Transação</h2>
                    <span @click="goBack(router)" class="material-symbols-outlined">
                        close
                    </span>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="font-semibold text-lg">Tipo</label>
                        <select v-model="type" class="bg-gray-200 rounded-md p-2 dark:bg-fourth">
                            <option value="expense">Despesa</option>
                            <option value="revenue">Receita</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-semibold text-lg">Tipo</label>
                        <input v-model="description" type="text" required placeholder="Ex: Salário, Supermercado..."
                            class="bg-gray-200 rounded-md p-2 dark:bg-fourth">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-semibold text-lg">Categoria</label>
                        <select v-model="category" class="bg-gray-200 rounded-md p-2 dark:bg-fourth">
                            <option value="worke">Trabalho</option>
                            <option value="alimentanction">Alimentação</option>
                            <option value="transport">Transporte</option>
                            <option value="accounts">Contas</option>
                            <option value="worke">Trabalho</option>
                            <option value="health">Saúde</option>
                            <option value="investment">Investimento</option>
                            <option value="leisure">Lazer</option>
                            <option value="education">Educação</option>
                            <option value="other">Outros</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-semibold text-lg">Valor</label>
                        <input v-model="inputValue" type="text" required placeholder="0,00"
                            class="bg-gray-200 rounded-md p-2 dark:bg-fourth">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-semibold text-lg">Data</label>
                        <input v-model="date" type="date" required placeholder="0,00"
                            class="bg-gray-200 rounded-md p-2 dark:bg-fourth">
                    </div>
                </div>
                <div class="flex justify-center gap-6">
                    <primary-button @click="goBack(router)" label="Cancelar" color="quaternary" size="lg"></primary-button>
                    <primary-button label="Adicionar" color="primary" size="lg"></primary-button>
                </div>
            </div>
        </div>
    </form>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { goBack } from '../../router/navigationUtils';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton.vue';

const router = useRouter();

const type = ref(null);
const description = ref(null);
const category = ref('other');
const inputValue = ref(null);
const date = ref();


onMounted(() => {
    console.log("NewTransctionModal")


})

</script>