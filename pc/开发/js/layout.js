$(function(){
	/*拖拽*/
	$("#sortable,.sortables,.mk,.drag0").sortable({
                    scroll:false
                     
              })
	//$('.dragSon').draggable({ cursorAt:{top:0,left:0}});
	 
	

   /*模块上移下移显示隐藏1  */
   $(document).on('mouseenter','.curyel',function(){
     $(this).find('.location').show();
     $(this).find('.location').css({"opacity":"1"})
     return false;
   });
   $(document).on('mouseleave','.curyel',function(){
     $(this).find('.location').hide();
     $(this).find('.location').css({"opacity":"0"});
      return false;
   });
  

   /*布局删除模块弹窗*/
    $(document).on("click",".overall .off",function(){
      
      var str = '<div class="dialHold" id="removeM"><h3><span>提示</span><span id="closed" class="closed"></span></h3><div><p>您确定要删除模块？</p><div><a href="#" id="yesbtn" class="yesbtn">确定</a><a href="#" id="nobtn" class="nobtn">取消</a></div></div></div>';
      $(this).parent().parent().removeClass('curyel');
      $(this).parent().parent().append(str);
      var h=$(document.body).outerHeight(true);
      $('.dialWarp').css({"height":h});
      $('.dialWarp').show();
      $('.dragCons').removeClass('curD');
      $('.dragSon>div>div').removeClass('curD2');
      $('.dragCons .dragSon').removeClass('curD3');
      $('.dragCons .dragSon1').removeClass('curD3');
      $('.dragSon1>div>div').removeClass('curD2');
      $('#removeM').show();
      $('.location').css({"opacity":"0"});
      return false;
    });

    

     /*是否删除模块*/
     $(document).on("click","#yesbtn",function(){
         $(this).parent().parent().parent().parent().remove();
          $(this).parent().parent().parent().parent().addClass('curyel');
         $('#removeM').remove();
         $('.dialWarp').hide();
         $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
        
        
     return false;


     });
     /*取消删除模块*/
    $(document).on("click"," #nobtn",function(){
       $(this).parent().parent().parent().parent().addClass('curyel');
         $('#removeM').remove();
         $('.dialWarp').hide();
          $('.location').css({"opacity":"0"}) ;
          $('.dragCons').addClass('curD');
        
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
        
        
         return false;
     });
     /*取消删除模块*/
    $(document).on("click","#closed",function(){
       $(this).parent().parent().parent().addClass('curyel');
         $('#removeM').remove();
         $('.dialWarp').hide();
          $('.location').css({"opacity":"0"}) ;
          $('.dragCons').addClass('curD');
        
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
        
        
         return false;
     });
     /*删除布局 判断是否有模块*/
     $(document).on("click",".bcc",function(){
      
      var modled = $(this).parent().next('.dragSon').find('.sortables ').children().html();
     
     
      if(modled){
        $('.dragCons').removeClass('curD');
        $('.dragSon>div>div').removeClass('curD2');
        $('.dragCons .dragSon').removeClass('curD3');
        $('.dragCons .dragSon1').removeClass('curD3');
        $('.dragSon1>div>div').removeClass('curD2');
         $('#modled').show();
          var h=$(document.body).outerHeight(true);
         $('.dialWarp').css({"height":h});
         $('.dialWarp').show();
        
         return false;
      }else{

        var str = '<div class="dialHold" id="removeB"><h3><span>提示</span><span id="closedB" class="closed"></span></h3><p>您确定要删除该布局吗？</p><p><a href="#" id="yesbtnB" class="yesbtn">确定</a><a href="#" id="nobtnB" class="nobtn">取消</a></p></div>';
      
      $(this).parent().parent().append(str);
       var h=$(document.body).outerHeight(true);
      $('.dialWarp').css({"height":h});
      $('.dialWarp').show();
      $('#removeB').show();
      $('.dragCons').removeClass('curD');
        $('.dragSon>div>div').removeClass('curD2');
        $('.dragCons .dragSon').removeClass('curD3');
        $('.dragCons .dragSon1').removeClass('curD3');
        $('.dragSon1>div>div').removeClass('curD2');
      return false;

      }
    });

    /*是否删除布局 */    
  
    
    $(document).on("click"," #yeshas,#nohas, #hasM",function(){
         $('#removeB').remove();
         $('.dialWarp').hide();
         $('#modled').hide();
         /*数据配置模块开始*/
         $('#shopSign').hide();
         $('#shopSign3').hide();
         /*数据配置模块结束*/
         $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
         return false;
     });
   
     $(document).on("click","#yesbtnB",function(){
         $(this).parent().parent().parent().remove();
         $('#removeM').remove();
         $('.dialWarp').hide();
         $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
        
     return false;


     });
     /*取消删除布局*/
    $(document).on("click","#nobtnB, #closedB",function(){
         $('#removeB').remove();
         $('.dialWarp').hide();
          $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
         return false;
     });

   /*布局上移下移关闭效果 */  
     $(document).on("click",".overall .top",function(){
     
     var Up = $(this).parent().parent().prev();
     var isNull = $(this).parent().parent().prev().html();
     var str = $(this).parent().parent();
      if(!isNull == false){
         str.after(Up);
        
      }else{
        alert(2)
      }
      return false;
      
  });
       $(document).on("click",".overall .down",function(){
    
     var Down = $(this).parent().parent().next();
     var isNull = $(this).parent().parent().next().html();
     var str = $(this).parent().parent();
      if(!isNull == false){
         str.before(Down);
      }else{
      
      }
     return false;
    
 }); 
      
 /*点击添加模块弹窗*/ 
  $(document).on('click','.mkspan',function(){
     var h=$(document.body).outerHeight(true);
      $('.dialWarp').css({"height":h});
    $('.dialWarp').show();
   
    var molde1 ='<div class="dial"id="mk"><h3><span class="Upload">模块列表</span><span class="closed"></span></h3><div class="dialCon"><h4 class="navH4"><a href="##"class="spanCur">常用模块</a><a href="##"class="centerA">商品陈列</a><a href="##">促销相关</a><a href="##">公司相关</a></h4><div id="selectpro"><div class="skucon divCur"><ul><li><span class="frist">图片轮播</span><span>主要应用于活动和商品的推广，可在模块设置里添加图片和图片链接地址。</span></li><li><span class="frist">店铺券</span><span>设置店铺提供给买家领取的优惠券。</span></li><li><span class="frist">商品推荐</span><span>您可通过输入SKU ID录入想要主推的商品，打造店铺的精品商品区。</span></li><li><span class="frist">自定义内容</span><span>您可以在里面自由的发挥，如编写html代码、css代码等。</span></li></ul></div><!--店铺分类--><div class="skucon"><li><span class="frist">商品推荐</span><span>您可通过输入SKU ID录入想要主推的商品，打造店铺的精品商品区。</span></li><li><span class="frist">搜索框</span><span>提供搜索输入框，默认关键字和热词推荐。</span></li><li><span class="frist">分页显示商品</span><span>以分页方式向用户展现商品。支持按sku展示和按product展示两种形式，选择按product展示，每个主商品下支持多个从商品的展示。</span></li></div><!--优惠劵--><div class="skucon"><li><span class="frist">图片轮播</span><span>主要应用于活动和商品的推广，可在模块设置里添加图片和图片链接地址。</span></li><li><span class="frist">自定义内容</span><span>您可以在里面自由的发挥，如编写html代码、css代码等。</span></li><li><span class="frist">店铺券</span><span>设置店铺提供给买家领取的优惠券。</span></li><li><span class="frist">主导航模块</span><span>当有多个页面时，可以添加页面的链接地址到导航中，供访客快速切换浏览。</span></li></div><div class="skucon"><li><span class="frist">店招模块</span><span>此模块可以设置店铺logo、店招背景图等信息。</span></li><li><span class="frist">店铺简介</span><span>此模块用于设置店铺的基本信息、联系电话、在线客服等服务信息。</span></li><li><span class="frist">品牌公告</span><span>此模块数据是从后台[我的店铺]-[店铺公告管理]调取过来，在装修中不能设置。</span></li></div></div></div></div>';
   
    var parent1 = $(this).parent().parent();
    parent1.append(molde1);
    $('.dragCons').removeClass('curD');
      $('.dragSon>div>div').removeClass('curD2');
      $('.dragCons .dragSon').removeClass('curD3');
      $('.dragCons .dragSon1').removeClass('curD3');
      $('.dragSon1>div>div').removeClass('curD2');
      return false;
  });

    $(document).on('click','.add',function(){
       var h=$(document.body).outerHeight(true);
      $('.dialWarp').css({"height":h});
    $('.dialWarp').show();
    var molde2 ='<div class="dial"id="mk2"><h3><span class="Upload">模块列表</span><span class="closed"></span></h3><div class="dialCon"><h4 class="navH4"><a href="##"class="spanCur">常用模块</a><a href="##"class="centerA">商品陈列</a><a href="##">促销相关</a><a href="##">公司相关</a></h4><div id="selectpro"><div class="skucon divCur"><ul><li><span class="frist">高级商品推荐</span><span>这个模块展现商品的形式更自由、操作更便捷，模块容纳商品数量更多。</span></li><li><span class="frist">图片轮播</span><span>主要应用于活动和商品的推广，可在模块设置里添加图片和图片链接地址。</span></li><li><span class="frist">店铺券</span><span>设置店铺提供给买家领取的优惠券。</span></li><li><span class="frist">商品推荐</span><span>您可通过输入SKU ID录入想要主推的商品，打造店铺的精品商品区。</span></li><li><span class="frist">自定义内容</span><span>您可以在里面自由的发挥，如编写html代码、css代码等。</span></li></ul></div><!--店铺分类--><div class="skucon"><li><span class="frist">高级商品推荐</span><span>这个模块展现商品的形式更自由、操作更便捷，模块容纳商品数量更多。</span></li><li><span class="frist">商品推荐</span><span>您可通过输入SKU ID录入想要主推的商品，打造店铺的精品商品区。</span></li><li><span class="frist">搜索框</span><span>提供搜索输入框，默认关键字和热词推荐。</span></li><li><span class="frist">店内分类</span><span>展示商家在后台商品管理中添加的商品类目，用户点击这些商品类目名称可以查看该类目下的所有商品。</span></li><li><span class="frist">分页显示商品</span><span>以分页方式向用户展现商品。支持按sku展示和按product展示两种形式，选择按product展示，每个主商品下支持多个从商品的展示。</span></li></div><!--优惠劵--><div class="skucon"><li><span class="frist">图片轮播</span><span>主要应用于活动和商品的推广，可在模块设置里添加图片和图片链接地址。</span></li><li><span class="frist">自定义内容</span><span>您可以在里面自由的发挥，如编写html代码、css代码等。</span></li><li><span class="frist">店铺券</span><span>设置店铺提供给买家领取的优惠券。</span></li><li><span class="frist">主导航模块</span><span>当有多个页面时，可以添加页面的链接地址到导航中，供访客快速切换浏览。</span></li></div><div class="skucon"><li><span class="frist">店招模块</span><span>此模块可以设置店铺logo、店招背景图等信息。</span></li><li><span class="frist">店铺简介</span><span>此模块用于设置店铺的基本信息、联系电话、在线客服等服务信息。</span></li><li><span class="frist">品牌公告</span><span>此模块数据是从后台[我的店铺]-[店铺公告管理]调取过来，在装修中不能设置。</span></li></div></div></div></div>';
    var parent2 = $(this).parent().parent();
     $(this).parent().parent().removeClass('curyel');
     $('.location').css({"opacity":"0"});
    parent2.append(molde2);
   // $('#mk').show();
    $('.dragCons').removeClass('curD');
      $('.dragSon>div>div').removeClass('curD2');
      $('.dragCons .dragSon').removeClass('curD3');
      $('.dragCons .dragSon1').removeClass('curD3');
      $('.dragSon1>div>div').removeClass('curD2');

      return false;
  });
   $(document).on('click','.closed',function(){
     $('.dialWarp,#bj').hide();
     $('#mk2').remove();
      $('#mk').remove();
      $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
         return false;
  });

 /*add选择模块弹窗隐藏*/  
   $(document).on('click','#mk2 .divCur li',function(){
  
       
     $('.dialWarp').hide();
     var that1 = $(this).parent().parent().parent().parent().parent().parent().parent();
    
     var html1 = $(this).find('.frist').html();
     var str1 ='<div class="curD2 yell curyel ">'+html1+'<h4 class="location"><span class="top"></span><span class="down"></span><span class="off"></span><span class="add"></span></h4></div>'
  that1.find('.mkspan').parent().remove();
  that1.find('.mkspan').remove();
  that1.append(str1);
  $("#sortable,.sortables,.mk,.drag0").sortable({
                    scroll:false
  })
 $('#mk2').remove();
  $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
         return false;
  });

   /*mk选择模块弹窗隐藏*/  
   $(document).on('click','#mk .divCur li',function(){
   
     
     $('.dialWarp').hide();
     var that2 = $(this).parent().parent().parent().parent().parent().parent();
     var html2 = $(this).find('.frist').html();
     var str2 ='<div class="curD2 yell curyel ">'+html2+'<h4 class="location"><span class="top"></span><span class="down"></span><span class="off"></span><span class="add"></span></h4></div>'
 
   that2.append(str2);
   $("#sortable,.sortables,.mk,.drag0").sortable({
                    scroll:false
})
   that2.find('.mkspan').parent().remove();
   that2.find('.mkspan').remove();
  $('#mk').remove();
  $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
         return false;
  });
  /*点击添加布局弹窗*/
 
    $(document).on('click','.bj',function(){
       var h=$(document.body).outerHeight(true);
      $('.dialWarp').css({"height":h});
    $('.dialWarp').show();
    $('#bj').show();
     $('.dragCons').removeClass('curD');
      $('.dragSon>div>div').removeClass('curD2');
      $('.dragCons .dragSon').removeClass('curD3');
      $('.dragCons .dragSon1').removeClass('curD3');
      $('.dragSon1>div>div').removeClass('curD2');
      return false;
  });
  
 /*模块弹窗活动tab*/   
      $(document).on('click','.navH4>a',function(){
     	$(this).addClass("spanCur").siblings().removeClass('spanCur');
     	$("#selectpro>div").eq($(this).index()).addClass('divCur').siblings().removeClass('divCur');
    });
   /*模块悬停*/ 
   $('.skucon li').mouseenter(function(){
     $(this).find('.frist').addClass('second')
   }).mouseleave(function(){
     $(this).find('.frist').removeClass('second')
   });
  
	/*布局悬停*/ 
  $('.block li').mouseenter(function(){
     $(this).find('.left,.right,.center,div').addClass('yel')
   }).mouseleave(function(){
     $(this).find('.left,.right,.center,div').removeClass('yel')
   });

 /*添加布局选择*/  
  
 $(document).on('click','.block li',function(){
   var index = $(this).index()+1;
   $('#bj').hide();
   $('.dialWarp').hide();
   var str1 ='<div class="overall ui-state-default mod1"><p><span class="drag"></span><span class="bcc"></span></p><div class="sortables ui-sortable"><div class="dragSon curD3 "><span class="font">通栏100%</span><div class="curD2 mk ui-sortable"><div><span class="mkspan">添加模块</span></div></div></div></div></div>'
   var str2 ='<div class="overall ui-state-default layoutL mod2"><p><span class="drag"></span><span class="bcc"></span></p><span class="font">通栏990px</span><div class="sortables"><div class="dragSon1 curD3"><div class="curD2 mk bor"><div><span class="mkspan">添加模块</span></div></div></div></div></div>'
   var str3 ='<div class="overall ui-state-default layoutL mod3"><p><span class="drag"></span><span class="bcc"></span></p><span class="font">左右栏布局（200/780）</span><div class="sortables"><div class="dragSon1 curD3 yell "><div class="curD2 mk divleft1"><div><span class="mkspan">添加模块</span></div></div><div class="curD2 mk divright1"><div><span class="mkspan">添加模块</span></div></div></div></div></div>'
   var str4 ='<div class="overall ui-state-default layoutL mod4"><p><span class="drag"></span><span class="bcc"></span></p><span class="font">左右栏布局（200/780）</span><div class="sortables"><div class="dragSon1 curD3 yell "><div class="curD2 mk divright2"><div><span class="mkspan">添加模块</span></div></div><div class="curD2 mk divleft2"><div><span class="mkspan">添加模块</span></div></div></div></div></div>'
   var str5 ='<div class="overall ui-state-default layoutL mod5"><p><span class="drag"></span><span class="bcc"></span></p><div class="sortables"><div class="dragSon1 curD3 yell "><span class="font">左右栏布局（200/780）</span><div class="curD2 mk divleft1"><div><span class="mkspan">添加模块</span></div></div><div class="curD2 mk divcenter3"><div><span class="mkspan">添加模块</span></div></div><div class="curD2 mk divright3"><div><span class="mkspan">添加模块</span></div></div></div></div></div>'
   var str6 ='<div class="overall ui-state-default layoutL mod6"><p><span class="drag"></span><span class="bcc"></span></p><span class="font">左右栏布局（200/780）</span><div class="sortables"><div class="dragSon1 curD3 yell "><div class="curD2 mk divleft1"><div><span class="mkspan">添加模块</span></div></div><div class="curD2 mk divcenter4"><div><span class="mkspan">添加模块</span></div></div><div class="curD2 mk divright4"><div><span class="mkspan">添加模块</span></div></div></div></div></div>'
   if(index==1){

      $('#life').before(str1);
      $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
         return false;

   }else if(index==2){
      $('#life').before(str2);
      $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
          return false;
   }else if(index==3){
      $('#life').before(str3);
      $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
          return false;
   }else if(index==4){
      $('#life').before(str4);
      $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
          return false;
   }else if(index==5){
      $('#life').before(str5);
      $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
          return false;
   }else{
      $('#life').before(str6);
      $('.dragCons').addClass('curD');
         $('.dragSon>div>div').addClass('curD2');
         $('.dragSon1>div>div').addClass('curD2');
         $('.dragCons .dragSon').addClass('curD3');
         $('.dragCons .dragSon1').addClass('curD3');
          return false;
   }
   
 });

 

})