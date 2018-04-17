import * as postcss from 'postcss'

export const postcssUnit2rpx = postcss.plugin('postcss-unit2rpx', (options: any) => {
  return root => {
    root.walkRules((rule, index) => {
      root.walkDecls(decl => {
        decl.value = decl.value.replace(/([0-9.]+)(px|rem)/ig, (match, size, unit) => {
          if (unit === 'px') { // 100px => 100rpx
            return `${size * 2}rpx`
          } else if (unit === 'rem') { // 1rem => 100rpx
            throw new Error('请不要用rem单位')
          }
          return match
        })
      })
    })
  }
})
