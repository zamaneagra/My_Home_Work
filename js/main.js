
/*
// Nu este animat - de asta nu l-am folosit //

$(".navbar-right a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
})
*/

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar-right", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#CollapseMyNavbar a").on('click', function(event) {
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
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});


var ClicksCounter = 0;
function CountClicks(element) {
    ClicksCounter++;
    element.innerHTML="(Click to vote: " + ClicksCounter + ")";
}