chrome.runtime.sendMessage({todo:"showPageAction"});
console.log("hello world");
// window.addEventListener('load', function () {
//     y=document.querySelectorAll("span");
//     console.log(y.length);
//     console.log(y[0].innerHTML);
//   })
//   window.onload = function(){
//     // code goes here
//     y=document.querySelectorAll("span");
//     console.log(y.length);
//     console.log(y[0].innerHTML);
// };
// document.addEventListener('DOMContentLoaded', function() {
//     // your code here
//     console.log("abs");
//     y=document.querySelectorAll("span");
//     console.log(y.length);
//     console.log(y[0].innerHTML);
//  }, false);
// setTimeout(function(){
//     y=document.querySelectorAll("span");
//     console.log(y.length);
//    for(let i=0;i<y.length;i++){
//     y[i].innerHTML="Sia Jingle";
//    }

// },3000)
setInterval(function(){
setTimeout(function(){
    y=document.querySelectorAll('[data-testid="tweetText"]');
    // console.log(y.length);
    for(let i=0;i<y.length;i++){
        cleanText = y[i].innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
        console.log(cleanText);
    }
},200)},3000)

