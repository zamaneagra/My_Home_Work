
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
                //adding offset top - 70 px , fiindca nav este fixat top
                scrollTop: $(hash).offset().top - 70
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});

//counter of clicks
var ClicksCounter = 0;
function CountClicks(element) {
    ClicksCounter++;
    element.innerHTML="(Click to vote: " + ClicksCounter + ")";
};


// Making changed owner of profile

// create Full Name of new Owner

var newOwner = {
    firstName: "Vanea",
    lastName: "Drujba",
    miss: "Mr."
};


var FullName = newOwner.lastName + " " + newOwner.firstName;

// insert full name above  the profile image
document.getElementById("newowner").innerHTML= FullName;
//insert full name in Title
document.getElementById("newowner2").innerHTML= FullName;
// insert Miss or Mr
document.getElementById("miss").innerHTML= newOwner.miss;




// var newOwner.firstName = document.getValueById("newfirstName").value;

// console.log(newOwner.firstName);


