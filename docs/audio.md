# auido 组件使用 

**目前微信小程序个人版不支持使用 audio 组件，所以我尝试能否使用 api 来做一下背景音乐**
## 使用 api
```
  this.innerAudioContext = wx.createInnerAudioContext()
  this.innerAudioContext.src = ''
  this.innerAudioContext.play()
```
- 这样可以做到背景音乐，而没有使用 audio 组件 