/**
 * Author  : Lyu
 * Date    : 14/10/25
 * Version : 1.0.0
 * Subject : 初始化 themepunch slider 插件
 * Link    : http://www.lianbi.com.cn
 */
//add slider plugin
var api;
var api2;
$(document).ready(function() {
    api =  jQuery('.fullwidthbanner').revolution(
        {
            delay:9000,
            startheight:650,
            startwidth:1120,
            hideThumbs:200,
            thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
            thumbHeight:50,
            thumbAmount:5,

            navigationType:"bullet",					//bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
            navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
            navigationStyle:"round",				//round,square,navbar

            touchenabled:"on",						// Enable Swipe Function : on/off
            onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

            navOffsetHorizontal:0,
            navOffsetVertical:0,

            stopAtSlide:-1,
            stopAfterLoops:-1,

            shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
            fullWidth:"on"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
        });

    api2 =  jQuery('.banner').revolution(
        {
            delay:9000,
            startheight:650,
            startwidth:1120,

            hideThumbs:200,

            thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
            thumbHeight:50,
            thumbAmount:5,

            navigationType:"bullet",					//bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
            navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
            navigationStyle:"round",				//round,square,navbar

            touchenabled:"on",						// Enable Swipe Function : on/off
            onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

            navOffsetHorizontal:0,
            navOffsetVertical:0,

            stopAtSlide:-1,
            stopAfterLoops:-1,

            shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
            fullWidth:"on"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
        });
    // FADING EFFECTS FOR SLIDESJS //
    $(".blog-slides .next, #slides .next, .post .next").hide();
    $(".blog-slides .prev, #slides .prev, .post .prev").hide();

    $(".blog-slides, #slides").hover(function() {
        $(".next").stop(true, true).fadeIn();
        $(".prev").stop(true, true).fadeIn();
    }, function() {
        $(".next").fadeOut();
        $(".prev").fadeOut();
    });
});