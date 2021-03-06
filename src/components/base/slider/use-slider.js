/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-12 15:06:41
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-12 15:41:36
 */
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(Slide)

export default function useSlider(wrapperRef) {
    const slider = ref(null)
    const currentPageIndex = ref(0)
    // console.log(slider)
    // console.log(currentPageIndex)
    onMounted(() => {
        const sliderVal = slider.value = new BScroll(wrapperRef.value, {
            click: true,
            scrollX: true,
            scrollY: false,
            momentum: false,
            bounce: false,
            probeType: 2,
            slide: true
        })

        sliderVal.on('slideWillChange', (page) => {
            currentPageIndex.value = page.pageX
        })
    })

    onUnmounted(() => {
        slider.value.destroy()
    })

    return {
        slider,
        currentPageIndex
    }
}
