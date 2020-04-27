
var swiper = new Swiper('.photo-slide', {

    speed: 400,
    effect: 'fade',
    loop: true,
    mousewheel: {
        eventsTarged: ".container"
    },

    touchEventsTarget: ".container",



});

var swiper = new Swiper('.swips', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    mousewheel: {
        eventsTarged: ".container"
    },


    touchEventsTarget: ".container"

});



$(document).click(function (e) {
    var clicked_id = e.target.id;
    var clicked_class = $('#' + e.target.id).attr('class');

    var c = $("#" + clicked_class + "").find("span");


    var ida = c.attr('id');
    console.log(clicked_class);
    console.log(ida);
    if (clicked_class == "btn1") {

        console.log("yes");
        $("#" + ida + "").show();

        $('html, body').animate({
            scrollTop: $('#slider').height()
        }, 2000);
    }
    if (clicked_class == "btn2") {
        $('html, body').animate({
            scrollTop: $('#slider').height() + $('.resume').height()
        }, 2000);
    }
    if (clicked_class == "closeBtn") {

        $("#close1").hide();
        $("#close2").hide();
        $("#close3").hide();
        $("#close4").hide();
        $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 2000);
    }

    if (clicked_class == "show") {
        $('html, body').animate({
            scrollTop: $("#slider").offset().top
        }, 2000);
    }
    if (clicked_class == "resume-to-projects showResume") {
        $('html, body').animate({
            scrollTop: $('.resume').height() + $('.projects').height()
        }, 2000);
    }

    if (clicked_class == "projects-to-resume showProjects") {
        $('html, body').animate({
            scrollTop: $('.resume').offset().top
        }, 2000);
    }
});

var btn = $('#button');
var btnResume = $('#resumeToProjects');
var btnProjects = $('#projectsToResume');

$(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() == $('.resume').height()) {
        btnResume.addClass('showResume');
    } else {
        btnResume.removeClass('showResume');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() == $('.resume').height() + $('.projects').height()) {
        btnProjects.addClass('showProjects');
    } else {
        btnProjects.removeClass('showProjects');
    }
});

var w = $(window).width();
var h = $(window).height();
var scale = 1;

function zoom(x) {
  if (x === -1) {
    scale = scale * 1.1;
    w = w * 0.9;
    h = h * 0.9;
    $("#myiframe").width(w + "px");
    $("#myiframe").height(h + "px")
  } else {
    scale = scale * 0.9;
    w = w * 1.1;
    h = h * 1.1;
    $("#myiframe").width(w + "px");
    $("#myiframe").height(h + "px")
  }

  $('#myiframe').css('transform', `scale(${scale})`);
}