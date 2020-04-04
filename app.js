App({
  // 生命周期函数：后台存活2个小时
  //小程序初始化完成时，会执行的生命周期函数
  onLaunch: function () {
    console.log("小程序初始化完成了：onLaunch")
    //异步调用 -> 数据拿到之后，再进行回调的
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
  },
  //小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    console.log("界面显示出来：onShow")
  },
  onHide: function () {
    console.log("界面被隐藏时会执行：onHide")
  },
  onError: function (msg) {
    console.log("小程序中发生了一些错误时会执行")
  }
})
