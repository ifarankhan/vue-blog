import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailPost from "../views/DetailPost.vue";
import Create from "../views/Create.vue";
import Tag from "../views/Tag.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'DetailPost',
    component: DetailPost,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
