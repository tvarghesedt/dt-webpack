<?php
define('QODE_ROOT', get_template_directory_uri());
function wp_schools_enqueue_scripts() {
global $qode_options_proya;
global $is_chrome;
global $is_opera;
global $is_IE;
global $post;
echo '<meta name="apple-mobile-web-app-capable" content="yes">';
echo '<meta name="mobile-web-app-capable" content="yes">';
wp_register_style( 'parent-stylesheet', get_stylesheet_directory_uri() . '/stylesheet.min.css'  );
wp_enqueue_style( 'parent-stylesheet' );

preg_match( "#Chrome/(.+?)\.#", $_SERVER['HTTP_USER_AGENT'], $match );
        if(!empty($match)){ $version = $match[1];}else{ $version = 0; }
        $mac_os = strpos($_SERVER['HTTP_USER_AGENT'], "Macintosh; Intel Mac OS X");

        if($is_chrome && ($mac_os !== false) && ($version > 21)) {
            wp_enqueue_style("parent-mac_stylesheet", QODE_ROOT . "/css/mac_stylesheet.css");
        }

        if($is_chrome || $is_safari) {
            wp_enqueue_style("parent-webkit", QODE_ROOT . "/css/webkit_stylesheet.css");
        }

        if($is_safari) {
            wp_enqueue_style("parent-safari", QODE_ROOT . "/css/safari_stylesheet.css");
        }
		
		
		
		wp_enqueue_style("parent-style_dynamic", QODE_ROOT . "/css/style_dynamic.css", array(), filemtime(dirname(__FILE__) ."/css/style_dynamic.css"));

// wp_register_style( 'parent-responsive', get_stylesheet_directory_uri() . '/responsive.min.css'  );
// wp_enqueue_style( 'parent-responsive' );

wp_register_style( 'childstyle', get_stylesheet_directory_uri() . '/style.css'  );
wp_enqueue_style( 'childstyle' );
wp_register_style( 'additional', get_stylesheet_directory_uri() . '/additional-s.css'  );
wp_enqueue_style( 'additional' );
if($post->ID=="38972"){
	wp_register_style( 'additionaln', get_stylesheet_directory_uri() . '/additional-n.css'  );
	wp_enqueue_style( 'additionaln' );
}
wp_deregister_script( 'default' );
wp_dequeue_script( 'default' ); 
wp_register_script( 'defaultjs', get_stylesheet_directory_uri() . '/js/default.min.js' , 'jquery', NULL, TRUE);
wp_enqueue_script( 'defaultjs');
// wp_register_script( 'lazyjs', get_stylesheet_directory_uri() . '/js/jquery.lazy.min.js' , 'jquery', NULL, TRUE);
// wp_enqueue_script( 'lazyjs');
// wp_register_script( 'customjs', get_stylesheet_directory_uri() . '/js/custom.js' , 'jquery', NULL, TRUE );
// wp_enqueue_script( 'customjs' );
wp_register_script( 'combinejs', get_stylesheet_directory_uri() . '/js/combine.js' , 'jquery', NULL, TRUE );
wp_enqueue_script( 'combinejs' );
if ( wp_is_mobile() ) {
wp_register_style( 'homescrncss', get_stylesheet_directory_uri() . '/addtohomescreen.css');
wp_enqueue_style( 'homescrncss' );
wp_register_script( 'addtohomescreen', get_stylesheet_directory_uri() . '/js/addtohomescreen.min.js' , 'jquery', NULL, TRUE );
wp_enqueue_script( 'addtohomescreen' );
}
	
	if($post->ID=="33"){
		wp_register_script('jquery-ui-certified', get_stylesheet_directory_uri() . '/js/jquery-ui-1.8.13.custom.min.js', 'jquery', NULL, TRUE); 
		wp_enqueue_script('jquery-ui-certified');
	}
	if($post->ID=="38652" || $post->ID == "38642" || $post->ID == "38613" || $post->ID == "38613" || $post->ID == "38562"){
		wp_register_script( 'affixjs', get_stylesheet_directory_uri() . '/js/affix.js' , 'jquery', NULL, TRUE);
		wp_enqueue_script( 'affixjs');
		wp_register_script( 'initjs', get_stylesheet_directory_uri() . '/js/init.js' , 'jquery', NULL, TRUE);
		wp_enqueue_script( 'initjs');
	}
}
add_action( 'wp_enqueue_scripts', 'wp_schools_enqueue_scripts', 11);

