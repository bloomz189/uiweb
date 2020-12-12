$(function () {
    $('.navbar-right li:nth-child(2)')
        .click(function () {
            $('body').animate({ scrollTop: 750 });
            return false;
        })

    $('.navbar-right li:nth-child(3)')
        .click(function () {
            $('body').animate({ scrollTop: 1100 });
            return false;
        })


})  
/* wow = new WOW(
{
animateClass: 'animated',
offset:       100
}
);
wow.init(); */
