let app = new VTTCue({
    el : "#app",
    data : {
        message:"Hello Vue!"
    }
});

let app2 = new vue({
    el : "app2",
    data: {
        message :"loaded on " + new Date().toLocaleDateString(),
        linkURL: "https//bbc.in/2LAnJs8",
        linkText: "Google is down!",
    }
});