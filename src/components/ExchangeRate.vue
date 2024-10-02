<template>
  <div class="card-header flex justify-center q-mb-lg">
    <h6 class="text-h6">Exchange Rate</h6>
  </div>
  <div class="flex column items-center">
    <p class="exchangeRate">{{ props.exchangeData.exchangeRate }}</p>
    <p>
      {{ props.exchangeData.primaryCurrency }} to
      {{ props.exchangeData.secondaryCurrency }}
    </p>
  </div>
</template>

<script setup>
defineOptions({
  name: "ExchangeRate",
});

const props = defineProps({
  exchangeData: Object,
});
</script>

<style>
.card-header h6 {
  margin: 0;
}

.exchangeRate {
  font-size: 3rem;
}
</style>