/*Proper way to enqueue scripts and styles*/
function remove_parent_scripts(){
wp_deregister_style('custom_css');
wp_dequeue_style('custom_css');
wp_deregister_style('ls-google-fonts');
wp_dequeue_style('ls-google-fonts');
wp_deregister_style('default_style');
wp_dequeue_style('default_style');
wp_deregister_style('style_dynamic_responsive');
wp_dequeue_style('style_dynamic_responsive');
wp_deregister_style('qode_font_elegant');
wp_dequeue_style('qode_font_elegant');
wp_deregister_style('qode_font_awesome');
wp_dequeue_style('qode_font_awesome');
wp_deregister_style('qode_linea_icons');
wp_dequeue_style('qode_linea_icons');
wp_deregister_style('stylesheet');
wp_dequeue_style('stylesheet');
wp_deregister_style('responsive');
wp_dequeue_style('responsive');
wp_deregister_style('mac_stylesheet');
wp_dequeue_style('mac_stylesheet');

wp_deregister_style('webkit');
wp_dequeue_style('webkit');
wp_deregister_style('safari');
wp_dequeue_style('safari');
wp_deregister_style('style_dynamic');
wp_dequeue_style('style_dynamic');
wp_deregister_style('qode_print');
wp_dequeue_style('qode_print');
wp_deregister_style('js_composer_front');
wp_dequeue_style('js_composer_front');
wp_dequeue_script("lemmonSlider");
wp_dequeue_script("isotope");
wp_dequeue_script("one_page_scroll");
wp_dequeue_script( 'custom_js' );
wp_deregister_script( 'custom_js' );
wp_dequeue_script( 'qode-like' );
wp_dequeue_script( 'wpb_composer_front_js' );
wp_deregister_script( 'comment-reply' );
wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_enqueue_scripts', 'remove_parent_scripts', 100 );

function disable_wp_emojicons() {
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
}
add_action( 'init', 'disable_wp_emojicons' );

function disable_emojicons_tinymce( $plugins ) {
  if ( is_array( $plugins ) ) {
    return array_diff( $plugins, array( 'wpemoji' ) );
  } else {
    return array();
  }
}

register_nav_menus(array('secondary-navigation' => __( 'Secondary Navigation', 'qode')));

/*############### Added By Suman on 12/10/2015 #############START##############*/
	
	add_action('admin_init', 'admin_init', 100);
    add_action('save_post', 'save_testimonials_other_value');  

    function admin_init(){
        add_meta_box('testimonials_other', 'Testimonial Other Setting', 'meta_options', 'testimonials', 'normal');
    }  

    function meta_options(){
        global $post;
        $custom = get_post_custom($post->ID);
        $image = $custom["qode_testimonial-image"][0];
		$country = $custom["qode_testimonial-country"][0];
		$logo = $custom["qode_testimonial-logo"][0];
		$ration = $custom["qode_testimonial-ration"][0];
?>
    <div class="qodef-meta-box qodef-page">
        <div class="qodef-meta-box-holder">	
			<div class="qodef-page-form-section" id="qodef_qode_testimonial-author">
				<div class="qodef-field-desc">
					<h4>Image</h4>
					<p>Upload the Image</p>
				</div>
				<div class="qodef-section-content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-lg-12">
								<input type="text" class="form-control qodef-input qodef-form-element" name="qode_testimonial-image" value="<?php echo $image; ?>" id="qode_testimonial-image" >
								<input id="qode_testimonial-image" type="button" value="Select" class="upload_button">
							</div>
						</div>
					</div>
				</div>
			</div>	
			<div class="qodef-page-form-section">
				<div class="qodef-field-desc">
					<h4>Country</h4>
					<p>Enter the country</p>
				</div>
				<div class="qodef-section-content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-lg-12">
								<input type="text" class="form-control qodef-input qodef-form-element" name="qode_testimonial-country" value="<?php echo $country; ?>" placeholder="">
							</div>
						</div>
					</div>
				</div>
			</div>	
			<div class="qodef-page-form-section" id="qodef_qode_testimonial_website">
				<div class="qodef-field-desc">
					<h4>Logo</h4>
					<p>Upload Logo</p>
				</div>
				<div class="qodef-section-content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-lg-12">
								<input type="text" class="form-control qodef-input qodef-form-element" name="qode_testimonial-logo" value="<?php echo $logo;?>" id="qode_testimonial-logo">
								<input id="qode_testimonial-logo" type="button" value="Select" class="upload_button">
							</div>
						</div>
					</div>
				</div>
			</div>			
			<div class="qodef-page-form-section" id="qodef_qode_testimonial_website">
				<div class="qodef-field-desc">
					<h4>Ration</h4>
					<p>Enter rating value out of 5</p>
				</div>
				<div class="qodef-section-content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-lg-12">
								<input type="text" class="form-control qodef-input qodef-form-element" name="qode_testimonial-ration" value="<?php echo $ration; ?>" placeholder=""></div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
	<script type = "text/javascript">
	jQuery( document ).ready(function() {
		// Uploading files
		var file_frame;
		jQuery('.upload_button').on('click', function(e) {			
			var fielsname = jQuery(this).attr('id');
			e.preventDefault();
			// If the media frame already exists, reopen it.
			if (file_frame) {
				file_frame.open();
				return;
			}
			// Create the media frame.
			file_frame = wp.media.frames.file_frame = wp.media({
				title: jQuery(this).data('uploader_title'),
				button: {
					text: jQuery(this).data('uploader_button_text'),
				},
				multiple: false // Set to true to allow multiple files to be selected
			});
			
			
			// When a file is selected, run a callback.
			file_frame.on('select', function(){
				// We set multiple to false so only get one image from the uploader
				attachment = file_frame.state().get('selection').first().toJSON();
				var url = attachment.url;
				var field = document.getElementById(fielsname);
				field.value = url; //set which variable you want the field to have
				if(fielsname == 'qode_testimonial-logo') {					
					fielsname = 'qode_testimonial-image';
				} else {
					fielsname = 'qode_testimonial-logo';
				}
				
			});
			file_frame.open();
		});
	});
    </script>
	
<?php
    }  

	function save_testimonials_other_value(){
		global $post;
		update_post_meta($post->ID, "qode_testimonial-country", $_POST["qode_testimonial-country"]);
		update_post_meta($post->ID, "qode_testimonial-image", $_POST["qode_testimonial-image"]);
		update_post_meta($post->ID, "qode_testimonial-logo", $_POST["qode_testimonial-logo"]);
		update_post_meta($post->ID, "qode_testimonial-ration", $_POST["qode_testimonial-ration"]);
	}
/*############### Added By Suman on 12/10/2015 #############END##############*/



/*############### Added By Suman on 12/11/2015 #############START##############*/
function testimonial_carousel($atts, $content = null) { 

	$atts = shortcode_atts( array(
		'count' => '0',
		'lang' => 'en',
		'text' => 'in Satifaction Rating',
		'type' => '1',
		'order' => 'DESC'
	), $atts, 'testimonial' );
	
	
	$html.= '<div class="social_carousel_wrapper testimonial social_carousel-beforeLoad" data-wow-delay="0.1s">';
                $html.= '<div class="list_btn1">';
                    $html.= '<a class="prev2" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a>';
                    $html.= '<a class="next2" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
                $html.= '</div>';
		$html.= '<ul class="social_carousel slides">';
		
			query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
			while (have_posts()) : the_post();
				$author = get_post_meta( get_the_ID(), 'qode_testimonial-author');
				$image = get_post_meta( get_the_ID(), 'qode_testimonial-image');
				$country = get_post_meta( get_the_ID(), 'qode_testimonial-country');
				$text = get_post_meta( get_the_ID(), 'qode_testimonial-text');
				$logo = get_post_meta( get_the_ID(), 'qode_testimonial-logo');
				$ration = get_post_meta( get_the_ID(), 'qode_testimonial-ration');
				$rationnew = $ration[0] ;
				$diveder = '';
				if(strlen($country[0]) > 1){
					$diveder = ', <span itemprop="publisher" itemscope itemtype="http://schema.org/Place"><span itemprop="name">'.$country[0].'</span></span>';
				}
				$html.= '<li class="testimonial_content_inner">';
				$html.= '<div itemprop="review" itemscope itemtype="http://schema.org/Review">';
					$html.= '<div itemprop="itemReviewed" itemscope itemtype="http://schema.org/Service" style="display:none;"><span itemprop="name">Translation</span></div>';
					$html.= '<div class="testimonial_image_name_holder">';
					$image[0] = str_replace( "http:", "", $image[0]);
						$html.= '<meta itemprop="image" content="'.$image[0].'"/>';
						$html.= '<span class="author_image"><img src="'.$image[0].'" draggable="false" alt="'.$author[0].'" title="'.$author[0].'"></span>';
						$html.= '<span class="social_name"><span itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name">'.$author[0].'</span></span>'.$diveder.'</span>';
					$html.= '</div>';				
					$html.= '<div class="testimonial_text_holder">';
						$html.= '<p  itemprop="reviewBody">"'.$text[0].'"</p>';
					$html.= '</div>';
					$html.= '<div class="testimonial_author_holder">';					
					$logo[0] = str_replace( "http:", "", $logo[0]);
						$html.= '<meta itemprop="image" content="'.$logo[0].'"/>';
						$html.= '<span class="author_logo"><img src="'.$logo[0].'" draggable="false" alt="Author Logo" title="Author Logo"></span>';
						if($atts["lang"] && $atts["lang"] == 'es') {
							$html.= '<span class="author_rating"><span class="stars">'.$rationnew.'</span><span class="satifaction" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">Calificación de satisfacción <span itemprop="ratingValue">'.$ration[0].'</span>/5</span></span>';
						} elseif($atts["lang"] && $atts["lang"] == 'ar') {
							$html.= '<span class="author_rating"><span class="stars">'.$rationnew.'</span><span class="satifaction" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating"><span itemprop="ratingValue">'.$ration[0].'</span>/5 in Satifaction Rating</span></span>';
						} else {
							$html.= '<span class="author_rating"><span class="stars">'.$rationnew.'</span><span class="satifaction" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating"><span itemprop="ratingValue">'.$ration[0].'</span>/5 in Satifaction Rating</span></span>';
						}
					$html.= '</div>';
				$html.= '</div>';
				$html.= '</li>';
			endwhile;
		$html.= '</ul>';		
	$html.= '</div>';
			
	return $html;

}
add_shortcode('testimonial', 'testimonial_carousel');
/*############### Added By Suman on 12/11/2015 #############END##############*/




/*############### Added By Suman on 12/17/2015 #############STRT##############*/
/* Qode Carousel shortcode */
if (!function_exists('dt_child_qode_carousel')) {
    function dt_child_qode_carousel( $atts, $content = null ) {
        $args = array(
            "carousel" => "",
            "orderby"  => "date",
            "order"    => "ASC",
            "show_in_two_rows" => ""
        );
        extract(shortcode_atts($args, $atts));

        $html = "";
		$carousel_holder_classes = "";
        if ($carousel != "") {

			if($show_in_two_rows == 'yes') {
				$carousel_holder_classes = ' two_rows';
			}

            $html .= "<div class='qode_carousels_holder clearfix" . $carousel_holder_classes  ."'><div class='qode_carousels'><ul class='slides'>";

            $q = array('post_type'=> 'carousels', 'carousels_category' => $carousel, 'orderby' => $orderby, 'order' => $order, 'posts_per_page' => '-1');

            query_posts($q);

            if ( have_posts() ) : $postCount = 1; while ( have_posts() ) : the_post();

                if(get_post_meta(get_the_ID(), "qode_carousel-image", true) != ""){
                    $image = get_post_meta(get_the_ID(), "qode_carousel-image", true);
                } else {
                    $image = "";
                }

                if(get_post_meta(get_the_ID(), "qode_carousel-hover-image", true) != ""){
                    $hover_image = get_post_meta(get_the_ID(), "qode_carousel-hover-image", true);
                    $has_hover_image = "has_hover_image";
                } else {
                    $hover_image = "";
                    $has_hover_image = "";
                }

                if(get_post_meta(get_the_ID(), "qode_carousel-item-link", true) != ""){
                    $link = get_post_meta(get_the_ID(), "qode_carousel-item-link", true);
                } else {
                    $link = "";
                }

                if(get_post_meta(get_the_ID(), "qode_carousel-item-target", true) != ""){
                    $target = get_post_meta(get_the_ID(), "qode_carousel-item-target", true);
                } else {
                    $target = "_self";
                }

                $title = get_the_title();

				//is current item not on even position in array and two rows option is chosen?
				if($postCount % 2 !== 0 && $show_in_two_rows == 'yes') {
					$html .= "<li class='item'>";
				} elseif($show_in_two_rows == '') {
					$html .= "<li class='item'>";
				}
				$html .= '<div class="carousel_item_holder">';
                if($link != ""){
                    $html .= "<a href='".$link."' target='".$target."'>";
                }

                $first_image = qode_get_attachment_id_from_url($image);

                if($image != ""){
                    $html .= "<span itemscope itemtype='http://schema.org/ImageObject' class='first_image_holder ".$has_hover_image."'>";

                    if(is_int($first_image)) {
                        $html .= wp_get_attachment_image($first_image, 'full', array('itemprop' => 'image'));
                    } else {
						$html .= '<meta itemprop="image" content="'.$image.'"/>';
                        $html .= '<img src="'.$image.'" alt="carousel image" />';
                    }


                    $html .= "</span>";
                }

                $second_image = qode_get_attachment_id_from_url($hover_image);

                if($hover_image != ""){
                    $html .= "<span itemscope itemtype='http://schema.org/ImageObject' class='second_image_holder ".$has_hover_image."'>";

                    if(is_int($second_image)) {
                        $html .= wp_get_attachment_image($second_image, 'full', array('itemprop' => 'image'));
                    } else {
                        $html .= '<img itemprop="image" src="'.$hover_image.'" alt="carousel image" />';
                    }


                    $html .= "</span>";
                }

                if($link != ""){
                    $html .= "</a>";
                }

				$html .= '</div>';

				//is current item on even position in array and two rows option is chosen?
				if($postCount % 2 == 0 && $show_in_two_rows == 'yes') {
					$html .= "</li>";
				} elseif($show_in_two_rows == '') {
					$html .= "</li>";
				}

                $postCount++;

            endwhile;

            else:
                $html .= __('Sorry, no posts matched your criteria.','qode');
            endif;

            wp_reset_query();

            $html .= "</ul>";
            $html .= "</div></div>";

        }

        return $html;
    }
}

function dt_child_theme_setup() {
   remove_shortcode( 'qode_carousel' );   
   add_shortcode( 'qode_carousel', 'dt_child_qode_carousel' );
}
add_action( 'after_setup_theme', 'dt_child_theme_setup' );


/*###############EDITOR################*/
/*
function myextensionTinyMCE($init) {
    // Command separated string of extended elements
    $ext = '[itemscope|itemtype|itemid|itemprop|content]';

    // Add to extended_valid_elements if it alreay exists
    if ( isset( $init['extended_valid_elements'] ) ) {
        $init['extended_valid_elements'] .= ',' . $ext;
    } else {
        $init['extended_valid_elements'] = $ext;
    }

    // Super important: return $init!
    return $init;
}

add_filter('tiny_mce_before_init', 'myextensionTinyMCE' );
*/
/*
if (!function_exists('dt_child_service')) {
    function dt_child_service( $atts, $content = null ) {
		$atts = shortcode_atts( array(
			"img" => null,
            "icon"  => null,
            "title"    => null,
			"color"    => null,
            "linkurl" => null,
			"linktext" => null,
		), $atts, 'service' );

        $html = "";
		$html.= '<div itemscope itemtype="http://schema.org/Service" class="service-wrapper">';
			if($atts["img"]) {
			$html.= '<div class="full_media">';
					$html.= '<img itemprop="image" src="'.$atts["img"].'" alt="img1services">';
			$html.= '</div>';
			}
			if($atts["icon"]) {
			$html.= '<div class="servicesIcon">';
				$html.= '<img width="56" height="55" src="'.$atts["icon"].'" alt="icon1services">';
			$html.= '</div>';
			}
			$html.= '<div class="contentarea">';
				$html.= '<h3 itemprop="name">'.$atts["title"].'</h3>';
				if($atts["color"]) {
				$html.= '<div class="separator small left" style="background-color: #'.$atts["color"].';"></div>';
				}
				$html.= '<p itemprop="description">'.$content.'</p>';
			$html.= '</div>';
			if($atts["linktext"]) {
					$html.= '<a itemprop="url" class="qbutton" href="'.$atts["linkurl"].'">'.$atts["linktext"].' <i class="fa fa-angle-right right"></i></a>';
				} else {
					$html.= '<a itemprop="url" class="readmore" href="'.$atts["linkurl"].'">Read more... <i class="fa fa-angle-right right"></i></a>';
				}
		$html.= '</div>';
		
		return $html;
	}	
}
add_shortcode('service', 'dt_child_service');
*/

if (!function_exists('dt_child_servicecarousal')) {
    function dt_child_servicecarousal( $atts, $content = null ) {
		$atts = shortcode_atts( array(
			"class" => "service_carousel_wrapper subservice",
            "delay"  => "0.1s",
            "nav"    => true,
			"ulclass"    => "service_carousel slides",
            "ulid" => null
		), $atts, 'servicecarousal' );
		if($atts["id"]) {
			$ulId = "";
			$ulId.= 'id="'.$atts["ulid"].'"';
		}
        $html = "";
		$html.= '<div class="'.$atts["class"].'" data-wow-delay="'.$atts["delay"].'">';
			if($atts["nav"]) {
			$html.= '<div class="list_btn1">';
				$html.= '<a class="prev2" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a>';
				$html.= '<a class="next2" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
			$html.= '</div>';
			}
			$html.='<ul class="'.$atts["ulclass"].'" '.$ulId.'>';
			$content = str_replace( "http:", "", $content);
				$html.= do_shortcode($content);		
			$html.='</ul>';			
		$html.= '</div>';
		
		return $html;
	}
	
}
add_shortcode('servicecarousal', 'dt_child_servicecarousal');

if (!function_exists('dt_child_carousal')) {
    function dt_child_carousal( $atts, $content = null ) {
		extract( shortcode_atts( array(
			"class"		=> null,
            "delay"		=> "0.1s",
            "nav"		=> true,
			"ulclass"	=> null,
            "ulid"		=> null
		), $atts ) );
		
		$class = "";
		if($atts["class"]) {			
			$class = 'class="dt_carousel_wrapper '.$atts["class"].'" ';
		}
		$delay = "";
		if($atts["delay"]) {			
			$delay = 'delay-wow-delay="'.$atts["delay"].'" ';
		}
		if($atts["ulclass"]) {
			$ulclass = "";
			$ulclass = 'class="dt_carousel slides '.$atts["ulclass"].'" ';
		}
		if($atts["ulid"]) {
			$ulId = "";
			$ulId = 'id="'.$atts["ulid"].'" ';
		}
        $carousalhtml = "";
		$carousalhtml.= '<div '.$class.$delay.'>';
			if($atts["nav"] == true) {
			$carousalhtml.= '<div class="list_btn1">';
				$carousalhtml.= '<a class="prev2" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a>';
				$carousalhtml.= '<a class="next2" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
			$carousalhtml.= '</div>';
			}
			$carousalhtml.='<ul '.$ulclass.$ulId.'>';
			$content = str_replace( "http:", "", $content);
				$carousalhtml.= do_shortcode($content);		
			$carousalhtml.='</ul>';			
		$carousalhtml.= '</div>';
		//echo '||'.$carousalhtml.'||'; die;
		return $carousalhtml;
	}
	
}
add_shortcode('dtcarousal', 'dt_child_carousal');

if (!function_exists('dt_child_cruslele')) {
    function dt_child_cruslele( $atts, $content = null ) {
		$atts = shortcode_atts( array(
			"class" => null,
            "id"  => null
		), $atts, 'cruslele' );
        $html = "";
		if($atts["id"]) {
			$liId = "";
			$liId.= 'id="'.$atts["id"].'"';
		}
		$html.='<li class="subservice_content_inner '.$atts["class"].'" '.$liId.'>';
			$html.= do_shortcode($content);
		$html.='</li>';
		
		return $html;
	}
	
}
add_shortcode('cruslele', 'dt_child_cruslele');


if (!function_exists('dt_child_wrapdiv')) {
    function dt_child_wrapdiv( $atts, $content = null ) {
		extract( shortcode_atts( array(
			"itemtype" 			=> null,
			"itemprop"			=> null,
            "container"  		=> 'div',
			"wrapper_class"  	=> null,
			"wrapper_id"  		=> null,
			"wrapper_style"  	=> null,
			
		), $atts ) );
		
		//print_r($atts);
        $html = "";
		
		//For wrapper class 
		$wrapcls = "";
		if($atts["wrapper_class"]) {				
			$wrapcls = ' class="'.$atts["wrapper_class"].'" ';
		}
		//For wrapper id 
		$wrapid = "";
		if($atts["wrapper_id"]) {				
			$wraprid = 'id="'.$atts["wrapper_id"].'" ';
		}
		//For wrapper style 
		$wrapstyle = "";
		if($atts["wrapper_style"]) {				
			$wrapstyle = 'style="'.$atts["wrapper_style"].'" ';
		}
		
		//For wrapper itemprop 
		$wrapitemprop = "";
		if($atts["itemprop"]) {				
			$wrapitemprop = ' itemprop="'.$atts["itemprop"].'" ';
		}
		
		//For container microdata 
		$metastr = '';
		if($atts["itemtype"]){
			$metastr = ' itemscope itemtype="http://schema.org/'.$atts["itemtype"].'" ';
		}
		
		$html.='<'.$atts["container"] . $wrapitemprop . $wrapcls . $wrapid .  $metastr . $wrapstyle . '>';		
		$html.=do_shortcode($content);
		$html.='</' . $atts["container"] . '>';
		
		return $html;
	}
	
}
add_shortcode('wrapdiv', 'dt_child_wrapdiv');


if (!function_exists('dt_child_container')) {
    function dt_child_container( $atts, $content = null ) {
		extract( shortcode_atts( array(
			"itemtype" 			=> null,
			"itemprop"			=> null,
            "container"  		=> 'div',
			"container_class"  	=> null,
			"container_id"  	=> null,
			"container_style"  	=> null,
			
		), $atts ) );
		
		
        $html = "";
		
		//For container class 
		$contcls = "";
		if($atts["container_class"]) {				
			$contcls = ' class="'.$atts["container_class"].'" ';
		}
		//For container id 
		$contid = "";
		if($atts["container_id"]) {				
			$contid = 'id="'.$atts["container_id"].'" ';
		}
		//For container style 
		$contstyle = "";
		if($atts["container_style"]) {				
			$contstyle = 'style="'.$atts["container_style"].'" ';
		}
		
		//For container itemprop 
		$contitemprop = "";
		if($atts["itemprop"]) {				
			$contitemprop = ' itemprop="'.$atts["itemprop"].'" ';
		}
		
		//For container microdata 
		$metastr = '';
		if($atts["itemtype"]){
			$metastr = ' itemscope itemtype="http://schema.org/'.$atts["itemtype"].'" ';
		}
		
		$html.='<'.$atts["container"] . $contitemprop . $contcls . $contid .  $metastr . $contstyle . '>';		
		$html.=do_shortcode($content);
		$html.='</' . $atts["container"] . '>';
		
		return $html;
	}
	
}
add_shortcode('container', 'dt_child_container');


if (!function_exists('dt_child_container_inner')) {
    function dt_child_container_inner( $atts, $content = null ) {
		extract( shortcode_atts( array(
			"itemtype"	=> null,
			"itemprop"	=> null,
            "container"	=> null,
			"class"  	=> null,
			"id"  		=> null,
			"style"  	=> null,
			
		), $atts ) );
		
		
        $html = "";
		
		//For inner class 
		$contcls = "";
		if($atts["class"]) {				
			$contcls = ' class="'.$atts["class"].'" ';
		}
		//For inner id 
		$contid = "";
		if($atts["id"]) {				
			$contid = ' id="'.$atts["id"].'" ';
		}
		//For inner style 
		$contstyle = "";
		if($atts["style"]) {				
			$contstyle = ' style="'.$atts["style"].'" ';
		}
		
		//For inner itemprop 
		$contitemprop = "";
		if($atts["itemprop"]) {				
			$contitemprop = ' itemprop="'.$atts["itemprop"].'" ';
		}
		
		//For inner microdata 
		$metastr = '';
		if($atts["itemtype"]){
			$metastr = ' itemscope itemtype="http://schema.org/'.$atts["itemtype"].'" ';
		}
		
		$html.='<'.$atts["container"] . $contitemprop . $contcls . $contid .  $metastr . $contstyle . '>';		
		$html.=do_shortcode($content);
		$html.='</' . $atts["container"] . '>';
		
		return $html;
	}
	
}
add_shortcode('inner', 'dt_child_container_inner');



if (!function_exists('dt_child_imgbox')) {
    function dt_child_imgbox( $atts, $content = null ) {		
		extract( shortcode_atts( array(
			"itemtype" 			=> null,
			"itemprop" 			=> null,			
			"img_id"  			=> null,
			"img_class"  		=> null,
			"img_style"  		=> null,
			"alt"  				=> null,
			"title"  			=> null
		), $atts ) );
		
		print_r($atts);

        $imgboxhtml = "";
		
		//For img class 
		$imgcls = "";
		if($atts["img_class"]) {				
			$imgcls = ' class="'.$atts["img_class"].'" ';
		}
		//For img id 
		$imgid = "";
		if($atts["img_id"]) {				
			$imgid = 'id="'.$atts["img_id"].'" ';
		}
		//For img style 
		$imgstyle = "";
		if($atts["img_style"]) {				
			$imgstyle = 'style="'.$atts["img_style"].'" ';
		}
		
		//For img itemprop 
		$imgitemprop = "";
		if($atts["itemtype"]) {				
			$imgitemprop = ' itemscope itemtype="http://schema.org/'.$atts["itemtype"].'" ';
		}
		
		$imgitemprop = "";
		if($atts["itemprop"]) {				
			$imgboxhtml.='<meta itemprop="image" content="'.$content.'"/>';
		}
		
		//echo $atts["itemtype"];
		
		//echo '<img '.$imgitemprop.' src="'.$content.'" ' . $imgcls . $imgid .  $imgstyle . '>'; die;
		
		$imgboxhtml.='<img ' . $imgitemprop . $imgitemprop . ' src="'.$content.'" ' . $imgcls . $imgid .  $imgstyle . '>';
		return $imgboxhtml;
	}	
}
add_shortcode('imgbox', 'dt_child_imgbox');


if (!function_exists('dt_child_link')) {
    function dt_child_link( $atts, $content = null ) {
		extract( shortcode_atts( array(
			"itemtype" 	=> null,            
			"id"		=> null,
			"class"  	=> "qbutton",
			"style"		=> null,
			"url"		=> '#',
			"type"		=> null
		), $atts ) );
		$attributes = '';
		$linkhtml = "";
		foreach($atts as $key => $value){
			if($key != "type")
				$attributes.= "$key = '$value' ";
		}
		
		$iconbox = '<i class="fa fa-angle-right right"></i>';
		if($atts["type"] == 'tel') {				
			$iconbox = '<i class="fa fa-phone right"></i>';
		}
		
		if($atts["type"] == 'none') {				
			$iconbox = '';
		}
		
		$linkhtml.='<a '.$attributes . '>';		
		$linkhtml.=do_shortcode($content) . $iconbox;
		$linkhtml.='</a>';		
		$linkhtml = str_replace( "http:", "", $linkhtml);		
		return $linkhtml;
	}
	
}
add_shortcode('link', 'dt_child_link');
/*############### Added By Suman on 12/17/2015 #############STRT##############*/
if (!function_exists('dt_child_img')) {
    function dt_child_img( $atts, $content = null ) {		
		extract( shortcode_atts( array(
			"itemtype" 			=> null,            
			"id"  			=> null,
			"class"  		=> null,
			"style"  		=> null,
			"alt"  				=> null,
			"title"  			=> null
		), $atts ) );
		$attributes = '';
		$imgboxhtml = "";
		foreach($atts as $key => $value){
			if($key == 'itemtype'){
				$imgboxhtml.='<meta itemprop="image" content="'.$content.'/>';
			}else if($key == 'src'){
				
			} else {
				$attributes.= "$key = '$value' ";
			}			
		}

		$imgboxhtml.='<img ' . $attributes . ' src="'.$content.'" >';
		$imgboxhtml = str_replace( "http:", "", $imgboxhtml);
		return $imgboxhtml;
	}	
}
add_shortcode('img', 'dt_child_img');


if (!function_exists('dt_child_container_innerspann')) {
    function dt_child_container_innerspann( $atts, $content = null ) {
		extract( shortcode_atts( array(
			"itemtype" 			=> null,
			"itemprop"			=> null,
            "container"  		=> null,
			"class"  	=> null,
			"id"  	=> null,
			"style"  	=> null,
			
		), $atts ) );
		//print_r($atts);
		$attributes = '';		
		$innerhtml = '';
		$container = '';
		foreach($atts as $key => $value){
			if($key == 'itemtype')
				$attributes.= ' itemscope itemtype="http://schema.org/'.$value.'" ';
			elseif($key == 'container')
				$container = $value;
			else
				$attributes.= "$key = '$value' ";
		}		
		
		$innerhtml.='<'.$container . ' ' . $attributes . '>';		
		$innerhtml.=do_shortcode($content);
		$innerhtml.='</' . $container . '>';
		
		return $innerhtml;
	}
	
}
add_shortcode('innerspann', 'dt_child_container_innerspann');

if (!function_exists('dt_child_metabox')) {
    function dt_child_metabox( $atts, $content = null ) {
		extract( shortcode_atts( array(
			"itemprop" 			=> null,
			"content"			=> null			
		), $atts ) );
		$attributes = '';		
		$metaboxhtml = '';
		$container = '';
		foreach($atts as $key => $value){
			$attributes.= "$key = '$value' ";
		}		
		$metaboxhtml.='<meta ' . $attributes . '/>';		
		return $metaboxhtml;
	}
	
}
add_shortcode('metabox', 'dt_child_metabox');


if (!function_exists('dt_search_box')) {
    function dt_search_box( $atts, $content = null ) {
		extract( shortcode_atts( array(
			"placeholder"	=> null,
			"formcls"		=> 'search-form',
			"formaction"	=> home_url( '/' ),
			"inputcls"		=> 'search-field',
			"btncls"		=> 'search-submit',
			"buttontext"	=> null,
		), $atts ) );
		$placeholder = 'Search …';		
		$searchhtml = '';
		if($atts["placeholder"]) {
			$placeholder = $atts["placeholder"];
		}
		
		$formcls = 'search-form';
		if($atts["formcls"]) {
			$formcls = $atts["formcls"];
		}
		
		$formaction = home_url( '/' );
		if($atts["formaction"]) {
			$formaction = $atts["formaction"];
		}
		
		$inputcls = 'search-field';
		if($atts["inputcls"]) {
			$inputcls = $atts["inputcls"];
		}
		
		$btncls = 'search-submit';
		if($atts["btncls"]) {
			$btncls = $atts["btncls"];
		}
		
		$searchhtml.='<form role="search" method="get" class="'.$formcls.'" action="'.$formaction.'">';
			$searchhtml.='<input type="search" class="'.$inputcls.'" placeholder="'.$placeholder.'" value="'.get_search_query().'" name="s" />';
			if($atts["buttontext"]) {
				$searchhtml.='<input type="submit" class="'.$btncls.'" value="'.$atts["buttontext"].'" />';
			}
		$searchhtml.='</form>';
		return $searchhtml;
	}
	
} 
add_shortcode('searchbox', 'dt_search_box');



/* ==================================================

	

	Mistranslations Post Type Functions

	

	================================================== */

	

	$args = array(

	    "label" 						=> _x('Mistranslations Categories', 'category label', "swift-framework-admin"), 

	    "singular_label" 				=> _x('Mistranslations Category', 'category singular label', "swift-framework-admin"), 

	    'public'                        => true,

	    'hierarchical'                  => true,

	    'show_ui'                       => true,

	    'show_in_nav_menus'             => false,

	    'args'                          => array( 'orderby' => 'term_order' ),

	    'query_var'                     => true

	);

	

	register_taxonomy( 'mistranslations-category', 'mistranslations', $args );

	

	    

	add_action('init', 'mistranslations_register');  

	  

	function mistranslations_register() {

		

	    $labels = array(

	        'name' => _x('Mistranslations', 'post type general name', "swift-framework-admin"),

	        'singular_name' => _x('Mistranslations Item', 'post type singular name', "swift-framework-admin"),

	        'add_new' => _x('Add New', 'mistranslations item', "swift-framework-admin"),

	        'add_new_item' => __('Add New Mistranslations Item', "swift-framework-admin"),

	        'edit_item' => __('Edit Mistranslations Item', "swift-framework-admin"),

	        'new_item' => __('New Mistranslations Item', "swift-framework-admin"),

	        'view_item' => __('View Mistranslations Item', "swift-framework-admin"),

	        'search_items' => __('Search Mistranslations', "swift-framework-admin"),

	        'not_found' =>  __('No mistranslations items have been added yet', "swift-framework-admin"),

	        'not_found_in_trash' => __('Nothing found in Trash', "swift-framework-admin"),

	        'parent_item_colon' => ''

	    );

		if(isset($paged_var) && $paged_var!=''){

		$is_archive=true;	

		}

	    $args = array(  

	        'labels' => $labels,  

	        'public' => true,  

	        'show_ui' => true,

	        'show_in_menu' => true,

	        'show_in_nav_menus' => false,

	        'menu_icon' => 'dashicons-format-image',

	        'hierarchical' => false,

	        'supports' => array('title', 'editor', 'thumbnail'),

	        'has_archive' => true,

	        'taxonomies' => array('mistranslations-category'),

			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments','custom-fields' )

	       );  

	  

	    register_post_type( 'mistranslations' , $args );  

	}  

function my_rewrite_flush() {flush_rewrite_rules();}

add_action( 'after_switch_theme', 'my_rewrite_flush' );


/* ==================================================

	

	Quotations Post Type Functions

	

	================================================== */

	

	$args = array(

	    "label" 						=> _x('Quotations Categories', 'category label', "swift-framework-admin"), 

	    "singular_label" 				=> _x('Quotations Category', 'category singular label', "swift-framework-admin"), 

	    'public'                        => true,

	    'hierarchical'                  => true,

	    'show_ui'                       => true,

	    'show_in_nav_menus'             => false,

	    'args'                          => array( 'orderby' => 'term_order' ),

	    'query_var'                     => true

	);

	

	register_taxonomy( 'quotations-category', 'quotations', $args );

	

	    

	add_action('init', 'quotations_register');  

	  

	function quotations_register() {

		

	    $labels = array(

	        'name' => _x('Quotations', 'post type general name', "swift-framework-admin"),

	        'singular_name' => _x('Quotations Item', 'post type singular name', "swift-framework-admin"),

	        'add_new' => _x('Add New', 'Quotations item', "swift-framework-admin"),

	        'add_new_item' => __('Add New Quotations Item', "swift-framework-admin"),

	        'edit_item' => __('Edit Quotations Item', "swift-framework-admin"),

	        'new_item' => __('New Quotations Item', "swift-framework-admin"),

	        'view_item' => __('View Quotations Item', "swift-framework-admin"),

	        'search_items' => __('Search Quotations', "swift-framework-admin"),

	        'not_found' =>  __('No Quotations items have been added yet', "swift-framework-admin"),

	        'not_found_in_trash' => __('Nothing found in Trash', "swift-framework-admin"),

	        'parent_item_colon' => ''

	    );

		if(isset($paged_var) && $paged_var!=''){

		$is_archive=true;	

		}

	    $args = array(  

	        'labels' => $labels,  

	        'public' => true,  

	        'show_ui' => true,

	        'show_in_menu' => true,

	        'show_in_nav_menus' => false,

	        'menu_icon' => 'dashicons-format-image',

	        'hierarchical' => false,

	        'supports' => array('title', 'editor', 'excerpt','thumbnail'),

	        'has_archive' => true,

	        'taxonomies' => array('quotations-category'),

			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments','custom-fields' )

	       );  

	  

	    register_post_type( 'quotations' , $args );  

	} 
	
	
	add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  echo '<style>
    a#nav-tab-lingotek, .settings_page_mlang #normal-sortables {
		display: none;
	}
  </style>';
}

