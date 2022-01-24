// $("#myinput").focus(function()
// {
//     $("h1").css("color","pink")
//     $("p").hide(200)
// })


// $("#myinput").blur(function()
// {
//     $("h1").css("color","red")
//     $("p").show(200)
// })

// $("#four").scroll(function()
// {
//     $("p").css("color","blue")
//     $(this).css("background-color","gray")
// })


// $("#myinput").keydown(function()
// {
//     $("p").hide(3000)
// })

// $("#myinput").keyup(function()
// {
//     $("p").hide(2000)
// })


// $("#mybtn").click(function()
// {
//     $("p").hide(2000,function()
//     {
//         $("h1").css("background-color","red")
//     })
// })

//will just vanish 

// $("#mybtn1").click(function()
// {
//     $("p").fadeOut(2000)
// })

//will just comeback

// $("#mybtn2").click(function()
// {
//     $("p").fadeIn(2000)
// })
//will just vanish and comeback

// $("#mybtn3").click(function()
// {
//     $("p").fadeToggle(2000)
// })

//will just vanish

// $("#mybtn4").click(function()
// {
//     $("p").fadeTo(3000,0.7,function()
//     {
//         $("p").hide(3000,function()
//         {
//             $("h1").hide(3000)
//         })
//     })
// })

//slide up down

// $("#slide").click(function(){
//     $("#con").slideUp(4000,function()
//      {
//        $("#con").slideDown(8000)
//      })
// })



// jqery ------->chainig
// $("#chain").click(function()
// {
//   $("#first").css("background-color","orange").hide(3000).show(4000)
//   $("#firs").css("background-color","red").hide(3000).show(4000)
//   $("#fir").css("background-color","blue").hide(3000).show(4000)
// })


// Animation

// $("#ani").click(function()
// {
//   $("#animation").animate({marginLeft:'400px'},3000)
//   $("#animation").animate({opacity:'0.3'},3000)
//   $("#animation").animate({height:'500px'},3000)
//   $("#animation").animate({width:'500px'},3000)
//   $("#animation").animate({width:'500px'},3000)
// })


$("#ani").click(function()
{
    $("#animation").animate({marginLeft:'400px',height:'250px',width:'250px',backgroundColor:'red'},3000)
    $("#animation").animate({marginTop:'400px',height:'300px',width:'300px',backgroundColor:'green'},3000)
    $("#animation").animate({marginLeft:'0px',height:'350px',width:'350px',backgroundColor:'yellow'},3000)
    $("#animation").animate({marginTop:'px',height:'200px',width:'200px',backgroundColor:'blue'},3000)
})
