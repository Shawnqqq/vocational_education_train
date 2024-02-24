import Home from "../views/Home.vue";
import Level from "../views/Level.vue";
import Detail from "../views/Detail.vue";
import Login from "../views/Login.vue";
import VideoDetail from "../views/VideoDetail.vue";

export default [
  {
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/level/:id",
    name: "Level",
    component: Level
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail
  },
  {
    path: "/login",
    name: 'Login',
    component: Login
  },
  {
    path: '/video/:id',
    name: "VideoDetail",
    component: VideoDetail
  }
]