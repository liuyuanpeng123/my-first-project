import { Menus } from '@/types/menu';

export const menuData: Menus[] = [
    {
        id: '0',
        title: '概况',
        index: '/dashboard',
        icon: 'Odometer',
    },
    // {
    //     id: '1',
    //     title: '看板管理',
    //     index: '/kanban',
    //     icon: 'Reading',
    // },
    // {
    //     id: '3',
    //     title: '区域管理',
    //     index: '/region',
    //     icon: 'LocationInformation',
    // },
    {
        id: '2',
        title: '用户管理',
        index: '2',
        icon: 'HomeFilled',
        children: [
            {
                id: '21',
                pid: '1',
                index: '/system-user',
                title: '用户管理',
            },
            // {
            //     id: '22',
            //     pid: '2',
            //     index: '/system-role',
            //     title: '角色管理',
            // },
            // {
            //     id: '23',
            //     pid: '3',
            //     index: '/system-menu',
            //     title: '菜单管理',
            // },
            // {
            //     id: '24',
            //     pid: '4',
            //     index: '/system-dep',
            //     title: '科室管理',
            // },
        ],
    }
    
];
