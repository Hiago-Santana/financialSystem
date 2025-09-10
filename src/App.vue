<template>
  <div class="flex flex-col h-screen">
    <div class="">
      <app-header></app-header>
    </div>
    <div class="flex md:flex-row md:h-full flex-col">
      <app-menu class="flex flex-initial md:w-64 w-full"></app-menu>
      <router-view></router-view>
    </div>
  </div>

</template>
<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import AppMenu from './components/layout/AppMenu.vue';

</script>
