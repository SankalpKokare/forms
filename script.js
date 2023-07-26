function validatepassword() {
    let x = document.forms["sign"]["password"].value;
    let y = document.forms["sign"] ["cpassword"].value;
    if (x!=y) {
        alert("wrong password");
        return false;
    }
}
