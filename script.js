$(function(){
  $('#cube').click(function(){
    document.querySelector('#cube').emit('startRotate');
  });
});