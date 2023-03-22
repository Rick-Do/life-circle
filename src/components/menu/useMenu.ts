import type {Menu} from "@/model/menu";
import {exampleData} from "@/model/menu";
import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";


export function useMenu() {
    const menus: Menu[] = exampleData[0].children
    const route = useRoute();

    const currentKey = ref(route.meta.menu);

    const router = useRouter();

    watch(
        ()=> route.meta.menu,
        (menu)=> {
            currentKey.value = menu
        }
    )

    const click = async (menu: Menu) => {
        await router.push({name: menu.menuName, replace:true})
    }

    return {
        menus,
        currentKey,
        click
    }

}