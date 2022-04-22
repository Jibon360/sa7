$(document).ready(function(){
$(window).on('scroll',function(){
    var scroll=$(window).scrollTop();
    if(scroll>=50){
        $("nav").addClass("navbg");
    }
    else{
        $("nav").removeClass("navbg");
    }
})

$("#barclick").click(function(){
  $("#iconclick").toggleClass("fa-xmark");
})

$('.googlemap').googleMaps({
    points: [{
  
      // New York
      lat: 40.7127,
      lng: -75.1890,
      marker: true,
      title: 'Marker title',
      infoWindow: 'Info window content',
      marker: 'custom.png'
      
    }]
  });
});

{/* <i class="fa-solid fa-xmark"></i> */}