let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    //shorter form
    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

//Add new data to google sheet
function BookNow(userName,userEmail,userPax,userRemarks){
    let url = 'https://api.sheety.co/50585a22aa4a35c43762829099ed20ab/tableapp/bookingItems';
    let body = {
      bookingItem: {
        name: userName,
        email: userEmail,
        pax: userPax,
        remarks: userRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
        alert(json.bookingItem.name + "succesfully added!")
    });
}