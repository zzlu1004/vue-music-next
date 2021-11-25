/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-11 17:20:25
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-25 14:39:54
 */
import { get } from './base'

export function getRecommend() {
  return get('/api/getRecommend')
}

export function getAlbum(album) {
  return get('/api/getAlbum', {
    id: album.id
  })
}
