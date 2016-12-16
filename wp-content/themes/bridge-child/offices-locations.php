<?php
	//For New Location Page
	function offices_carousel($atts, $content = null) { 
		$atts = shortcode_atts( array(
			'count' => '0',
			'lang' => 'en',
			'order' => 'DESC'
		), $atts, 'offices' );		
?>
<script type="text/javascript">
	jQuery(document).ready(function(e) {
		/*jQuery(".offices_carousel_wrapper").length && (jQuery(".offices_carousel_wrapper").each(function() {*/
			jQuery(this).find(".offices_carousel").carouFredSel({
				circular: true,
				responsive: true,
				scroll: {
					items: 1,
					duration: 500,
					pauseOnHover: true
				},
				items: {
					width: 290,
					visible: {
						min: 1,
						max: 5
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
						return jQuery(this).parents().eq(1).find(".prev")
					}
				},
				next: {
					button: function() {
						return jQuery(this).parents().eq(1).find(".next")
					}
				}
			}).animate({
				opacity: 1
			}, 5000)
		//});
	});
</script>
<?php
		$html.= '<div class="offices_carousel_wrapper offices offices_carousel-beforeLoad" data-wow-delay="0.1s">';
					/*$html.= '<div class="human_list_btn">';
						$html.= '<a class="prev" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/previous.png" class="prev-pic"></a>';
						$html.= '<a class="next" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/next.png" class="next-pic"></a>';
					$html.= '</div>';*/
			$html.= '<ul class="offices_carousel slides">';			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-new-york.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/new-york">';						
							$html.= '<div class="office-name">New York</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-chicago.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';		
						$html.= '<a href="https://www.daytranslations.com/locations/chicago">';					
							$html.= '<div class="office-name">Chicago</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-Tampa.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/tampa">';						
							$html.= '<div class="office-name">Tampa</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-washington.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/washington">';							
							$html.= '<div class="office-name">Washington</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-houston.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/houston">';						
							$html.= '<div class="office-name">Houston</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/los-angeles.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/los-angeles">';						
							$html.= '<div class="office-name">Los Angeles</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-tokyo.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/tokyo">';							
							$html.= '<div class="office-name">Tokyo</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-Dubai.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/dubai">';						
							$html.= '<div class="office-name">Dubai</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';		
							$html.= '</a>';					
						$html.= '</div>';
					$html.= '</li>';
				//endwhile;
			$html.= '</ul>';		
		$html.= '</div>';
				
		return $html;
	}
	add_shortcode('offices', 'offices_carousel');


//For Worldwide Offices page===============
	function worldwideOffices_carousel($atts, $content = null) {
		$atts = shortcode_atts( array(
			'count' => '0',
			'lang' => 'en',
			'order' => 'DESC'
		), $atts, 'worldwideOffices' );
?>

<script type="text/javascript">
		jQuery(document).ready(function(e) {
			/*jQuery(".offices_carousel_wrapper").length && (jQuery(".offices_carousel_wrapper").each(function() {*/
				jQuery(this).find(".offices_carousel").carouFredSel({
					circular: true,
					responsive: true,
					scroll: {
						items: 1,
						duration: 500,
						pauseOnHover: true
					},
					items: {
						width: 290,
						visible: {
							min: 1,
							max: 5
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
							return jQuery(this).parents().eq(1).find(".prev")
						}
					},
					next: {
						button: function() {
							return jQuery(this).parents().eq(1).find(".next")
						}
					}
				}).animate({
					opacity: 1
				}, 5000)
			//});
		});
	</script>
<?php
		$html.= '<div class="offices_carousel_wrapper offices offices_carousel-beforeLoad" data-wow-delay="0.1s">';
					/*$html.= '<div class="human_list_btn">';
						$html.= '<a class="prev" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/previous.png" class="prev-pic"></a>';
						$html.= '<a class="next" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/next.png" class="next-pic"></a>';
					$html.= '</div>';*/
			$html.= '<ul class="offices_carousel slides">';			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-india.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';				
						$html.= '<a href="https://www.daytranslations.com/locations/india">';		
							$html.= '<div class="office-name">India</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';					
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-tokyo.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/tokyo">';							
							$html.= '<div class="office-name">Tokyo</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';		
							$html.= '</a>';					
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-Dubai.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/dubai">';							
							$html.= '<div class="office-name">Dubai</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-London.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/london">';							
							$html.= '<div class="office-name">London</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-Saudi-Arabia.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/saudi-arabia">';							
							$html.= '<div class="office-name">Saudi Arabia</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-United-Kingdom.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';
						$html.= '<a href="https://www.daytranslations.com//locations//united-kingdom">';							
							$html.= '<div class="office-name">United Kingdom</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
				//endwhile;
			$html.= '</ul>';		
		$html.= '</div>';
				
		return $html;
	}
	add_shortcode('worldwideOffices', 'worldwideOffices_carousel');
	


//For US Location page=========================
	function usOffices_carousel($atts, $content = null) {
		$atts = shortcode_atts( array(
			'count' => '0',
			'lang' => 'en',
			'order' => 'DESC'
		), $atts, 'usOffices' );
?>

<script type="text/javascript">
jQuery(document).ready(function(e) {
	/*jQuery(".offices_carousel_wrapper").length && (jQuery(".offices_carousel_wrapper").each(function() {*/
		jQuery(this).find(".offices_carousel").carouFredSel({
			circular: true,
			responsive: true,
			scroll: {
				items: 1,
				duration: 500,
				pauseOnHover: true
			},
			items: {
				width: 290,
				visible: {
					min: 1,
					max: 5
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
					return jQuery(this).parents().eq(1).find(".prev")
				}
			},
			next: {
				button: function() {
					return jQuery(this).parents().eq(1).find(".next")
				}
			}
		}).animate({
			opacity: 1
		}, 5000)
	//});
});
</script>
<?php
		$html.= '<div class="offices_carousel_wrapper offices offices_carousel-beforeLoad" data-wow-delay="0.1s">';
					/*$html.= '<div class="human_list_btn">';
						$html.= '<a class="prev" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/previous.png" class="prev-pic"></a>';
						$html.= '<a class="next" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/next.png" class="next-pic"></a>';
					$html.= '</div>';*/
			$html.= '<ul class="offices_carousel slides">';			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-new-york.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/new-york">';						
							$html.= '<div class="office-name">New York</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-chicago.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';		
						$html.= '<a href="https://www.daytranslations.com/locations/chicago">';					
							$html.= '<div class="office-name">Chicago</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-Tampa.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/tampa">';						
							$html.= '<div class="office-name">Tampa</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-washington.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/washington">';							
							$html.= '<div class="office-name">Washington</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-houston.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/houston">';						
							$html.= '<div class="office-name">Houston</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="offices_content_inner">';
						$html.= '<div class="offices-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/los-angeles.jpg" class="offices-pic">';
						$html.= '</div>';
						$html.= '<div class="offices-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/los-angeles">';						
							$html.= '<div class="office-name">Los Angeles</div>';
							$html.= '<div class="office-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
				//endwhile;
			$html.= '</ul>';		
		$html.= '</div>';
				
		return $html;
	}
	add_shortcode('usOffices', 'usOffices_carousel');




		


