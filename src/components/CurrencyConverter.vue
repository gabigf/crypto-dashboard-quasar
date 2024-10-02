<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">Currency Converter</div>
      <button @click="clearAllFields">Clear all</button>
    </q-card-section>

    <q-card-section>
      <q-input
        filled
        v-model="amount"
        type="number"
        input-class="text-right"
        autofocus
      >
        <template v-slot:before>
          <q-btn-dropdown color="primary" :label="chosenPrimaryCurrency">
            <q-list>
              <q-item
                v-for="(item, index) in currencies"
                :key="index"
                clickable
                v-close-popup
                @click="onItemClick(item, 'primary')"
              >
                <q-item-section>
                  <q-item-label>{{ item }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </template>
      </q-input>

      <q-input filled v-model="result" type="number" input-class="text-right">
        <template v-slot:before>
          <q-btn-dropdown color="primary" :label="chosenSecondaryCurrency">
            <q-list>
              <q-item
                v-for="(item, index) in currencies"
                :key="index"
                clickable
                v-close-popup
                @click="onItemClick(item, 'secondary')"
              >
                <q-item-section>
                  <q-item-label>{{ item }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </template>
      </q-input>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <ExchangeRate :exchange-data="exchangedData" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, reactive } from "vue";
import ExchangeRate from "./ExchangeRate.vue";

defineOptions({
  name: "CurrencyConverter",
});

const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
const chosenPrimaryCurrency = ref("BTC");
const chosenSecondaryCurrency = ref("BTC");
const amount = ref(1);

const exchangedData = reactive({
  primaryCurrency: "BTC",
  secondaryCurrency: "BTC",
  exchangeRate: 0,
});

const result = ref(null);

function onItemClick(item, currencyToChange) {
  if (currencyToChange === "primary") {
    chosenPrimaryCurrency.value = item;
  } else if (currencyToChange === "secondary") {
    chosenSecondaryCurrency.value = item;
  }
}

function clearAllFields() {
  amount.value = 0;
  result.value = 0;
}
</script>