function no_wordpress_errors(){
  return 'ERR';
}
add_filter( 'login_errors', 'no_wordpress_errors');




// Get DT Recent Blog
if (!function_exists('dt_blog_recentblog')) {
    function dt_blog_recentblog( $atts, $content = null ) {
		$content = file_get_contents("https://www.daytranslations.com/blog/recent-post-dt");	
		$loopcontents = json_decode($content);
		$Htmldata ="";
		foreach($loopcontents as $item) {
			$Htmldata.= '<div class="post-box"><div class="blogbox"><a href="https://www.daytranslations.com/blog" target="_blank" class="blog-logo"><img src="https://www.daytranslations.com/wp-content/uploads/2016/07/blog-logo.png"> <span>Blog</span></a></div><div class="post-box-inner"><div class="img-box"><a href="'.$item->url.'">'.$item->post_thumbnail.'</a><div class="cat-box">'.$item->post_category.'</div></div><div class="content-box"><div class="date-box">'.$item->post_date.'</div><div class="post-title"><a href="'.$item->url.'">'.$item->post_title.'</a></div><div class="content-area">'.$item->post_excerpt.'</div></div><div class="authdetl-box"><div class="author-box"><a href="'.$item->author_link.'">'.$item->author_avatar.'</a><div class="author-title"><a href="'.$item->author_link.'">'.$item->author_name.'</a></div></div><div class="comment-box"><div class="comment"><i class="fa fa-comment" aria-hidden="true"></i>'.$item->post_comments.'</div><div class="likes">'.$item->post_likes.'</div><div class="views"><i class="fa fa-eye" aria-hidden="true"></i>'.$item->post_views.'</div></div></div></div></div>';
		}
		echo $Htmldata;
		
		//print_r($loopcontent);
		
	}
	
}
add_shortcode('recentblog', 'dt_blog_recentblog');





