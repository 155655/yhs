$(function(){
	// 顶部导航切换
	$(".h-right li").click(function(){
		$(this).find("a").addClass('active');
		$(this).siblings().find("a").removeClass('active');
	})
})
