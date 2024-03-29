let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function () {
    GetBooking();
});

function GetBooking() {
    let url = 'https://api.sheety.co/50585a22aa4a35c43762829099ed20ab/tableapp/bookingitems';
    fetch(url)
        .then((response) => response.json())
        .then(json => {

            let bookingNameList = document.getElementById("bookingNameList");
            let bookingIds = [];

            //clear the table rows
            for (let f = bookingNameList.rows.length - 1; f > 0; f--) {
                bookingNameList.deleleRow(f);
            }

            for (let i = 0; i < json.bookingitems.length; i++) {
                let gName = json.bookingitems[i].name;
                let gEmail = json.bookingitems[i].email;
                let gPax = json.bookingitems[i].pax;
                let gRemarks = json.bookingitems[i].remarks;
                let gId = json.bookingitems[i].id;
                let btnId = "delete" + gId

                let row = bookingNameList.insertRow(bookingNameList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gPax;
                row.insertCell(4).innerHTML = gRemarks;
                row.insertCell(5).innerHTML = "<button id='" + btnId + "' class='btn btn-danger' > Delete </button>";

                bookingIds.push(btnId); //'push' is used to add the booking records into an array

            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    Deletebooking(theId);
                });
            }
        });
}

function Deletebooking(id) {
    let url = 'https://api.sheety.co/50585a22aa4a35c43762829099ed20ab/tableapp/bookingitems/2';
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!");
            GetBooking();
        });
}