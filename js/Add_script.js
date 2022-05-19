const form = document.getElementById('myform');
const username = document.getElementById('name');
const ID = document.getElementById('ID');
const date = document.getElementById('date');
const gpa = document.getElementById('GPA');
const gender = document.getElementById('gender');
const level = document.getElementById('level');
const student_status = document.getElementById('status');
const department = document.getElementById('dep');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();

});
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error";

}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


function validateForm() {
    const username_value = username.value.trim();
    const ID_value = ID.value.trim();
    const Date_value = date.value.trim();
    const GPA_value = gpa.value.trim();
    const gender_value = gender.value.trim();
    const level_value = level.value.trim();
    const status_value = student_status.value.trim();
    const dep_value = department.value.trim();
    const email_value = email.value.trim();
    const phone_value = phonenumber.value.trim();
    if (username_value === '') {
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
        setSuccessFor(username);
    }

    if (ID_value === '') {
        setErrorFor(ID, 'ID cannot be blank');
    }
    else {
        setSuccessFor(ID);
    }

    if (Date_value === '') {
        setErrorFor(date, 'Date cannot be blank');
    }
    else {
        setSuccessFor(date);
    }

    if (GPA_value === '') {
        setErrorFor(gpa, 'GPA cannot be blank');
    }
    else {
        setSuccessFor(gpa);
    }

    if (gender_value === '') {
        setErrorFor(gender, 'Gender cannot be blank');
    }
    else {
        setSuccessFor(gender);
    }

    if (level_value === '') {
        setErrorFor(level, 'Level cannot be blank');
    }
    else {
        setSuccessFor(level);
    }

    if (status_value === '') {
        setErrorFor(student_status, 'Status cannot be blank');
    }
    else {
        setSuccessFor(student_status);
    }

    if (dep_value === '') {
        setErrorFor(department, 'Department cannot be blank');
    }
    else {
        setSuccessFor(department);
    }

    if (email_value === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(email_value)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (phone_value === '') {
        setErrorFor(phonenumber, 'Phonenumber cannot be blank');
    }
    else {
        setSuccessFor(phonenumber);
    }
    const success = document.getElementById('success');
    const danger = document.getElementById('false');
    if (username_value === '' || ID_value === '' || Date_value === '' || GPA_value === '' || dep_value === '' || email_value === '' || phone_value === '') {
        danger.style.display = 'block';
    }
    else {
        setTimeout(() => {
            username.value = '';
            ID.value = '';
            date.value = '';
            gpa.value = '';
            email.value = '';
            department.value = '';
            phonenumber.value = '';
        }, 2000);
        success.style.display = 'block';
    }
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const left = document.getElementById("left");
const logo = document.getElementById("logo");
logo.addEventListener("click", function myfunction() {
    if (left.style.display == 'none' || left.style.display == '') {
        left.style.display = 'block';
    }
    else {
        left.style.display = 'none';
    }
})