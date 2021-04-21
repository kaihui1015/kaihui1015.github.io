let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function () {
  let userName = document.getElementById("userName");
  let userNameVal = userName.value;

  let userEmail = document.getElementById("userEmail");
  let userEmailVal = userEmail.value;

  //shorter form
  let userHandphoneVal = document.getElementById("userHp").value;
  let userFlowerTypeVal = document.getElementById("fType").value;
  let userFlowerQuantityVal = document.getElementById("fQuantity").value;
  let userDeliveryDateVal = document.getElementById("deliveryDate").value;
  let userRemarksVal = document.getElementById("userRemarks").value;


  BookNow(userNameVal, userEmailVal, userHandphoneVal, userFlowerTypeVal, userFlowerQuantityVal, userDeliveryDateVal, userRemarksVal);
});

//Add new data to google sheet
function BookNow(userName, userEmail, userHandphone, userFlowerType, userFlowerQuantity, userDeliveryDate, userRemarks) {
  let url = 'https://api.sheety.co/50585a22aa4a35c43762829099ed20ab/flowerbooking/userbookings';
  let body = {
    userbooking: {
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
      alert("ID:" + json.userbooking.id + "," + json.userbooking.name + "succesfully added!");
    });
}