View this page live at:
https://johannesmp.github.io/CS261_Assignment4_LoginPage/



# An example login page for CS261 Assigment 4's login page

This data should be hosted on the root of your loadBalancer instance.

Configure your nginx configuration to accomlish the following:

- accessing user-name.cs261.net/index.html should resolve to the `index.html` in this repo.
- user-name.cs261.net/static/styles.css should resolve to the `styles.css` file in the `/static/` directory in this repo

and so on.


# To Implement

## AJAX API Calls

You only need to modify `/static/scripts/main.js`

`doLogin(data) {...}` and `doCreate(data){...}` are currently called when the user clicks the 'create' or 'submit' button, using the contents of the form. The form is auto-validating to be non-empty.

A placeholder `dummyAPICall` function is currently used in `doLogin` and `doCreate`. This should be replaced with the appropriate jquery ajax call.

You should replace dummYAPICall with a real function that wraps a jquery json ajax post request.

Example ajax call:

    var options = {
        type: 'POST',
        url: '/your/api/path/',
        data: '{some : data}', // or JSON.stringify ({some : data}),
        contentType: "application/json",
        dataType: 'json'
    };

    // .done and .fail both accept callbacks 
    
    $.ajax(options)
    // got AJAX reply from server
    .done(function(reply) {
        // do something with 'reply' object
    })
    // AJAX ERROR (like if your url 404's, etc)
    .fail(function(error) {
        // do something with 'error' object
    });
 
 See http://api.jquery.com/jquery.ajax/ for more info.
 
 ## Redirect to game
 
 Once the user has clicked 'login' with an existing username, the server will return a session/token.
 
 You can redirect the user's browser simply setting the `window.location.href` variable to the `<url>?<querystring>`
 
 
