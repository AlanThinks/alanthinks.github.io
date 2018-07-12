$(function() {
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,

        submitError: function($form, event, errors) {
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            let thisForm = event.target.getAttribute('id');
            console.log(thisForm)
            let name = $('#' + thisForm).find("input.name-input").val();
            let company = $('#' + thisForm).find("input.company-input").val();
            let email = $('#' + thisForm).find("input.email-input").val();
            let phone = $('#' + thisForm).find("input.phone-input").val();
            let message = $('#' + thisForm).find("textarea.textarea").val();

            $.ajax({
                url: "https://formspree.io/code@alanthinks.com",
                type: "POST",
                dataType: 'json',
                data: {
                    name: name,
                    company: company,
                    phone, phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function(data) {
                    if(data.error){
	                    console.log('error');
                    }
                    else if(data.success){
                        console.log("submit success")

	                    // Success message
                        $('#send-message-modal').modal();
	                    //clear all fields
                        $('#' + thisForm).trigger("reset");
                        //close contact modal
                        $('#contact-me-modal').modal("hide");
					}
                }
            });

        },
        filter: function() {
            return $(this).is(":visible");
        }
    });
});


/*When clicking on Full hide fail/success boxes */
$('#form-first-name').focus(function() {
    $('#success').html('');
});
