let app = new Vue({
    el : "#app",
    data : {
        message:"Hello Vue!"
    }
});

let app2 = new Vue({
    el : "#app2",
    data: {
        message :"loaded on " + new Date().toLocaleDateString(),
        linkURL: "https://www.malaysiakini.com/zh",
        linkText: "Google is down!",
    }
});

let app3 = new Vue({
    el : "#app3",
    data:{
        showIt: false
    }
});
