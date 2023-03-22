/**
 * 菜单
 */
export interface Menu {

    /**
     * 菜单id
     */
    menuId: string,

    /**
     * 菜单名称
     */
    menuName: string,

    /**
     * 父级菜单id
     */
    parentId ?: string | null,

    /**
     * 权重值
     */
    weight ?: number | null,

    /**
     * 子级菜单
     */
    children: Menu[],

    /**
     * 图标
     */
    icon ?: string | null

    /**
     * 组件地址
     */
    urlAddress ?: string


}

export const exampleData = [
    {
        menuId: "123",
        menuName: "运营管理系统",
        weight: 10,
        parentId: null,
        children:[
            {
                menuId: "2c7242e661284e9b889f51dc9d27e709",
                menuName: "合同订单",
                parentId: "123",
                children: [
                    {
                        menuId: "10aa97fada844264933d58216e0e4b40",
                        menuName: "合同订单",
                        parentId: "2c7242e661284e9b889f51dc9d27e709",
                        children: []
                    }
                ]
            },
            {
                menuId: "c0bbb957472d4e92863520a69abbd9ff",
                menuName: "实施任务",
                parentId: "123",
                children: [
                    {
                        menuId: "0c3f44d2fec24cc49bf635cf91319959",
                        menuName: "需求工单",
                        parentId: "c0bbb957472d4e92863520a69abbd9ff",
                        children: []
                    },
                    {
                        menuId: "e2c9cb191dbc44d28f9d53d8ecc54ffb",
                        menuName: "实施派工",
                        parentId: "c0bbb957472d4e92863520a69abbd9ff",
                        children: []
                    }
                ]
            },
            {
                menuId: "64c0ea8de0594c92828e72cda43f4625",
                menuName: "服务记录",
                parentId: "123",
                children: [
                    {
                        menuId: "556c6b03142c43e19194515e90a81a84",
                        menuName: "服务记录",
                        parentId: "64c0ea8de0594c92828e72cda43f4625",
                        children: []
                    }
                ]
            },
            {
                menuId: "be9c155e49114cc3816791d2132fdff1",
                menuName: "客户跟踪",
                parentId: "123",
                children: [
                    {
                        menuId: "8f72dff33df54777a6359ce706c706b5",
                        menuName: "客户跟踪",
                        parentId: "be9c155e49114cc3816791d2132fdff1",
                        children: []
                    }
                ]
            },
            {
                menuId: "53846327843a40e3b28119b6ff16799f",
                menuName: "系统管理",
                parentId: "123",
                children: [
                    {
                        menuId: "6569733ee8ca4856a5e347d06ff8bd76",
                        menuName: "角色管理",
                        parentId: "53846327843a40e3b28119b6ff16799f",
                        children: []
                    },
                    {
                        menuId: "c1ebb63570d5402ebce96488bc975e2c",
                        menuName: "菜单管理",
                        parentId: "53846327843a40e3b28119b6ff16799f",
                        children: []
                    },
                    {
                        menuId: "5ed900fd60924e2882e9d0fb29c000cb",
                        menuName: "按钮管理",
                        parentId: "53846327843a40e3b28119b6ff16799f",
                        children: []
                    },
                    {
                        menuId: "2948909c9504450ebda69c902fc2308c",
                        menuName: "用户管理",
                        parentId: "53846327843a40e3b28119b6ff16799f",
                        children: []
                    },
                    {
                        menuId: "2948909c9504450ebda69c902fc2308c",
                        menuName: "用户管理",
                        parentId: "53846327843a40e3b28119b6ff16799f",
                        children: []
                    },
                    {
                        menuId: "50d73b0d7de74e1e846b371554789a95",
                        menuName: "字典管理",
                        parentId: "53846327843a40e3b28119b6ff16799f",
                        children: []
                    },
                ]
            },
        ],
        icon: "",
        urlAddress:""
    },
]




