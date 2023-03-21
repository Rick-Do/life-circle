import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"


const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            redirect:"dashboard",
        },
        {
          path:"/dashboard",
          name:"dashboard",
          component: () => import("@/view/Root.vue")
        },
        {
          path: "/login",
          name: "login",
          component: ()=>import("@/login/login.vue")
        },
        {
            path: "/tv",
            children: [
                {
                  path:"",
                  name:"tv",
                  component: import("@/tv/components/Root.vue")
                }
            ]
        }
    ]
})

export default router