<?php
	//For New Home Page
	function human_carousel($atts, $content = null) { 
		$atts = shortcode_atts( array(
			'count' => '0',
			'lang' => 'en',
			'order' => 'DESC'
		), $atts, 'human' );
	global $post;
	if($post->ID != '39218') {
?>
	<script type="text/javascript">		
		jQuery(document).ready(function(e){jQuery(this).find(".human_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:500,pauseOnHover:!0},items:{width:400,visible:{min:1,max:3}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next")}}}).animate({opacity:1},5e3)});
	</script>
	
<?php
	}
		$html.= '<div class="human_carousel_wrapper human human_carousel-beforeLoad" data-wow-delay="0.1s">';
					$html.= '<div class="human_list_btn">';
						$html.= '<a class="prev" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a>';
						$html.= '<a class="next" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
					$html.= '</div>';
			$html.= '<ul class="human_carousel slides">';			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/angelica.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Angelica Di Guglielmo</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">French, Italian, Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';	
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/atsushi.png" class="human-pic">';
							$html.= '<div class="human-details">';
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Atsushi Alex Yoshida</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Japanese Interpreter</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL ASIAN OFFICES</a></div>';						
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/ramiro.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Ramiro Gallardo</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/united-states">ALL AMERICA OFFICES</a></div>';	
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/fodhil.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Fodhil Meziani</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">French, Italian, Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';		
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';					
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
						$html.= '<img src="https://www.daytranslations.com/wp-content/uploads/2016/11/griselda.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Griselda González</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Spanish, English Interpreter</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';		
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/angelica.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Angelica Di Guglielmo</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">French, Italian, Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';	
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/atsushi.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Atsushi Alex Yoshida</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Japanese Interpreter</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL ASIAN OFFICES</a></div>';	
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/ramiro.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Ramiro Gallardo</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/united-states">ALL AMERICA OFFICES</a></div>';
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/fodhil.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Fodhil Meziani</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">French, Italian, Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';		
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp">';
						$html.= '<img src="https://www.daytranslations.com/wp-content/uploads/2016/11/griselda.png" class="human-pic">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Griselda González</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Spanish, English Interpreter</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';		
							$html.= '</div>';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
				//endwhile;
			$html.= '</ul>';		
		$html.= '</div>';
				
		return $html;

	}
	add_shortcode('human', 'human_carousel');


	//For New Home Page
	function human_carousel_lazy($atts, $content = null) { 
		$atts = shortcode_atts( array(
			'count' => '0',
			'lang' => 'en',
			'order' => 'DESC'
		), $atts, 'human' );
	global $post;
?>
<?php
		$html.= '<div class="human_carousel_wrapper human_carousel_lazy human human_carousel-beforeLoad" data-wow-delay="0.1s">';
					$html.= '<div class="human_list_btn">';
						$html.= '<a class="prev" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a>';
						$html.= '<a class="next" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
					$html.= '</div>';
			$html.= '<ul class="human_carousel slides">';			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp lazy-image-placeholder" data-large="https://www.daytranslations.com/wp-content/themes/bridge-child/images/angelica-opti.jpg">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Angelica Di Guglielmo</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">French, Italian, Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';
							$html.= '</div>';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/angelica_20px.jpg" class="human-smallpic" style="width:329px;height:383px;">';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp lazy-image-placeholder" data-large="https://www.daytranslations.com/wp-content/themes/bridge-child/images/atsushi-opti.jpg">';	
							$html.= '<div class="human-details">';
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Atsushi Alex Yoshida</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Japanese Interpreter</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL ASIAN OFFICES</a></div>';						
							$html.= '</div>';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/atsushi_20px.jpg" style="width:329px;height:383px;" class="human-smallpic">';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp lazy-image-placeholder" data-large="https://www.daytranslations.com/wp-content/themes/bridge-child/images/ramiro-opti.jpg" style="width:329px;height:383px;">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Ramiro Gallardo Test</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/united-states">ALL AMERICA OFFICES</a></div>';	
							$html.= '</div>';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/ramiro_20px.jpg" class="human-smallpic">';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp lazy-image-placeholder" data-large="https://www.daytranslations.com/wp-content/themes/bridge-child/images/fodhil-opti.jpg" style="width:329px;height:383px;">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Fodhil Meziani</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">French, Italian, Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';		
							$html.= '</div>';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/fodhil_20px.jpg" class="human-smallpic">';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp lazy-image-placeholder" data-large="https://www.daytranslations.com/wp-content/themes/bridge-child/images/angelica-opti.jpg" style="width:329px;height:383px;">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Angelica Di Guglielmo</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">French, Italian, Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';	
							$html.= '</div>';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/angelica_20px.jpg" class="human-smallpic">';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp lazy-image-placeholder" data-large="https://www.daytranslations.com/wp-content/themes/bridge-child/images/atsushi-opti.jpg" style="width:329px;height:383px;">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Atsushi Alex Yoshida</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Japanese Interpreter</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL ASIAN OFFICES</a></div>';	
							$html.= '</div>';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/atsushi_20px.jpg" class="human-smallpic">';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp lazy-image-placeholder" data-large="https://www.daytranslations.com/wp-content/themes/bridge-child/images/ramiro-opti.jpg" style="width:329px;height:383px;">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Ramiro Gallardo Test</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/united-states">ALL AMERICA OFFICES</a></div>';
							$html.= '</div>';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/ramiro_20px.jpg" class="human-smallpic">';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
						$html.= '<div class="human-image-wrapp lazy-image-placeholder" data-large="https://www.daytranslations.com/wp-content/themes/bridge-child/images/fodhil-opti.jpg" style="width:329px;height:383px;">';
							$html.= '<div class="human-details">';						
							$html.= '<div class="human-name"><a href="https://www.daytranslations.com/quote">Fodhil Meziani</a></div>';
							$html.= '<div class="human-type"><a href="https://www.daytranslations.com/quote">French, Italian, Spanish Translator</a></div>';
							$html.= '<div class="human-area"><a href="https://www.daytranslations.com/locations/worldwide">ALL EUROPE OFFICES</a></div>';		
							$html.= '</div>';
						$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/fodhil_20px.jpg" class="human-smallpic">';
						$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
				//endwhile;
			$html.= '</ul>';		
		$html.= '</div>';
				
		return $html;

	}
	add_shortcode('human_lazy', 'human_carousel_lazy');


	//For Live home page
	function humanlive_carousel($atts, $content = null) {
		$atts = shortcode_atts( array(
			'count' => '0',
			'lang' => 'en',
			'order' => 'DESC'
		), $atts, 'humanlive' );
	global $post;
	if($post->ID != '39218') {
?>
		<script type="text/javascript">
		jQuery(document).ready(function(e){jQuery(this).find(".humanlive_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:500,pauseOnHover:!1},items:{width:1100,visible:{min:1,max:1}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next")}}}).animate({opacity:1},5e3);var r=1;jQuery(".humanlive_list_btn a").click(function(){"prev"==jQuery(this).attr("class")?1==r?r=4:r-=1:4==r?r=1:r+=1,jQuery("#carousel_trns").css("background-image","url(/wp-content/themes/bridge-child/images/bg_"+r+".jpg)")}),jQuery("#carousel_trns").css("background-image","url(/wp-content/themes/bridge-child/images/bg_"+r+".jpg)")});
		
	</script>
