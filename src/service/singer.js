/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-16 10:50:48
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-16 10:51:03
 */
import { get } from './base'

export function getSingerList() {
  return get('/api/getSingerList')
}

export function getSingerDetail(singer) {
  return get('/api/getSingerDetail', {
    mid: singer.mid
  })
}
