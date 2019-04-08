
Page({
  innerAudioContext:null,
  data: {
    status: true
  },
  onReady(){
    this.innerAudioContext = wx.createInnerAudioContext()
    this.innerAudioContext.src = 'https://6d6f-momo-891ab6-1258735301.tcb.qcloud.la/%E6%B8%85%E7%99%BD%E4%B9%8B%E5%B9%B4.mp3?sign=d3233a4177852273d6353ee9b03975ef&t=1554187195'

    this.innerAudioContext.play()
  },
  
  aaa() {
   this.innerAudioContext.play() 
    this.setData({ status: true })
  },
  bbb(){
    this.innerAudioContext.pause()
    this.setData({ status: false})
  }

})