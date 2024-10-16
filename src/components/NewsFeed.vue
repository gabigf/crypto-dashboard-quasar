<template>
  <q-drawer
    v-model="drawerLeft"
    show-if-above
    :width="420"
    :breakpoint="700"
    class="bg-accent text-white"
  >
    <q-scroll-area class="fit">
      <h4 class="text-h4 text-center q-ma-lg">News Feed</h4>

      <q-list padding>
        <q-item
          v-for="(article, index) in newsFeed"
          :key="index"
          class="q-ma-md"
          :href="article.link"
        >
          <q-item-section>
            <q-item-label caption>
              {{ article.authors?.[0]?.name ?? "author unknown" }}
            </q-item-label>

            <q-item-label>{{
              truncateString(article.summary, 110)
            }}</q-item-label>

            <q-item-label caption>{{
              timeAgo(article.published)
            }}</q-item-label>
          </q-item-section>

          <q-item-section top thumbnail class="q-ml-none">
            <img :src="article.media[0]" />
          </q-item-section>
        </q-item>
      </q-list>
      <q-btn
        flat
        rounded
        color="primary"
        label="Show more"
        class="show-more"
        @click="fetchNewsFeed(pageNumber + 1)"
      />
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const drawerLeft = true;
const newsFeed = ref(null);
const pageNumber = ref(1);

const fetchNewsFeed = (pageNumber = 1) => {
  const options = {
    method: "GET",
    url: "http://localhost:8000/news",
    params: { page: pageNumber },
  };

  axios
    .request(options)
    .then((response) => {
      if (!newsFeed.value) {
        newsFeed.value = response.data;
      } else {
        response.data.forEach((article) => newsFeed.value.push(article));
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

function timeAgo(utcTime) {
  const now = new Date();
  const past = new Date(utcTime);
  const secondsAgo = Math.floor((now - past) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const timeElapsed = Math.floor(secondsAgo / interval.seconds);
    if (timeElapsed >= 1) {
      return `${timeElapsed} ${interval.label}${
        timeElapsed > 1 ? "s" : ""
      } ago`;
    }
  }

  return "just now";
}

function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength - 3) + "...";
}

onMounted(fetchNewsFeed);
</script>

<style>
.article-container {
  max-width: 95%;
}

.show-more {
  margin: 1rem 35%;
}
</style>
