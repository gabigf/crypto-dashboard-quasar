<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <CurrencyConverter />
    </div>
  </q-page>
</template>

<script setup>
import CurrencyConverter from "src/components/CurrencyConverter.vue";

defineOptions({
  name: "IndexPage",
});
</script>
