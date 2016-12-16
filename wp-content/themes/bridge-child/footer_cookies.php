<?php
	global $qode_options_proya;
	$page_id = $wp_query->get_queried_object_id();
?>
<?php 
$content_bottom_area = "yes";
if(get_post_meta($page_id, "qode_enable_content_bottom_area", true) != ""){
	$content_bottom_area = get_post_meta($page_id, "qode_enable_content_bottom_area", true);
} else{
	if (isset($qode_options_proya['enable_content_bottom_area'])) {
		$content_bottom_area = $qode_options_proya['enable_content_bottom_area'];
	}
}
$content_bottom_area_sidebar = "";
if(get_post_meta($page_id, 'qode_choose_content_bottom_sidebar', true) != ""){
	$content_bottom_area_sidebar = get_post_meta($page_id, 'qode_choose_content_bottom_sidebar', true);
} else {
	if(isset($qode_options_proya['content_bottom_sidebar_custom_display'])) {
		$content_bottom_area_sidebar = $qode_options_proya['content_bottom_sidebar_custom_display'];
	}
}
$content_bottom_area_in_grid = true;
if(get_post_meta($page_id, 'qode_content_bottom_sidebar_in_grid', true) != ""){
	if(get_post_meta($page_id, 'qode_content_bottom_sidebar_in_grid', true) == "yes") {
		$content_bottom_area_in_grid = true;
	} else {
		$content_bottom_area_in_grid = false;
	} 
}
else {
	if(isset($qode_options_proya['content_bottom_in_grid'])){if ($qode_options_proya['content_bottom_in_grid'] == "no") $content_bottom_area_in_grid = false;}
}
$content_bottom_background_color = '';
if(get_post_meta($page_id, "qode_content_bottom_background_color", true) != ""){
	$content_bottom_background_color = get_post_meta($page_id, "qode_content_bottom_background_color", true);
}
?>
	<?php if($content_bottom_area == "yes") { ?>
	<?php if($content_bottom_area_in_grid){ ?>
		<div class="container">
			<div class="container_inner clearfix">
	<?php } ?>
		<div class="content_bottom" <?php if($content_bottom_background_color != ''){ echo 'style="background-color:'.$content_bottom_background_color.';"'; } ?>>
			<?php dynamic_sidebar($content_bottom_area_sidebar); ?>
		</div>
		<?php if($content_bottom_area_in_grid){ ?>
					</div>
				</div>
			<?php } ?>
	<?php } ?>
	
	</div>
</div>

<?php
if(isset($qode_options_proya['paspartu']) && $qode_options_proya['paspartu'] == 'yes'){?>
        <?php if(isset($qode_options_proya['vertical_area']) && $qode_options_proya['vertical_area'] == "yes" && isset($qode_options_proya['vertical_menu_inside_paspartu']) && $qode_options_proya['vertical_menu_inside_paspartu'] == 'no') { ?>
        </div> <!-- paspartu_middle_inner close div -->
        <?php } ?>
    </div> <!-- paspartu_inner close div -->
    <?php if((isset($qode_options_proya['paspartu_on_bottom']) && $qode_options_proya['paspartu_on_bottom'] == 'yes') ||
        (isset($qode_options_proya['vertical_area']) && $qode_options_proya['vertical_area'] == "yes" && isset($qode_options_proya['vertical_menu_inside_paspartu']) && $qode_options_proya['vertical_menu_inside_paspartu'] == 'yes')){ ?>
        <div class="paspartu_bottom"></div>
    <?php }?>
    </div> <!-- paspartu_outer close div -->
<?php
}
?>

<?php

$paspartu = false;
if(isset($qode_options_proya['paspartu']) && $qode_options_proya['paspartu'] == 'yes'){
	$paspartu = true;
}

$uncovering_footer = false;
if(isset($qode_options_proya['uncovering_footer']) && $qode_options_proya['uncovering_footer'] == "yes" && $paspartu == false){
        $uncovering_footer = true;
}

$display_footer_top = true;
if (isset($qode_options_proya['show_footer_top'])) {
	if ($qode_options_proya['show_footer_top'] == "no") $display_footer_top = false;
}

$display_footer_text = false;
if (isset($qode_options_proya['footer_text'])) {
	if ($qode_options_proya['footer_text'] == "yes") $display_footer_text = true;
}

?>

