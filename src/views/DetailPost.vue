<template>
  <div v-if="errors">
    {{ errors }}
  </div>
  <div v-else>
    <div v-if="post" class="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <span v-for="(tag, index) in post.tags" :key="index" class="tags">
        <a href="#" target="_blank" rel="noopener noreferrer">#{{ tag }}</a>
      </span>
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import { useRoute } from 'vue-router'

export default {
  props: ["id"],
  setup(props) {
    const route = useRoute()
    // const { post, errors, loadData } = getPost(props.id);
    const { post, errors, loadData } = getPost(route.params.id);
    loadData();
    return { post, errors };
  },
};
</script>

<style scoped>
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>
