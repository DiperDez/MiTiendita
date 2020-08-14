import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/components/Inicio.vue'
import Login from '@/components/Login.vue'
import Acerca from '@/components/Acerca.vue'
import Contacto from '@/components/Contacto.vue'
import Ventas from '../views/admin/Ventas.vue'
import Pedidos from '../views/admin/Pedidos.vue'
import Deudores from '../views/admin/Deudores.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    children: [
      {path: '/login', component: Login},
      {path: '/acerca', component: Acerca},
      {path: '/contacto', component: Contacto}
    ]
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: Ventas
  },
  {
    path: '/deudores',
    name: 'Deudores',
    component: Deudores
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
