<template>
  <p>Exchange Rate</p>
  <p>{{ props.exchangeData }}</p>
</template>

<script setup>
defineOptions({
  name: "ExchangeRate",
});

const props = defineProps({
  exchangeData: Object,
});
</script>
