// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序',
    firstname: 'kobe',
    lastname: 'bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score:45,
    movies: ['星际穿越', '盗梦空间', '大话西游'],
    nums: [
      [1,2,3,4,5],
      [6,7,8,9,10],
      [11,12,13,14,15]
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrment() {
    this.setData({
      score: this.data.score + 6
    })
  },
  numberFoFixed(value) {
    return value.foFixed(2)
  }
})