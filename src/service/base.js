/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-11 17:16:31
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-11 17:24:36
 */
import axios from 'axios'

const ERR_OK = 0
const baseURL = '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
    return axios.get(url, {
        params
    }).then((res) => {
        const serverData = res.data
        if (serverData.code === ERR_OK) {
            return serverData.result
        }
    }).catch((e) => {
        console.log(e)
    })
}
