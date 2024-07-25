import {createRouter, createWebHashHistory} from 'vue-router'

import ActualizarConsultarPage from '../pages/ActualizarConsultarPage.vue'
import EliminarPage from '@/pages/EliminarPage.vue'
import InsertarPage from '@/pages/InsertarPage.vue'
import BienvenidaPage  from '@/pages/BienvenidaPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
const routes = [
    {
        path:'/estudiante/actualizar',
        component:ActualizarConsultarPage
    },
    {
        path:'/estudiante/insertar',
        component:InsertarPage
    },{
        path:'/estudiante/eliminar',
        component: EliminarPage
    },
    {
        path:'/',
        component: BienvenidaPage
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
 
export default router;