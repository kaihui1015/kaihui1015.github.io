function transformUppercase(_val) {
    return _val.toUpperCase();
}

let elNamePengguna = document.getElementById("namaPengguna"); //select the element
elNamePengguna.addEventListener("keyup", function () {
    elNamePengguna.value = transformUppercase(elNamePengguna.value);
});