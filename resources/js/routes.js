import Vue from "vue";
//Per usarlo eseguire: npm install vue-router
import VueRouter from "vue-router";
// importare le pages
import Test from "./pages/Test";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component: Test
        }
    ]
});

export default router;
