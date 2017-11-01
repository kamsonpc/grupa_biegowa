
$( window ).scroll(function() {
      
      if($(this).scrollTop() > 87)
      {
       $(".navbar").addClass('nav-fixed');
      }
      else
      {
          $(".navbar").removeClass('nav-fixed');
      }

       
});

