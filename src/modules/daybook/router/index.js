
export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
    children: [
        // Aqui se ponen las rutas hijas
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: '/entry-view/:id',
            name: 'entry-view',
            component: () => import(/* webpackChunkName: "daybook-entry-view" */ '@/modules/daybook/views/EntryView.vue'),
        }
    ]

}