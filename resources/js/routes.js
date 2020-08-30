import Vue from "vue";
//Per usarlo eseguire: npm install vue-router
import VueRouter from "vue-router";
// importare le pages;

import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import RegisterPage from "./pages/RegisterPage";
import store from "./vuex.js";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component: LoginPage
        },
        {
            path: "/register",
            name: "register",
            component: RegisterPage
        },
        {
            path: "/home",
            name: "home",
            component: AccountPage,
            beforeEnter: (to, from, next) => {
                    axios.get('api/check-auth')
                    .then(function (response) {
                        // handle success
                        if (response.data.success == 1) {
                            next();
                        }
                    })
                    .catch(function(error) {
                        next({ path: '/login' });
                    })
                // store.dispatch('retriveData').then(response => {
                //     // if (response.data.success == 1) next()
                //     // else next(false)
                //     console.log(response + 'test');
                // })

                // if (store.dispatch('retriveData') throw 401) next(false)
                // else next()
            },
            store:store
        }
    ]
});

export default router;
