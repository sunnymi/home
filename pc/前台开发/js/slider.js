;(function($){
		$.fn.NewnavBar = function(options){
		var defaults = {
			trigger : "",
			cont : "",
			item:"",
			showNums:"",  
			auto:false, 
			imgbox:"" ,
			Prev:"",
			Next:"",
			Newtime:''
			
		};
		var op = $.extend({},defaults,options);
		this.each(function(){
			var $this = $(this),
			    $Item = $(op.item),
			    $Newbtn = $this.find(op.trigger),
			    $showContent = $this.find($Item),
			    $content =$(op.cont),
			    $imgbox =$(op.imgbox),
			    $Prev =$(op.Prev),
			    $Next =$(op.Next),
                $img = $Item.find('img'),

			    $slider = $content.parent().parent(),
                timeInterval ="",
			    SliderW = $slider.width(),
			    time = op.Newtime,
                index = $Newbtn.find(op.trigger).index(this),
                lens =  $imgbox.find(op.trigger).length,
                wid = $imgbox.find(op.trigger).width()*lens+18,
                marLeft = wid/2,
                Num = $Item.length;
               // console.log( SliderW)
               setTimeout(serch,5000)
               function serch(){
               	    $Item.find('img').each(function(){
                 

					ImgW =  $(this).outerWidth(true);
					if(ImgW >SliderW){
						$(this).css({
							'position': 'relative',
							'display': 'block',
							'left':'50%',
                 			'margin-left':-ImgW/2
                 		})
                	}
                })
               }
              

                $Item.css({
                 	"width":SliderW
                 });
			    $imgbox.css({
			      	'width':wid,
			      	'margin-left':-marLeft
			      });
			   var bigwidth = SliderW*op.showNums;
			    $content.css({
			    	'width':bigwidth*Num 
			    })
			  
                 
            function autoMove(){
            	  var index =  $imgbox.find('.cur').index();
	              var len = $Newbtn.length;
	              index++;
	             // console.log(index)
	           	  if(index==len){
		             index = 0
	             }
	          
	 $content.stop(false,true).animate({left:-bigwidth*index},800); 
	 $Newbtn.eq(index).addClass('cur').siblings().removeClass('cur');
	
	}
	     if(timeInterval!== null){
            var auto = function(){
            	 timeInterval = setInterval(function(){
                   autoMove();
                },time)
             }
            }
            if(op.auto){
                auto();
            }
             $Newbtn.bind({
             	mouseenter:function(){
             		if(op.auto){
             			clearInterval(timeInterval);
             			timeInterval = null;
             		}
			
				var index = $Newbtn.index(this);
				$Newbtn.eq(index).addClass('cur').siblings().removeClass('cur');
				$content.stop(false,true).animate({left:-bigwidth*index},800);
			},
			 mouseleave:function(){
                if(op.auto){
                auto();
            }
                   
                }
            })
           $showContent.bind({
             	mouseenter:function(){
             		if(op.auto){
             			clearInterval(timeInterval);
             			timeInterval = null;
             		}
			},
			 mouseleave:function(){
                if(op.auto){
                auto();
            }
                }
            })

              $Prev.bind({
             mouseenter:function(){
             		if(op.auto){
             			clearInterval(timeInterval);
             			timeInterval = null;
             		}
			},
				mousedown:function(){
	             	
	             	autoMove()
			},
			 mouseleave:function(){
               if(op.auto){
                auto();
            }
                }
            })
                $Next.bind({
             mouseenter:function(){
             		if(op.auto){
             			clearInterval(timeInterval);
             			timeInterval = null;
             		}
			},
				mousedown:function(){
	             
	              var index =  $imgbox.find('.cur').index();
	              var len = $Newbtn.length;
	              index--;
	           	  if(index<0){
		          index=len-1;	
	             }
	          
	 $content.stop(false,true).animate({left:-bigwidth*index},800); 
	 $Newbtn.eq(index).addClass('cur').siblings().removeClass('cur');
  },
			 mouseleave:function(){
                if(op.auto){
                auto();
            }
                   
                }

            })

})
		return this;
	}
})(jQuery);