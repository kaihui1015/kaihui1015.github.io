let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click",function(){
    GetBooking();
});

function GetBooking(){
    let url = 'https://api.sheety.co/50585a22aa4a35c43762829099ed20ab/tableapp/bookingitems';
fetch(url)
.then((response) => response.json())
.then(json => {

    let bookingNameList = document.getElementById("bookingNameList");
   
    //clear the table rows
    for (let k= bookingNameList.rows.length - 1; k > 0; k-- ){
        bookingNameList.deleleRow(k);
    }

    for(let i=0; i < json.bookingItems.length; i++){
        let gName = json.bookingItems[i].name;
        let gEmail = json.bookingItems[i].email;
        let gPax = json.bookingItems[i].pax; 
        let gRemarks = json.bookingItems[i].remarks;   
        let gId = json.bookingItems[i].id;

        let row = bookingNameList.insertRow(bookingNameList.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gEmail;
        row.insertCell(3).innerHTML = gPax;
        row.insertCell(4).innerHTML = gRemarks;
        row.insertCell(5).innerHTML = "TBC";

    }  
});
}