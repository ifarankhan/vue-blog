<template>
  <div class="tag">
    <h1>#{{ tag }}</h1>
    <div v-if="filterPosts.length">
      <PostList :posts="filterPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import { computed } from "@vue/reactivity";

export default {
  name: "Tag",
  props: ["tag"],
  components: { PostList, Spinner },
  setup(props) {
    const route = useRoute();
    const { posts, errors, loadData } = getPosts();
    loadData();

    const filterPosts = computed({
      get() {
        let filtered = posts.value.filter(function (post) {
            if(post.tags.includes(props.tag)){
                return post;
            }
        });
        return filtered;
      },
    });
    console.log(filterPosts);

    return { filterPosts, errors };
  },
};
</script>

<style></style>
