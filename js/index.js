$(function(){
  (function(){
  	  var total=$(".object_con .item")
  	  if($(window).width()>=992){
	  	  for(var a=0;a<total.length;a++){
	  	  	 if(a%2!==0){
	  	  	 	total.eq(a).css({"margin-right":"0px","margin-left":"3.2%"})
	  	  	 }
	  	  }
  	  }
  })();

  /*图片预加载*/
  var  oimgs=$("img")
  for(var a=0;a<oimgs.length;a++){
  	 var oImg=new Image()
  	 oImg.src=oimgs[a].src

  }
  /*图片预加载end*/

 /* $("#content .header .con .top>.mobile").click(function(){
  	 $(".fix_nav").addClass("move_nav")
  })
  $(".close").click(function(){
  	 $(".fix_nav").removeClass("move_nav")
  });*/
})
/*封装移动端的点击事件*/
if(!HTMLElement.prototype.tap){
  	HTMLElement.prototype.tap=function(fn){
        var tapStartTime = 0,
            tapEndTime = 0,
            tapTime = 500, //tap等待时间，在此事件下松开可触发方法
            tapStartClientX = 0,
            tapStartClientY = 0,
            tapEndClientX = 0,
            tapEndClientY = 0,
            tapScollHeight = 15, //水平或垂直方向移动超过15px测判定为取消（根据chrome浏览器默认的判断取消点击的移动量)
            cancleClick = false;
            this.addEventListener('touchstart', function() {
            tapStartTime = event.timeStamp;
            var touch = event.changedTouches[0];
            tapStartClientX = touch.clientX;
            tapStartClientY = touch.clientY;
            cancleClick = false;
            })
             this.addEventListener('touchmove', function() {
	            var touch = event.changedTouches[0];
	            tapEndClientX = touch.clientX;
	            tapEndClientY = touch.clientY;
	            if ((Math.abs(tapEndClientX - tapStartClientX) > tapScollHeight) || (Math.abs(tapEndClientY - tapStartClientY) > tapScollHeight)) {
	                cancleClick = true;
	            }
	        })
	        this.addEventListener('touchend', function() {
	            tapEndTime = event.timeStamp;
	            if (!cancleClick && (tapEndTime - tapStartTime) <= tapTime) {
	                fn();
	            }
	        })
  	}
  }
   /*封装移动端的点击事件end*/
  var oMobile=document.querySelectorAll("#content .header .con .top>.mobile")[0]
  var oFixMenu=document.querySelectorAll(".fix_nav")[0]
  var oClose=document.querySelectorAll(".close")[0]
   oMobile.tap(function(){
     oFixMenu.className="fix_nav move_nav"
   })
   oClose.tap(function(){
   	 oFixMenu.className="fix_nav"
   })