import {
  createRenderer
} from '@vue/runtime-core'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'
import { isString } from '@vue/share'

// 这里提供一些封装好的dom操作等方法
const rendererOptions = Object.assign({}, nodeOps, patchProp)

let renderer:any // 用于保存渲染器


// 只需创建一个渲染器即可
function ensureRenderer() {

  return renderer || (renderer = createRenderer(rendererOptions))
}

export const createApp = (...args: any[]) => {

  /**
   * 通过构造器
   * 创建一个渲染器
   */
  const app = ensureRenderer().createApp(...args)

  const { mount } = app
  // 对根实例的mount重新赋值
  /**
   * 接收 字符串选择器
   * @param containerOrSelector 
   */
  app.mount = (containerOrSelector: Element | string) => {
    const container = normalizeContainer(containerOrSelector)
    if (container) {
      return mount(container, true)
    }
  }

  return app
}

/**
 * 获取绑定的节点实例
 * 
 * 可以传递 选择器 string 
 * 
 * 也可以直接传递dom节点
 * @param container 
 * @returns 
 */
function normalizeContainer (container) {
  if (isString(container)) {
    return document.querySelector(container)
  }

  return container
}