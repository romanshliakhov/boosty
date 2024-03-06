import './_vendor';
import './_functions';
import './_components';


$(".current_status-cover,.expand").click(function() {
  $(".other").removeClass("check");
  $(this).toggleClass("check");
});

$(document).ready(function(){
  $(".status .other_card").click(function(){
    var $section = $(this).closest(".status");

    $section.find(".other_card").removeClass("active");
    $(this).addClass("active");

    var newStatus = $(this).find('.status_message').text();
    $section.find(".current_status .status_message").text(newStatus);
  });

  $(".status .status_input").click(function(){
    var $section = $(this).closest(".status");

    if (!$(this).is(":checked")) {
      $section.find(".current_status .status_message").text("Need developers");
    }
  });
});