function new_testimonial_carousel($atts, $content = null) { 

	$atts = shortcode_atts( array(
		'count' => '0',
		'lang' => 'en',
		'text' => 'in Satifaction Rating',
		'type' => '1',
		'order' => 'DESC'
	), $atts, 'newtestimonial' );
	
	
	$html.= '<div class="social_carousel_wrapper newtestimonial social_carousel-beforeLoad" data-wow-delay="0.1s">';
                $html.= '<div class="list_btn1">';
                    $html.= '<a class="prev2" href="#"><span class="fa-stack"><i class="fa fa-angle-left" style=""></i></span></a>';
                    $html.= '<a class="next2" href="#"><span class="fa-stack"><i class="fa fa-angle-right" style=""></i></span></a>';
                $html.= '</div>';
		$html.= '<ul class="social_carousel slides">';
		
			query_posts(array( 'post_type' => 'testimonials', 'showposts' => 10 ) ); 
			while (have_posts()) : the_post();
				$author = get_post_meta( get_the_ID(), 'qode_testimonial-author');
				$image = get_post_meta( get_the_ID(), 'qode_testimonial-image');
				$country = get_post_meta( get_the_ID(), 'qode_testimonial-country');
				$text = get_post_meta( get_the_ID(), 'qode_testimonial-text');
				$logo = get_post_meta( get_the_ID(), 'qode_testimonial-logo');
				$ration = get_post_meta( get_the_ID(), 'qode_testimonial-ration');
				$rationnew = $ration[0] ;
				$diveder = '';
				if(strlen($country[0]) > 1){
					$diveder = ', <span itemprop="publisher" itemscope itemtype="http://schema.org/Place"><span itemprop="name">'.$country[0].'</span></span>';
				}
				$html.= '<li class="testimonial_content_inner">';
				$html.= '<div itemprop="review" itemscope itemtype="http://schema.org/Review">';
					$html.= '<div itemprop="itemReviewed" itemscope itemtype="http://schema.org/Service" style="display:none;"><span itemprop="name">Translation</span></div>';
					$html.= '<div class="testimonial_image_name_holder">';
					$image[0] = str_replace( "http:", "", $image[0]);
						$html.= '<meta itemprop="image" content="'.$image[0].'"/>';
						$html.= '<span class="author_image"><img src="'.$image[0].'" draggable="false" alt="'.$author[0].'" title="'.$author[0].'"></span>';
						$html.= '<span class="social_name"><span itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name">'.$author[0].'</span></span>'.$diveder.'</span>';
					$html.= '</div>';				
					$html.= '<div class="testimonial_text_holder">';
						$html.= '<p  itemprop="reviewBody">"'.$text[0].'"</p>';
					$html.= '</div>';
					$html.= '<div class="testimonial_author_holder">';					
					$logo[0] = str_replace( "http:", "", $logo[0]);
						$html.= '<meta itemprop="image" content="'.$logo[0].'"/>';
						$html.= '<span class="author_logo"><img src="'.$logo[0].'" draggable="false" alt="Author Logo" title="Author Logo"></span>';
						if($atts["lang"] && $atts["lang"] == 'es') {
							$html.= '<span class="author_rating"><span class="stars">'.$rationnew.'</span><span class="satifaction" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">Calificación de satisfacción <span itemprop="ratingValue">'.$ration[0].'</span>/5</span></span>';
						} elseif($atts["lang"] && $atts["lang"] == 'ar') {
							$html.= '<span class="author_rating"><span class="stars">'.$rationnew.'</span><span class="satifaction" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating"><span itemprop="ratingValue">'.$ration[0].'</span>/5 in Satifaction Rating</span></span>';
						} else {
							$html.= '<span class="author_rating"><span class="stars">'.$rationnew.'</span><span class="satifaction" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating"><span itemprop="ratingValue">'.$ration[0].'</span>/5 in Satifaction Rating</span></span>';
						}
					$html.= '</div>';
				$html.= '</div>';
				$html.= '</li>';
			endwhile;
		$html.= '</ul>';		
	$html.= '</div>';
			
	return $html;

}
add_shortcode('newtestimonial', 'new_testimonial_carousel');

include_once("suman.php");