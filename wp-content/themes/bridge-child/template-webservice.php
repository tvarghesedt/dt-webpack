<?php
/**
 * Template Name: WebService
 */
?>
<?php 
if(!$_REQUEST['getservices'] || $_REQUEST['getservices']!='true'){ ?>

<!DOCTYPE html>

<!--// OPEN HTML //-->
<html <?php language_attributes(); ?>>

<!--// OPEN HEAD //-->
<head>
<?php
			$options = get_option('sf_dante_options');
			$enable_responsive = $options['enable_responsive'];
			$is_responsive = "responsive-fluid";
			if (!$enable_responsive) {
				$is_responsive = "responsive-fixed";
			}
			$header_layout = $options['header_layout'];
			$page_layout = $options['page_layout'];
			$enable_logo_fade = $options['enable_logo_fade'];
			$enable_page_shadow = $options['enable_page_shadow'];
			$enable_top_bar = $options['enable_tb'];
			$enable_mini_header = $options['enable_mini_header'];
			$enable_header_shadow = $options['enable_header_shadow'];
			$header_search_type = "search-1";
			if (isset($options['header_search_type'])) {
				$header_search_type = $options['header_search_type'];
			}
			
			$page_class = $header_wrap_class = $logo_class = $ss_enable = "";
			
			if (isset($_GET['header'])) {
				$header_layout = $_GET['header'];
			}
			
			if ($header_layout == "header-3" || $header_layout == "header-4" || $header_layout == "header-5") {
				$header_wrap_class = " container";
				$page_class .= "header-overlay ";
			}
			
			global $sf_catalog_mode;
			if (isset($options['enable_catalog_mode'])) {
				$enable_catalog_mode = $options['enable_catalog_mode'];
				if ($enable_catalog_mode) {
					$sf_catalog_mode = true;
					$page_class = "catalog-mode ";
				}
			}
			
			if ($enable_mini_header) { 
			$page_class .= "mini-header-enabled ";
			}
			
			if ($enable_page_shadow) { 
			$page_class .= "page-shadow ";
			}
			
			if ($enable_header_shadow) {
			$page_class .= "header-shadow ";
			}
			
			if ($enable_logo_fade) {
			$logo_class = "logo-fade";
			}

			if (isset($_GET['layout'])) {
				$page_layout = $_GET['layout'];
			}
			
			$page_class .= "layout-".$page_layout." ";
			
			if (isset($options['ss_enable'])) {
				$ss_enable = $options['ss_enable'];
			} else {
				$ss_enable = true;
			}
			
			global $post, $remove_promo_bar, $enable_one_page_nav;
			$extra_page_class = $description = "";
			if ($post) {
				$extra_page_class = get_post_meta($post->ID, 'sf_extra_page_class', true);
				$remove_promo_bar = get_post_meta($post->ID, 'sf_remove_promo_bar', true);
				$enable_one_page_nav = get_post_meta($post->ID, 'sf_enable_one_page_nav', true);
			}
		?>

<!--// SITE TITLE //-->
<title><?php wp_title( '|', true, 'right' ); ?></title>

<!--// SITE META //-->
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<?php if ($enable_responsive) { ?>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<?php } ?>
<?php if (isset($options['custom_ios_title']) && $options['custom_ios_title'] != "") { ?>
<meta name="apple-mobile-web-app-title" content="<?php echo $options['custom_ios_title']; ?>">
<?php } ?>

<!--// PINGBACK & FAVICON //-->
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php if (isset($options['custom_favicon']) && $options['custom_favicon'] != "") { ?>
<link rel="shortcut icon" href="<?php echo $options['custom_favicon']; ?>" />
<?php } ?>
<?php if (isset($options['custom_ios_icon144']) && $options['custom_ios_icon144'] != "") { ?>
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo $options['custom_ios_icon144']; ?>" />
<?php } ?>
<?php if (isset($options['custom_ios_icon114']) && $options['custom_ios_icon114'] != "") { ?>
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo $options['custom_ios_icon114']; ?>" />
<?php } ?>
<?php if (isset($options['custom_ios_icon72']) && $options['custom_ios_icon72'] != "") { ?>
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo $options['custom_ios_icon72']; ?>" />
<?php } ?>
<?php if (isset($options['custom_ios_icon57']) && $options['custom_ios_icon57'] != "") { ?>
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php echo $options['custom_ios_icon57']; ?>" />
<?php } ?>
<?php
			$custom_fonts = $google_font_one = $google_font_two = $google_font_three = $google_font_subset = $subset_output = "";

			$body_font_option = $options['body_font_option'];
			if (isset($options['google_standard_font'])) {
			$google_font_one = $options['google_standard_font'];
			}
			$headings_font_option = $options['headings_font_option'];
			if (isset($options['google_heading_font'])) {
			$google_font_two = $options['google_heading_font'];
			}
			$menu_font_option = $options['menu_font_option'];
			if (isset($options['google_menu_font'])) {
			$google_font_three = $options['google_menu_font'];
			}
			
			if (isset($options['google_font_subset'])) {
			$google_font_subset = $options['google_font_subset'];
				$s = 0;
				if (is_array($google_font_subset)) {
					foreach ($google_font_subset as $subset) {
						if ($subset == "none") {
							break;
						}
						if ($s > 0) {
						$subset_output .= ','.$subset;
						} else {
						$subset_output = ':'.$subset;
						}
						$s++;
					}
				}
			}
			    
			if ($body_font_option == "google" && $google_font_one != "") {
				$custom_fonts .= $google_font_one.$subset_output."|";
			}
			if ($headings_font_option == "google" && $google_font_two != "") {
				$custom_fonts .= $google_font_two.$subset_output;
			}
			if ($menu_font_option == "google" && $google_font_three != "") {
				$custom_fonts .= $google_font_three.$subset_output;
			}
			
			$fontdeck_js = $options['fontdeck_js'];
		?>
<?php if (($body_font_option == "google") || ($headings_font_option == "google") || ($menu_font_option == "google")) { ?>
<!--// GOOGLE FONT LOADER //-->
<?php /*?><script>
			var html = document.getElementsByTagName('html')[0];
			html.className += '  wf-loading';
			setTimeout(function() {
			  html.className = html.className.replace(' wf-loading', '');
			}, 3000);
			
			WebFontConfig = {
			    google: { families: [<?php echo $custom_fonts; ?> 'Vidaloka'] }
			};
			
			(function() {
				document.getElementsByTagName("html")[0].setAttribute("class","wf-loading")
				//  NEEDED to push the wf-loading class to your head
				document.getElementsByTagName("html")[0].setAttribute("className","wf-loading")
				// for IE
			
			var wf = document.createElement('script');
				wf.src = '<?php echo get_template_directory_uri(); ?>/js/webfont.js';
				wf.type = 'text/javascript';
				wf.async = 'false';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(wf, s);
			})();
		</script><?php */?>
<link href='http://fonts.googleapis.com/css?family=<?php echo $custom_fonts; ?>' rel='stylesheet' type='text/css'>
<?php } ?>
<?php if (($body_font_option == "fontdeck") || ($headings_font_option == "fontdeck") || ($menu_font_option == "fontdeck")) { ?>
<!--// FONTDECK LOADER //-->
<?php echo $fontdeck_js; ?>
<?php } ?>

<!--// WORDPRESS HEAD HOOK //-->
<?php /*?><script data-cfasync="false" src="<?php echo includes_url()?>/js/jquery/jquery.js"></script><?php */?>
<?php wp_head(); ?>
<?php $rev_slider_boolean = get_post_meta($post->ID, 'sf_rev_slider_alias', true);
$revSlider_inc = get_post_meta($post->ID, 'sf_revSlider_inc', true);
if($rev_slider_boolean!='' || $revSlider_inc){ ?>
<?php /*?><link rel='stylesheet' id='rs-settings-css'  href='<?php echo content_url();?>/plugins/revslider/rs-plugin/css/settings.css?rev=4.1.4&#038;ver=3.9.1' type='text/css' media='all' /><?php */?>
	<?php /*?><script type='text/javascript' src='<?php echo content_url();?>/plugins/revslider/rs-plugin/js/jquery.themepunch.plugins.min.js?rev=4.1.4&#038;ver=3.9.1'></script>
<script type='text/javascript' src='<?php echo content_url();?>/plugins/revslider/rs-plugin/js/jquery.themepunch.revolution.min.js?rev=4.1.4&#038;ver=3.9.1'></script><?php */?>
<?php }?>
<!--// CLOSE HEAD //-->
<style>.page-id-28263 .heading-text {
    background: none repeat scroll 0 0 rgba(249, 249, 249, 0.8);
    border-radius: 3px;
    color: #222222;
    min-height: 390px;
    padding: 20px;
}
.page-id-28263 .heading-text h1.entry-title, .page-id-28263 .heading-text h2{ color: #14274c !important;}

.page-id-28263 .page-heading.fancy-heading{background-repeat:none; background-position:0 0 !important;}
/*.post-30359 .full-width-text{ background: url("http://www.daytranslations.com/wp-content/uploads/2015/02/fbg1.gif") no-repeat scroll -54px 0 #fff !important;}*/

.page-id-30326 .inner-page-wrap{ min-height: 1px;}

</style>
</head>

<!--// OPEN BODY //-->
<body <?php body_class($page_class.' '.$is_responsive.' '.$extra_page_class.' '.$header_search_type); ?> ontouchstart="">
<div id="header-search">
  <div class="container clearfix"> <i class="ss-search"></i>
    <form method="get" class="search-form" action="<?php echo home_url(); ?>/">
      <input type="text" placeholder="<?php _e("Search for something...", "swiftframework"); ?>" name="s" autocomplete="off" />
    </form>
    <a id="header-search-close" href="#"><i class="ss-delete"></i></a> </div>
</div>
<?php
			// SUPER SEARCH
			if (sf_woocommerce_activated() && $ss_enable) { 
				echo sf_super_search();
			}
		?>
<?php  
			// MOBILE MENU
			echo sf_mobile_menu();
		?>

<!--// OPEN #container //-->
<?php if ($page_layout == "fullwidth") { ?>
<div id="container">
<?php } else { ?>
<div id="container" class="boxed-layout">
<?php } ?>

<!--// OPEN #main-container //-->
<div id="main-container" class="clearfix">
<?php if (is_page()) {
					global $post;
					$show_posts_slider = get_post_meta($post->ID, 'sf_posts_slider', true);
					$rev_slider_alias = get_post_meta($post->ID, 'sf_rev_slider_alias', true);
					$layerSlider_ID = get_post_meta($post->ID, 'sf_layerslider_id', true);
									
					if ($show_posts_slider) {
						sf_swift_slider();
					} else if ($rev_slider_alias != "") { ?>
<div class="home-slider-wrap">
  <?php if (function_exists('putRevSlider')) {
								putRevSlider($rev_slider_alias);
							} ?>
</div>
<?php } else if ($layerSlider_ID != "") { ?>
<div class="home-slider-wrap"> <?php echo do_shortcode('[layerslider id="'.$layerSlider_ID.'"]'); ?> </div>
<?php }
					}
				?>
<?php if ( is_active_sidebar( 'top-banner' ) && is_front_page() ) : ?>
<div class="home-topbanner">
  <?php //dynamic_sidebar( 'top-banner' ); 
	dynamic_sidebar( 'top-banner-clone' ); 
  ?>
</div>
<?php endif; ?>
<!--// OPEN #page-wrap //-->
<div id="page-wrap">

<?php
	$options = get_option('sf_dante_options');
	
	$default_show_page_heading = $options['default_show_page_heading'];
	$default_page_heading_bg_alt = $options['default_page_heading_bg_alt'];
	$default_sidebar_config = $options['default_sidebar_config'];
	$default_left_sidebar = $options['default_left_sidebar'];
	$default_right_sidebar = $options['default_right_sidebar'];
	
	$pb_active = get_post_meta($post->ID, '_spb_js_status', true);
	$show_page_title = get_post_meta($post->ID, 'sf_page_title', true);
	$page_title_style = get_post_meta($post->ID, 'sf_page_title_style', true);
	$page_title = get_post_meta($post->ID, 'sf_page_title_one', true);
	$page_subtitle = get_post_meta($post->ID, 'sf_page_subtitle', true);
	$page_descrption = get_post_meta($post->ID, 'sf_page_descrption', true);
	$top_Quoteform = get_post_meta($post->ID, 'sf_top_Quoteform', true);
	$url_Quoteform = get_post_meta($post->ID, 'sf_url_Quoteform', true);
	$call_action = get_post_meta($post->ID, 'sf_call_action', true);
	$call_action_group = get_post_meta($post->ID, 'sf_call_action_group', true);
	$office_telephone_number = get_post_meta($post->ID, 'sf_office_telephone_number', true);
	$related_pages = rwmb_meta('sf_related_pages', 'type=checkbox_list');
	$page_title_bg = get_post_meta($post->ID, 'sf_page_title_bg', true);
	$fancy_title_image = rwmb_meta('sf_page_title_image', 'type=image&size=full');
	$page_title_text_style = get_post_meta($post->ID, 'sf_page_title_text_style', true);
	$fancy_title_image_url = "";
	$languagepage = get_post_meta($post->ID, 'sf_language_page', true);
	$localized_cta = get_post_meta($post->ID, 'sf_localized_cta', true);
	$localized_cta_text = get_post_meta($post->ID, 'sf_localized_cta_text', true);
	$localized_cta_url = get_post_meta($post->ID, 'sf_localized_cta_url', true);
	$language_cta = get_post_meta($post->ID, 'sf_language_cta', true);
	$language_cta_text = get_post_meta($post->ID, 'sf_language_cta_text', true);
	$language_cta_url = get_post_meta($post->ID, 'sf_language_cta_url', true);
	if($languagepage){
	//$flag_image_object = rwmb_meta('sf_flag_thumbnail', 'type=image_advanced&size=full',$post->ID);
	//foreach ($flag_image_object as $flag_image_var) {
//						$flag_image = $flag_image_var['url'];
//						break;
//	}
	$language_Flag = get_post_meta($post->ID, 'sf_language_Flag', true);
	}	
	if ($show_page_title == "") {
		$show_page_title = $default_show_page_heading;
	}
	if ($page_title_bg == "") {
		$page_title_bg = $default_page_heading_bg_alt;
	}
	if ($page_title == "") {
		$page_title = get_the_title();
	}
	
	foreach ($fancy_title_image as $detail_image) {
		$fancy_title_image_url = $detail_image['url'];
		break;
	}
									
	if (!$fancy_title_image) {
		$fancy_title_image = get_post_thumbnail_id();
		$fancy_title_image_url = wp_get_attachment_url( $fancy_title_image, 'full' );
	}
	
	$sidebar_config = get_post_meta($post->ID, 'sf_sidebar_config', true);
	$left_sidebar = get_post_meta($post->ID, 'sf_left_sidebar', true);
	$right_sidebar = get_post_meta($post->ID, 'sf_right_sidebar', true);
	
	if ($sidebar_config == "") {
		$sidebar_config = $default_sidebar_config;
	}
	if ($left_sidebar == "") {
		$left_sidebar = $default_left_sidebar;
	}
	if ($right_sidebar == "") {
		$right_sidebar = $default_right_sidebar;
	}
	
	sf_set_sidebar_global($sidebar_config);
	
	$page_wrap_class = $post_class_extra = '';
	if ($sidebar_config == "left-sidebar") {
	$page_wrap_class = 'has-left-sidebar has-one-sidebar row';
	$post_class_extra = 'col-sm-8';
	} else if ($sidebar_config == "right-sidebar") {
	$page_wrap_class = 'has-right-sidebar has-one-sidebar row';
	$post_class_extra = 'col-sm-8';
	} else if ($sidebar_config == "both-sidebars") {
	$page_wrap_class = 'has-both-sidebars row';
	$post_class_extra = 'col-sm-9';
	} else {
	$page_wrap_class = 'has-no-sidebar';
	}
	
	$remove_breadcrumbs = get_post_meta($post->ID, 'sf_no_breadcrumbs', true);
	$remove_bottom_spacing = get_post_meta($post->ID, 'sf_no_bottom_spacing', true);
	$remove_top_spacing = get_post_meta($post->ID, 'sf_no_top_spacing', true);
	
	if ($remove_bottom_spacing) {
	$page_wrap_class .= ' no-bottom-spacing';
	}
	if ($remove_top_spacing) {
	$page_wrap_class .= ' no-top-spacing';
	}
	
	$options = get_option('sf_dante_options');
	$disable_pagecomments = false;
	if (isset($options['disable_pagecomments']) && $options['disable_pagecomments'] == 1) {
	$disable_pagecomments = true;
	}
?>
<?php if ($show_page_title) { ?>

<div class="container">
<div class="row">
  <?php if ($page_title_style == "fancy") { ?>
  <?php if ($fancy_title_image_url != "") { ?>
  <div class="page-heading fancy-heading col-sm-12 clearfix alt-bg <?php echo $page_title_text_style; ?>-style fancy-image" style="background-image: url(<?php echo $fancy_title_image_url; ?>);">
    <?php } else { ?>
    <div class="page-heading fancy-heading col-sm-12 clearfix alt-bg <?php echo $page_title_bg; echo ($top_Quoteform)?' has-QuoteForm':''; echo ($languagepage)?' has-Flag':'';?>">
      <?php } 
		if($top_Quoteform){
		?>
      <div class="col-sm-4">
        <div class="quoteform-wrap-style">
          <iframe width="100%" scrolling="auto" height="375" frameborder="0" src="<?php echo $url_Quoteform;?>" name="Form"></iframe>
        </div>
      </div>
      <div class="col-sm-8">
        <?php }?>
        <div class="heading-text <?php if($language_cta){ echo 'pos_relative clearfix';}?>">
          <?php /*?><code><?php var_dump($post->post_name);?></code><?php */?>
          <?php if($languagepage){?>
          <div class="col-sm-7 col-md-8">
            <?php }elseif ($localized_cta){?>
            <div class="col-sm-7 col-md-10">
              <?php }?>
              <h1 class="entry-title"><?php echo $page_title; ?></h1>
              <?php if ($page_subtitle) { ?>
              <h2><?php echo $page_subtitle; ?></h2>
              <?php }?>
              <?php if($languagepage){?>
            </div>
            <div class="col-sm-5 col-md-4">
              <?php /*?><img src="<?php echo $flag_image?>" class="alignnone size-full hundred_per wp-image-12403 flag-language"><?php */?>
              <span title="<?php echo $language_Flag?> Flag" class="B-flags B-flags-<?php echo $language_Flag?>"></span></div>
            <?php }elseif ($localized_cta){?>
          </div>
          <div class="col-sm-4 col-md-2"><a title="<?php echo $localized_cta_text?>" href="<?php echo $localized_cta_url?>" class="localized_cta_text"><?php echo $localized_cta_text?></a></div>
          <?php }?>
          <?php if ($page_descrption) {?>
          <div class="page_description mt20"><?php echo do_shortcode($page_descrption);
				if($office_telephone_number!=''){
				?>
            <p><strong class="theme_darkblue">Get in Touch : </strong><a class="ml10" href="tel:<?php echo $office_telephone_number;?>" target="_self" rel="tooltip" data-original-title="You can call us anytime" data-placement="top"><i class="fa-phone-square"></i> <?php echo $office_telephone_number;?></a> <a data-placement="top" data-original-title="E-mail us with the details of your project" rel="tooltip" target="_self" href="mailto:contact@daytranslations.com" class="ml10"><i class="fa-envelope"></i> contact@daytranslations.com</a><a data-placement="top" data-original-title="Chat with Us" rel="tooltip" href="/chat" class="ml10"><i class="ss-chat"></i> Chat with Us</a></p>
            <?php }?>
            <?php if($call_action){?>
            <?php  //if($post->post_name=='certified-documents-affidavit') {echo($post->post_name);}?>
            <?php if($post->post_name=='certified-documents-affidavit' || $post->post_name=='certified-documents-canada' || $post->post_name=='certified-documents-uk' || $post->post_name=='certified-documents'){?>
            <p class="mb0"><a class="sf-button large orange mb0" href="#top-quoteform" target="_self"><span class="text">Get a Certified Translation Quote</span></a> <a class="sf-button large green mb0" href="/faq" target="_self"><span class="text">FAQS</span></a><a class="sf-button large blue-dark mb0 scrollto" href="#translation-samples"><span class="text">View Translation Samples</span></a></p>
            <?php }elseif($post->post_name=='certified-apostille-documents'){?>
            <p class="mb0"><a class="sf-button large orange mb0" href="#top-quoteform" target="_self"><span class="text">Get an Apostille Quickly</span></a> <a class="sf-button large green mb0" href="/apostille-faq" target="_self"><span class="text">FAQS</span></a><a class="sf-button large blue-dark mb0" href="#translation-samples" ><span class="text">View Translation Samples</span></a></p>
            <?php }elseif($post->post_name=='academic-evaluation-services'){?>
            <p class="f18 l-1pt3 mb0"><a class="sf-button large orange mb0" href="#academic-quote" target="_self"><span class="text">Get an Academic Evaluation</span></a><a class="sf-button large green mb0" href="/certified-transcript-translations#transcript-quote" target="_self"><span class="text">Translate Your Foreign Transcript</span></a><a class="sf-button large blue-dark mb0" href="/certified-translations"><span class="text">Certify Your Translation</span></a></p>
            <?php }elseif($post->post_name=='certified-transcript-translations'){?>
            <p class="f18 l-1pt3 mb0"><a class="sf-button large green mb0" href="#transcript-quote" target="_self"><span class="text">Translate Your Foreign Transcript</span></a><a class="sf-button large orange mb0" href="/academic-evaluation-services#academic-quote" target="_self"><span class="text">Get an Academic Evaluation</span></a><a class="sf-button large blue-dark mb0" href="/certified-translations"><span class="text">Certify Your Translation</span></a></p>
            <?php }elseif($post->post_name=='examination-under-oath' || $post->post_name=='immigration' || $post->post_name=='legal-interpreters'  || $post->post_name=='medical-interpreters' || $post->post_name=='spanish-interpreting'|| $post->post_name=='over-the-phone-interpreters' ||$post->post_name=='personal-interpreting' || $call_action_group=='opinterpreter' || $call_action_group=='ipinterpreter'){?>
            <p class="f18 l-1pt3 mb0"><a target="_self" href="/<?php if($post->post_name=='spanish-interpreting'|| $post->post_name=='over-the-phone-interpreters' || $call_action_group=='opinterpreter'){?>opiquote<?php }else{?>interpretingquote<?php }?>" class="sf-button large orange mb0"><span class="text">Request an Interpreter</span></a> <a target="_self" href="/interpretation-faq" class="sf-button large green mb0"><span class="text">Interpreting FAQS</span></a> <a target="_self" href="/quote" class="sf-button large blue-dark mb0"><span class="text">Get a Professional Translation</span></a></p>
            <?php }elseif($post->post_name=='legal-translation'){?>
            <p class="mb0"><a class="sf-button large orange mb0" href="/faq" target="_self"><span class="text">FAQS</span></a> <a class="sf-button large green mb0" href="<?php if($post->post_name=='subtitling'){ echo '/certifiedsamples'; }else{?>#translation-samples<?php }?>"><span class="text">View Translation Samples</span></a> <a class="sf-button large blue-dark mb0" href="/quote"><span class="text">Get a Free Quote</span></a></p>
            <?php }else{ if($call_action_group=='none' || !$call_action_group){?>
            <p class="mb0"><a class="sf-button large orange mb0" href="/faq" target="_self"><span class="text">FAQS</span></a> <a class="sf-button large green mb0" href="<?php if($post->post_name=='subtitling'){ echo '/certifiedsamples'; }else{?>#translation-samples<?php }?>"><span class="text">View Translation Samples</span></a> <a class="sf-button large blue-dark mb0" href="/Documents/guarantee.pdf" target="_blank"><span class="text">Satisfaction Guarantee</span></a></p>
            <?php }elseif($call_action_group=='location'){?>
            <p class="mb0"><a class="sf-button large orange mb0" href="/services" target="_self"><span class="text">Translation Services</span></a> <a class="sf-button large green mb0" href="/interpreting"><span class="text">Interpreting Services</span></a> <a class="sf-button large blue-dark mb0" href="/certified-translations"><span class="text">Certified Translation</span></a></p>
            <?php }?>
            <?php }?>
            <?php /*?><div class="legal" style="display:none;">
                <a href="http://www.daytranslationscopy.com/wp-content/uploads/2014/04/Italian-Certificate-English-A-DayTranslations1.jpg"></a>
                <a href="http://www.daytranslationscopy.com/wp-content/uploads/2014/04/Marriage-Certificate-Spanish-A-DayTranslations1-1024x727.jpg"></a>
                <a href="http://www.daytranslationscopy.com/wp-content/uploads/2014/04/Greek-to-English-Sample-A-DayTranslations1.jpg"></a>
                </div><?php */?>
            <?php }
				?>
          </div>
          <?php }?>
          <?php if($language_cta){?>
          <a title="<?php echo $language_cta_text?>" href="<?php echo $language_cta_url?>" class="language_cta_text"><?php echo $language_cta_text?></a>
          <?php }?>
        </div>
        <?php if($top_Quoteform){?>
      </div>
      <?php }?>
    </div>
    <?php } else { ?>
    <div class="page-heading col-sm-12 clearfix alt-bg <?php echo $page_title_bg; ?>">
      <div class="heading-text">
        <h1 class="entry-title"><?php echo $page_title; ?></h1>
      </div>
      <?php 
				// BREADCRUMBS
				//if (!$remove_breadcrumbs) {
//					echo sf_breadcrumbs();
//				}
			?>
    </div>
    <?php } ?>
  </div>
</div>
<?php } ?>
<?php if ($sidebar_config != "no-sidebars" || $pb_active != "true") { ?>
<div class="container">
<?php } ?>
<div class="inner-page-wrap <?php echo $page_wrap_class; ?> clearfix">
  <?php if (have_posts()) : the_post(); ?>
  
  <!-- OPEN page -->
  <div <?php post_class('clearfix ' . $post_class_extra); ?> id="<?php the_ID(); ?>">
    <?php if ($sidebar_config == "both-sidebars") { ?>
    <div class="row">
      <div class="page-content col-sm-8">
        <?php the_content(); ?>
        <div class="link-pages">
          <?php wp_link_pages(); ?>
        </div>
        <?php if ( comments_open() && !$disable_pagecomments ) { ?>
        <div id="comment-area">
          <?php comments_template('', true); ?>
        </div>
        <?php } ?>
      </div>
      <aside class="sidebar left-sidebar col-sm-4">
        <?php dynamic_sidebar($left_sidebar); ?>
      </aside>
    </div>
    <?php } else { ?>
    <div class="page-content clearfix <?php if($language_cta){ echo 'has_language_cta';}?>">
      <?php the_content(); 
				//print_r($related_pages);
				if($related_pages){
				?>
      <div style="height:20px;" class="blank_spacer col-sm-12 "></div>
      <div class="container">
        <div class="row">
          <div class="spb_content_element col-sm-12 theme_alt-wrap spb_box_text whitestroke">
            <div class="spb_wrapper">
              <h3 class="spb-heading spb-text-heading"><span>Choose the <?php if($post->post_name!='froedtert'){?>Translation<?php }?> Service You Need</span></h3>
              <div class="box-content-wrap clearfix">
                <?php 
					$args = array(
						'sort_order' => 'ASC',
						'sort_column' => 'post_title',
						'include' => $related_pages,
						'post_type' => 'page',
						'post_status' => 'publish',
						'number' => 3
					); 
					$related_pages_object = get_pages($args);
					//var_dump($pages);
					$related_output='';
					foreach ( $related_pages_object as $related_page ) {
					$related_pagetitle = (get_post_meta($related_page->ID, 'sf_short_title', true)!='')?get_post_meta($related_page->ID, 'sf_short_title', true):$related_page->post_title;
					$related_description = (get_post_meta($related_page->ID, 'sf_short_description', true)!='')?get_post_meta($related_page->ID, 'sf_short_description', true):'';
					$related_title_image = rwmb_meta('sf_box_thumbnail', 'type=image_advanced&size=full',$related_page->ID);
					$related_alt = (get_post_meta($related_page->ID, 'sf_related_alt', true)!='')?get_post_meta($related_page->ID, 'sf_related_alt', true):str_replace(' ', '-', $related_pagetitle);
					foreach ($related_title_image as $related_detail_image) {
						$related_title_image_url = $related_detail_image['url'];
						break;
					}
					
					$related_output.= '<div class="spb_content_element col-sm-4 spb_box_text whitestroke rel-box-hover">
					<div class="spb_wrapper">
					<h3 class="spb-heading spb-text-heading"><span>'.$related_pagetitle.'</span></h3>
					<div class="box-content-wrap">
					<div class="mb15"><img src="'.$related_title_image_url.'" alt="'.$related_alt.'" class="alignnone size-full hundred_per wp-image-12403"></div>
					<p class="mb10 clearfix">'.$related_description.'</p>
					<a target="_self" href="'.$related_page->post_name.'" class="sf-button standard accent standard mb0"><span class="text">Learn More</span></a>
					</div>
					</div> 
					</div>';
				  }
				  echo $related_output;?>
                <div class="clearfix"></div>
                <a target="_self" href="/translation" class="sf-button large orange sf-icon-stroke mt20 pull-right"><i class="fa-eye"></i><span class="text"> View All Our <?php if($post->post_name!='froedtert'){?>Translation<?php }?> Services</span></a>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php }?>
      <div class="link-pages">
        <?php wp_link_pages(); ?>
      </div>
      <?php if ( comments_open() && !$disable_pagecomments ) { ?>
      <?php if ($sidebar_config == "no-sidebars" && $pb_active == "true") { ?>
      <div id="comment-area" class="container">
        <?php } else { ?>
        <div id="comment-area">
          <?php } ?>
          <?php comments_template('', true); ?>
        </div>
        <?php } ?>
      </div>
      <?php } ?>      
      <!-- CLOSE page --> 
    </div>
    <?php endif; ?>
    <?php if ($sidebar_config == "left-sidebar") { ?>
    <aside class="sidebar left-sidebar col-sm-4">
      <?php dynamic_sidebar($left_sidebar); ?>
    </aside>
    <?php } else if ($sidebar_config == "right-sidebar") { ?>
    <aside class="sidebar right-sidebar col-sm-4">
      <?php dynamic_sidebar($right_sidebar); ?>
    </aside>
    <?php } else if ($sidebar_config == "both-sidebars") { ?>
    <aside class="sidebar right-sidebar col-sm-3">
      <?php dynamic_sidebar($right_sidebar); ?>
    </aside>
    <?php } ?>
  </div>
  <?php if ($sidebar_config != "no-sidebars" || $pb_active != "true") { ?>
</div>
<?php } ?>
</div>
</div>
<!--// WordPress Hook //-->
<?php //wp_footer(); ?>
	<!--// CLOSE BODY //-->
	</body>
<!--// CLOSE HTML //-->
</html>
<?php }
 ?>
<?php 
if($_REQUEST['getservices']=='true'){
					$args = array(
						'sort_order' => 'ASC',
						'sort_column' => 'post_title',
						//'include' => $related_pages,
						'post_type' => 'page',
						'post_status' => 'publish',
						//'number' => 3,
						'meta_key' => 'sf_is_service_page',
						'meta_value' => 'on'
					); 
					$related_pages_object = get_pages($args);
					//var_dump($pages);
					//$related_output='';
					$json_data=array();
					foreach ( $related_pages_object as $related_page ) {
					//$related_pagetitle = (get_post_meta($related_page->ID, 'sf_short_title', true)!='')?get_post_meta($related_page->ID, 'sf_short_title', true):$related_page->post_title;
						$related_pagetitle = $related_page->post_title;
					$related_url = get_site_url().'/'.$related_page->post_name;
					//$related_description = (get_post_meta($related_page->ID, 'sf_short_description', true)!='')?get_post_meta($related_page->ID, 'sf_short_description', true):'';
					//$related_title_image = rwmb_meta('sf_box_thumbnail', 'type=image_advanced&size=full',$related_page->ID);
					//$related_alt = (get_post_meta($related_page->ID, 'sf_related_alt', true)!='')?get_post_meta($related_page->ID, 'sf_related_alt', true):str_replace(' ', '-', $related_pagetitle);
					// foreach ($related_title_image as $related_detail_image) {
					// 	$related_title_image_url = $related_detail_image['url'];
					// 	break;
					// }
					
					// $related_output.= '<div class="spb_content_element col-sm-4 spb_box_text whitestroke rel-box-hover">
					// <div class="spb_wrapper">
					// <h3 class="spb-heading spb-text-heading"><span>'.$related_pagetitle.'</span></h3>
					// <div class="box-content-wrap">
					// <div class="mb15"><img src="" alt="" class="alignnone size-full hundred_per wp-image-12403"></div>
					// <p class="mb10 clearfix"></p>
					// <a target="_self" href="'.$related_page->post_name.'" class="sf-button standard accent standard mb0"><span class="text">Learn More</span></a>
					// </div>
					// </div> 
					// </div>';

					$related_keywords = (get_post_meta($related_page->ID, 'sf_service_keywords', true)!='')?get_post_meta($related_page->ID, 'sf_service_keywords', true):'';

					$json_data[] = array(
					'pagename' => $related_pagetitle, 
					'url' => $related_url,
					'keywords' => $related_keywords
					);

				  }
				  echo json_encode($json_data);
}
?>