//window.$ = window.jQuery = jQuery;
jQuery.noConflict();
//require('./app/modules');
// jQuery(document).ready(function(){	
// jQuery('body').append('<p>App Js Entry!</p>');
// });
// console.log(jQuery('body'));
//delete require.cache["./modules"];
// require(["./modules/jquery-migrate.min","./modules/plugins","./modules/jquery.carouFredSel-6.2.1.min","./modules/jquery.mousewheel.min","./modules/jquery.touchSwipe.min","./modules/default.min","./modules/jquery-ui-1.8.13.custom.min","./modules/js_composer_front.min","./modules/cookieconsent.ip.min"], function() {

// 	require.include("./modules/combine");
// });

//require(["./modules"], function() {

//	require.include("./modules/combine");
//});
//require('./modules');


var waitForChunk = require("bundle?name=vendor!./vendor");
 
// To wait until the chunk is available (and get the exports) 
//  you need to async wait for it. 
waitForChunk(function(file) {
    // use file like is was required with 
    // var file = require("./file.js"); 
    require("./modules");
});
// wraps the require in a require.ensure block 