View this page live at:
https://johannesmp.github.io/CS261_Assignment4_LoginPage/



# An example login page for CS261 Assigment 4

To make implementing the login requirement of Assignment 4 a bit easier, you may use this boilerplace form.

If you plan on using it, the files from this repo should be hosted on the root of your loadBalancer instance.

You will want to configure your nginx configuration to accomplish the following:

- `user-name.cs261.net/index.html` should resolve to the `index.html` in this repo.
- `user-name.cs261.net/static/styles.css` should resolve to the `styles.css` file in the `/static/` directory in this repo. All files in `/static/` should be accessible by appending their path to your server's domain.


# To Implement

Clicking the `Create` and `Login` should query your API and the server's reply should be displayed in the on-screen status panel.

A user should be able to first click 'Create' with an unused username and password, then (if they wish) immediately click 'login' to receive their session and token.

Finally, upon logging in, the user should be redirected to the game page.


## 1. AJAX API Calls

You only need to modify `/static/scripts/main.js`. 

`/index.html`, `/static/scripts/form.js` and `/static/scripts/status.js` don't need to be touched unless you are feeling adventurous

In main.js:

- The functions `doCreate(data) {...}` and `doLogin(data){...}` are currently called when the user clicks the `Create` or `Submit` button, using the contents of the form. The form is auto-validating to be non-empty. You do not need to validate the input.
- A placeholder `dummyAPICall` function is currently used in `doLogin` and `doCreate`. This should be replaced with a proper jquery json API call to your server, the reply of which should be displayed in the on-screen status panel.
- See the current usage of `setLoading(msg)` and `setStatus(msg, status)` calls in `dummyAPICall`. Your implementation should exhibit similarly responsive behavior.

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
 
## 2. Redirect to game
 
Once the user has clicked 'login' with a valid existing username/password, the server will return a session/token. With this token you can then redirect the user to the game page, which should be located at `user-name.cs261.net/Game/`
 
You can redirect the user's browser simply setting the `window.location.href` variable to the `<url>?<querystring>`. So when a user logs in they should be redirected to `https://user-name.cs261.net/Game/?_session=SESSION&_token=TOKEN`, allowing them to play the game.

 

 
 
