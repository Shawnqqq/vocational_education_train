import Home from "../views/Home.vue";
import Level from "../views/Level.vue";
import Detail from "../views/Detail.vue";

export default [
  {
    path: "/vocational-training",
    name: "Home",
    component: Home
  },
  {
    path: "/vocational-training/level/:id",
    name: "Level",
    component: Level
  },
  {
    path: "/vocational-training/detail/:id",
    name: "Detail",
    component: Detail
  }
]