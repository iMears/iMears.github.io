$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "//formspree.io/maxwellmears@gmail.com",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                dataType: "json",
                cache: false,
                success: function() {
                    // Success message
                    swal({
                        title: "Message Sent!",
                        text: "Thank you " + firstName + ", I'll get back to you soon.",
                        type: "success",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#EB4E48"
                    });

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    swal({
                        title: "Error!",
                        text: "Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!",
                        type: "error",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#EB4E48"
                    })
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
