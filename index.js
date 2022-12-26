
let header__loginLink =  document.querySelector(".header__login-link");
let modal  = document.querySelector(".modal");
let deleteModal = document.querySelector(".cadr__x");
let body = document.querySelector("body");


header__loginLink.addEventListener('click', (e) => {

    e.preventDefault();
    
    console.log("asadbek");
    window.location.href = "myAcount.html"

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






// ferbase is


// var firebaseConfig = {
//     apiKey: "AIzaSyDWslmRhJ8Bq3E_4qX3WIewRJJTo-g4Ybo",
//     authDomain: "singup-ccddb.firebaseapp.com",
//     databaseURL: "https://singup-ccddb-default-rtdb.firebaseio.com",
//     projectId: "singup-ccddb",
//     storageBucket: "singup-ccddb.appspot.com",
//     messagingSenderId: "200245720914",
//     appId: "1:200245720914:web:0e355d6483e250b838ac8b",
//     measurementId: "G-CH3L9B0Y1H"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// // let's code 
// var datab  = firebase.database().ref('data');
// function UserRegister(){
// var email = document.getElementById('eemail').value;
// var password = document.getElementById('lpassword').value;
// firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
// }).catch(function (error){
//     var errorcode = error.code;
//     var errormsg = error.message;
// });
// }
// const auth = firebase.auth();
// function SignIn(){
//     var email = document.getElementById('eemail').value;
//     var password = document.getElementById('lpassword').value;
//     const promise = auth.signInWithEmailAndPassword(email,password);
//     promise.catch( e => alert(e.msg));
//     window.open("https://www.google.com","_self");
// }
// document.getElementById('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     var userInfo = datab.push();
//     userInfo.set({
//         name: getId('fname'),
//         email : getId('eemail'),
//         password : getId('lpassword')
//     });
//     alert("Successfully Signed Up");
//     console.log("sent");
//     document.getElementById('form').reset();
// });
// function  getId(id){
//     return document.getElementById(id).value;
// }



















// let userName = document.querySelector("#input1");
// let userEmail = document.querySelector("#input2");
// let userPassword = document.querySelector("#input3");








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



/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjtWY_055d-etYcwnDHcV4z67PzLVw4xQ",
    authDomain: "singuppage-cffae.firebaseapp.com",
    projectId: "singuppage-cffae",
    storageBucket: "singuppage-cffae.appspot.com",
    messagingSenderId: "429162954977",
    appId: "1:429162954977:web:9f9d2e5bac4bf193eb37a0",
    measurementId: "G-7EMWZFWHFW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> */