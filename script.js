let open = 0;
let menu = document.querySelector(".hamburger");
let navbar = document.querySelector("#nav-container");
let cursor = document.querySelector(".cursor");
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let getStarted = document.querySelector(".btn")
let search = document.querySelector("#search")
let searchBtn = document.querySelector("#search-btn")
let aboutSection = document.querySelector('.aboutSection')
let about = document.querySelector('.about')
let home = document.querySelector('.home')
let cart = document.querySelector('.cart')
let cartSection = document.querySelector('.cartSection')
var cartItem = document.querySelector('.cart-item')
let cartBtn = document.querySelectorAll('.cartBtn')
let notify = document.querySelector('.notification')
let mainPage = document.querySelector('.main')


let menSection = document.querySelector(".mens-section");
let womenSection = document.querySelector(".womens-section");
let kidsSection = document.querySelector(".kids-section");
let mensWear = [{ image: "images/jeans.jpg", price: "₹999", name: "Jeans" },
{ image: "images/shirt.jpg", price: "₹499", name: "Shirt" }, { image: "images/sweater.jpg", price: "₹999", name: "Sweater" }, { image: "images/jeans2.jpg", price: "₹1099", name: "Shirt" },
]
let kidsWear = [{ image: "images/jeans.jpg", price: "₹999", name: "Jeans" },
{ image: "images/shirt.jpg", price: "₹499", name: "Shirt" }, { image: "images/sweater.jpg", price: "₹999", name: "Sweater" }, { image: "images/jeans2.jpg", price: "₹1099", name: "Shirt" },
]

let womenWear = [{ image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹999", name: "Top" }, { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹999", name: "Top" }, { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹999", name: "Top" }, { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "₹999", name: "Top" },]

let cartItemCount = 0



function smoothScroll() {
    btn.addEventListener("click", function () {
        window.scrollTo({
            top: page2.offsetTop,
            behavior: "smooth"
        })
    })
}
smoothScroll()

function navbarToggle() {
    menu.addEventListener('click', function () {
        if (open === 0) {
            navbar.style.top = "3.71rem"
            navbar.style.transition = "0.8s all ease"
            open = 1;
        }
        else {
            navbar.style.top = "-100%"
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

function cards() {
    mensWear.forEach((e, index) => {
        menSection.innerHTML += `
    <div class="card" >
    <img id="${index}" src="${e.image}" alt="">
    <span class="card-title">${e.name}</span>
    <span class="card-price">${e.price}</span>
    <button id="${index}" class="cartBtn">Add TO Cart</button>
    </div>
    `

    })

}
womenWear.forEach((e, index) => {
    womenSection.innerHTML += `
    <div class="card" >
    <img id="${index}" src="${e.image}" alt="">
    <span class="card-title">${e.name}</span>
    <div class="card-price">${e.price}</div>
    <button id="${index}" class="cartBtn">Add TO Cart</button>
    </div>`

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



cards()

function Search() {
    searchBtn.addEventListener('click', () => {
        console.log(search.value);
        search.value = "";
    })
}
function loadDOM() {
    document.addEventListener('DOMContentLoaded', () => {
        let search = document.querySelector("#search");
        let searchBtn = document.querySelector("#search-btn");
        Search(); // Call the function after the DOM has loaded
    });
}

function changeTab(tab) {
    const tabs = document.querySelectorAll('.tabs');
    tabs.forEach((t) => {
        t.classList.remove('active');
    });
    tab.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.querySelector('.home');
    const aboutTab = document.querySelector('.about');
    const cartTab = document.querySelector(".cart");
    const loginTab = document.querySelector(".login");
    const contactTab = document.querySelector(".contact");
    const signupTab = document.querySelector(".signup");

    homeTab.addEventListener('click', () => {
        changeTab(homeTab);
    });

    aboutTab.addEventListener('click', () => {
        changeTab(aboutTab);
    });
    cartTab.addEventListener('click', () => {
        changeTab(cartTab);
    });
    contactTab.addEventListener('click', () => {
        changeTab(contactTab);
    });
    loginTab.addEventListener('click', () => {
        changeTab(loginTab);
    });
    signupTab.addEventListener('click', () => {
        changeTab(signupTab);
    });

});

function showAbout() {
    about.addEventListener('click', function () {
        mainPage.style.display = 'none';
        cartSection.style.display = 'none';
        aboutSection.style.display = 'block';
        aboutSection.innerHTML = ` 
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores culpa quos nesciunt hic! Quis cumque dolorum magnam eligendi iste praesentium libero debitis sequi tempore, dignissimos aut, nisi perspiciatis aspernatur! Numquam, expedita! Culpa dolores neque quidem, repudiandae tempora ratione consectetur, totam ullam excepturi fuga doloremque mollitia molestiae modi id velit in cumque possimus ad nihil error debitis aperiam consequatur esse cupiditate. Fugit dolore laborum aliquam architecto corporis optio officia, totam debitis molestias odio illum vitae cum similique nesciunt corrupti ullam cumque animi saepe hic sed, enim voluptate aspernatur recusandae. Ratione iure consectetur blanditiis quis dolor odit. Vel laborum nisi nesciunt et.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, rem. Assumenda quaerat esse, architecto iure nihil magni quos distinctio impedit rem placeat excepturi amet inventore sunt vero, adipisci ullam ipsam explicabo cumque recusandae? Fugiat nihil ullam dolorum magni! Asperiores commodi velit explicabo cum iure, officiis libero illum in ullam repudiandae rem veniam quos id aspernatur sint dicta modi perferendis? Veniam, quo provident eligendi sequi perspiciatis nihil corrupti facilis necessitatibus similique hic, rem repudiandae placeat, inventore tenetur labore animi maiores? Doloribus ab nam minima recusandae, incidunt et cupiditate molestias at quibusdam? Amet facere at iste illo. Libero voluptates ab exercitationem labore!</p>
    `
    })
}
showAbout()
cart.addEventListener('click', function () {
    mainPage.style.display = 'none';
    aboutSection.style.display = 'none';
    cartSection.style.display = 'block';

    if (cartItemCount === 0) {
        cartSection.innerHTML = `<h1 style="text-align:center; margin:30px 0;">No Items Added TO cart<h1/>`
    }
    else {
        cartSection.innerHTML = cards()
    }

})