<?php
	}
			$html.= '<div class="humanlive_carousel_wrapper humanlive humanlive_carousel-beforeLoad" data-wow-delay="0.1s">';
					$html.= '<div class="humanlive_list_btn">';
						$html.= '<a class="prev" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/previous.png" class="prev-pic"></a>';
						$html.= '<a class="next" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/next.png" class="next-pic"></a>';
					$html.= '</div>';
			$html.= '<ul class="humanlive_carousel slides">';
			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					$html.= '<li class="humanlive_content_inner">';
						$html.= '<div class="humanlive_content_wrapper">';
							$html.= '<div class="humanlive-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/angelica-di-guglielmo-she-is-a-f-r-i-t-s-p-e-n-translator.png" class="humanlive-pic">';
							$html.= '</div>';
							$html.= '<div class="humanlive-details">';
								$html.= '<div class="humanlive-type translator">Translator</div>';
								$html.= '<div class="humanlive-name">Angelica Di Guglielmo</div>';
								$html.= '<div class="humanlive-area">Sayreville, New Jersey</div>';
								//$html.= '<div class="humanlive-date">at Day Translations since June 2008</div>';
								$html.= '<div class="humanlive-lang">Languages: French, Italian, Spanish</div>';
								$html.= '<div class="humanlive-bio"><ul><li>I have a degree in translation from New York University</li><li>I love geography and collect maps and flags</li><li>I do special effects makeup for film as a hobby</li></ul></div>';						
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="humanlive_content_inner">';
						$html.= '<div class="humanlive_content_wrapper">';
							$html.= '<div class="humanlive-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/a-yoshida-head-shot.png" class="humanlive-pic">';
							$html.= '</div>';
							$html.= '<div class="humanlive-details">';
								$html.= '<div class="humanlive-type interpreter">Interpreter</div>';
								$html.= '<div class="humanlive-name">Atsushi Alex Yoshida</div>';
								$html.= '<div class="humanlive-area">Boulder, Colorado</div>';
								//$html.= '<div class="humanlive-date">at Day Translations since June 2008</div>';
								$html.= '<div class="humanlive-lang">Languages: Japanese & English</div>';
								$html.= '<div class="humanlive-bio"><ul><li>I have my own Japanese blog site.</li><li>I have been to more than 50 different cities in USA and Canada.</li><li>I interpret at courts, hospitals, schools and business/conference meetings.</li></ul></div>';						
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="humanlive_content_inner">';
						$html.= '<div class="humanlive_content_wrapper">';
							$html.= '<div class="humanlive-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/gallardo-ramiro.jpeg" class="humanlive-pic">';
							$html.= '</div>';
							$html.= '<div class="humanlive-details">';
								$html.= '<div class="humanlive-type translator">Translator</div>';
								$html.= '<div class="humanlive-name">Ramiro Gallardo</div>';
								$html.= '<div class="humanlive-area">Mexico City</div>';
								//$html.= '<div class="humanlive-date">at Day Translations since June 2008</div>';
								$html.= '<div class="humanlive-lang">Languages: Spanish</div>';
								$html.= '<div class="humanlive-bio"><ul><li>I live in Mexico</li><li>I love running</li><li>I enjoy travelling</li></ul></div>';						
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="humanlive_content_inner">';
						$html.= '<div class="humanlive_content_wrapper">';
							$html.= '<div class="humanlive-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/Fodhil-Meziani.jpg" class="humanlive-pic">';
							$html.= '</div>';
							$html.= '<div class="humanlive-details">';
								$html.= '<div class="humanlive-type interpreter">Interpreter</div>';
								$html.= '<div class="humanlive-name">Fodhil Meziani</div>';
								$html.= '<div class="humanlive-area">Brooklyn, New York</div>';
								//$html.= '<div class="humanlive-date">at Day Translations since June 2008</div>';
								$html.= '<div class="humanlive-lang">French, Italian, Spanish Translator</div>';
								$html.= '<div class="humanlive-bio"><ul><li>I like to learn different cultures.</li><li>I love to travel to different countries.</li><li>I love to try different foods from other cultures.</li><li>I have BS  degrees in Business, Management and Finance.</li></ul></div>';						
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
				//endwhile;
			$html.= '</ul>';		
		$html.= '</div>';				
		return $html;
	}
	add_shortcode('humanlive', 'humanlive_carousel');
	
	
	
	//Our Employees Loves Us For Live home page
	function employees_carousel($atts, $content = null) {
		$atts = shortcode_atts( array(
			'count' => '0',
			'lang' => 'en',
			'order' => 'DESC'
		), $atts, 'employees' );	
	global $post;
	if($post->ID != '39218') {
?>
		<script type="text/javascript">
		jQuery(document).ready(function(e){jQuery(this).find(".employeesLove_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:500,pauseOnHover:!1},items:{width:500,visible:{min:1,max:2}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next")}}}).animate({opacity:1},5e3)});
		
	</script>
