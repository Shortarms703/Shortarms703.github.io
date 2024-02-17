function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // from https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
    var filter = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    return filter.test(a);
}

function validateCreditCard(creditCard) {
    var a = document.getElementById(creditCard).value;
    var filter = /(\d{4} *\d{4} *\d{4} *\d{4})/;
    return filter.test(a);
}


$(document).ready(function () {
    let phone = $("#userPhoneNumber");
    phone.on("change", function () {
        if (!validatePhone("userPhoneNumber")) {
            alert("Wrong format for phone");
            phone.val("(xxxx)");
            phone.addClass("error");
        } else {
            phone.removeClass("error");
        }
    });

    let creditCard = $("#cardNumber");
    creditCard.on("change", function () {
        if (!validateCreditCard("cardNumber")) {
            alert("Wrong format for credit card");
            creditCard.val("xxxx xxxx xxxx xxxx");
            creditCard.addClass("error");
        } else {
            creditCard.removeClass("error");
        }
    });

    $('#datepicker').datepicker(
        {
            defaultDate: new Date(),
            minDate: new Date(),
            beforeShowDay: function (date) {
                var day = date.getDay();
                return [(day !== 6 && day !== 0), ''];
            }
        }
    );

    $('#selectHaidresser').on('change', function () {
        var selected = $(this).val();
        $('#datepicker').datepicker('option', {
            beforeShowDay: function (date) {
                let day = date.getDay();
                if (selected === "1") {
                    return [(day !== 6 && day !== 0) && day !== 1];
                }
                if (selected === "2") {
                    return [(day !== 6 && day !== 0) && day !== 2];
                }
                if (selected === "3") {
                    return [(day !== 6 && day !== 0) && day !== 3];
                }
                if (selected === "4") {
                    return [(day !== 6 && day !== 0) && day !== 4];
                }
                else {
                    return [(day !== 6 && day !== 0)];
                }
            }
        });
    });
});

