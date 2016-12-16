<?php
	
	/*
	$ip_address= $_SERVER['REMOTE_ADDR'];
	$geopluginURL='http://www.geoplugin.net/php.gp?ip='.$ip_address;
	$cSession = curl_init(); 
	curl_setopt($cSession,CURLOPT_URL, $geopluginURL);
	curl_setopt($cSession,CURLOPT_RETURNTRANSFER,true);
	curl_setopt($cSession,CURLOPT_HEADER, false); 
	$result=curl_exec($cSession);
	curl_close($cSession);
	$addrDetailsArr = unserialize($result); 
	$country = strtoupper($addrDetailsArr['geoplugin_countryName']);*/
	
	$ip_address= $_SERVER['REMOTE_ADDR'];
	echo $geopluginURL='http://www.geoplugin.net/php.gp?ip='.$ip_address;
	$addrDetailsArr = unserialize(file_get_contents($geopluginURL)); 
	echo $country = strtoupper($addrDetailsArr['geoplugin_countryName']);
	
	phpinfo();
?>