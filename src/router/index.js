/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-11 14:45:26
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-17 15:42:28
 */
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import TopList from '@/views/top-list'
import Search from '@/views/search'
const SingerDetail = () => import('@/views/singer-detail'/* webpackChunkName: "singer-detail" */)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
