var numberOfBlogs = 0;

function toggleForm(){
    var contactForm = $('#contact');

    if (contactForm.is(':visible')) {
        contactForm.slideToggle(2000);
    }   else {
        contactForm.slideToggle(2000);
    }
}

function sendUserData (){
    var formData = getFormData();

    $.ajax({url: "https://reqres.in/api/users",
        type: 'POST',
        data: formData,
        success: function(result){
            console.log("success");
        },
        error: function(result) {
            console.log("fail");
        }
    });
}

function getFormData(){
    var unindexed_array = $('form').serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });
    return indexed_array;
}


// document on ready //
$(function(){
        /// changing bkg color //
    $('#changeColor').click(function(){
        $(".colorCanBeChanged").css("background-color", "#dfe3ee");
    });

        /// changing table CSS ///
    $('.table').on('mouseenter', function () {
        $('table').removeClass('table-dark');
        $('table').addClass('table-striped');
    });
    $('.table').on('mouseleave', function () {
        $('table').removeClass('table-striped');
        $('table').addClass('table-dark');
    });

        /// portfolio images add clip-me ///
    $('.portDiv').on('mouseenter', function () {
        $(this).addClass('clip-me');
    });
    $('.portDiv').on('mouseleave', function () {
        $(this).removeClass('clip-me');
    });

    /// form hide - unhide //
    $('#blog-read-text').hide();
    $('#contact').show();
    /// input form hide-unhide //
    numberOfBlogs = $('#blog .row') [0].childElementCount;
    console.log(numberOfBlogs);
    if (numberOfBlogs >= 6) {
        $('#blog-read-text').show();
    }

});

//////////////////////////////////////////
// alert when cursor leave input area ///
$( "#subject" ).blur(function() {
    alert( "You should fill text form" );
});
//////////////////////////////////////////
// alert when changes are  input area ///
$( "#manyBlogs" ).change(function() {
    alert( "You just changed number of blogs" );
});
///////////////////////
// validation form ///
$( "form" ).submit(function( event ) {
    if ( $( "#name" ).val() === "Steve" ) {
        $( "span" ).text( "Validated..." ).show();
        return;
    }
    $( "span" ).text( "Not valid!" ).show().fadeOut( 2000 );
    event.preventDefault();
});







