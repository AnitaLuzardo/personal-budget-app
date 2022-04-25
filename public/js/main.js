async function onOperationSubmit(event) {
    event.preventDefault();
    const form = document.forms['formOperation'];

    const fields = {
        concept: form['concept'].value,
        amount: form['amount'].value,
        register_date: form['register_date'].value,
        type_operation: form['type_operation'].value
    };

    const fieldsForm = {
        concept: form['concept'],
        amount: form['amount'],
        register_date: form['register_date']
    }

    let formValid = true;
    const error = document.getElementById('errors-form');

    if (!fields.concept) {
        fieldsForm.concept.style.borderColor = 'red';
        formValid = false;
    } else {
        fieldsForm.concept.style.borderColor = 'rgb(162, 160, 160)'
    }

    if (!fields.amount) {
        fieldsForm.amount.style.borderColor = 'red';
        formValid = false;
    } else {
        fieldsForm.amount.style.borderColor = 'rgb(162, 160, 160)'
    }

    if (!fields.register_date) { 
        fieldsForm.register_date.style.borderColor = 'red';
        formValid = false;
    } else {
        fieldsForm.register_date.style.borderColor = 'rgb(162, 160, 160)'
    }

    if (!formValid) { 
        error.innerHTML = 'Debe llenar los campos en rojo';
    } else {
        error.innerHTML = '';
    }

    if (formValid) {
        try {
            const response = await fetch('/api/movements/save', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fields)
            });
            const movements = await response.json();
            const table = document.getElementById('table-movements');
            let tableHtml = `<tr>
                                <th>Concepto</th>
                                <th>Monto</th>
                                <th>Fecha</th>
                                <th>Operación</th>
                                <th>Acciones</th>
                            </tr>`;
            // console.log('home data', data);
            movements.forEach(m => {
                tableHtml += `<tr>
                                <td>${m.concept}</td>
                                <td>${m.amount}</td>
                                <td>${m.register_date}</td>
                                <td>${m.type_operation == "I" ? "Ingreso" : "Egreso" }</td>
                                <td> 
                                    <i class='bx bx-edit-alt'></i> 
                                    <i class='bx bxs-trash-alt'></i>
                                </td>
                            </tr>`;
            });
            table.innerHTML = tableHtml;
        } catch (error) {

        }
    } 
}