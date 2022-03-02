$(window).on('load',()=>{
  $('#preloader').fadeOut();
})
$('.toggle-child').on('click',function(){
    const id =	$(this).data('id');
    $('#'+id).show('slide',{direction:'left'},100);
});

$('.close').on('click',function(){
    const id =	$(this).data('id');
    $('#'+id).hide('slide',{direction:'left'},100);
});

$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.more-btn').on('click',function(){
    $(this).toggleClass('type-more type-back').parent().prev().toggleClass('load-more load-less');
    $(this).children('i').toggleClass('fa-angle-left fa-angle-right');
    $('.type-see').toggleClass('invisible visible');
})
  $(window).on('scroll',()=>{
    const header = document.getElementById('navbar-main');
    const sticky = header.offsetTop;

      if(window.pageYOffset > sticky){
        header.classList.add('fixed-top')
      }
      else{
        header.classList.remove('fixed-top')
      }
  })

  //// masonary type gallery

  var maxLength = $('.masonry-items').length
  var baseMargin = 35, total = 0
  for(var a=6 ; a < maxLength; a+=4){
    total = baseMargin + total
    $(".masonry-items:nth-child(2n+"+a+")").css('transform','translatey(-'+total+'px)')
  }