<?php
	}
		$html.= '<div class="employeesLove_carousel_wrapper employeesLove employeesLove_carousel-beforeLoad" data-wow-delay="0.1s">';
					$html.= '<div class="employees_list_btn">';
						$html.= '<a class="prev" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a>';
						$html.= '<a class="next" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
					$html.= '</div>';
			$html.= '<ul class="employeesLove_carousel slides">';
			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					$html.= '<li class="employees_content_inner">';
						$html.= '<div class="employees_content_wrapper">';
							$html.= '<!--<div class="employees-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/employees-img.png" class="employees-pic">';
							$html.= '</div>-->';
							$html.= '<div class="employees-review-details">';								
								$html.= '<div class="employees-name">Translator in Nairobi (Kenya)</div>';
								$html.= '<div class="employees-star"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/employees-star.png" class="employees-star"></div>';
								$html.= '<div class="employees-review">It is a pleasure working with Day Translations. Is a very organized localization firm, sets reasonable deadlines and provides all the relevant information about a project, enabling the translator to deliver work of the highest quality. It continuously strives to improve it\'s business.</div>';						
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="employees_content_inner">';
						$html.= '<div class="employees_content_wrapper">';
							$html.= '<!--<div class="employees-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/employees-img.png" class="employees-pic">';
							$html.= '</div>-->';
							$html.= '<div class="employees-review-details">';								
								$html.= '<div class="employees-name">Translator in North Bergen, NJ (US)</div>';
								$html.= '<div class="employees-star"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/employees-star.png" class="employees-star"></div>';
								$html.= '<div class="employees-review">I like working for Day Translations as a freelancer because they are organized and have a very approachable company culture. They explain the rules for communication and interaction at the beginning, underlining that they value communication that is polite and professional.</div>';						
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="employees_content_inner">';
						$html.= '<div class="employees_content_wrapper">';
							$html.= '<!--<div class="employees-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/employees-img.png" class="employees-pic">';
							$html.= '</div>-->';
							$html.= '<div class="employees-review-details">';								
								$html.= '<div class="employees-name">Translator in Nairobi (Kenya)</div>';
								$html.= '<div class="employees-star"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/employees-star.png" class="employees-star"></div>';
								$html.= '<div class="employees-review">It is a pleasure working with Day Translations. Is a very organized localization firm, sets reasonable deadlines and provides all the relevant information about a project, enabling the translator to deliver work of the highest quality. It continuously strives to improve it\'s business.</div>';						
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="employees_content_inner">';
						$html.= '<div class="employees_content_wrapper">';
							$html.= '<!--<div class="employees-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/employees-img.png" class="employees-pic">';
							$html.= '</div>-->';
							$html.= '<div class="employees-review-details">';								
								$html.= '<div class="employees-name">Translator in North Bergen, NJ (US)</div>';
								$html.= '<div class="employees-star"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/employees-star.png" class="employees-star"></div>';
								$html.= '<div class="employees-review">I like working for Day Translations as a freelancer because they are organized and have a very approachable company culture. They explain the rules for communication and interaction at the beginning, underlining that they value communication that is polite and professional.</div>';						
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
			$html.= '</ul>';		
		$html.= '</div>';				
		return $html;
	}
	add_shortcode('employees', 'employees_carousel');
	
	//trustpilot Live home page
	function trustpilot_carousel($atts, $content = null) {
		$atts = shortcode_atts( array(
			'count' => '0',
			'lang' => 'en',
			'order' => 'DESC'
		), $atts, 'trustpilot' );	
	global $post;
	if($post->ID != '39218') {
?>
	<script type="text/javascript">
		jQuery(document).ready(function(e){jQuery(this).find(".trustpilot_carousel").carouFredSel({circular:!0,responsive:!0,scroll:{items:1,duration:500,pauseOnHover:!1},items:{width:400,visible:{min:1,max:3}},auto:!1,mousewheel:!1,swipe:{onMouse:!0,onTouch:!0},prev:{button:function(){return jQuery(this).parents().eq(1).find(".prev")}},next:{button:function(){return jQuery(this).parents().eq(1).find(".next")}}}).animate({opacity:1},5e3)});		
	</script>
<?php
	}
		$html.= '<div class="trustpilot_carousel_wrapper trustpilot trustpilot_carousel-beforeLoad" data-wow-delay="0.1s">';
					$html.= '<div class="trustpilot_list_btn">';
						$html.= '<a class="prev" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a>';
						$html.= '<a class="next" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
					$html.= '</div>';
			$html.= '<ul class="trustpilot_carousel slides">';
			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>April 18, 2016</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">This is a truly excellent company</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">I contacted this company late on a Saturday afternoon after I learned that I needed a certified translation of a document ASAP. They answered the phone immediately, responded to emails instantly, and charged a very reasonable price for translating the documents and providing electronic copies by nine the next morning. (They only promise a 24 hour turnaround, but my docs were ready sooner.) They agreed to adjust the price when I decided I did not need hard copies. When I found a tiny error on one page, they sent out a corrected copy in about five minutes. In all, a terrific company. They are worth your trust.</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Stephen Brain</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>January 30, 2016</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">Interpretation task in Kuwait</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">This was my first task with the company. I do really highly recommend it for both customers and translators. Excellent customer service and communication. The CEO Mr. Sean Hoopwood is just the perfect example for the great difference between a boss and a leader as he is always involved in all the process. Really enjoyed working with it and look for more tasks.</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Mai Tayel</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>August 12, 2015</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">Absolutely Excellent Service</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">I will certainly be going to Day Translations again for any translations I need. Everyone was so attentive and professional and did everything in their power to ensure I received exactly what I wanted and quickly!!</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Krista</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>8 hours ago</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">Well done</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">I will never get tired of saying - you guys are simply THE BEST in the industry when it comes to project management, from initiation to payment and you are setting the golden standard!</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Andrew</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>June 9, 2015</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">Flawless service</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">I live in Turkey but I needed certified translations from portuguese to english, which was very hard to find here in Istanbul The Day Translations service is amazing! Not only they had the translator I needed but they worked during saturday an sunday, so I was able to send my translation in time. They sent me a scanned pdf with my translations as I requested, then the physical copy with all the proper seals and stampings arrived in no time. They are also quite flexible with payment options.</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Gustavo Alcarde</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>May 17, 2015</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">Excellent customer service</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">The service provided by Day Translations was exceptional. The actual translation of our documents was very prompt and of high quality. Most importantly, the manager assigned to our project helped guide us through the process of acquiring our first certified translation, and took the time to explain to us in laymen\'s terms the steps involved.</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
									$html.= '</div>';
								$html.= '<div class="trustpilot-name">Melissa Barnhart</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>March 6, 2015</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">Excellent professional service.</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">Day Translations provided our organization with high quality work. The project (although small) was completed within 2 business days. Without reservation, I would recommend Day Translations to any for profit or nonprofit entity in need of translation services. Keep up the high quality work.</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Walter Martin</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>January 23, 2015</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">Nice</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">Very simple to use, recommend to all.</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Richard</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>October 11, 2014</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">Extremely Fast Turn-around.</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">Quick quote. Fast translation. Very responsive to questions. Very satisfied. Definitely recommend.</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Barbara S</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					$html.= '<li class="trustpilot_content_inner">';
						$html.= '<div class="trustpilot_content_wrapper">';
							$html.= '<div class="trustpilot-image">';
								$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/tp-stars.png" class="tp-pic">';
								$html.= '<span>October 1, 2014</span>';
							$html.= '</div>';
							$html.= '<div class="trustpilot-review-details">';								
								$html.= '<div class="trustpilot-title">They aren\'t kidding when they say they work 24/7</div>';
								$html.= '<div class="trustpilot-review-detaild">';
									$html.= '<div class="trustpilot-review">We have used Day Translations on several jobs...each job is translating English into Arabic. They state the job isn\'t done until the customer is satisfied....and that is how they work. We had a small job (under 30 words) which had multiple revisions. During one set of changes to the job, I emailed on Sunday and received a prompt answer... I\'m impressed by their dedication and delivering as promised.</div>';
									$html.= '<div class="trustpilot-gradain">&nbsp</div>';
								$html.= '</div>';
								$html.= '<div class="trustpilot-name">Susan Jay</div>';
							$html.= '</div>';
						$html.= '</div>';
					$html.= '</li>';
					
			$html.= '</ul>';		
		$html.= '</div>';				
		return $html;
	}
	add_shortcode('trustpilot', 'trustpilot_carousel');
	

function searchfilter($query) {
    if ($query->is_search && !is_admin() ) {
        $query->set('post_type',array('page'));
		$query->set( 'post_parent', array('45', '1337', '39') );
		$query->set('posts_per_page', 30);
		$query->set('post_status', array('publish'));
        $query->set('meta_query', array(                                            
                                            array(
                                              'key' => '_yoast_wpseo_meta-robots-nofollow',
                                              //'value' => 1,
                                              //'compare' => '!='
											  'compare' => 'NOT EXISTS',
                                            )
                                        )
                   );
    }
return $query;
}

add_filter('pre_get_posts','searchfilter');

function wpse_11826_search_by_title( $search, $wp_query ) {
    if ( ! empty( $search ) && ! empty( $wp_query->query_vars['search_terms'] ) ) {
        global $wpdb;

        $q = $wp_query->query_vars;
        $n = ! empty( $q['exact'] ) ? '' : '%';

        $search = array();

        foreach ( ( array ) $q['search_terms'] as $term )
            $search[] = $wpdb->prepare( "$wpdb->posts.post_title LIKE %s", $n . $wpdb->esc_like( $term ) . $n );

        if ( ! is_user_logged_in() )
            $search[] = "$wpdb->posts.post_password = ''";

        $search = ' AND ' . implode( ' AND ', $search );
    }

    return $search;
}

add_filter( 'posts_search', 'wpse_11826_search_by_title', 10, 2 );

