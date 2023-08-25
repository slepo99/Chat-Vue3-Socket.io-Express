import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'
const Login = () => import('@/pages/Login.vue');
const Chat = () => import('@/pages/Chat.vue')
const routes: Array<RouteRecordRaw> = [
{
  path: "/",
  component: Login,
  name: "login"
},
{
    path: '/chat',
    component: Chat, 
    name: 'chat'
}


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router