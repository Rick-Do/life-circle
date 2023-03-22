import type {UserProfile} from "@/model/user";

interface UserSettingsDown {
    /**
     * 主键
     */
    id: string

    /**
     * 名称
     */
    name: string

    /**
     * 排序号
     */
    weight: number

    /**
     * 图标
     */
    icon ?: string

    /**
     * 点击跳转的路由
     */
    route ?: string

}

export function Root(){
    const userSettingConfig: UserSettingsDown[]=[
        {
            id: "1",
            name:"设置",
            weight: 1,
            icon: "config",
        },
        {
            id: "2",
            name:"个人信息",
            weight: 2,
            icon: "user"
        },
        {
            id: "3",
            name:"我的信息",
            weight: 3,
            icon: "mail"
        },
        {
            id: "4",
            name:"锁定屏幕",
            weight: 4,
            icon: "lock"
        },
        {
            id: "5",
            name:"退出登录",
            weight: 5,
            icon: "logout"
        },
    ]

    return {
        userSettingConfig
    }
}
