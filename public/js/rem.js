// 实现rem自适应布局
function remSize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
  // 设计稿是750px
  // 设置1半的宽度就是375px
  // 1rem == 100px的设计宽度
  // 表达一般的宽度就是3.75rem
  document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

remSize()

// 当window窗口大小变化时，需要重新调用该方法
window.onresize = function(){
  remSize()
}