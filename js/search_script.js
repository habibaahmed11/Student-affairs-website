function CheckForm() {
    var search = document.getElementById("mySearch").value;
    if (search == "") {
        alert("Please Enter a Name!");
        document.getElementById("mySearch").focus();
        return false;
    }
    re = /[a-z]/;
    if (!re.test(search)) {
        alert("Please Enter a Valid Name!");
        document.getElementById("mySearch").focus();
        return false;
    }
    alert("You entered a valid name!");
    return true;
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