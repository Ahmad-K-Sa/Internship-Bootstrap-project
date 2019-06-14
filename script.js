$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 715) {
      $('.card-1').addClass('moveFromLeft');
      $('.card-2').addClass('moveFromBottom');
      $('.card-3').addClass('moveFromRight');
    } else {
      $('.card-1').removeClass('moveFromLeft');
      $('.card-2').removeClass('moveFromBottom');
      $('.card-3').removeClass('moveFromRight');
    }
  });
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 115) {
      $('.Left').addClass('fromLeft');
      $('.Right').addClass('fromRight');
    } else {
      $('.Left').removeClass('fromLeft');
      $('.Right').removeClass('fromRight');
    }
  });
});
