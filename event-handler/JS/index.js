function transformUppercase(_val) {
    return _val.toUpperCase();
}

let elnamaPengguna = document.getElementById("namaPengguna"); //select the element
elnamaPengguna.addEventListener("keyup", function () {
    elnamaPengguna.value = transformUppercase(elnamaPengguna.value);
});

function checkPassword() {
    let elKataLaluan = document.getElementById("kataLaluan");
    let password_val = elkataLaluan.value;
    if (password_val.length >= 5) {
        alert("Password check ...OK!");
    } else {
        alert("Password too short!");
    }
}

let elkataLaluan = document.getElementById("kataLaluan");
elkataLaluan.onblur = checkPassword;