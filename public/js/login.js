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

    let errorMessage = undefined;

    if(fields.email.value == "") {
        fields.email.style.borderColor = colors.alert;
        formValid = false;
        errorMessage = "Debe llenar los campos en rojo";
    } else {
        fields.email.style.borderColor = colors.default;
    }
    if(fields.password.value == "") {
        fields.password.style.borderColor = colors.alert;
        formValid = false;
        errorMessage = "Debe llenar los campos en rojo";
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
        const form = document.forms["formLogin"];
        const body = {
            email: form ['email'].value,
            pwd: form ['pwd'].value
        };  

        try {
            const response = await fetch('/api/login', {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (response.status === 200 && response.ok) {
                window.location.href = '/';
                } else {
                const data = await response.json();
                console.log('Login data', data);
                const divErrors = document.getElementById('errors-form');
                divErrors.innerHTML = `<p class="errors">${data.error}</p>`;
            }
        } catch (error) {
            console.log('login error', error);
        }
    }
}