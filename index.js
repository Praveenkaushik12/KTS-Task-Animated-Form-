// Used Chat GTP as I know very basics of Js .

function switchForm(showFormId, hideFormId) {
    const showForm = document.getElementById(showFormId);
    const hideForm = document.getElementById(hideFormId);

    hideForm.style.display = 'none';
    showForm.style.display = 'block';
  }

  document.addEventListener("DOMContentLoaded", function() {
    const loginFormContainer = document.getElementById('loginFormContainer');
    const registerFormContainer = document.getElementById('registerFormContainer');

    const loginLink = loginFormContainer.querySelector('.switch-form-link a');
    const registerLink = registerFormContainer.querySelector('.switch-form-link a');

    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      switchForm('registerFormContainer', 'loginFormContainer');
    });

    registerLink.addEventListener('click', function(event) {
      event.preventDefault();
      switchForm('loginFormContainer', 'registerFormContainer');
    });
  });