$(document).ready(function(){

    $("#mybtn").click(function()
    {
        // $(".container").append("welcome") //end text add
        // $(".container").prepend("welcome")  //first text add
        // $(".hello").remove()
        // $(".hi").remove()
        // $(".container").remove() //all remove
        // $("#box").remove() //all div tag remove
        // $("#box").empty() //only text remove
        // $(".container").append("<h1><i><u>welcome</u></i></h1>")
        // $(".hi").attr('class','hello')   //class change
        // $(".hi").addClass("hello")      //class change
        // $("p").addClass("hello")     //class change
        // $("h1").removeClass("hi")    //class remove
    //    $("h1").attr('class','hello')   //class change

    // let mywidth=$("#box").width()
    // let mywidth=$("#box").outerWidth()
    let mywidth=$("#box").innerWidth()
    // let mywidth=$("#box").outrHeight()
    alert(mywidth)
})

        })
    
    