add_filter('posts_orderby','my_sort_custom',10,2);
function my_sort_custom( $orderby, $query ){
    global $wpdb;

    if(!is_admin() && is_search()) 
        $orderby =  $wpdb->prefix."posts.post_title ASC";

    return  $orderby;
}

	//crmregform af page
	function crmregform_shortcode($atts, $content = null) {
		$atts = shortcode_atts( array(
			'lang' => 'en',
		), $atts, 'crmregform' );
?>
<style>
	.formcover-wrapper {
		border-radius: 5px;
		margin: 50px 0;
		padding: 1px;
		-webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,0.05),0 1px 3px 0 rgba(0,0,0,0.25);
		-moz-box-shadow: 0 1px 1px 0 rgba(0,0,0,0.05),0 1px 3px 0 rgba(0,0,0,0.25);
		box-shadow: 0 1px 1px 0 rgba(0,0,0,0.05),0 1px 3px 0 rgba(0,0,0,0.25);
		-webkit-transition: box-shadow .3s;
		transition: box-shadow .3s;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		margin-top: 30px;
		background-color: #FFF;
		padding: 30px;
		clear: both;
		overflow: hidden;
	}
	.formcover-wrapper:hover {
		box-shadow: 0 2px 3px rgba(0,0,0,0.1),0 5px 10px rgba(0,0,0,0.25);
	}
	.formcover {
		
	}
	ul#tabs {
		list-style-type: none;
		padding: 0;
		width:25%;
		float:left;
		margin-bottom: 20px;
		background: url(https://www.daytranslations.com/wp-content/themes/bridge-child/images/regWizSteps.png) repeat-y 8px 0;
		margin: 0 2%;
	}
	ul#tabs li {
		display: inline-block;
		margin-bottom: 4px;
		color: #000;
		cursor: pointer;
		width:100%;
	}
	
	ul#tabs li {
		line-height: 40px;
		height: 40px;
		position: relative;
		z-index: 10;
	}
	
	ul#tabs li span.stepState {
		display: inline-block;
		width: 17px;
		height: 40px;
		background: url(https://www.daytranslations.com/wp-content/themes/bridge-child/images/regWizStep_active.png) no-repeat left;
		float: left;
	}
	
	ul#tabs li.active span.stepState {
		background: url(https://www.daytranslations.com/wp-content/themes/bridge-child/images/regWizStep_done.png) no-repeat left;
	}
	ul#tabs li span.stepName {
		border-bottom: dotted 1px #eee;
		line-height: 39px;
		float: left;
		margin-left: 10px;
		display: block;
		color: #abaaaa;
		font-size: 15px;
	}
	ul#tabs li.active span.stepName {
		color: #ff7802;
	}
	
	input[type="text"], input[type="email"], input[type="password"], .ddllist {
		font-size: 100%;
		line-height: 120%;
	}
	
	input[type="password"], .ddllist {		
		width: 95%;
		margin-top: 6px;
		margin-bottom: 20px;
		padding: 6px;
		border: 1px solid #e3e3e3;
		font-size: 1.1em;
		border-radius: 5px;
	}
	.languagebox {
		width:48%;
		float:left;
	}
	.selectfile {
		padding: 20px 0;
		width: 100%;
		clear: both;
	}
	
	.submitbtn {
		margin-top:20px;
	}
	
	
	ul#tab {
		list-style-type: none;
		margin: 0;
		padding: 0;
		float:right;
		border-left: 1px dotted #CCC!important;
		padding-left: 2%;
		width:68%;
	}
	ul#tab li {
		display: none;
	}
	ul#tab li.active {
		display: block;
	}
	@media only screen and (min-device-width: 768px) and (max-device-width: 960px){
		ul#tabs {
			width: 35%;
		}
		ul#tab {
		    width: 58%;
		}
	}
	
	@media only screen and (min-device-width: 568px) and (max-device-width: 767px){
		ul#tabs {
			width: 100%;
		    background: none;
			border-bottom: 1px solid #c1c1c1;
			margin-bottom: 20px;
			padding-bottom: 20px;
		}
		ul#tab {
		    width: 100%;
			border-left:none;
		}
		ul#tabs li span.stepName {
		    font-size: 13px;
			width: 80%;
		}
		ul#tabs li {
		    width: 50%;
		}
		.formcover-wrapper {
			padding: 20px;
		}
		
	}
	
	@media only screen and (min-device-width: 320px) and (max-device-width: 567px){
		ul#tabs {
			width: 100%;
		    background: none;
			border-bottom: 1px solid #c1c1c1;
			margin-bottom: 20px;
			padding-bottom: 20px;
		}
		ul#tab {
		    width: 100%;
			border-left:none;
		}
		ul#tabs li span.stepName {
		    font-size: 13px;
			width: 80%;
		}
		ul#tabs li {
		    width: 100%;
		}
		.formcover-wrapper {
			padding: 20px;
		}
	}
</style>
<script>
	jQuery(document).ready(function(){
		jQuery("ul#tabs li").click(function(e){
			if (!jQuery(this).hasClass("active")) {
				var tabNum = jQuery(this).index();
				var nthChild = tabNum+1;
				jQuery("ul#tabs li.active").removeClass("active");
				jQuery(this).addClass("active");
				jQuery("ul#tab li.active").removeClass("active");
				jQuery("ul#tab li:nth-child("+nthChild+")").addClass("active");
			}
		});		
		jQuery("#AccountInformation").validationEngine();
		jQuery("#BillingAddress").validationEngine();
		jQuery("#AboutMe").validationEngine();
		jQuery("#TranslationMemory").validationEngine();
		jQuery("#BeneficiaryAccounts").validationEngine();
	});
