/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-17 15:52:32
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-18 15:38:41
 */
// 当前播放的歌曲
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
