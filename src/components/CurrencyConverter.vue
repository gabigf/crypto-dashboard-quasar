<template>
  <q-card flat bordered class="my-card flex">
    <q-card-section class="input-section">
      <div class="card-header flex justify-between q-mb-lg">
        <h6 class="text-h6">Currency Converter</h6>
        <button @click="clearAllFields" class="text-button">Clear all</button>
      </div>

      <!-- INPUT 1 - Contains first currency -->
      <q-input
        filled
        v-model="amount"
        type="number"
        autofocus
        @focus="$refs.primaryInputRef.select()"
        ref="primaryInputRef"
        input-class="text-right"
        class="input"
        dense
      >
        <template v-slot:before>
          <q-btn-dropdown color="accent" :label="chosenPrimaryCurrency">
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

      <!-- INPUT 2 - Contains second currency -->
      <q-input
        filled
        v-model="result"
        type="number"
        @focus="$refs.secondaryInputRef.select()"
        ref="secondaryInputRef"
        input-class="text-right"
        class="input"
        dense
      >
        <template v-slot:before>
          <q-btn-dropdown color="accent" :label="chosenSecondaryCurrency">
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

      <!-- CONVERT BUTTON -->
      <q-btn
        unelevated
        rounded
        color="accent"
        label="Convert"
        class="convert-button"
        @click="onConvert"
      />
    </q-card-section>

    <q-card-section class="exchange-rate-section">
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
    exchangedData.primaryCurrency = item;
  } else if (currencyToChange === "secondary") {
    chosenSecondaryCurrency.value = item;
    exchangedData.secondaryCurrency = item;
  }
}

function clearAllFields() {
  amount.value = 0;
  result.value = 0;
}

function onConvert() {
  console.log("clicked");
}
</script>

<style>
.my-card {
  width: 60vw;
  border-radius: 15px;
}

.card-header h6 {
  margin: 0;
}

.text-button {
  border: none;
  background-color: inherit;
  text-decoration: underline;
  cursor: pointer;
}

.text-button:hover {
  color: gray;
}

.input-section {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  margin-bottom: 2rem;
}

.convert-button {
  align-self: end;
}

.exchange-rate-section {
  border-top-right-radius: inherit !important;
  background-color: #122f3f;
  color: white;
  width: 50%;
}
</style>
