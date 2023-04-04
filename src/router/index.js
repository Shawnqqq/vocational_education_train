import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import isExpire from '../utils'

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

router.firstInit = false;

router.beforeEach((to,from,next) => {
  NProgress.start();
  const originData = localStorage.getItem('_initial_px');
  if (to.name === 'Login') {
    try {
      if (!originData) {
        next();
        return
      }
      const data = JSON.parse(window.atob(originData));
      if (data.a && data.b && !isExpire(data.a,data.b)) {
        next({
          name: 'Home'
        });
        return
      }
    } catch {
      next();
    }
  }
  if (to.name !== 'Login') {
    if (!originData) {
      next({
        name: 'Login'
      });
      return
    }
    try {
      const data = JSON.parse(window.atob(originData));
      if (!data.a || !data.b) {
        localStorage.clear();
        next({
          name: 'Login'
        });
        return
      }
      if (isExpire(data.a,data.b)) {
        localStorage.clear();
        next({
          name: 'Login'
        });
        return
      }
    } catch {
      localStorage.clear();
      next({
        name: 'Login'
      });
      return
    }
  }
  next();
})

router.afterEach(() => {
  NProgress.done();
});


export default router;