let open = 0;
let menu = document.querySelector(".hamburger");
let navbar = document.querySelector("#nav-container");
let cursor = document.querySelector(".cursor");
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let getStarted = document.querySelector(".btn")
let search = document.querySelector("#search")
let favourite = document.querySelector("#favourite")
let heart = "./images/heart.svg"
let searchBtn = document.querySelector("#search-btn")

let menSection = document.querySelector(".mens-section");
let womenSection = document.querySelector(".womens-section");
let kidsSection = document.querySelector(".kids-section");
let mensWear = [{ image: "images/jeans.jpg", price: "₹999", name: "Jeans" },
{ image: "images/shirt.jpg", price: "₹499", name: "Shirt" },{ image: "images/sweater.jpg", price: "₹999", name: "Sweater" },{ image: "images/jeans2.jpg", price: "₹1099", name: "Shirt" },
]
let kidsWear = [{ image: "images/jeans.jpg", price: "₹999", name: "Jeans" },
{ image: "images/shirt.jpg", price: "₹499", name: "Shirt" },{ image: "images/sweater.jpg", price: "₹999", name: "Sweater" },{ image: "images/jeans2.jpg", price: "₹1099", name: "Shirt" },
]

let womenWear =[{image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:"₹999",name:"Top"},{image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:"₹999",name:"Top"},{image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:"₹999",name:"Top"},{image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price:"₹999",name:"Top"},]




function smoothScroll(){
    btn.addEventListener("click",function(){
        window.scrollTo({
            top:page2.offsetTop,
            behavior:"smooth"
        })
    })
}
smoothScroll()

function navbarToggle() {
    menu.addEventListener('click', function () {
        if (open === 0) {
            navbar.style.right = "0.01rem"
            navbar.style.transition = "0.8s all ease"
            open = 1;
        }
        else {
            navbar.style.right = "-100%"
            navbar.style.transition = "0.8s all ease"
            open = 0;
        }
    })
}
navbarToggle()

function mouseEffect() {
    page1.addEventListener("mousemove", function (e) {
        cursor.style.left = e.x + "px";
        cursor.style.top = e.y + "px";
    })
    page1.addEventListener("mouseenter", function (e) {
        cursor.style.opacity = 1;
        cursor.style.transition = "1s all ease"
        cursor.style.display = "block"
    })
    page1.addEventListener("mouseleave", function (e) {
        cursor.style.transition = "1s all ease"
        cursor.style.display = "none"
        cursor.style.opacity = 0;
    })
}

function cards(){
    mensWear.forEach((e,index)=>{
        menSection.innerHTML += `
    <div class="card" >
    <img src="${e.image}" alt="">
    <img src="./images/heart-outline.svg" alt="" id="favourite">
    <span class="card-title">${e.name}</span>
    <span class="card-price">${e.price}</span>
    </div>
     `
    })
    womenWear.forEach((e,index)=>{
        womenSection.innerHTML += `
    <div class="card" >
    <img src="${e.image}" alt="">
    <img src="./images/heart-outline.svg" alt="" id="favourite">
    <span class="card-title">${e.name}</span>
    <span class="card-price">${e.price}</span>
    </div>
     `
    })
    // kidsWear.forEach((e,index)=>{
    //     kidsSection.innerHTML += `
    // <div class="card" >
    // <img src="${e.image}" alt="">
    // <span class="card-title">${e.name}</span>
    // <span class="card-price">${e.price}</span>
    // </div>
    //  `
    // })
}
cards()

function Search(){
    searchBtn.addEventListener('click',()=>{
        console.log(search.value);
        search.value ="";
    })
}
function loadDOM(){
    document.addEventListener('DOMContentLoaded', () => {
        let search = document.querySelector("#search");
        let searchBtn = document.querySelector("#search-btn");
        Search(); // Call the function after the DOM has loaded
    });
}

