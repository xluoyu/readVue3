import { getGlobalThis } from "@vue/share"
import { createAppAPI } from "./createApp"

export const createRenderer = (options) => {
  const target = getGlobalThis()
  
  target.__MYVUE__ = true // 标识框架身份，可用于第三方插件

  
  const render = (vnode, container, isSVG) => {
    
  }

  return {
    render,
    createApp: createAppAPI(render)
  }
}