import { createRouter, createWebHashHistory } from 'vue-router'
import MenuCliente from '../views/MenuCliente.vue'
import PedidoCliente from '../views/PedidoCliente.vue'
import MenuPastelero from '../views/MenuPastelero.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MenuCliente
  },
  {
    path: '/pedidocliente',
    name: 'pedido-cliente',
    component: PedidoCliente
  },
  {
    path: '/menupastelero',
    name: 'menu-pastelero',
    component: MenuPastelero
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
