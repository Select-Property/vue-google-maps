export default function lazy (fn) {
  let called = false
  let ret

  return function callFn () {
    if (!called) {
      called = true
      ret = fn()
    }

    return ret
  }
}
