//window.$ = window.jQuery = jQuery;
jQuery.noConflict();
//require('./app/modules');
jQuery(document).ready(function(){	
jQuery('body').append('<p>Successfd!</p>');
});
console.log(jQuery('body'));
require(["./app/modules"], function(a) {});