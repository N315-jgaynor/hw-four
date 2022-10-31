# N315 Homework Four

This assignment called for a 1 page application in which create/edit forms were assigned clickers for later use with JSON. This website functions on mobile as well via including but not limited to a stacked login/sign up page and hamburger navigation menu.

# Web4 Link

in-info-web4.informatics.iupui.edu/~jgaynor/hw-four/index.html

# Project Highlights

## Click Listeners

Click listeners were added to the submit button that returned all text entered by the user in the form via an alert. Below is the click listener attached to the log-in button which is a simplified version of the click listener on the submit button.

```javascript
function loginListener() {
  $("#login-submit").click(function (e) {
    e.preventDefault();
    let userEmail = $("#email").val();
    let userPassword = $("#password").val();
    alert(userEmail + " " + userPassword);
  });
}
```

I ran into some problems getting the browser to recognize the click listeners when loading in pages dynamically. This was because I was calling the listeners in the document.ready function. Calling the listeners at the end of the function that loaded the pages dynamically solved this issue.
