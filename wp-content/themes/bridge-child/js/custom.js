function social_carousel_heights(){jQuery(".social_carousel_wrapper").length&&jQuery(".social_carousel").each(function(){jQuery(this).parents(".caroufredsel_wrapper").css({height:jQuery(this).find("li").outerHeight()+55+"px"}),jQuery(".list_btn1 .prev2").css({height:jQuery(this).find("li").outerHeight()+2+"px"}),jQuery(".list_btn1 .next2").css({height:jQuery(this).find("li").outerHeight()+2+"px"}),jQuery(".list_btn1 .prev2").css({width:jQuery(this).find("li").outerWidth()/2+13+"px"}),jQuery(".list_btn1 .next2").css({width:jQuery(this).find("li").outerWidth()/2+13+"px"})})}function service_carousel_heights(){jQuery(".service_carousel_wrapper").length&&jQuery(".service_carousel").each(function(){jQuery(this).parents(".caroufredsel_wrapper").css({height:jQuery(this).find("li").outerHeight()+50+"px"}),jQuery(".list_btn1 .prev2").css({height:jQuery(this).find("li").outerHeight()+2+"px"}),jQuery(".list_btn1 .next2").css({height:jQuery(this).find("li").outerHeight()+2+"px"})})}function dt_carousel_heights(){jQuery(".dt_carousel_wrapper").length&&jQuery(".dt_carousel").each(function(){jQuery(this).parents(".caroufredsel_wrapper").css({height:jQuery(this).find("li").outerHeight()+80+"px"}),jQuery(".list_btn1 .prev2").css({height:jQuery(this).find("li").outerHeight()+2+"px"}),jQuery(".list_btn1 .next2").css({height:jQuery(this).find("li").outerHeight()+2+"px"}),jQuery(window).width()>480&&jQuery(".dt_carousel").css({"margin-left":"-"+(jQuery(this).find("li").outerWidth()/2+13)+"px"}),jQuery(".list_btn1 .prev2").css({width:jQuery(this).find("li").outerWidth()/2+13+"px"}),jQuery(".list_btn1 .next2").css({width:jQuery(this).find("li").outerWidth()/2+13+"px"})})}!function(){"use strict";var e=!1;jQuery(document).ready(function(){jQuery(".social_carousel_wrapper").length&&(jQuery(".social_carousel_wrapper").each(function(){jQuery(this).find(".social_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:1e3,pauseOnHover:!1},items:{width:500,visible:{min:1,max:4}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev2")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next2")}},onCreate:function(e){console.log(jQuery(this).parents(".social_carousel_wrapper")),jQuery(this).parents(".social_carousel_wrapper").removeClass("social_carousel-beforeLoad")}}).animate({opacity:1},1e3)}),social_carousel_heights()),jQuery(".service_carousel_wrapper").length&&(jQuery(".service_carousel_wrapper").each(function(){jQuery(this).find(".service_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:1e3,pauseOnHover:!1},items:{width:300,visible:{min:1,max:6}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev2")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next2")}}}).animate({opacity:1},1e3)}),service_carousel_heights()),jQuery(".dt_carousel_wrapper").length&&(jQuery(".dt_carousel_wrapper").each(function(){jQuery(this).find(".dt_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:1e3,pauseOnHover:!1},items:{width:400,visible:{min:1,max:6}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev2")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next2")}}}).animate({opacity:1},1e3); console.log("dt_carousel") }),dt_carousel_heights()),jQuery("#cssmenu").menumaker({title:"Menu",format:"dropdown"})}),jQuery(window).bind("load",function(){

	jQuery(".accordion").on("accordionactivate",function(r,t){if(!e)return void(e=!0);var i=jQuery(this).scrollTop();if(t.newHeader.length){var s=jQuery(t.newHeader).offset().top;jQuery("html,body").animate({scrollTop:i+s-80},"fast")}}); 

	if(!jQuery("body").hasClass("page-template-templatesformconfirmation-php")){		
	window.$zopim = function(d,s){var z=$zopim=function(c){z._.push(c)
		console.log(c);
		alert(c);
	},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.setAttribute('charset','utf-8');
$.src='//v2.zopim.com/?NJVdD1uUjFJQKnG85JTMG3wrUnm21kED';z.t=+new Date;$.
type='text/javascript';e.parentNode.insertBefore($,e)}
window.$zopim(document,'script'); 
	}
}),jQuery.fn.menumaker=function(e){var r=jQuery(this),t=jQuery.extend({title:" ",format:"dropdown",sticky:!1},e);return this.each(function(){var e=jQuery(this).attr("data-name");if(e ===  undefined){var e=" ";}if(e.length<1)var e=" ";return r.prepend('<div id="menu-button">'+e+"</div>"),jQuery(this).find("#menu-button").on("click",function(){jQuery(this).toggleClass("menu-opened");var e=jQuery(this).next("ul");e.hasClass("open")?e.hide().removeClass("open"):(e.show().addClass("open"),"dropdown"===t.format&&e.find("ul").show())}),t.sticky===!0&&r.css("position","fixed"),jQuery(window).on("resize",function(){jQuery(window).width()>768&&r.find("ul").show(),jQuery(window).width()<=768&&r.find("ul").hide().removeClass("open")})})}}(jQuery),jQuery(function(){jQuery(".qode_carousels").each(function(){var e="";e='<a class="foo2_prev" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a><a class="foo2_next" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>',jQuery(this).prepend(e);var r=jQuery(this).find("li").outerHeight()+2,t=jQuery(this).find("li").outerWidth()/2+13;jQuery(".foo2_prev").css({height:r+"px"}),jQuery(".foo2_next").css({height:r+"px"}),jQuery(".foo2_prev").css({width:t+"px"}),jQuery(".foo2_next").css({width:t+"px"}),jQuery(".foo2_prev").css({left:-40,position:"absolute","z-index":"99",top:"46%"}),jQuery(".foo2_next").css({right:-40,position:"absolute","z-index":"99",top:"46%"})}),jQuery(".foo2_prev").click(function(){jQuery(".slides").trigger("prev",1),event.preventDefault()}),jQuery(".foo2_next").click(function(){jQuery(".slides").trigger("next"),event.preventDefault()})}),jQuery(function(){if(window.location.hash.length>0)return"#formfillup"==window.location.hash?(jQuery("html, body").animate({scrollTop:jQuery(window.location.hash).offset().top-140},500),!1):(jQuery("html, body").animate({scrollTop:jQuery(window.location.hash).offset().top-70},500),!1);jQuery("#FormFillUpId").click(function(){jQuery("html, body").animate({scrollTop:jQuery("#formfillup").offset().top-140},500)});document.getElementsByTagName("video"),document.getElementsByTagName("video").length;jQuery("#videocover").click(function(){jQuery(".video").children("source").length;if(jQuery(".video").hasClass("videoloaded")){var e=jQuery("video").get(0);e.play(),jQuery("#videocover").css("visibility","hidden")}else jQuery(".video source").each(function(e){var r=jQuery(this).attr("data-src");if(console.log(r),console.log(jQuery(this)),jQuery(this).attr("src",r),console.log(e),2==e){var t=jQuery("video").get(0);t.load(),t.play(),jQuery(".video").addClass("videoloaded"),jQuery("#videocover").css("visibility","hidden"),jQuery("#videocover").addClass("videocover-disabled")}});return!1}),jQuery("video").bind("pause ended",function(){jQuery("#videocover").css("visibility","visible")})});
jQuery(function() { 
	jQuery( window ).resize(function() {
		if(jQuery( window ).width() > 767 || jQuery( window ).width() < 1025) {
			///alert('resize');		
			contentMinHeight();
			contentMinHeightWithPaspartu();
			setDropDownMenuPosition();
			initDropDownMenu();
			initVerticalMenu();
			initVerticalMobileMenu();
			setDropDownMenuPosition();
		}
	});
});

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


