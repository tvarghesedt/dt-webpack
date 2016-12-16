<?php 
	global $qode_options_proya;
?>
<style>
	.header_top_bottom_holder .header_bottom .container, .header_top_bottom_holder .header_top{
		display:none!important;
	}
	#notfoundbox {
		border-radius: 5px;
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
		background-color:#FFF;
	}
	#notfoundbox:hover {
		box-shadow: 0 2px 3px rgba(0,0,0,0.1),0 5px 10px rgba(0,0,0,0.25);
	} 
	.h1_para a{
		text-decoration:underline;
	}
	.error404 .homeBannerPad {
		padding: 8%!important;
		min-height: 600px;
	}
	.wrapper_inner .content {
		min-height: 90%!important;
	}
	/*.error404 .content{
		height:1vh;
	}*/
	.error404 .homeBannerPad{
		height:100%;
		box-sizing:border-box;
		background-position: right 0px bottom 65px!important;
	}
	footer{
		z-index: 100!important; 
		position: fixed!important; 
		bottom: 0px!important;
	}
	@media only screen and (max-device-width : 375px) {
		.h1_para .wpb_wrapper p{
			font-size: 1.2em!important;
		}		
		.qbutton.center.mainBannerBTn{
			font-size: 0.8em!important;
		}
		.wpb_raw_html .wpb_wrapper a.mainBannerBTn{
			padding: 5px!important;
		}
	}
</style>
<?php get_header(); ?>

			<?php get_template_part( 'title' ); ?>
	 
     <?php if(isset($qode_options_proya['overlapping_content']) && $qode_options_proya['overlapping_content'] == 'yes') {?>
      <div class="overlapping_content"><div class="overlapping_content_inner">
    <?php } ?>
	<div class="container_inner1 default_template_holder">
		<div class="full_width">
			<div class="full_width_inner">
				<div class="vc_row wpb_row section vc_row-fluid bottomBackground homeBannerPad HomeBannerBg grid_section">
			  <div class=" section_inner clearfix">
				<div class="section_inner_margin clearfix">
					<div class="wpb_column vc_column_container vc_col-sm-6 vc_col-sm-offset-3" id="notfoundbox"><div class="wpb_wrapper" style="margin:30px;">
					<div class="wpb_text_column wpb_content_element ">
						<div class="wpb_wrapper">
							<h1 class="clr-orange">
                            <?php
							if (isset($qode_options_proya['logo_image']) && $qode_options_proya['logo_image'] != ""){ $logo_image = $qode_options_proya['logo_image'];}else{ $logo_image =  get_template_directory_uri().'/img/logo.png'; };
							
							if (isset($qode_options_proya['logo_image_mobile']) && $qode_options_proya['logo_image_mobile'] != ""){
								$logo_image_mobile = $qode_options_proya['logo_image_mobile'];
							}else{
								$logo_image_mobile = $logo_image;
							}

							?> 
							<a href="<?php echo home_url('/'); ?>" style="height: 45px; visibility: visible !important;">
								<img class="normal" src="<?php echo $logo_image; ?>" alt="Logo"/> 
							</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <?php if($header_bottom_appearance == "fixed_hiding") { ?>
                            <div class="q_logo_hidden"><a href="<?php echo home_url('/'); ?>"><img alt="Logo" src="<?php echo $logo_image_fixed_hidden; ?>" style="height: 100%;"></a></div>
                            <?php } ?>
						<?php if($qode_options_proya['404_subtitle'] != ""): echo $qode_options_proya['404_subtitle']; else: ?> <?php _e('The page you are looking for is not found', 'qode'); ?> <?php endif;?></h1>
							
						</div> 
					</div> 
				<div class="separator  transparent   " style="margin-top: 5px;"></div>

				<div class="wpb_text_column wpb_content_element h1_para">
					<div class="wpb_wrapper">
						<p><?php if($qode_options_proya['404_text'] != ""): echo $qode_options_proya['404_text']; else: ?> <?php _e('The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site’s homepage and see if you can find what you are looking for.', 'qode'); ?> <?php endif;?></p> 
					</div> 
				</div> 
	<div class="separator  transparent   " style="margin-top: 10px;margin-bottom: 10px;"></div>

				<div class="wpb_raw_code wpb_content_element wpb_raw_html">
					<div class="wpb_wrapper">
						<a href="https://account.daytranslations.com/login" target="_self" class="qbutton  center mainBannerBTn" style="">Enjoy a 5% Lifetime Discount</a>
						<br />
						<a href="/" target="_self" class="center mainBannerBTn" style="">Or Go Back To Day Translations</a>
					</div>
				</div>
			</div>
		  </div>
        </div>
    </div>
</div>					
						</div>
					</div>
					<!--<div class="page_not_found">
						<h2><?php if($qode_options_proya['404_subtitle'] != ""): echo $qode_options_proya['404_subtitle']; else: ?> <?php _e('The page you are looking for is not found', 'qode'); ?> <?php endif;?></h2>
                        <p><?php if($qode_options_proya['404_text'] != ""): echo $qode_options_proya['404_text']; else: ?> <?php _e('The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site’s homepage and see if you can find what you are looking for.', 'qode'); ?> <?php endif;?></p>
						<div class="separator  transparent center  " style="margin-top:35px;"></div>
						<p><a class="qbutton with-shadow" href="<?php echo home_url(); ?>/"><?php if($qode_options_proya['404_backlabel'] != ""): echo $qode_options_proya['404_backlabel']; else: ?> <?php _e('Back to homepage', 'qode'); ?> <?php endif;?></a></p>
						<div class="separator  transparent center  " style="margin-top:35px;"></div>
					</div> -->
				</div>
                <?php if(isset($qode_options_proya['overlapping_content']) && $qode_options_proya['overlapping_content'] == 'yes') {?>
                    </div></div>
                <?php } ?>
			 
<?php get_footer('404'); ?>
