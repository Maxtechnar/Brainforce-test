
$(document).ready(function () {
    $("#phone").inputmask("  +375 99 999-99-99");
})

$(document).ready(function () {
    $("#name").keyup(function () {
        if (validateName()) {
            $("#name").css("border", "2px solid #219653");
            $("#nameMsg").html("<p class='text-succes'>Вы ввели верно.</p>").css("color", "green");
            document.getElementById("clearButton").onclick = function (e) {
                document.getElementById("name").value = "";
                document.getElementById("phone").value = "";
                $("#name").css("border", "1px solid #828282");
                $("#nameMsg").html("<p class='text-succes'></p>").css("color", "green");
                $("#phone").css("border", "1px solid #828282");
                $("#phoneMsg").html("<p class='text-valid'></p>").css("color", "red");
                $("#popup_body").css("visibility", "hidden");
                $("#message").css("visibility", "visible");
            }
        } else {
            $("#name").css("border", "2px solid #EB5757");
            $("#nameMsg").html("<p class='text-valid'>Обязательное поле.</p>").css("color", "red");
        }
    })
})

function validateName() {
    var name = $("#name").val();
    var reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
    if (reg.test(name)) {
        return true;
    } else {
        return false;
    }
}


$(document).ready(function () {
    $("#phone").keyup(function () {
        if (validateNumber()) {
            $("#phone").css("border", "2px solid #219653");
            $("#phoneMsg").html("<p class='text-succes'>Вы ввели верно.</p>").css("color", "green");
            document.getElementById("clearButton").onclick = function (e) {
                document.getElementById("name").value = "";
                document.getElementById("phone").value = "";
                $("#name").css("border", "1px solid #828282");
                $("#nameMsg").html("<p class='text-succes'></p>").css("color", "green");
                $("#phone").css("border", "1px solid #828282");
                $("#phoneMsg").html("<p class='text-valid'></p>").css("color", "red");
                $("#popup_body").css("visibility", "hidden");
                $("#message").css("visibility", "visible");
            }
        } else {
            $("#phone").css("border", "2px solid #EB5757");
            $("#phoneMsg").html("<p class='text-valid'>Обязательное поле.</p>").css("color", "red");
        }
    })
})

function validateNumber() {
    var num = $("#phone").val();
    var reg = /(?:\+375|80)\s?\(?\d\d\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})/;
    if (reg.test(num)) {
        return true;
    } else {
        return false;
    }
}





document.getElementById("button").onclick = function (e) {
    $("#popup_body").css("visibility", "visible");
    $("#message").css("visibility", "hidden");
    $("#popup").css("visibility", "visible");
}

document.getElementById("close").onclick = function (e) {
    $("#popup_body").css("visibility", "hidden");
    $("#message").css("visibility", "hidden");
    $("#popup").css("visibility", "hidden");
}

document.getElementById("close1").onclick = function (e) {
    $("#message").css("visibility", "hidden");
    $("#popup").css("visibility", "hidden");
}

$(document).ready(function () {
    $(".span_icon").click(function (event) {
        $(this).toggleClass("open").css("visibility", "visible");
    })

})

$(document).ready(function () {
    $(".accordion_item").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block').slideToggle(300);
        return false;
    })

})
$(document).ready(function () {
    $(".accordion_item1").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block1').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item2").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block2').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item3").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block3').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item4").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block4').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item5").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block5').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item6").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block6').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item7").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block7').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item8").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block8').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item9").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block9').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item10").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block10').slideToggle(300);
        return false;
    })

})

$(document).ready(function () {
    $(".accordion_item11").click(function (event) {
        $(this).toggleClass("active").next().css("visibility", "visible");
        $('.content_block11').slideToggle(300);
        return false;
    })

})






