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

    var colorLi = $('.coloroption ul li');

    colorLi.click(function() {

        $('link[href*="heme"]').attr('href', $(this).attr('data-value'));
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
        $('html,body').animate({ scrollTop: 0 }, 2000);
    });



    //loading screen

    $(window).on('load', function() {

        $('body').css({ "overflow": "auto" });

        $('.scissors').fadeOut(200, function() {

            $(this).parent().fadeOut(300, function() {
                $(this).remove()
            })


        })
    });



});