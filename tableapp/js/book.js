let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.Value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.Value;

    //shorter form
    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

function BookNow(userName,userEmail,userPax,userRemarks){
    alert(userName);
}