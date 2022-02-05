

/**
 * 拿一下全局对象 (window)
 */
let _globalThis:any
export const getGlobalThis = () => {
  return _globalThis || (
    _globalThis = typeof window !== 'undefined' ? window : {}
  )
}