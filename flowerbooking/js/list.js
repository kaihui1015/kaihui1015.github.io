let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function () {
    GetBooking();
});

function GetBooking() {
    let url = 'https://api.sheety.co/50585a22aa4a35c43762829099ed20ab/flowerbooking/userbookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {

            let bookingList = document.getElementById("bookingList");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingList.rows.length - 1; k > 0; k--) {
                bookingList.deleleRow(k);
            }

            for (let i = 0; i < json.userbookings.length; i++) {
                let gName = json.userbookings[i].name;
                let gEmail = json.userbookings[i].email;
                let gHp = json.userbookings[i].hp;
                let gFlower_type = json.userbookings[i].flower_type;
                let gQuantity = json.userbookings[i].flower_quantity;
                let gDeliveryDate = json.userbookings[i].delivery_date;
                let gRemarks = json.userbookings[i].remarks;
                let gId = json.userbookings[i].id;
                let btnId = "delete" + gId

                let row = bookingList.insertRow(bookingList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gHp;
                row.insertCell(4).innerHTML = gFlower_type;
                row.insertCell(5).innerHTML = gQuantity;
                row.insertCell(6).innerHTML = gDeliveryDate;
                row.insertCell(7).innerHTML = gRemarks;
                row.insertCell(8).innerHTML = "<button id='" + btnId + "' class='btn btn-danger' > Delete </button>";

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
    let url = 'https://api.sheety.co/50585a22aa4a35c43762829099ed20ab/flowerbooking/userbookings';
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!");
            GetBooking();
        });
}