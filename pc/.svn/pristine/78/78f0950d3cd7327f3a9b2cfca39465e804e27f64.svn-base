// JavaScript Document
/*搜索点击变色*/

/*本店搜索*/
$('.search_shop_input').ready(function(){
	$(".search_shop_input").focus(function(){
   this.value='';
  });
  $(".search_shop_input").blur(function(){
    if(this.value==''){this.value='本店搜索'};
  });
});

/*990价位搜索*/
$('.search_price_input').ready(function(){
	$(".search_price_input").focus(function(){
   		this.value='';
   		$(".search_price_a").show();
  	});
	
  	$(".search_price_input").blur(function(){
    	if(this.value==''){this.value='¥'};
  });
  
    $(".search_price_a").mouseout(function(){
	  	$(this).hide();
	 });
   	$(".search_price_a").mouseover(function(){
	  	$(this).show();
	 });
  
  $(".search_price_a a").click(function(){
		$(this).parent().hide();
	});
});





/*220价位搜索*/
$('.search_price_input_2').ready(function(){
	$(".search_price_input_2").focus(function(){
   this.value='';
  });
  $(".search_price_input_2").blur(function(){
    if(this.value==''){this.value='¥'};
  });
 });