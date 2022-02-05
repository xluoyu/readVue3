import {
  createRenderer
} from '@vue/runtime-core'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'

// 这里提供一些封装好的dom操作等方法
const rendererOptions = Object.assign({}, nodeOps, patchProp)

let renderer:any // 用于保存渲染器


// 只需创建一个渲染器即可
function ensureRenderer() {

  return renderer || (renderer = createRenderer(rendererOptions))
}

export const createApp = ((...args: any[]) => {

  /**
   * 通过构造器
   * 创建一个渲染器
   */
  const app = ensureRenderer().createApp(...args)


})

