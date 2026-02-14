document.getElementById('Appointment').onsubmit = (e) => {
    let isValid = true;
    clearErrors();

    let destination = document.getElementById('destination').value;
    if (!destination) {
        document.getElementById("err-destination").style.display = "block";
        isValid = false;
    }

    let travelers = document.getElementById('travelers').value;
    if (!travelers || Number(travelers) <= 0) {
        document.getElementById("err-travelers").style.display = "block";
        isValid = false;
    }
    let date = document.getElementById('date').value;
    if (!date) {
        document.getElementById("err-date").style.display = "block";
        isValid = false;
    }

    if (!isValid) e.preventDefault();
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}
