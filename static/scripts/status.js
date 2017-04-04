// CS261 Student: you shouldn't need to touch this file

define(function(require) {
  var status = {};

  // to interact with form elements
  var form;

  status.registerForm = function(formObj) {
    form = formObj;
  }

  // Grab Status Panel
  var statusPanel = $('#status-panel');
  // Grab Progress bar
  var progressBar = statusPanel.find('#progress-bar');
  // Grab Reply Content
  var replyContent = statusPanel.find("#reply-content");

  // Private: shows status panel when called for the first time
  function initStatus() {
    statusPanel.removeClass("force-collapse");
    statusPanel.find('*').removeClass("force-collapse");
  }

  function showProgress() {
    progressBar.removeClass("force-collapse");
  }

  function hideProgress() {
    progressBar.addClass("force-collapse");
  }

  // Private: change text in status panel
  function setMsg(msg) {
    if(msg instanceof Object)
      replyContent.html(JSON.stringify(msg, null, 2));
    else
      replyContent.html(msg);
  }

  // Private: clean up visual appearance class on the status panel
  function clearReplyClass() {
    replyContent.removeClass("active success info danger warning");
  }


  status.setLoading = function(msg) {
    initStatus();

    showProgress();
    form.setButtonsEnable(false);
    setMsg(msg);

    clearReplyClass();

    replyContent.addClass("info");
  }

  status.setStatus = function(msg, status, lockButtons) {
    initStatus();

    hideProgress();

    if(!lockButtons)
      form.setButtonsEnable(true);
    else
      form.setButtonsEnable(false);

    setMsg(msg);

    clearReplyClass();

    replyContent.addClass(status);
  }

  return status;
});
