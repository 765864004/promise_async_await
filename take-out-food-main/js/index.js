//获取header元素
var header = document.querySelector('.header')

//监听页面的滚动
window.addEventListener('scroll',function(){
    //根据滚动的距离添加样式
    if(this.scrollY >= 300){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }

})

//获取页面中要添加动画的元素
var items = document.querySelectorAll('[data-reveal]')

//抽取给元素复位的方法
function resetItem(){
    //遍历所有的动画元素,添加复位样式
    items.forEach(function(item){
        //如果当前元素距离浏览器可视区域顶部小于一屏的距离的时候,才添加复位样式
        if(item.getBoundingClientRect().top < window.innerHeight - 100){
            item.classList.add('reset')
        }
    })
}

//监听页面的加载事件
window.addEventListener('load',resetItem)

//监听页面的滚动事件
window.addEventListener('scroll',resetItem)
