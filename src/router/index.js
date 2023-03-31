import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

router.firstInit = false;

router.beforeEach((to,from,next) => {
  NProgress.start();
  // if (to.name !== 'Login') {
  //   next({
  //     name: 'Login'
  //   });
  //   return
  // }
  next();
})

router.afterEach(() => {
  NProgress.done();
});


export default router;