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
		$html.= '<div class="human_carousel_wrapper human human_carousel-beforeLoad offices_carousel-beforeLoad" data-wow-delay="0.1s">';
					/*$html.= '<div class="human_list_btn">';
						$html.= '<a class="prev" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/previous.png" class="prev-pic"></a>';
						$html.= '<a class="next" href="#"><img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/next.png" class="next-pic"></a>';
					$html.= '</div>';*/
			$html.= '<ul class="offices_carousel slides">';			
				//query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
				//while (have_posts()) : the_post();				
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-new-york.jpg" class="human-pic">';
						$html.= '</div>';
						$html.= '<div class="human-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/new-york">';						
							$html.= '<div class="human-name">New York</div>';
							$html.= '<div class="human-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-chicago.jpg" class="human-pic">';
						$html.= '</div>';
						$html.= '<div class="human-details">';		
						$html.= '<a href="https://www.daytranslations.com/locations/chicago">';					
							$html.= '<div class="human-name">Chicago</div>';
							$html.= '<div class="human-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-Tampa.jpg" class="human-pic">';
						$html.= '</div>';
						$html.= '<div class="human-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/tampa">';						
							$html.= '<div class="human-name">Tampa</div>';
							$html.= '<div class="human-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-washington.jpg" class="human-pic">';
						$html.= '</div>';
						$html.= '<div class="human-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/washington">';							
							$html.= '<div class="human-name">Washington</div>';
							$html.= '<div class="human-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-houston.jpg" class="human-pic">';
						$html.= '</div>';
						$html.= '<div class="human-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/houston">';						
							$html.= '<div class="human-name">Houston</div>';
							$html.= '<div class="human-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/los-angeles.jpg" class="human-pic">';
						$html.= '</div>';
						$html.= '<div class="human-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/los-angeles">';						
							$html.= '<div class="human-name">Los Angeles</div>';
							$html.= '<div class="human-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-tokyo.jpg" class="human-pic">';
						$html.= '</div>';
						$html.= '<div class="human-details">';
						$html.= '<a href="https://www.daytranslations.com/locations/tokyo">';							
							$html.= '<div class="human-name">Tokyo</div>';
							$html.= '<div class="human-area">GO TO LOCATION</div>';	
							$html.= '</a>';						
						$html.= '</div>';
					$html.= '</li>';
					
					$html.= '<li class="human_content_inner">';
						$html.= '<div class="human-image">';
							$html.= '<img src="https://www.daytranslations.com/wp-content/themes/bridge-child/images/loc-Dubai.jpg" class="human-pic">';
						$html.= '</div>';
						$html.= '<div class="human-details">';	
						$html.= '<a href="https://www.daytranslations.com/locations/dubai">';						
							$html.= '<div class="human-name">Dubai</div>';
							$html.= '<div class="human-area">GO TO LOCATION</div>';		
							$html.= '</a>';					
						$html.= '</div>';
					$html.= '</li>';
				//endwhile;
			$html.= '</ul>';		
		$html.= '</div>';
				
		return $html;
	}
	add_shortcode('offices', 'offices_carousel');
?>



		


