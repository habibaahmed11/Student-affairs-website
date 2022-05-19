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