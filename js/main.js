$(document).ready(function(){
    /////////////////////////////////////////////////
    ///  ------   Animated scrol of navbar  -----   ///
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
            }, 2200, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        };  // End if
    });

    //////////////////////////////////////////////////
    ///  ------   Fade In Click on Image  -----   ///
    // daca pe clasa fadeImg se face click, se extrage din acest
    // element atributul ID, se pune in variabila si apoi in Hide si fadeIn
    $('.fadeImg').on('mouseenter', function () {
        var imgID = $(this).attr('id');
        $('#'+imgID).hide().fadeIn(800);
    });

    ////////////////////////////////////////////////////////////
    ///  ------   Click on button hide all section  -----   ///
    $('#btn').click(function(){
        $('.header').hide();
    });

    //////////////////////////////////////
    ///  ------   Zoom image  -----   ///
    $('.zoomple').zoomple({
        offset : {x:-150,y:-150},
        zoomWidth : 300,
        zoomHeight : 300,
        roundedCorners : true
    });

    //////////////////////////////////////
    ///  ------ animate <p> on header -----   ///
    $('.animateHeader').on('click', function () {
        $('.animateHeader').animate({
            right: '50px',
            opacity: '1.0',
            height: '450px',
            width: '550px'
        });

        $('.animateHeader').on('click', function () {
            $('.animateHeader').animate({
                left: '50px',
                opacity: '1.0',
                height: '450px',
                width: '750px'
            });
        });
    });

    //////////////////////////////////////
    ///  ------ animate card in blog -----   ///
    $('.card').on('mouseenter', function () {
        let cardID = $(this).attr('id');
        $('#'+cardID).animate({height: '102%', width: '105%', opacity: '1'})
                    .animate({height: '100%', width: '100%', opacity: '1'});
    });


    //////////////////////////////////////
    ///  ------ button scrol top -----   ///
    let btn = $('#buttonScrollTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });


});







