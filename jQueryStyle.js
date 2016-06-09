/* global $ */
$(document).ready(function () {
  $('#adamText').mouseover(function () {
    $('#adamText > h3').css('background', '#ffae00');
    $('#adamText > h3').css('color', 'rgba(0, 0, 0, 0.7)');
  });
  $('#adamText').mouseout(function () {
    $('#adamText > h3').css({'background': 'rgba(0, 0, 0, 0.7)', 'color': '#ffae00'});
  });
});
