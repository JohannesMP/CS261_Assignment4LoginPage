// CS261 Student: you shouldn't need to touch this file

define(function(require) {
  var form = {};

  // Passed in by the user
  var formCallback;

  form.onFormButton = function(callback) {
    formCallback = callback;
  }

  // Grab Input Panel
  var inputPanel = $('#input-panel');
  // Grab Form element
  var userForm = inputPanel.find('#user-form');
  // Grab Buttons elements in Form 
  var userFormButtons = userForm.find('input[type=button]');


  // Set up form validation
  userForm.validate({
    // Eager Validation
    onkeyup: updateValidation, // when typing
    //onfocusout: updateValidation, // when leaving focus
    
    // Class for error labels we add
    errorClass: "error-label control-label",

    // Handle updating of bootstrap error class
    highlight: function(element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).closest('.form-group').removeClass('has-error');
    }
  });

  function setButtonsEnable(enabled) {
    console.log("BUTTONS ENABLE: " + enabled);
    userFormButtons.each(function(index, element) { 
      $(element).prop("disabled", !enabled); 
    });
  }

  // Expose ability for status to enable/disable buttons
  form.setButtonsEnable = setButtonsEnable;

  // enable/disable buttons based on form validation
  function handleButtonEnable() {
    var formIsValid = userForm.validate().checkForm();
    setButtonsEnable(formIsValid);
  }

  function updateValidation(element, event) {
    // Ignores key event for tabbing into field (tabbing out is still fine)
    if(event.type == "keyup" && event.key == "Tab") return;
    // Update the valid state of the element
    this.element(element);
    // For each button, set its disabled state based on if form is valid
    handleButtonEnable();
  }

  // Set button state on load
  handleButtonEnable();

  // Listen to clicks on buttons in our form
  userFormButtons.click(function(event) {
    // button pressed
    var action = event.target.name

    // Form data
    var data = {};
    $.each(userForm.serializeArray(), function(index, el) { data[el.name] = el.value} );

    formCallback(action, data);

    /*
    if(action == "create")
      doUserCreate(data);
    else if(action == "login")
      doUserLogin(data, function(reply) {
        if(reply.status == "success")
        {
          sessionData._session = reply.data.session;
          sessionData._token = reply.data.token;

          console.log(sessionData);

          if(config.openGameOnLogin)
          {
            var msg = replyContent.html();
            var redirectMsg = msg + "\n\n Redirecting to Game in ";

            var timer = 0;
            if(config.openGameDelay != undefined);
              timer = config.openGameDelay;

            var tickRate = 100; // update every 1/10 of a second
            var countdown = setInterval( function() {
              timer -= tickRate;
              if(timer < 0)
              {
                clearInterval(countdown);
                replyContent.html(msg);
                redirectToGame();
              }
              else
              {
                replyContent.html(redirectMsg + (timer/1000) + " seconds");
              }
            }, tickRate);
          }
        }
      });
    */
  });

  return form;
});
