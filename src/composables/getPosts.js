import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([]);
  const errors = ref(null);

  const loadData = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("No data from endpoint collected");
      }
      posts.value = await data.json();
    } catch (err) {
      errors.value = err.message;
      console.log(errors.value);
    }
  };

  return { posts, errors, loadData };
};

export default getPosts;