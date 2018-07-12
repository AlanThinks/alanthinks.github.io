$(function() {
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,

        submitError: function($form, event, errors) {

        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM

            var thisForm = event.target.getAttribute('id');

            var name = $('#' + thisForm).find("input.name-input").val();
            var email = $('#' + thisForm).find("input.email-input").val();
            var message = $('#' + thisForm).find("textarea.textarea").val();

            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                dataType: 'json',
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function(data) {
                    if(data.error){
	                    console.log('error');
                    }
                    else if(data.success){
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
