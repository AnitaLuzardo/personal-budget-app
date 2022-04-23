function validateForm() {
    const form = document.forms["formLogin"];
    const fields = {
        email: form['email'],
        password: form['pwd']
    }

    let formValid = true;
    const colors = {
        alert: 'red',
        default: 'rgb(162, 160, 160)'
    };

    const errorMessage = "Debe llenar los campos en rojo"

    if(fields.email.value == "") {
        fields.email.style.borderColor = colors.alert;
        formValid = false;
        errorMessage;
    } else {
        fields.email.style.borderColor = colors.default;
    }
    if(fields.password.value == "") {
        fields.password.style.borderColor = colors.alert;
        formValid = false;
        errorMessage;
    } else {
        fields.password.style.borderColor = colors.default;
    }

    if(errorMessage) {
        const divErrors = document.getElementById('errors-form');
        errorHtml = `<p class="errors">${errorMessage}</p>`
        divErrors.innerHTML = errorHtml;
    }

    return formValid
}

async function onLoginSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      console.log('haciendo la pegada');
    //   const form = document.forms["formLogin"];
    //   const body = {
    //       email: form ['email'].value,
    //       password: form ['pwd'].value
    //   };  
      try {
          const response = await fetch('/api/login', { method: 'POST' });
      } catch (error) {
          
      }
    }
}