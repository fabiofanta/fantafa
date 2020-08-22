import Vue from "vue";
//Per usarlo eseguire: npm install vue-router
import VueRouter from "vue-router";
// importare le pages;

import Test from "./pages/Test";
import Home from "./pages/Home";
import store from "./vuex.js";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component: Test
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        }
    ]
});

export default router;
