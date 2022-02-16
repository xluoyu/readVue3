import {isObject} from '@vue/share'

export interface App {
  use(plugin, ...options): this
  mixin(mixin): this
  component(name, component): this
  directive(name, directive): this
  mount(
    rootContainer: string
  )
}

export interface Appcontent {
  app: any
}


export function createAppContent(): Appcontent {
  return {
    app: null,

  }
}

/**
 * 实现效果
 * 
 * const app = createApp(Vue)
 * app.use(plugin)
 * app.component(component)
 * app.directive(directive)
 * app.moun('#app')
 * 
 * @returns 
 */
export function createAppAPI (render) {
  return function createApp(rootComponent, rootProps = null) {
    if (rootProps != null && !isObject(rootProps)) {
      console.error('这里的root props 如果有值的话，必须是个Obj')
      rootProps = null
    }

    const context = createAppContent()

    let isMounted = false

    const app: App = (context.app = {
      use(plugin, ...options) {
        return app
      },

      mixin(mixin) {
        return app
      },
      component(name, component) {
        return app
      },
      directive(name, directive) {
        return app
      },
      mount(rootContainer) {
        if (!isMounted) {
          const vnode = createVNode(
            rootComponent,
            rootProps
          )



        } else {
          console.error('只能挂在一次')
        }
      }
    })


    return app

  }
}

export const createVNode = () => {
  
}