import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"


const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component:()=>import("@/view/Root.vue"),
            redirect: "index",
            children:[
                {
                    path: "index",
                    name: "首页",
                    component: ()=>import("@/view/dashboard/Dashboard.vue")
                }
            ]
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