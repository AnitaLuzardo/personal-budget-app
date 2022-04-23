function validateForm() {
    const form = document.forms["registerForm"];
    const fields = {
      name: form['name'],
      lastName: form['lastName'],
      email: form['email'],
      pwd: form['pwd'],
      confirmPwd: form['confirmPwd'],
    };
    let formValid = true;
    const colors = {
      alert: 'red',
      default: 'rgb(162, 160, 160)'
    };

    const errorMessages = []; 

    if (fields.name.value == "") {
      fields.name.style.borderColor = colors.alert;
      formValid = false;
      errorMessages.push('Debe llenar los campos en rojo!');
    } else {
      fields.name.style.borderColor = colors.default;
    }

    if (fields.lastName.value == "") {
      fields.lastName.style.borderColor = colors.alert;
      formValid = false;
      if(!errorMessages.includes('Debe llenar los campos en rojo!')) {
        errorMessages.push('Debe llenar los campos en rojo!');
      }
    } else {
      fields.lastName.style.borderColor = colors.default;
    }

    if(fields.email.value == "") {
      fields.email.style.borderColor = colors.alert;
      formValid = false;
      if(!errorMessages.includes('Debe llenar los campos en rojo!')) {
        errorMessages.push('Debe llenar los campos en rojo!');
      }
    } else {
      fields.email.style.borderColor = colors.default;
    }

    if(fields.pwd.value == "") {
      fields.pwd.style.borderColor = colors.alert;
      formValid = false;
      if(!errorMessages.includes('Debe llenar los campos en rojo!')) {
        errorMessages.push('Debe llenar los campos en rojo!');
      }
    } else {
      fields.pwd.style.borderColor = colors.default;
    }
    
    if(fields.confirmPwd.value == "") {
      fields.confirmPwd.style.borderColor = colors.alert;
      formValid = false;
      if(!errorMessages.includes('Debe llenar los campos en rojo!')) {
        errorMessages.push('Debe llenar los campos en rojo!');
      }
    } else {
      fields.confirmPwd.style.borderColor = colors.default; 
    }

    if(fields.pwd.value != "" && fields.confirmPwd.value != "" && fields.pwd.value != fields.confirmPwd.value) {
      fields.confirmPwd.style.borderColor = colors.alert;
      fields.pwd.style.borderColor = colors.alert;
      formValid = false;
      errorMessages.push('Los campos Contraseña deben coincidir');
    }

    if(errorMessages.length > 0) {
      const divErrors = document.getElementById('errors-form');
      let errorsHtml = "";
      errorMessages.forEach(error => {
        errorsHtml += `<p class="errors">${error}</p>`
      }); 

      divErrors.innerHTML = errorsHtml;
    }

    return formValid;
}

async function onRegisterSubmit(event) {
  event.preventDefault();

  if (validateForm()) {
    const form = document.forms["registerForm"];
    const body = {
      name: form['name'].value,
      last_name: form['lastName'].value,
      email: form['email'].value,
      pwd: form['pwd'].value,
    };

    try {
        const response = await fetch('/api/register', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });

        if (response.status === 200 && response.ok) {
          window.location.href = '/login';
        } else {
          const data = await response.json();
          console.log('register data', data);
          const divErrors = document.getElementById('errors-form');
          divErrors.innerHTML = `<p class="errors">${data.error}</p>`;
        }
    } catch (error) {
      console.log('register error', error);
    }
  }
}