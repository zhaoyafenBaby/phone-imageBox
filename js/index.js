var total = 15,
		$wrapper = $('.wrapper'),
		activeIndex,
		h_w = $(window).height() / $(window).width(),
		styleHeight = ($(window).width() - 6) / 4;

function render(){
	var str = "";
	for(var i = 0; i < total; i ++){
		str += '<li><img src="./images/' + i + '.png" alt="" style = "height :'+ styleHeight + 'px"></li>';
	}
	$(str).appendTo($wrapper).animate({opacity:1},500);
}
render();
$('ul').on('tap','li',function(){
	var index = activeIndex = $(this).index();
	loadImage(index);
})

function loadImage(index){
	$('.show-image').html("").show();
	var imgStr = './images/' + index + '.png';
	var oImg = new Image();
	oImg.src = imgStr;
	oImg.onload = function(){
		// $('.show-image').append($(oImg));
		var h = this.height,
				w = this.width;
		if(h / w > h_w){
			$(this).appendTo($('.show-image')).css('height','100%').animate({opacity:1},500);
		}else{
			$(this).appendTo($('.show-image')).css('width','100%').animate({opacity:1},500);
		}
	}
}
$('.show-image')
	.on('tap',function(){
		$(this).hide();
	})
	.on('swipeLeft',function(){
		activeIndex ++;
		if(activeIndex > total -1){
			activeIndex = total - 1;
		}else{
			loadImage(activeIndex);
		}
	})
	.on('swipeRight',function(){
		activeIndex --;
		if(activeIndex < 0){
			activeIndex = 0;
		}else{
			loadImage(activeIndex);
		}
	})