<?php if($display_footer_top || $display_footer_text) { ?>
	<footer <?php if($uncovering_footer){echo 'class="uncover"';} ?>>
		<div class="footer_inner clearfix">
		<?php
		$footer_in_grid = true;
		if(isset($qode_options_proya['footer_in_grid'])){
			if ($qode_options_proya['footer_in_grid'] != "yes") {
				$footer_in_grid = false;
			}
		}

		
		$footer_top_columns = 4;
		if (isset($qode_options_proya['footer_top_columns'])) {
			$footer_top_columns = $qode_options_proya['footer_top_columns'];
		}

        $footer_top_border_color = !empty($qode_options_proya['footer_top_border_color']) ? $qode_options_proya['footer_top_border_color'] : '';
        $footer_top_border_width = isset($qode_options_proya['footer_top_border_width']) && $qode_options_proya['footer_top_border_width'] !== '' ? $qode_options_proya['footer_top_border_width'].'px' : '1px';
        $footer_top_border_in_grid = 'no';
        $footer_top_border_in_grid_class = '';

        if(isset($qode_options_proya['footer_top_border_in_grid'])) {
            $footer_top_border_in_grid = $qode_options_proya['footer_top_border_in_grid'];
            $footer_top_border_in_grid_class = $footer_top_border_in_grid == 'yes' ? 'in_grid' : '';
        }

        $footer_top_border_style = array();
        if($footer_top_border_color !== '') {
            $footer_top_border_style[] = 'background-color: '.$footer_top_border_color;
        }

        if($footer_top_border_width !== '') {
            $footer_top_border_style[] = 'height: '.$footer_top_border_width;
        }

		if($display_footer_top) { ?>
		<div class="footer_top_holder">
            <?php if($footer_top_border_color !== '') { ?>
                <div <?php qode_inline_style($footer_top_border_style); ?> <?php qode_class_attribute('footer_top_border '.$footer_top_border_in_grid_class); ?>></div>
            <?php } ?>
			<div class="footer_top<?php if(!$footer_in_grid) {echo " footer_top_full";} ?>">
				<?php if($footer_in_grid){ ?>
				<div class="container">
					<div class="container_inner">
				<?php } ?>
						<?php switch ($footer_top_columns) { 
							case 6:
						?>
							<div class="two_columns_50_50 clearfix">
								<div class="column1 footer_col1">
										<div class="column_inner">
											<?php dynamic_sidebar( 'footer_column_1' ); ?>
										</div>
								</div>
								<div class="column2">
									<div class="column_inner">
										<div class="two_columns_50_50 clearfix">
											<div class="column1 footer_col2">
												<div class="column_inner">
													<?php dynamic_sidebar( 'footer_column_2' ); ?>
												</div>
											</div>
											<div class="column2 footer_col3">
												<div class="column_inner">
													<?php dynamic_sidebar( 'footer_column_3' ); ?>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>							
						<?php 
							break;
							case 5:
						?>
							<div class="two_columns_50_50 clearfix">
								<div class="column1">
									<div class="column_inner">
										<div class="two_columns_50_50 clearfix">
											<div class="column1 footer_col1">
												<div class="column_inner">
													<?php dynamic_sidebar( 'footer_column_1' ); ?>
												</div>
											</div>
											<div class="column2 footer_col2">
												<div class="column_inner">
													<?php dynamic_sidebar( 'footer_column_2' ); ?>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="column2 footer_col3">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_3' ); ?>
									</div>
								</div>
							</div>							
						<?php 
							break;
							case 4:
						?>
							<div class="four_columns clearfix">
								<div class="column1 footer_col1">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_1' ); ?>
									</div>
								</div>
								<div class="column2 footer_col2">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_2' ); ?>
									</div>
								</div>
								<div class="column3 footer_col3">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_3' ); ?>
									</div>
								</div>
								<div class="column4 footer_col4">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_4' ); ?>
									</div>
								</div>
							</div>
						<?php
							break;
							case 3:
						?>
							<div class="three_columns clearfix">
								<div class="column1 footer_col1">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_1' ); ?>
									</div>
								</div>
								<div class="column2 footer_col2">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_2' ); ?>
									</div>
								</div>
								<div class="column3 footer_col3">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_3' ); ?>
									</div>
								</div>
							</div>
						<?php
							break;
							case 2:
						?>
							<div class="two_columns_50_50 clearfix">
								<div class="column1 footer_col1">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_1' ); ?>
									</div>
								</div>
								<div class="column2 footer_col2">
									<div class="column_inner">
										<?php dynamic_sidebar( 'footer_column_2' ); ?>
									</div>
								</div>
							</div>
						<?php
							break;
							case 1:
								dynamic_sidebar( 'footer_column_1' );
							break;
						}
						?>
				<?php if($footer_in_grid){ ?>
					</div>
				</div>
				<?php } ?>
			</div>
			<?php if (isset($qode_options_proya['footer_angled_section'])  && $qode_options_proya['footer_angled_section'] == "yes"){ ?>
				<svg class="angled-section svg-footer-bottom" preserveAspectRatio="none" viewBox="0 0 86 86" width="100%" height="86">
					<?php if(isset($qode_options_proya['footer_angled_section_direction']) && $qode_options_proya['footer_angled_section_direction'] == 'from_left_to_right'){ ?>
						<polygon points="0,0 0,86 86,86" />
					<?php }
					if(isset($qode_options_proya['footer_angled_section_direction']) && $qode_options_proya['footer_angled_section_direction'] == 'from_right_to_left'){ ?>
						<polygon points="0,86 86,0 86,86" />
					<?php } ?>
				</svg>
			<?php } ?>
		</div>
		<?php } ?>
		<?php


		$footer_bottom_columns = 1;
		if (isset($qode_options_proya['footer_bottom_columns'])) {
			$footer_bottom_columns = $qode_options_proya['footer_bottom_columns'];
		}

		$footer_bottom_in_grid = false;
		if(isset($qode_options_proya['footer_bottom_in_grid'])){
			if ($qode_options_proya['footer_bottom_in_grid'] == "yes") {
				$footer_bottom_in_grid = true;
			}
		}

        $footer_bottom_border_color = !empty($qode_options_proya['footer_bottom_border_color']) ? $qode_options_proya['footer_bottom_border_color'] : '';
        $footer_bottom_border_width = isset($qode_options_proya['footer_bottom_border_width']) && $qode_options_proya['footer_bottom_border_width'] !== '' ? $qode_options_proya['footer_bottom_border_width'].'px' : '1px';
        $footer_bottom_border_in_grid = 'no';
        $footer_bottom_border_in_grid_class = '';

        if(isset($qode_options_proya['footer_bottom_border_in_grid'])) {
            $footer_bottom_border_in_grid = $qode_options_proya['footer_bottom_border_in_grid'];
            $footer_bottom_border_in_grid_class = $footer_bottom_border_in_grid == 'yes' ? 'in_grid' : '';
        }

        $footer_bottom_border_style = array();
        if($footer_bottom_border_color !== '') {
            $footer_bottom_border_style[] = 'background-color: '.$footer_bottom_border_color;
        }

        if($footer_bottom_border_width !== '') {
            $footer_bottom_border_style[] = 'height: '.$footer_bottom_border_width;
        }

		if($display_footer_text){ ?>
			<div class="footer_bottom_holder">
                <?php if($footer_bottom_border_color !== '') { ?>
                    <div <?php qode_inline_style($footer_bottom_border_style); ?> <?php qode_class_attribute('footer_bottom_border '.$footer_bottom_border_in_grid_class); ?>></div>
                <?php } ?>
				<?php if($footer_bottom_in_grid){ ?>
				<div class="container">
					<div class="container_inner">
				<?php } ?>
		<?php
			switch ($footer_bottom_columns) {
			case 1:
			?>
			<div class="footer_bottom">
				<?php dynamic_sidebar( 'footer_text' ); ?>
			</div>
		<?php
			break;
			case 2:
		?>
				<div class="two_columns_50_50 footer_bottom_columns clearfix">
					<div class="column1 footer_bottom_column">
						<div class="column_inner">
							<div class="footer_bottom">
								<?php dynamic_sidebar( 'footer_text_left' ); ?>
							</div>
						</div>
					</div>
					<div class="column2 footer_bottom_column">
						<div class="column_inner">
							<div class="footer_bottom">
								<?php dynamic_sidebar( 'footer_text_right' ); ?>
							</div>
						</div>
					</div>
				</div>
				<?php
			break;
			case 3:
		?>
				<div class="three_columns footer_bottom_columns clearfix">
					<div class="column1 footer_bottom_column">
						<div class="column_inner">
							<div class="footer_bottom">
								<?php dynamic_sidebar( 'footer_text_left' ); ?>
							</div>
						</div>
					</div>
					<div class="column2 footer_bottom_column">
						<div class="column_inner">
							<div class="footer_bottom">
								<?php dynamic_sidebar( 'footer_text' ); ?>
							</div>
						</div>
					</div>
					<div class="column3 footer_bottom_column">
						<div class="column_inner">
							<div class="footer_bottom">
								<?php dynamic_sidebar( 'footer_text_right' ); ?>
							</div>
						</div>
					</div>
				</div>
		<?php
			break;
			default:
		?>
				<div class="footer_bottom">
					<?php dynamic_sidebar( 'footer_text' ); ?>
				</div>
		<?php break; ?>
		<?php } ?>
			<?php if($footer_bottom_in_grid){ ?>
				</div>
			</div>
			<?php } ?>
			</div>
		<?php } ?>
		</div>
	</footer>
	<?php } ?>
	
