(function(){
    
    // USE STRICT
    "use strict";

 var accordionloaded = false; 

    jQuery(document).ready(function(){
    	/*
		Waves.init();
        Waves.attach('.qbutton');
		*/
		
		if(jQuery('.social_carousel_wrapper').length){
			jQuery('.social_carousel_wrapper').each(function(){
				jQuery(this).find('.social_carousel').carouFredSel({
					circular: true,
					responsive: true,
					scroll : {
						items           : 1,
						duration        : 1000,
						pauseOnHover    : false
					},
					items: {
						width: 500,
						visible: {
							min: 1,
							max: 4
						}
					},
					auto: false,
					mousewheel: false,
					swipe: {
						onMouse: true,
						onTouch: true
					},
					prev: {
						button: function() {
							return jQuery(this).parents().eq(1).find(".prev2");
						}
					},
					next: {
						button: function() {
							return jQuery(this).parents().eq(1).find(".next2");
						}
					},
					
					onCreate : function( data ) {
						console.log(jQuery(this).parents(".social_carousel_wrapper"));
						jQuery(this).parents(".social_carousel_wrapper").removeClass("social_carousel-beforeLoad")
					}				
					

				}).animate({'opacity': 1},1000);
			});  
			social_carousel_heights();			
		}
		
		
		
		
		if(jQuery('.service_carousel_wrapper').length){
			jQuery('.service_carousel_wrapper').each(function(){
				jQuery(this).find('.service_carousel').carouFredSel({
					circular: true,
					responsive: true,
					scroll : {
						items           : 1,
						duration        : 1000,
						pauseOnHover    : false
					},
					items: {
						width: 300,
						visible: {
							min: 1,
							max: 6
						}
					},
					auto: false,
					mousewheel: false,
					swipe: {
						onMouse: true,
						onTouch: true
					},
					prev: {
						button: function() {
							return jQuery(this).parents().eq(1).find(".prev2");
						}
					},
					next: {
						button: function() {
							return jQuery(this).parents().eq(1).find(".next2");
						}
					},
					
					
					

				}).animate({'opacity': 1},1000);
			});  
			service_carousel_heights();			
		}
		
		
		
		
		/*########THIS IS DEFAULT CAROUSAL SET UP#########################*/
		if(jQuery('.dt_carousel_wrapper').length){
			jQuery('.dt_carousel_wrapper').each(function(){
				jQuery(this).find('.dt_carousel').carouFredSel({
					circular: true,
					responsive: true,
					scroll : {
						items           : 1,
						duration        : 1000,
						pauseOnHover    : false
					},
					items: {
						width: 400,
						visible: {
							min: 1,
							max: 6
						}
					},
					auto: false,
					mousewheel: false,
					swipe: {
						onMouse: true,
						onTouch: true
					},
					prev: {
						button: function() {
							return jQuery(this).parents().eq(1).find(".prev2");
						}
					},
					next: {
						button: function() {
							return jQuery(this).parents().eq(1).find(".next2");
						}
					},
					
					
					

				}).animate({'opacity': 1},1000);
			});  
			dt_carousel_heights();			
		}
		
		
		jQuery("#cssmenu").menumaker({
		   title: "Menu",
		   format: "dropdown"
		});
		
		
		
		
		
    });

jQuery(window).bind("load", function() {

jQuery( ".accordion" ).on( "accordionactivate", function( event, ui ) {

if(!accordionloaded){
	//alert("false");
	accordionloaded = true;
	return;
}

		// console.log(ui.newHeader);
		// alert('accordion');
		// var scrollPos = ui.newHeader.scrollTop();
		// console.log(jQuery(ui.newHeader).offset().top);
  //       var topPos = jQuery(ui.newHeader).offset().top;

		// ui.newHeader.scrollTop(topPos + 40);

		var scrollTop = jQuery(this).scrollTop();
        if(!ui.newHeader.length) return;
        var top = jQuery(ui.newHeader).offset().top;
        jQuery("html,body").animate({
            scrollTop: scrollTop + top - 80
        }, "fast");
	});
	
		});	
	
	/*FOR MENU*/
	
	jQuery.fn.menumaker = function(options) {
      
      var cssmenu = jQuery(this), settings = jQuery.extend({
        title: "Sub Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
		var menutitle = jQuery(this).attr('data-name');
		if(menutitle.length < 1) {
			var menutitle = 'Sub Menu';
		}
        cssmenu.prepend('<div id="menu-button">' + menutitle + '</div>');
        jQuery(this).find("#menu-button").on('click', function(){
          jQuery(this).toggleClass('menu-opened');
          var mainmenu = jQuery(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        /*resizeFix = function() {
          if (jQuery( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if (jQuery(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();*/
        return jQuery(window).on('resize', function() {
			if (jQuery( window ).width() > 768) {
				cssmenu.find('ul').show();
			  }

			  if (jQuery(window).width() <= 768) {
				cssmenu.find('ul').hide().removeClass('open');
			  }
			
		});
		

      });
  };
  
  
  
	
	
	

  
  
  
  
  
  
	
	
	
})(jQuery);



function social_carousel_heights(){
    if(jQuery('.social_carousel_wrapper').length){
        jQuery('.social_carousel').each(function(){
            jQuery(this).parents('.caroufredsel_wrapper').css({'height' : (jQuery(this).find('li').outerHeight()+45) + 'px'});
			jQuery('.list_btn1 .prev2').css({'height' : (jQuery(this).find('li').outerHeight() + 2) + 'px'});
			jQuery('.list_btn1 .next2').css({'height' : (jQuery(this).find('li').outerHeight() + 2) + 'px'});
			jQuery('.list_btn1 .prev2').css({'width' : (jQuery(this).find('li').outerWidth() / 2 + 13) + 'px'});
			jQuery('.list_btn1 .next2').css({'width' : (jQuery(this).find('li').outerWidth() / 2 + 13) + 'px'});
        });
    }    
}

function service_carousel_heights(){
    if(jQuery('.service_carousel_wrapper').length){
        jQuery('.service_carousel').each(function(){
            jQuery(this).parents('.caroufredsel_wrapper').css({'height' : (jQuery(this).find('li').outerHeight()+40) + 'px'});
			jQuery('.list_btn1 .prev2').css({'height' : (jQuery(this).find('li').outerHeight() + 2) + 'px'});
			jQuery('.list_btn1 .next2').css({'height' : (jQuery(this).find('li').outerHeight() + 2) + 'px'});
        });
    }    
}

function dt_carousel_heights(){
    if(jQuery('.dt_carousel_wrapper').length){
        jQuery('.dt_carousel').each(function(){
            jQuery(this).parents('.caroufredsel_wrapper').css({'height' : (jQuery(this).find('li').outerHeight()+70) + 'px'});
			jQuery('.list_btn1 .prev2').css({'height' : (jQuery(this).find('li').outerHeight() + 2) + 'px'});
			jQuery('.list_btn1 .next2').css({'height' : (jQuery(this).find('li').outerHeight() + 2) + 'px'});
			if (jQuery( window ).width() > 480) {
				jQuery('.dt_carousel').css({'margin-left' : '-' + (jQuery(this).find('li').outerWidth() / 2 + 13) + 'px'});
			}
			jQuery('.list_btn1 .prev2').css({'width' : (jQuery(this).find('li').outerWidth() / 2 + 13) + 'px'});
			jQuery('.list_btn1 .next2').css({'width' : (jQuery(this).find('li').outerWidth() / 2 + 13) + 'px'});
        });
    }    
}

jQuery(function() {
	if(jQuery('span.stars').length > 0) {
		jQuery('span.stars').stars();
	}    
});

jQuery.fn.stars = function() {
    return jQuery(this).each(function() {
        // Get the value
        var val = parseFloat(jQuery(this).html());
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 26;
        // Create stars holder
        var $span = jQuery('<span />').width(size);
        // Replace the numerical value with stars
        jQuery(this).html($span);
    });
}


jQuery(function() {
	/*jQuery(".qode_carousels .caroufredsel_wrapper .slides").carouFredSel({
		prev : { 
			button : ".foo2_prev",
			key : "left"
		},

		next : { 
			button : ".foo2_next",
			key : "right"
		}
	});*/
	
	jQuery('.qode_carousels').each(function(){
		var carousalhtml = '';
		carousalhtml = '<a class="foo2_prev" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a><a class="foo2_next" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
		jQuery( this ).prepend( carousalhtml );
		//alert(carousalhtml);
		var height = jQuery(this).find('li').outerHeight() + 2;
		var width = jQuery(this).find('li').outerWidth() / 2 + 13;
		jQuery('.foo2_prev').css({'height' : height + 'px'});
		jQuery('.foo2_next').css({'height' : height + 'px'});
		jQuery('.foo2_prev').css({'width' : width + 'px'});
		jQuery('.foo2_next').css({'width' : width + 'px'});
		jQuery('.foo2_prev').css({'left' : -40, 'position' : 'absolute', 'z-index' : '99', 'top' : '46%'});
		jQuery('.foo2_next').css({'right' : -40, 'position' : 'absolute', 'z-index' : '99', 'top' : '46%'});
	});
	
	
	jQuery(".foo2_prev").click(function() {
		jQuery(".slides").trigger("prev", 1);
		event.preventDefault();
	});
	jQuery(".foo2_next").click(function() {
		//jQuery(".slides").trigger("next", 1);
		jQuery('.slides').trigger('next');
		
		
		event.preventDefault();
	});

	
});


jQuery(function() {
	// Smoth scroll
	if(window.location.hash.length > 0){
		if(window.location.hash == '#formfillup') {
			jQuery('html, body').animate({
				scrollTop: jQuery( window.location.hash ).offset().top  - 140
			}, 500);
			return false;
		} else {
			jQuery('html, body').animate({
				scrollTop: jQuery( window.location.hash ).offset().top  - 70
			}, 500);
			return false;
		}
		
	}
	jQuery("#FormFillUpId").click(function() {
		jQuery('html, body').animate({
			scrollTop: jQuery("#formfillup").offset().top  - 140
		}, 500);
	});
	
	// jQuery(".ui-accordion-header").click(function() {
	// 	alert('Ok!');
	// 	jQuery('html, body').animate({
	// 		scrollTop: jQuery(this).offset().top  - 40
	// 	}, 500);
	// });
	
	
	var video = document.getElementsByTagName('video');
	var videoLength = document.getElementsByTagName('video').length;

	jQuery("#videocover").click(function() {
	var sourcelength = jQuery('.video').children("source").length;
	//console.log(sourcelength);
	if(!jQuery(".video").hasClass("videoloaded")){
    jQuery('.video source').each(function(index){
    	var dataSrc = jQuery(this).attr("data-src");
    	console.log(dataSrc);
    	console.log(jQuery(this));
    	jQuery(this).attr("src",dataSrc);
    	console.log(index);
    	if(index == 2){
    	var video = jQuery("video").get(0);
    	video.load();
		video.play();
		jQuery(".video").addClass("videoloaded");
    	jQuery("#videocover").css("visibility", "hidden");
    	jQuery("#videocover").addClass("videocover-disabled")
    	}
    });
	}else{
		var video = jQuery("video").get(0);
    	//video.load();
		video.play();
		jQuery("#videocover").css("visibility", "hidden");
	}
    	return false;
});

jQuery("video").bind("pause ended", function() {
    jQuery("#videocover").css("visibility", "visible");
});

	//}
}); 

