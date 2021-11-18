/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-11 17:20:25
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-11 17:24:14
 */
import { get } from './base'

export function getRecommend() {
    return get('/api/getRecommend')
}
