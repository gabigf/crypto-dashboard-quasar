<template>
  <q-drawer
    v-model="drawerLeft"
    show-if-above
    :width="370"
    :breakpoint="700"
    class="bg-accent text-white"
  >
    <h4 class="text-h4 text-center">News Feed</h4>
  </q-drawer>
</template>

<script setup>
const drawerLeft = true;
</script>
