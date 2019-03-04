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

});