</script>
<link rel="stylesheet" href="https://www.daytranslations.com/wp-content/themes/bridge-child/css/validationEngine.jquery.css" type="text/css"/>
<script src="https://www.daytranslations.com/wp-content/themes/bridge-child/js/languages/jquery.validationEngine-en.js" type="text/javascript" charset="utf-8"></script>
<script src="https://www.daytranslations.com/wp-content/themes/bridge-child/js/jquery.validationEngine.js" type="text/javascript" charset="utf-8"></script>
<?php	
	$countryList = array("AF"=>"Afghanistan","AL"=>"Albania","DZ"=>"Algeria","AS"=>"American Samoa","AD"=>"Andorra","AO"=>"Angola","AI"=>"Anguilla","AQ"=>"Antarctica","AG"=>"Antigua And Barbuda","AR"=>"Argentina","AM"=>"Armenia","AW"=>"Aruba","AU"=>"Australia","AT"=>"Austria","AZ"=>"Azerbaijan","BS"=>"Bahamas","BH"=>"Bahrain","BD"=>"Bangladesh","BB"=>"Barbados","BY"=>"Belarus","BE"=>"Belgium","BZ"=>"Belize","BJ"=>"Benin","BM"=>"Bermuda","BT"=>"Bhutan","BO"=>"Bolivia","BA"=>"Bosnia And Herzegovina","BW"=>"Botswana","BV"=>"Bouvet Island","BR"=>"Brazil","IO"=>"British Indian Ocean Territory","BN"=>"Brunei Darussalam","BG"=>"Bulgaria","BF"=>"Burkina Faso","BI"=>"Burundi","KH"=>"Cambodia","CM"=>"Cameroon","CA"=>"Canada","CV"=>"Cape Verde","KY"=>"Cayman Islands","CF"=>"Central African Republic","TD"=>"Chad","CL"=>"Chile","CN"=>"China","CX"=>"Christmas Island","CC"=>"Cocos (Keeling) Islands","CO"=>"Colombia","KM"=>"Comoros","CG"=>"Congo","CD"=>"Congo","CK"=>"Cook Islands","CR"=>"Costa Rica","HR"=>"Croatia","CU"=>"Cuba","CY"=>"Cyprus","CZ"=>"Czech Republic","DK"=>"Denmark","DJ"=>"Djibouti","DM"=>"Dominica","DO"=>"Dominican Republic","EC"=>"Ecuador","EG"=>"Egypt","SV"=>"El Salvador","GQ"=>"Equatorial Guinea","ER"=>"Eritrea","EE"=>"Estonia","ET"=>"Ethiopia","FK"=>"Falkland Islands (Malvinas)","FO"=>"Faroe Islands","FJ"=>"Fiji","FI"=>"Finland","FR"=>"France","GF"=>"French Guiana","PF"=>"French Polynesia","TF"=>"French Southern Territories","GA"=>"Gabon","GM"=>"Gambia","GE"=>"Georgia","DE"=>"Germany","GH"=>"Ghana","GI"=>"Gibraltar","GR"=>"Greece","GL"=>"Greenland","GD"=>"Grenada","GP"=>"Guadeloupe","GU"=>"Guam","GT"=>"Guatemala","GG"=>"Guernsey","GN"=>"Guinea","GW"=>"Guinea-Bissau","GY"=>"Guyana","HT"=>"Haiti","HM"=>"Heard Island And Mcdonald Islands","VA"=>"Holy See (Vatican City State)","HN"=>"Honduras","HK"=>"Hong Kong","HU"=>"Hungary","IS"=>"Iceland","IN"=>"India","ID"=>"Indonesia","IR"=>"Iran","IQ"=>"Iraq","IE"=>"Ireland","IM"=>"Isle Of Man","IL"=>"Israel","IT"=>"Italy","JM"=>"Jamaica","JP"=>"Japan","JE"=>"Jersey","JO"=>"Jordan","KZ"=>"Kazakhstan","KE"=>"Kenya","KI"=>"Kiribati","KP"=>"Korea","KR"=>"Korea","KW"=>"Kuwait","KG"=>"Kyrgyzstan","LA"=>"Lao People\'S Democratic Republic","LV"=>"Latvia","LB"=>"Lebanon","LS"=>"Lesotho","LR"=>"Liberia","LY"=>"Libyan Arab Jamahiriya","LI"=>"Liechtenstein","LT"=>"Lithuania","LU"=>"Luxembourg","MO"=>"Macao","MK"=>"Macedonia","MG"=>"Madagascar","MW"=>"Malawi","MY"=>"Malaysia","MV"=>"Maldives","ML"=>"Mali","MT"=>"Malta","MH"=>"Marshall Islands","MQ"=>"Martinique","MR"=>"Mauritania","MU"=>"Mauritius","YT"=>"Mayotte","MX"=>"Mexico","FM"=>"Micronesia","MD"=>"Moldova","MC"=>"Monaco","MN"=>"Mongolia","ME"=>"Montenegro","MS"=>"Montserrat","MA"=>"Morocco","MZ"=>"Mozambique","MM"=>"Myanmar","NA"=>"Namibia","NR"=>"Nauru","NP"=>"Nepal","NL"=>"Netherlands","AN"=>"Netherlands Antilles","NC"=>"New Caledonia","NZ"=>"New Zealand","NI"=>"Nicaragua","NE"=>"Niger","NG"=>"Nigeria","NU"=>"Niue","NF"=>"Norfolk Island","MP"=>"Northern Mariana Islands","NO"=>"Norway","OM"=>"Oman","PK"=>"Pakistan","PW"=>"Palau","PS"=>"Palestinian Territory","PA"=>"Panama","PG"=>"Papua New Guinea","PY"=>"Paraguay","PE"=>"Peru","PH"=>"Philippines","PN"=>"Pitcairn","PL"=>"Poland","PT"=>"Portugal","PR"=>"Puerto Rico","QA"=>"Qatar","RE"=>"Reunion","RO"=>"Romania","RU"=>"Russian Federation","RW"=>"Rwanda","BL"=>"Saint BarthГѓВ©lemy","SH"=>"Saint Helena","KN"=>"Saint Kitts And Nevis","LC"=>"Saint Lucia","MF"=>"Saint Martin","PM"=>"Saint Pierre And Miquelon","VC"=>"Saint Vincent And The Grenadines","WS"=>"Samoa","SM"=>"San Marino","ST"=>"Sao Tome And Principe","SA"=>"Saudi Arabia","SN"=>"Senegal","RS"=>"Serbia","SC"=>"Seychelles","SL"=>"Sierra Leone","SG"=>"Singapore","SK"=>"Slovakia","SI"=>"Slovenia","SB"=>"Solomon Islands","SO"=>"Somalia","ZA"=>"South Africa","GS"=>"South Georgia And The South Sandwich Islands","ES"=>"Spain","LK"=>"Sri Lanka","SD"=>"Sudan","SR"=>"Suriname","SJ"=>"Svalbard And Jan Mayen","SZ"=>"Swaziland","SE"=>"Sweden","CH"=>"Switzerland","SY"=>"Syrian Arab Republic","TW"=>"Taiwan","TJ"=>"Tajikistan","TZ"=>"Tanzania","TH"=>"Thailand","TL"=>"Timor-Leste","TG"=>"Togo","TK"=>"Tokelau","TO"=>"Tonga","TT"=>"Trinidad And Tobago","TN"=>"Tunisia","TR"=>"Turkey","TM"=>"Turkmenistan","TC"=>"Turks And Caicos Islands","TV"=>"Tuvalu","UG"=>"Uganda","UA"=>"Ukraine","AE"=>"United Arab Emirates","GB"=>"United Kingdom","US"=>"United States","UM"=>"United States Minor Outlying Islands","UY"=>"Uruguay","UZ"=>"Uzbekistan","VU"=>"Vanuatu","VE"=>"Venezuela","VN"=>"Viet Nam","VG"=>"Virgin Islands (British)","VI"=>"Virgin Islands (U.S.)","WF"=>"Wallis And Futuna","EH"=>"Western Sahara","YE"=>"Yemen","ZM"=>"Zambia","ZW"=>"Zimbabwe","ty"=>"Tahiti","ti"=>"tibet","CI"=>"Ivory Coast");
	$languageList = array("en_US"=>"English", "ar_SA"=>"Arabic", "zh_HK"=>"Chinese Traditional Cantonese", "nl_NL"=>"Dutch", "fr_FR"=>"French", "de_DE"=>"German", "he_IL"=>"Hebrew", "it_IT"=>"Italian", "ja_JP"=>"Japanese", "pt_PT"=>"Portuguese", "ru_RU"=>"Russian", "es_ES"=>"Spanish", "hi_IN"=>"Hindi", "el_GR"=>"Greek", "hu_HU"=>"Hungarian", "tr_TR"=>"Turkish", "uk_UA"=>"Ukrainian", "bg_BG"=>"Bulgarian", "ro_RO"=>"Romanian", "id_ID"=>"Indonesian", "bn_BD"=>"Bengali", "ta_IN"=>"Tamil", "ms_MY"=>"Malay", "es_AR"=>"Spanish (Latin-America)", "la"=>"Latin", "da_DK"=>"Danish", "sv_SE"=>"Swedish", "no_NO"=>"Norwegian", "is_IS"=>"Icelandic", "pl_PL"=>"Polish", "cs_CZ"=>"Czech", "th_TH"=>"Thai", "ko_KR"=>"Korean", "sq_AL"=>"Albanian", "hr_HR"=>"Croatian", "et_EE"=>"Estonian", "lv_LV"=>"Latvian", "lt_LT"=>"Lithuanian", "sr_YU"=>"Serbian (Cyrillic)", "sk_SK"=>"Slovak", "af_ZA"=>"Afrikaans", "am_ET"=>"Amharic", "hy_AM"=>"Armenian", "ast_ES"=>"Asturian", "eu_ES"=>"Basque", "be_BY"=>"Belarussian", "bs_BA_Latn"=>"Bosnian", "pt_BR"=>"Portuguese (Brazil)", "my_MM"=>"Burmese", "ca_ES"=>"Catalan", "da_DK"=>"Cushitic", "fj_FJ"=>"Fijian", "fi_FI"=>"Finnish", "gl_ES"=>"Galician", "gu_IN"=>"Gujarati", "ga_IE"=>"Irish Gaelic", "km_KH"=>"Khmer", "ku_TR"=>"Kurdish", "mk_MK"=>"Macedonian", "mg_MG"=>"Malagasy", "mt_MT"=>"Maltese", "mi_NZ"=>"Maori", "mn_MN"=>"Mongolian", "ne_NP"=>"Nepali", "nn_NO"=>"Norwegian (Nynorsk)", "pa_IN"=>"Punjabi", "fa_IR"=>"Persian", "sa_IN"=>"Sanskrit", "sc_IT"=>"Sardinian", "gd_GB"=>"Scottish Gaelic", "sr_RS_Latn"=>"Serbian (Latin)", "sl_SI"=>"Slovenian (Slovene)", "so_SO"=>"Somali", "sw_SO"=>"Swahili", "de_CH"=>"Swiss German", "tl_PH"=>"Tagalog", "tk_TM"=>"Turkmen", "ur_PK"=>"Urdu", "vi_VN"=>"Vietnamese", "cy_GB"=>"Welsh", "te_IN"=>"Telugu", "yi_US"=>"Yiddish", "yo_NG"=>"Yoruba", "en_US"=>"English (US)", "en_AU"=>"English (AU)", "ar_EG"=>"Arabic (Egyptian)", "ar_AE"=>"Arabic (Gulf)", "ar_IQ"=>"Arabic (Iraqi)", "ar_JO"=>"Arabic (Levantine)", "ar_MA"=>"Arabic (Maghrebi)", "ml_IN"=>"Malayalam", "fa_IR"=>"Farsi", "ps"=>"Pashto", "prs_AF"=>"Dari", "pt_PT"=>"Portuguese (Portugal)", "ka_GE"=>"Georgian", "mr_IN"=>"Marathi", "fr_CA"=>"French (Canadian)", "lo_LA"=>"Lao", "zh_CN"=>"Chinese Simplified (Mandarin)", "zh_CN"=>"Chinese Mandarin Traditional", "kk_KZ"=>"Kazakh", "nl_BE"=>"Flemish (Belgian)", "ht_HT"=>"Haitian Creole", "zh_TW"=>"Chinese Traditional Mandarin (Taiwan)", "fr_CH"=>"Swiss French", "it_CH"=>"Swiss Italian", "si_LK"=>"Sinhala", "zu_ZA"=>"Zulu", "sla_ME"=>"Montenegrin", "kn_IN"=>"Kannada", "xh_ZA"=>"Xhosa", "tg_TJ"=>"Tajik", "ti"=>"Tigrinya");
	$html= '';
	$html.= '<div class="formcover-wrapper" id="FromWrap"><div class="formcover">';	
		$html.= '<ul id="tabs">';
			$html.= '<li class="active"><div><span class="stepState"></span><span class="stepName">Account Information</span></div></li>';
			$html.= '<li><div><span class="stepState"></span><span class="stepName">Billing Address</span></div></li>';
			$html.= '<li><div><span class="stepState"></span><span class="stepName">About me</span></div></li>';
			$html.= '<li><div><span class="stepState"></span><span class="stepName">Translation Memory</span></div></li>';
			$html.= '<li><div><span class="stepState"></span><span class="stepName">Beneficiary Accounts</span></div></li>';					
		$html.= '</ul>';
		$html.= '<ul id="tab">';
			$html.= '<li class="active">';
				$html.= '<h2>Account Information</h2>';
				$html.= '<form name="AccountInformation" id="AccountInformation" action="#" method="post">';
					$html.= '<fieldset>';
						$html.= '<div class="input text">';
							$html.= '<label for="FullName">Full name</label>';
							$html.= '<input name="fullname" type="text" id="FullName" class="inputbox validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="Username">Username</label>';
							$html.= '<input name="username" type="text" id="Username" class="inputbox validate[required,custom[onlyLetterNumber]]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="Email">E-mail</label>';
							$html.= '<input name="email" type="email" id="Email" class="inputmail validate[required,custom[email]]">';
						$html.= '</div>';						
						$html.= '<div class="input text">';
							$html.= '<label for="Phone">Phone</label>';
							$html.= '<input name="phone" type="text" id="Phone" class="inputpass validate[required,custom[number]]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="Address">Address</label>';
							$html.= '<input name="address" type="text" id="Address" class="inputpass validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="City">City</label>';
							$html.= '<input name="city" type="text" id="City" class="inputpass validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="Country">Country</label>';
							$html.= '<select name="country" id="Country" class="ddllist">';
								foreach($countryList as $key => $value){
									$html.= '<option value="'.$key.'">'.$value.'</option>';
								}
							$html.= '</select>';								
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="Password">Password</label>';
							$html.= '<input name="password" type="password" id="Password" class="inputpass validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="CPassword">Confirm password</label>';
							$html.= '<input name="cpassword" type="password" id="CPassword" class="inputpass validate[required,equals[Password]]">';
						$html.= '</div>';						
						$html.= '<div class="input text">';
							$html.= '<label for="Iam">I am a:</label>';
							$html.= '<input type="radio" name="iama" id="Iam" value="0"> Personal Customer';
							$html.= '<input type="radio" name="iama" id="Iam" value="1"> Business Customer';
							$html.= '<input type="radio" name="iama" id="Iam" value="2"> Translator';
						$html.= '</div>';
						$html.= '<div class="input text submitbtn">';
							$html.= '<button class="qbutton  small center" id="account_save_button">Save & Continue</button>';
						$html.= '</div>';					
					$html.= '</fieldset>';				
                    $html.= '</form>';
			$html.= '</li>';
			$html.= '<li>';
				$html.= '<h2>Billing Address</h2>';
				$html.= '<form name="BillingAddress" id="BillingAddress" action="#" method="post">';
				$html.= '<fieldset>';
						$html.= '<div class="input text">';
							$html.= '<label for="FirstName">First Name</label>';
							$html.= '<input name="firstname" type="text" id="FirstName" class="inputbox validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="LastName">Last Name</label>';
							$html.= '<input name="lastname" type="text" id="LastName" class="inputbox validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="CompanyName">Company Name</label>';
							$html.= '<input name="companyname" type="text" id="CompanyName" class="inputmail validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="Vat">VAT ID / Company ID</label>';
							$html.= '<input name="vat" type="text" id="Vat" class="inputpass validate[required]">';
						$html.= '</div>';						
						$html.= '<div class="input text">';
							$html.= '<label for="Address">Address</label>';
							$html.= '<input name="address" type="text" id="Address" class="inputpass validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="City">City</label>';
							$html.= '<input name="city" type="text" id="City" class="inputpass validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="ZipCode">Zip Code</label>';
							$html.= '<input name="zipcode" type="text" id="ZipCode" class="inputpass validate[required]">';
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="Country">Country</label>';
							$html.= '<select name="country" id="Country" class="ddllist validate[required]">';
								foreach($countryList as $key => $value){
									$html.= '<option value="'.$key.'">'.$value.'</option>';
								}
							$html.= '</select>';								
						$html.= '</div>';
						$html.= '<div class="input text">';
							$html.= '<label for="Phone">Phone</label>';
							$html.= '<input name="phone" type="text" id="Phone" class="inputpass validate[required]">';
						$html.= '</div>';						
						$html.= '<div class="input text submitbtn">';
							$html.= '<button class="qbutton  small center" id="account_save_button">Save & Continue</button>';
						$html.= '</div>';					
					$html.= '</fieldset>';
					$html.= '</form>';
			$html.= '</li>';
			$html.= '<li>';
				$html.= '<h2>About Me</h2>';
				$html.= '<form name="AboutMe" id="AboutMe" action="#" method="post">';
				$html.= '<fieldset>';
						$html.= '<div class="input text selectfile">';
							$html.= '<label for="UserPhoto">User photo</label>';
							$html.= '<input name="userphoto" type="file" id="UserPhoto" class="inputpass validate[required]">';
						$html.= '</div>';						
						$html.= '<div class="input text submitbtn">';
							$html.= '<button class="qbutton  small center" id="account_save_button">Save & Continue</button>';
						$html.= '</div>';					
					$html.= '</fieldset>';
					$html.= '</form>';
			$html.= '</li>';
			$html.= '<li>';
				$html.= '<h2>Translation Memory</h2>';
				$html.= '<form name="TranslationMemory" id="TranslationMemory" action="#" method="post">';
				$html.= '<fieldset>';						
						$html.= '<div class="input text languagebox">';
							$html.= '<label for="FromLan">From :</label>';
							$html.= '<select name="fromlan" id="FromLan" class="ddllist validate[required]">';
								foreach($languageList as $key => $value){
									$html.= '<option value="'.$key.'">'.$value.'</option>';
								}
							$html.= '</select>';								
						$html.= '</div>';
						$html.= '<div class="input text languagebox">';
							$html.= '<label for="ToLan">To: </label>';
							$html.= '<select name="tolan" id="ToLan" class="ddllist validate[required]">';
								foreach($languageList as $key => $value){
									$html.= '<option value="'.$key.'">'.$value.'</option>';
								}
							$html.= '</select>';								
						$html.= '</div>';
						$html.= '<div class="input text selectfile">';
							$html.= '<label for="Document">Document</label>';
							$html.= '<input name="document" type="file" id="Document" class="inputpass validate[required]">';
						$html.= '</div>';
						
						$html.= '<div class="input text submitbtn">';
							$html.= '<button class="qbutton  small center" id="account_save_button">Save & Continue</button>';
						$html.= '</div>';					
					$html.= '</fieldset>';
					$html.= '</form>';
			$html.= '</li>';
			$html.= '<li>';
				$html.= '<h2>Beneficiary Accounts</h2>';
				$html.= '<form name="BeneficiaryAccounts" id="BeneficiaryAccounts" action="#" method="post">';
				$html.= '<fieldset>';						
					$html.= '<table>';
						$html.= '<tr>';
							$html.= '<td>Email</td>';
							$html.= '<td>Credits</td>';
							$html.= '<td>Automatic funds transfer</td>';
							$html.= '<td>Transfer funds</td>';
							$html.= '<td>Remove</td>';
							$html.= '<td></td>';
						$html.= '</tr>';
					$html.= '</table>';						
					$html.= '<div class="input text submitbtn">';
						$html.= '<button class="qbutton  small center" id="account_save_button">Add</button>';
					$html.= '</div>';					
				$html.= '</fieldset>';
				$html.= '</form>';
			$html.= '</li>';
		$html.= '</ul>';
	$html.= '</div></div>';
	return $html;
	}
	add_shortcode('crmregform', 'crmregform_shortcode');
	
	
