import { ref } from 'vue'

const getPost = (id) => {
  const post = ref();
  const errors = ref(null);

  const loadData = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/"+id);
      if (!data.ok) {
        throw Error("This post dosn't exists");
      }
      post.value = await data.json();
    } catch (err) {
      errors.value = err.message;
    }
  };

  return { post, errors, loadData };
};

export default getPost;