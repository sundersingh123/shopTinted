
function data(){
    let s=document.getElementById('footer');
    s.style="outline:none";
}
// =========================men-page-js===========
var ham=document.getElementById("hamburger2");
ham.addEventListener("mouseover",()=>{
    ham.style="cursor:pointer";
})
var ham2=document.getElementById("hamburg");
ham2.addEventListener("mouseover",()=>{
    ham2.style="cursor:pointer";
})
var lastImg=document.getElementById("img-div");
if(ham.addEventListener('click',()=>{
    ham.style="color:gray; transition:1s;";
    ham2.style="color:black; transition:1s";
    lastImg.style="display:flex; justify-content:space-around; flex-wrap:wrap; gap:10px"
}));
else if(ham2.addEventListener('click',()=>{
    ham2.style="color:gray; transition:1s";
    ham.style="color:black; transition:1s";
    lastImg.style="display:grid; grid-template-rows: 200px 200px; grid-template-columns: 200px 200px; row-gap:200px;"
}));
// var filter=document.getElementById("filter-section");
// window.addEventListener("scroll",()=>{
//     if(window.scrollY>=400){
//         filter.style="position:fixed; top:22%; z-index:999"
//     }
//     else{
//         filter.style="position:static";

//     }
// })





