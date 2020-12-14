$(document).ready(function () {
    /*웹페이지 열었을 때*/
    $(".imgbear").show();
    $(".imgbear2").hide();

    $(".imgeagle").show();
    $(".imgeagle2").hide();

    $(".imgrabbit").show();
    $(".imgrabbit2").hide();

    $(".imgdeer").show();
    $(".imgdeer2").hide();



    /*img1을 클릭했을 때 img2를 보여줌*/
    $(".imgbear").click(function () {
        $(".imgbear").hide();
        $(".imgbear2").show();
        $(".imgeagle").show();
        $(".imgeagle2").hide();
        $(".imgrabbit").show();
        $(".imgrabbit2").hide();
        $(".imgdeer").show();
        $(".imgdeer2").hide();
        $(".imglion").show();
        $(".imglion2").hide();
    });

    $(".imgeagle").click(function () {
        $(".imgeagle").hide();
        $(".imgeagle2").show();
        $(".imgbear").show();
        $(".imgbear2").hide();
        $(".imgrabbit").show();
        $(".imgrabbit2").hide();
        $(".imgdeer").show();
        $(".imgdeer2").hide();
        $(".imglion").show();
        $(".imglion2").hide();
    });

    $(".imgrabbit").click(function () {
        $(".imgrabbit").hide();
        $(".imgrabbit2").show();
        $(".imgdeer").show();
        $(".imgdeer2").hide();
        $(".imglion").show();
        $(".imglion2").hide();
        $(".imgbear").show();
        $(".imgbear2").hide();
        $(".imgeagle").show();
        $(".imgeagle2").hide();
    });

    $(".imgdeer").click(function () {
        $(".imgdeer").hide();
        $(".imgdeer2").show();
        $(".imglion").show();
        $(".imglion2").hide();
        $(".imgbear").show();
        $(".imgbear2").hide();
        $(".imgeagle").show();
        $(".imgeagle2").hide();
        $(".imgrabbit").show();
        $(".imgrabbit2").hide();
    });

    $(".imglion").click(function () {
        $(".imglion").hide();
        $(".imglion2").show();
        $(".imgbear").show();
        $(".imgbear2").hide();
        $(".imgeagle").show();
        $(".imgeagle2").hide();
        $(".imgrabbit").show();
        $(".imgrabbit2").hide();
        $(".imgdeer").show();
        $(".imgdeer2").hide();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $(".imgbear2").click(function () {
        $(".imgbear").show();
        $(".imgbear2").hide();

    });

    $(".imgeagle2").click(function () {
        $(".imgeagle").show();
        $(".imgeagle2").hide();

    });

    $(".imgrabbit2").click(function () {
        $(".imgrabbit").show();
        $(".imgrabbit2").hide();

    });
    $(".imgdeer2").click(function () {
        $(".imgdeer").show();
        $(".imgdeer2").hide();

    });
    $(".imglion2").click(function () {
        $(".imglion").show();
        $(".imglion2").hide();

    });
});



/** 
$(document).ready(function () {
    $(".imgbear").hide();

    var next;
    $('.imgbear:first').fadeIn('slow');
    $('.imgbear').click(function (e) {
        $(this).fadeIn('slow');
        // 조건 연산자 -> 조건식 ? 참 값 : 거짓 값
        next = ($(this).next().length ? $(this).next() : $('.imgbear:first'));

        // 현재 사진은 사라지고, 다음 사진 나오도록 하면서, 기본 이벤트를 무효화 한다.
        $(this).fadeOut('slow');
        next.fadeIn('slow');
        e.preventDefault();


    });
});

**/