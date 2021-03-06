/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-11 14:45:26
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-17 15:52:53
 */
import { createStore, createLogger } from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
