<template>
  <div class="post">
    <router-link :to="{ name: 'DetailPost', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>

    <p>{{ bodyLimit }}</p>
    <span v-for="(tag, index) in post.tags" :key="index">
      &nbsp;
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        <a target="_blank" rel="noopener noreferrer">#{{ tag }}</a>
      </router-link>
    </span>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
// component imports
export default {
  props: ["post"],
  setup(props) {
    let bodyLimit = computed(() => {
      return props.post.body.substring(0, 80) + " .......";
    });
    // console.log(props.posts)
    // no need to return the props value on the posts
    return { bodyLimit };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
</style>
