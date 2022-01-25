var errorMsg = 'Email not valid';

var errorDiv = document.querySelector('.error');
document.querySelector('.getAccessBtn').addEventListener('click', validateForm);

function validateForm(event) {
    let x = document.forms["getAccess"]["yourEmail"].value;
    if (x == "" || x== null) {
        errorDiv.innerHTML = errorMsg;
        event.preventDefault();
        return false;
    }
    else {
        if (x.includes('@'&&'.')) {
            errorDiv.innerHTML = "";
            alert('Email submitted, thanks for trustng us');
            event.preventDefault();
        }
        else{
            errorDiv.innerHTML = errorMsg;
            event.preventDefault();
        }
        
    }
}