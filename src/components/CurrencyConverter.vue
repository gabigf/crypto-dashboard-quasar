<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">Currency Converter</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-btn-dropdown color="primary" label="Dropdown Button">
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </q-card-section>
  </q-card>
</template>

<script setup>
defineOptions({
  name: "CurrencyConverter",
});
function onItemClick() {
  // console.log('Clicked on an Item')
}
</script>
