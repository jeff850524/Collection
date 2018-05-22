jQuery(document).ready(function () {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });

  jQuery('.back-to-top').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })

  jQuery('#ClickHome').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })

  jQuery('#ClickWork').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 480 }, duration);
    return false;
  })
  jQuery('#ClickContact').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 1500 }, duration);
    return false;
  })


});