$(window).on('load',()=>{
  $('#preloader').fadeOut();
})
$('.toggle-child').on('click',function(){
    const id =	$(this).data('id');
    $('#'+id).show();
});

$('.close').on('click',function(){
    const id =	$(this).data('id');
    $('#'+id).hide();
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

  // var maxLength = $('.masonry-items').length
  // var baseMargin = 35, total = 0
  // for(var a=6 ; a < maxLength; a+=4){
  //   total = baseMargin + total
  //   $(".masonry-items:nth-child(2n+"+a+")").css('transform','translatey(-'+total+'px)')
  // }
  $(document).ready(function(){



      //////////// Slider Change Calue for calculator

    const sipCalculator = (sip, roi, year,check) => {
      var totalAmt = 0, arr = [],
       months = year*12,
       addprevious = sip*((roi/12)/100);
      
      for(var b=1; b <= months ; b++){
          totalAmt = totalAmt  +  (sip+addprevious) + (totalAmt*((roi/12)/100)) 
         // arr.push(FV)
      }

      var investedAmt = Math.round(sip*months),
      estReturn = Math.round(totalAmt-investedAmt)
      $('#sipInvestedAmt').text('Rs. '+investedAmt.toLocaleString());
      $('#sipEstAmt').text('Rs. '+estReturn.toLocaleString());
      $('#sipTotalAmt').text('Rs. '+Math.round(totalAmt).toLocaleString());

      pieChart('Invested amount','Est. returns',investedAmt,estReturn,check) 
  }


  const pieChart = (head1,head2,val1,val2,check) => {

          var xValues = [head1, head2];
          var yValues = [val1, val2];
          var barColors = [ "#3cafdc", "#00729f" ];
          
          if(check == true){

              const chart = Chart.getChart("sipCalChat");
              chart.destroy();
              chart = new Chart("sipCalChat", {
                  type: "doughnut",
                  data: {
                      labels: xValues,
                      datasets: [{
                      backgroundColor: barColors,
                      borderColor:'rgba(0,0,0,0)',
                      data: yValues
                      }]
                  }           
              });
          } 
          else{
              var chart = new Chart("sipCalChat", {
                  type: "doughnut",
                  data: {
                      labels: xValues,
                      datasets: [{
                      backgroundColor: barColors,
                      borderColor:'rgba(0,0,0,0)',
                      data: yValues
                      }]
                  }           
              });
          }
          
  }


  var s = parseFloat($('#sipAmt').val()), r= parseFloat($('#sipRoi').val()), t= parseFloat($('#sipTime').val())
  sipCalculator(s,r,t,false)

  $(document).on('input change','.type-range',function(){
      const minVal = $(this).attr('min');
      const maxVal = $(this).attr('max');
      const bgVal = ($(this).val()-minVal)*100/(maxVal-minVal);

      $(this).css({'background-size': bgVal+'% 100%'})
      $(this).siblings().children('.type-input').val($(this).val())

      s = parseFloat($('#sipAmt').val()), r= parseFloat($('#sipRoi').val()), t= parseFloat($('#sipTime').val())
      sipCalculator(s,r,t, true)
  });

  $('.type-input').on('keyup',function(){
      var mminVal = $(this).attr('min'); 
      var mmaxVal =$(this).attr('max');
      var mVal = $(this).val();
  
      if(parseInt(mVal) > parseInt(mmaxVal)){
          $(this).val(mmaxVal);
      }
      var bgVal = (mVal-mminVal)*100/(mmaxVal-mminVal);
      $(this).parent().siblings('.type-range').val(mVal).css({'background-size': bgVal+'% 100%'})

      s = parseFloat($('#sipAmt').val()), r= parseFloat($('#sipRoi').val()), t= parseFloat($('#sipTime').val())
      sipCalculator(s,r,t,true)
     
  });

  
  });