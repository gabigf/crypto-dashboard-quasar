<template>
  <q-layout view="hHh lpr fFf">
    <NewsFeed />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NewsFeed from "src/components/NewsFeed.vue";

defineOptions({
  name: "MainLayout",
});
</script>
