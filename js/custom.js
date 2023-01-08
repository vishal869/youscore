// $(window).scroll(function() {    
//   var scroll = $(window).scrollTop();   
//   if (scroll <= 50) {
//       $(".cs_header").removeClass("fixed").addClass("fixed");
//   }
// });


$(window).scroll(function(){
if ($(this).scrollTop() > 50) {
   $('.cs_header').addClass('sticky');
} else {
   $('.cs_header').removeClass('sticky');
}
});




//more sidebvar filter 
function myFunctionbtn() {
  var element = document.getElementById("sidebar");
  element.classList.toggle("active");
}



function myFunctionchatbtn() {
  var element = document.getElementById("chat_area");
  element.classList.toggle("active");
}

function backbtn() {
  var element = document.getElementById("chat_area");
  element.classList.toggle("active");
}


// if ( $(window).width() > 767 ) {
$('#review_slider').slick({
  // dots: false,
  // arrows:true,
  // infinite: false,
  // speed: 300,
  // slidesToShow:1,
  // slidesToScroll: 1,
  // autoplay:false,

  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  
});
// }