</div>
</div>
<?php wp_footer(); ?>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-19781060-6', 'auto');
  ga('require', 'displayfeatures');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');

</script>
<!-- Hotjar Tracking Code for DayTranslations 2016 -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:67080,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;        
        var att = document.createAttribute("data-cfasync");
		att.value = "false";
		r.setAttributeNode(att);   
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
</script>
<?php   if ( !is_page(32093) ) { ?>
	<!--Start of Zopim Live Chat Script that Ignores RocketLoader-->
<script data-cfasync="false" type="text/javascript">
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
$.src='//v2.zopim.com/?NJVdD1uUjFJQKnG85JTMG3wrUnm21kED';z.t=+new Date;$.
type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
</script>
<!--End of Zopim Live Chat Script-->
	<?php } ?>
	
	<style type="text/css">
	.cc_container{ background: #fd7821!important;}
	.cc_container .cc_btn, .cc_container .cc_btn:visited{ background-color: #fd2c2f!important;   color: #FFF!important;}
	.cc_banner-wrapper + #site #nav-wrap{ top: 63px;}  
	.cc_banner-wrapper + #menufication-outer-wrap #menufication-top{ top: 63px;}  
	.cc_container a.cc_more_info{ color: #1f4773;}
	.cc_container a:hover, .cc_container a:active{ color: #1f4773!important;}
	.cc_banner-wrapper + #site #content-wrapper .content-out .content-in #home-content-out #home-content-in #home-content-wrapper .side-fixed{ top: 130px !important;} 
</style>

<?php
	$EUmembercountries = array(
		'1' => 'AUSTRIA', 
		'2' => 'BELGIUM',
		'3' => 'BULGARIA',
		'4' => 'CROATIA',								
		'5' => 'CZECH REPUBLIC',
		'6' => 'DENMARK',
		'7' => 'ESTONIA',
		'8' => 'FINLAND',
		'9' => 'FRANCE',
		'10' => 'GERMANY',
		'11' => 'GREECE',
		'12' => 'HUNGARY',
		'13' => 'IRELAND',
		'14' => 'ITALY',
		'15' => 'LATVIA',
		'16' => 'LITHUANIA',
		'17' => 'LUXEMBOURG',
		'18' => 'MALTA',
		'19' => 'THE NETHERLANDS',
		'20' => 'POLAND',
		'21' => 'PORTUGAL',
		'22' => 'ROMANIA',
		'23' => 'SLOVAKIA',
		'24' => 'SLOVENIA',
		'25' => 'SPAIN',
		'26' => 'SWEDEN',
		'27' => 'UNITED KINGDOM',
		'28' => 'CYPRUS',
	);
	$ip_address=$_SERVER['REMOTE_ADDR'];	
	$geopluginURL='http://www.geoplugin.net/php.gp?ip='.$ip_address;
	$addrDetailsArr = unserialize(file_get_contents($geopluginURL)); 
	$country = strtoupper($addrDetailsArr['geoplugin_countryName']);
	//if(in_array($country, $EUmembercountries)) {
?>

<script type="text/javascript">
    window.cookieconsent_options = {"message":"This website uses cookies to ensure you get the best experience on our website","dismiss":"Got it!","learnMore":"More info","link":"//www.daytranslations.com/privacy-policy","theme":"dark-top"};
</script>
<script type="text/javascript" src="//www.daytranslations.com/wp-content/themes/bridge-child/js/cookieconsent.latest.min.js"></script>
<?php //} ?>
</body>
</html>