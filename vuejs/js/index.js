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

let app4 = new Vue({
    el : "#app4",
    data:{
        theList:[
            {
                text : "Learn HTML"
            },
            {
                text :"Learn CSS"
            },
            {
               text: "Learn Js" 
            }
        ]
    }
});
    

let app5 = new Vue({
    el: "#app5",
    data: {
        msg: "Hakim Ariff"
    },
    methods:{
        reverseMsg: function(){
            this.msg = this.msg.split("").reverse().join("");
        }
    }
});

let app6 = new Vue({ 
    //key in and change immediately// 
     el: "#app6",
     data: {
         message:"hello world~"
     }
});

Vue.component("grocery-list",{
    props:["todo"],
    template: "<li> {{ todo.desc }} </li>"
});

let app7 = new Vue({
    el: "#app7",
    data:{
        groceryList:[
            {
                id:0,
                desc: "vege"

            },{
                id:1,
                desc: "meat"
            },{
                id:2,
                desc: "mineral water"
            }
        ]        
    }
});
