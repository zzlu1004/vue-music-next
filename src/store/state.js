/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-17 15:52:32
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-18 15:37:46
 */
import { PLAY_MODE, SEARCH_KEY } from '@/assets/js/constant'
import { load } from '@/assets/js/array-store'

const state = {
  sequenceList: [], // 顺序播放列表
  playlist: [], // 播放列表
  playing: false, // 是否正在播放
  playMode: PLAY_MODE.sequence, // 播放模式
  currentIndex: 0, // 当前播放的索引
  fullScreen: false, // 当前播放状态，是否为全屏
  favoriteList: [],
  searchHistory: load(SEARCH_KEY),
  playHistory: []
}

export default state
