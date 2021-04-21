let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function () {
  let userName = document.getElementById("userName");
  let userNameVal = userName.value;

  let userEmail = document.getElementById("userEmail");
  let userEmailVal = userEmail.value;

  //shorter form
  let userHandphone = document.getElementById("userHp").value;
  let userFlowerType = document.getElementById("fTypes").value;
  let userFlowerQuantity = document.getElementById("fQuantity").value;
  let userDeliveryDate = document.getElementById("deliveryDate").value;
  let userRemarks = document.getElementById("userRemarks").value;


  BookNow(userNameVal, userEmailVal, userHandphoneVal, userFlowerTypeVal, userFlowerQuantityVal, userDeliveryDateVal, userRemarksVal);
});

//Add new data to google sheet
function BookNow(userName, userEmail, userHandphone, userFlowerType, userFlowerQuantity, userDeliveryDate, userRemarks) {
  let url = 'https://api.sheety.co/50585a22aa4a35c43762829099ed20ab/flowerbooking/userbookings';
  let body = {
    bookingitem: {
      name: userName,
      email: userEmail,
      hp: userHandphone,
      flower_type: userFlowerType,
      flower_quantity: userFlowerQuantity,
      delivery_date: userDeliveryDate,
      remarks: userRemarks
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then(json => {
      alert("ID:" + json.bookingitem.id + "," + json.bookingitem.name + "succesfully added!");
    });
}