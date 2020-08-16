import Vue from "vue";
//Per usarlo eseguire: npm install vue-router
import VueRouter from "vue-router";
// importare le pages
import Home from "./pages/Home";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        }
    ]
});

export default router;
