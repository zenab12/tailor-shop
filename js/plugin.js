/*global $*/
$(document).ready(function() {
    "use strict";
    /*  let marginleft = $(".services h2").width() - 50;
      let marginright = $(".services h2").width() - 50;
      let width = $('.services h2').width() - 50;
      let borderBefore = $('.border-before');
      let borderAfter = $('.border-after');

      borderBefore.css('margin-left', marginleft);
      borderAfter.css('margin-right', marginright);
      borderAfter.css('width', width);
      borderAfter.css('width', width);
      */


    $('.carousel').carousel({ interval: 3000 });

    // show option box
    $('.fa-palette').click(function() {

        $('.coloroption').toggle();
    });

    // change themes colors 

    $('.coloroption ul li').eq(0).css("backgroundColor", "#f0ad4e");
    $('.coloroption ul li').eq(1).css("backgroundColor", "#5cb85c");
    $('.coloroption ul li').eq(2).css("backgroundColor", "#5bc0de");
    $('.coloroption ul li').eq(3).css("backgroundColor", "#d9534f");

    let colorLi = $('.coloroption ul li');

    colorLi.click(function() {

        $('link[href*="Theme"]').attr('href', $(this).attr('data-value'));

        $('.navbar-header img').attr('src', $(this).attr('data-img'));

    });



    //scroll button
    var scrollButton = $(".scroll-to-top");

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(500);
        } else {
            scrollButton.fadeOut(500);
        }
    });

    scrollButton.click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });



    $('.serv a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: 750 }, 1000);
    });

    $('.products a').click(function(e) {
        e.preventDefault();
    })


    //loading screen

    $(window).on('load', function() {

        $('body').css({ "overflow": "auto" });

        $('.scissors').fadeOut(10, function() {

            $(this).parent().fadeOut(5, function() {
                $(this).remove()
            })


        })
    });


    $('.BlogDetail .category i').on('click', function() {

        $(this).toggleClass('fa-caret-right').parents($('li')).siblings().find($('span.contain i')).addClass('fa-caret-right');
        $(this).parents($('span.contain')).next($('span.div')).toggleClass('active').parent().siblings().find($('span.div')).removeClass('active')

    });

    $('.BlogDetail .category .categoryWord').on('click', function() {

        $(this).parents($('span.contain')).next($('span.div')).toggleClass('active').parent().siblings().find($('span.div')).removeClass('active');
        $(this).prev($('i')).toggleClass('fa-caret-right').parents($('li')).siblings().find($('span.contain i')).addClass('fa-caret-right');


    });



    $('.pop .square a').on('click', function(e) {
        $('.' + $(this).parent().data('pop')).fadeIn(500);
        e.stopPropagation();
        e.preventDefault();

    });

    $('.popup').on('click', function(e) {
        e.stopPropagation();
        $(this).fadeOut(500);

    });

    $('.popup .inner').on('click', function(e) {
        e.stopPropagation();
    });

    $('.popup .close').on('click', function(e) {
        e.preventDefault();
        $(this).parentsUntil('.popup').parent().fadeOut(500);
    });


})