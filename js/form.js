
$(document).ready(function () {
    $("#phone").inputmask("  +375 99 999-99-99");
})

$(document).ready(function () {
    $("#name").keyup(function () {
        if (validateName()) {
            $("#name").css("border", "2px solid #219653");
            $("#nameMsg").html("<p class='text-succes'>Вы ввели верно.</p>").css("color", "green");
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

document.getElementById("clearButton").onclick = function (e) {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    $("#name").css("border", "1px solid #828282");
    $("#nameMsg").html("<p class='text-succes'></p>").css("color", "green");
    $("#phone").css("border", "1px solid #828282");
    $("#phoneMsg").html("<p class='text-valid'></p>").css("color", "red");
}