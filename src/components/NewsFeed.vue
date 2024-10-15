<template>
  <q-drawer
    v-model="drawerLeft"
    show-if-above
    :width="370"
    :breakpoint="700"
    class="bg-accent text-white"
  >
    <h4 class="text-h4 text-center">News Feed</h4>

    <ul>
      <li v-for="(article, index) in newsFeed" :key="index">
        <div>
          <p>{{ article.authors[0].name }}</p>
          <p>{{ article.title }}</p>
          <p>{{ article.published }}</p>
        </div>
        <div>
          <img :src="article.media[0]" :alt="article.title" />
        </div>
      </li>
    </ul>
  </q-drawer>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const drawerLeft = true;
const newsFeed = ref(null);

const fetchNewsFeed = () => {
  const options = {
    method: "GET",
    url: "http://localhost:8000/news",
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response);
      newsFeed.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(fetchNewsFeed);
</script>
