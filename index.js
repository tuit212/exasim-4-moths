

let header__loginLink =  document.querySelector(".header__login-link");
let modal  = document.querySelector(".modal");
let deleteModal = document.querySelector(".cadr__x");
let body = document.querySelector("body");


header__loginLink.addEventListener('click', (e) => {

    e.preventDefault();
    
    console.log("asadbek");
    modal.classList.toggle("show")
    body.style.backgroundColor = "#807c9b94"
    
    // window.location.href = "myAcount.html"

}); 

deleteModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove("show");
    body.style.backgroundColor = "#F7F4F9"
}); 

let studetsArr = [
    {
        img:"./img/one.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/two.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/three.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/four.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/five.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/sex.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/seven.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/eateen.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/seven.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/one.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/two.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
    {
        img:"./img/three.svg",
        title:"Standard One",
        text: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
    },
]

let studetsList = document.querySelector(".studets__body-list");

function studetsEkran(){

    let studetsRes = " "

    for(let i=0; i< 8; i++){
        studetsRes += `
        <li class="studets__body-item">
            <img src="${studetsArr[i].img}" alt="one">
            <h4>${studetsArr[i].title}</h4>
            <p>
             ${studetsArr[i].text}
            </p>
            <a href="#link">
                Class Details
            </a>
        </li>

        `
    }

    studetsList.innerHTML = studetsRes
}

studetsEkran();


let studetsBtn = document.querySelector(".studets-btn");

studetsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    studetsEkranchiqarish();
});

function studetsEkranchiqarish() {

    let resStudent = "";

    for (let i = 0; i < studetsArr.length; i++) {

        resStudent += `

        <li class="studets__body-item">
            <img src="${studetsArr[i].img}" alt="one">
            <h4>${studetsArr[i].title}</h4>
            <p>
             ${studetsArr[i].text}
            </p>
            <a href="#link">
                Class Details
            </a>
        </li>

        `
    }

    studetsList.innerHTML = resStudent

}

let studets__bodyTop = document.querySelectorAll(".studets__body-top-btn");

for (let i = 0; i < studets__bodyTop.length; i++) {
    studets__bodyTop[i].addEventListener('click', function() {
      for (let x = 0; x < studets__bodyTop.length; x++) {
        if (studets__bodyTop[x] == this) {
            studets__bodyTop[x].classList.add('studets-active');
        } else {
            studets__bodyTop[x].classList.remove('studets-active');
        }
      }
    });
  }


  let SingUp = document.querySelector("#SingUp");

  SingUp.addEventListener("click", (e) => {

    e.preventDefault();

    window.location.href = "myAcount.html"
    // console.log(userNameValue);
})


let userName = document.querySelector("#input1");
let userEmail = document.querySelector("#input2");
let userPassword = document.querySelector("#input3");

// let userNameValue = userName.value;


// console.log(userName.value, userEmail, userPassword);


// let userArr =[];

// window.localStorage.userName.value;



// let card__edit = document.querySelector(".card__edit");

// function cardEdit() {
//     let cardrRes = ""

//     cardrRes += `

//         <span>Card(0)</span>

//     ` 
//     card__edit.innerHTML = cardrRes
// }

// cardEdit();