import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"


const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: ()=>import("@/view/Root.vue")
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