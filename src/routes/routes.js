const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/enfermeria',
        component: () => import('../views/Enfermeria.vue')
    },
    {
        path: '/bienestar',
        component: () => import('../views/Bienestar.vue')
    },
    {
        path: '/biblioteca',
        component: () => import('../views/Biblioteca.vue')
    },
    {
        path: '/cafeteria',
        component: () => import('../views/Cafeteria.vue')
    },
    {
        path: '/coordinacion',
        component: () => import('../views/Coordinacion.vue')
    },
    {
        path: '/acerca',
        component: () => import('../views/Acerca.vue')
    }
]

export default routes