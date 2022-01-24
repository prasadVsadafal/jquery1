// 1.  way to print javascript
 //console.log("hello world")
// way to notifiaction

//     alert("me");
// //document.write("this is document")

// //2. javascript console API
// //console.log("hello world",4+6,"another log")
// //console.warn(" this is warning")  waring msg print
 // //console.error("this is error") error msg print

// //3. javascript variables
// //what are variable ? containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);
//var num1=12;
//var num2=2;
//console.log(num1*num2);
// var num1=2;
// var num2=12;
// console.log(num1/num2);
// //4 data types javascript
// //numbers
// var num1=33;
// var num2=44;
// console.log(num1);
// console.log(num2);
// //string
// var str1="this is string";
// var str2="this is second string";
// console.log(str1);
// console.log(str2)
// //objects
// var marks={
//     prasad:88,
//     dhanu:87,
//     ganu:89
// }
// console.log(marks);

// //booleans
// var a=true;
// var b=false;
// console.log(a,b);

//undefined value
// var und=undefined;
// console.log(und);

// var n=null;
// console.log(n);
/*
at a very high level, there are  two data types of data types in javascript

1.primitive data types:undefined,string,boolean,null,number,Symbol
2.reference data types:array,objects
*/
// var arr=[1,2,3,"prasad",4,5];
// console.log(arr)

//operators javascript
    // 1. arithmetic operators
// var a=100;
// var b=10;
// console.log("the value of a+b",a+b);
// console.log("the value of a-b",a-b);
// console.log("the value of a*b",a*b);
// console.log("the value of a/b",a/b);

    //2.assigement operators
// var c = b;
// c+=2;
// c-=2;
// c*=2;
// c/=2;
// console.log(c);
    //3. comparison operators    
// var x=10;
// var y=30
// console.log(x==y);
// console.log(x!=y); 
// console.log(x>y);
// console.log(x<y);
// console.log(x<=y);
// console.log(x>=y);
   //4.logical operators
  //logical AND
//    console.log(true && true);
//    console.log(true&&false);
//    console.log(false&&false);
//    console.log(false&&true);

// //logical OR
//    console.log(true || true);
//    console.log(true||false);
//    console.log(false||true);
//    console.log(false||false);
// logical NOT
//    console.log(!true);
//    console.log(!false);
   //fuction in javascript
   //DRY =do not repeat yourself
// function avg(a,b)
// {
// return(a+b)/2;
// }
// c1=avg(4,6);
// c2=avg(14,16);
// console.log(c1,c2);

// if statement
// var age=18;
// if(age>20)
// {
//     console.log('you are not a kid');
// }
//if-else statement
var tomr ='sunny';
if(tomr=='rain')
{
    console.log('rain');
}
else
{
    console.log('no rain');
 }
// if-else ladder

// if (age>2)
// {
//     console.log("you are not kid");
// }
// else if(age>25)
// {
//     console.log("jdo not kid");
// }
// else
// {
//     console.log("you kid");
// }
//console.log("end of ladder");
//for loop statement 
//var arr=[1,2,3,4,5,6,7];
// console.log(arr);
//  for(var i=0;i<arr.length;i++)
//  {
//      console.log(arr[i]);
//  }
// arr.forEach(function(element){
//     console.log(element)
// })

//let j=0;
// const a=0;
// a=a +1;
//while statement
// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }
//do while statement
// do{
//     console.log(arr[j]);
// j++;
// }
// while(j<arr.length);
//break statement
// for(var i=0;i<arr.length;i++)
//  {
//      if(i==2)
//          {
//              break;
//          }
      
//      console.log(arr[i]);
//  }

//continue statement
// for(var i=0;i<arr.length;i++)
//  {
//      if(i==2)
//          {
//              continue;
//          }
      
//     console.log(arr[i]);
//  }

//let myarr=["fun","camera",34,null,true];
 //array methods 
 //console.log(myarr);
 //myarr.push("prasad");//add array
 //myarr.pop();
 //myarr.shift();

 //string methoads in javascript
//  let mylovelystring="prasad is good";
//  console.log(mylovelystring.length);
//  console.log(mylovelystring.indexOf("is")); 
// // console.log(mylovelystring.slice(1,4));
// d=mylovelystring.replace("prasad","dhanu");
// console.log(d,mylovelystring);
// let myDate= new Date();
// console.log(myDate.getTime());
// let elem=document.getElementById('click');
// console.log(elem);

// let elemclass=document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background="red";
// const foo=[1,2,3];
// const[n]=foo;
// console.log(n);
// for(var i=0;i<5;i++)
// {
//     console.log(i);
// // }
var v=1;
var f1=function()
{
    console.log(v);
}
var f2=function()
{
    console.log(v);
}