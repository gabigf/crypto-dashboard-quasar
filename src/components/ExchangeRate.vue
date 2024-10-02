<template>
  <p>Exchange Rate</p>
  <p>{{ props.exchangeData.exchangeRate }}</p>
  <p>
    {{ props.exchangeData.primaryCurrency }} to
    {{ props.exchangeData.secondaryCurrency }}
  </p>
</template>

<script setup>
defineOptions({
  name: "ExchangeRate",
});

const props = defineProps({
  exchangeData: Object,
});
</script>
