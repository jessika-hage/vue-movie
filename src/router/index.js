import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MovieList',
    component: () => import('../views/MovieList.vue'),
  },
  {
    path: '/tvshows',
    component: () => import('../views/TvShows.vue'),
    name: 'TVshows',
    props: true,
  },
  {
    path: '/movie/:id',
    component: () => import('../views/Home.vue'),
    name: 'Movie',
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
