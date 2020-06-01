$('.interface').on('click', function () {


    if ($(this).hasClass("blue")) {
        console.log("true")
        $('body').toggleClass('blue');

    }

    if ($(this).hasClass("green")) {
        console.log("true")
        $('body').toggleClass('green');
    }

    if ($(this).hasClass("increase")) {
        console.log("true");
        $('.text').animate({
            'font-size': '+=5'
        })

    }

    if ($(this).hasClass("move")) {
        console.log("true");
        $('.text').animate({
            'letter-spacing': '+=5',
            'left': '+=10',

        })

    }

})