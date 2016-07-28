// JavaScript Document

/*商品列表相关方法，包括：商品列表arttemplate模板，异步请求商品，渲染商品列表*/



$(document).ready(function(){
	/*小图左右滚动*/
	$(".smallimg") .delegate(".smallImgDown","click",function(){
		var pars = $(this).parents(".smallimg");
        var ingList = pars.find(".imgList");
		var nextbtn = pars.find(".smallImgUp");
        var prevbtn = pars.find(".smallImgDown");
        var index = pars.attr("index");
        var curIndex = pars.attr("curindex");
        if (!$(this).hasClass("disabled")) {
            if (--curIndex >= 5) {
                prevbtn.removeClass("disabled");
				nextbtn.removeClass("disabled");
                pars.attr("curindex", curIndex);
                ingList.animate({
                    "left": (curIndex - index) * 37 + "px"
                }, "slow");
            } else {
                $(this).addClass("disabled");
				
            }
        }
		});
		
	  $(".smallimg") .delegate(".smallImgUp","click",function(){
		var pars = $(this).parents(".smallimg");
        var ingList = pars.find(".imgList");
		var prevbtn = pars.find(".smallImgDown");
        var nextbtn = pars.find(".smallImgUp");
        var index = pars.attr("index");
        var curIndex = pars.attr("curindex");
        if (!$(this).hasClass("disabled")) {
            if (++curIndex <= index) {
                nextbtn.removeClass("disabled");
				prevbtn.removeClass("disabled");
                pars.attr("curindex", curIndex);
                ingList.animate({
                    "left": (curIndex - index) * 37 + "px"
                }, "slow");
            } else {
                $(this).addClass("disabled");
				
				
            }
        }
		 });

	
	//服装列表小图切换
	$(".imageMenu li").click(function(){
		$(this).addClass("onlickImg").siblings().removeClass("onlickImg");
		
		});
	
		$(".imageMenu li img").click(function(){ 
				var imgSrc = $(this).attr("src");
				var i = imgSrc.lastIndexOf(".");
				var unit = imgSrc.substring(i);
				imgSrc = imgSrc.substring(0,i);
				var imgSrc_small = imgSrc + "_big"+ unit;
				$(this).parent().parent().parent().parent().parent().find("img:first").attr({"src": imgSrc_small});
				
		});
		
	
});	