/*	
function pm_remove_all_scripts() {
    global $wp_scripts, $post;
	if($post->ID == '39218')
    $wp_scripts->queue = array();
}
add_action('wp_print_scripts', 'pm_remove_all_scripts', 100);
*/
/*
function pm_remove_all_styles() {
    global $wp_styles, $post;
	if($post->ID == '39218')
    $wp_styles->queue = array();
}
add_action('wp_print_styles', 'pm_remove_all_styles', 100);
*/


//language search For language page
	function language_search_shortcode($atts, $content = null) {
		$atts = shortcode_atts( array(
			'lang' => 'en',
		), $atts, 'lan_search' );
?>
<script src="https://www.daytranslations.com/wp-content/themes/bridge-child/js/jquery.auto-complete.js" type="text/javascript" charset="utf-8"></script>
<link rel="stylesheet" href="https://www.daytranslations.com/wp-content/themes/bridge-child/css/jquery.auto-complete.css">
<script>
        jQuery(function(){
            jQuery('#search-page').autoComplete({
                minChars: 1,
                source: function(term, suggest){
                    term = term.toLowerCase();
                    var choices = [['Afar', ''], ['Afghan Persian', ''], ['Afrikaans', 'afrikaans'], ['Albanian', ''], ['Alsatian', ''], ['American', ''], ['Amharic', 'amharic'], ['Arabic', 'arabic'], ['Aramiac', ''], ['Armenian', 'armenian'], ['Assamese', ''], ['Assyrian', ''], ['Australian', ''], ['Aymara', ''], ['Azerbaijani', ''], ['Bahasa Indonesia', 'bahasa-indonesia'], ['Bahasa Melayu', 'bahasa-melayu'], ['Baluchi', ''], ['Bandjabi', ''], ['Bangla', 'bangla'], ['Bangkok', 'bangkok'], ['Bashkir', ''], ['Basque', 'basque'], ['Belarusan', ''], ['Belarusian', ''], ['Bemba', ''], ['Bengali', ''], ['Bhojpuri', ''], ['Bicol', ''], ['Bosnian', ''], ['Breton', ''], ['Bubi', ''], ['Bulgarian', ''], ['Burmese', 'burmese'], ['Burushaski', ''], ['Cakchiquel', ''], ['Cambodian', ''], ['Cantonese', 'cantonese'], ['Carolinian', ''], ['Castilian', ''], ['Catalan', 'catalan'], ['Cebuano', ''], ['Chamorro', ''], ['Chichewa', ''], ['Chuukese', 'chuukese'], ['Corsican', ''], ['Creole Patois', ''], ['Crioulo', ''], ['Croatian', ''], ['Czech', 'czech'], ['Czech', 'czech'], ['Damara', ''], ['Danish', 'danish'], ['Dari', 'dari'], ['Dinka', ''], ['Djerma', ''], ['Dogri', ''], ['Dutch', ''], ['Dzongkha', ''], ['English', ''], ['Eskimo', ''], ['Estonian', ''], ['Ethiopian', ''], ['Ewe', ''], ['Fang', ''], ['Faroese', ''], ['Farsi', 'farsi'], ['Fijian', ''], ['Finnish', ''], ['Flemish', ''], ['French', 'french'], ['French Canadian', ''], ['Frisian', ''], ['Fula', ''], ['Fulani', ''], ['Gaelic', ''], ['Gagauz', ''], ['Galole', ''], ['Garifuna', ''], ['Georgian', ''], ['German', 'german'], ['Greek', 'greek'], ['Greenlandic', ''], ['Guaragigna', ''], ['Guarani', ''], ['Gujarati', ''], ['Haitian Creole', 'haitian-creole'], ['Hassaniya', ''], ['Hausa', ''], ['Hebrew', 'hebrew'], ['Herero', ''], ['Hiligaynonor Ilonggo', ''], ['Hindi', 'hindi'], ['Hindustani', ''], ['Hmong', ''], ['Hokkien', ''], ['Hungarian', ''], ['Ibo', ''], ['Icelandic', ''], ['Igbo', ''], ['Ilocan', ''], ['Indonesian', ''], ['Irish', ''], ['Italian', 'italian'], ['Japanese', 'japanese'], ['Javanese', ''], ['Jola', ''], ['Kabye', ''], ['Kannada', ''], ['Kaonda', ''], ['Kapingamarangi', ''], ['Karenni', 'karenni'], ['Kazakh', ''], ['Kekchi', ''], ['Khmer', ''], ['Kikongo', ''], ['Kikuyu', ''], ['Kingwana', ''], ['Kinyarwanda', ''], ['Kirundi', ''], ['Kiswahili', ''], ['Kiunguju', ''], ['Korean', 'korean'], ['Kosrean', ''], ['Krio', ''], ['Kurdish', ''], ['Kyrgyz', ''], ['Lao', ''], ['Latin', 'latin'], ['Latin American', ''], ['Latvian', ''], ['Lithuanian', ''], ['Lomwe', ''], ['Lozi', ''], ['Luganda', ''], ['Lunda', ''], ['Luvale', ''], ['Luxembourgish', ''], ['Macedonian', ''], ['Mahorian', ''], ['Maithili', ''], ['Makhuwa', ''], ['Malagasy', ''], ['Malay', 'bahasa-melayu'], ['Malayalam', ''], ['Maldivian Dhivehi', ''], ['Maltese', ''], ['Mam', ''], ['Mambae', ''], ['Mandarin Chinese', 'chinese'], ['Mandinka', ''], ['Manipuri', ''], ['Manx', ''], ['Maori', ''], ['Marathi', ''], ['Marshallese', ''], ['Masai', ''], ['Mayan', ''], ['Mende', ''], ['Mien', ''], ['Minbei', ''], ['Minnan', ''], ['Mirandese', ''], ['Mizo', ''], ['Moldovan', ''], ['Monegasque', ''], ['Mongolian', ''], ['Moroccan', ''], ['Moshi-Dagomba', ''], ['Myene', ''], ['Nahuatl', ''], ['Nauruan', ''], ['Ndebele', ''], ['Nepalese', ''], ['Nepali', 'nepali'], ['Nilo-Hamitic', ''], ['Niuean', ''], ['Norwegian', ''], ['Nubian', ''], ['Nukuoro', ''], ['Nyanja', ''], ['Nzebi', ''], ['Oriya', ''], ['Oromigna', ''], ['Oromo', ''], ['Pampango', ''], ['Panjabi', ''], ['Papiamento', ''], ['Pashtu', ''], ['Pedi', ''], ['Persian', ''], ['Pitcairnese', ''], ['Pohnpeian', ''], ['Polish', 'polish'], ['Portuguese', 'portuguese'], ['Portunol', ''], ['Pulaar', ''], ['Punjabi', 'punjabi'], ['Pushto', ''], ['Quechua', ''], ['Romanian', 'romanian'], ['Romansch', ''], ['Russian', 'russian'], ['Bosnian', ''], ['Samoan', ''], ['Sangho', ''], ['Sanskrit', ''], ['Sara', ''], ['Sena', ''], ['Sepedi', ''], ['Serbian', ''], ['Sesotho', ''], ['Setswana', ''], ['Shangane', ''], ['Shikomoro', ''], ['Shona', ''], ['Simplified Chinese', ''], ['Sindebele', ''], ['Sindhi', ''], ['Singhalese', ''], ['Sinhala', ''], ['Siraiki', ''], ['Siswati', ''], ['Slovak', ''], ['Slovene', ''], ['Slovenian', ''], ['Somali', ''], ['Soninke', ''], ['Sotho', ''], ['Spanish', 'spanish'], ['Sranang Tongo', ''], ['Swahili', 'Swahili'], ['Swazi', ''], ['Swedish', 'Swedish'], ['TaBedawie', ''], ['Tagalog', 'tagalog'], ['Tahitian', ''], ['Taiwanese', ''], ['Tajik', ''], ['Tamil', 'tamil'], ['Tatar', ''], ['Telugu', ''], ['Temne', ''], ['Tetum', ''], ['Thai', ''], ['Tibetan', ''], ['Tigrinya', 'tigrinya'], ['Tobi', ''], ['Tokelauan', ''], ['Trukese', ''], ['Tshiluba', ''], ['Tshivenda', ''], ['Tswana', ''], ['Turkish', 'turkish'], ['Turkmen', ''], ['Tuvaluan', ''], ['Twi', ''], ['Ukrainian', ''], ['Ulithian', ''], ['Urdu', 'urdu'], ['Uzbek', 'uzbek'], ['Vasekela Bushman', ''], ['Venda', ''], ['Vietnamese', 'vietnamese'], ['Wallisian', ''], ['Waray', ''], ['Welsh', ''], ['Woleaian', ''], ['Wolof', ''], ['Wu', ''], ['Xhosa', ''], ['Xiang', ''], ['Xitsonga', ''], ['Yapese', ''], ['Yiddish', ''], ['Yoruba', 'yoruba'], ['Yue', ''], ['Zulu', '']];
                    var suggestions = [];
                    for (i=0;i<choices.length;i++)
                        if (~(choices[i][0]+' '+choices[i][1]).toLowerCase().indexOf(term)) suggestions.push(choices[i]);
                    suggest(suggestions);
                },
				renderItem: function (item, search){
                    search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
					if(item[1] == '') {
						return '<div class="autocomplete-suggestion" data-langname="'+item[0]+'" data-lang="https://www.daytranslations.com/quote" data-val="'+search+'"><a href="https://www.daytranslations.com/quote"> '+item[0]+'</a></div>';
					} else {
						return '<div class="autocomplete-suggestion" data-langname="'+item[0]+'" data-lang="https://www.daytranslations.com/languages/'+item[1]+'" data-val="'+search+'"><a href="https://www.daytranslations.com/languages/'+item[1]+'"> '+item[0]+'</a></div>';
					}
                    
                },
                onSelect: function(e, term, item){
                    console.log('Item "'+item.data('langname')+' ('+item.data('lang')+')" selected by '+(e.type == 'keydown' ? 'pressing enter or tab' : 'mouse click')+'.');
                    jQuery('#search-page').val(item.data('langname'));
					window.location.href = item.data('lang');
                }
            });
         });   
    </script>
<?php
		$html.= '<div class="language_search">';
			$html.= '<span><i class="fa fa-search" aria-hidden="true"></i></span><input id="search-page" name="q" type="" value="" placeholder="Search any language" class="lang_search_field">';
		$html.= '</div>';				
		return $html;
	}
	add_shortcode('lan_search', 'language_search_shortcode');