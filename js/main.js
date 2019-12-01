// Copyright 2019 Prajwal Pyakurel
$(document).ready(function(){
    
    "use strict";
   $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 1010){  //checking the pixels size from top
            $("header").addClass('secondary');
        }
           else
            if($("header").hasClass('secondary')){
                $("header").removeClass('secondary');
            }  
        
    });



  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
        
    
    });
    
     $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
        
    
    });
    
    
});

